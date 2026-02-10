import { prisma } from "@/lib/prisma";

export type GateItem = {
  id: string;
  label: string;
  done?: boolean;
};

export type GateStatus = {
  daily: {
    prayer: boolean;
    health: boolean;
    finance: boolean;
    code: boolean;
    relation: boolean;
    completed: boolean;
  };
  weekly: {
    budgetReview: boolean;
    goalsReview: boolean;
    progressReview: boolean;
    completed: boolean;
  };
  crisis: {
    active: boolean;
    lockUntil: Date | null;
    reason?: string | null;
  };
};

export const dailyGateTemplate: GateItem[] = [
  { id: "prayer", label: "Priere ou centrage (5 min)" },
  { id: "health", label: "Une action sante" },
  { id: "finance", label: "Une action finance" },
  { id: "code", label: "Un micro-livrable code" },
  { id: "relation", label: "Un geste relation/maison" }
];

export const weeklyGateTemplate: GateItem[] = [
  { id: "budgetReview", label: "Revue budget" },
  { id: "goalsReview", label: "Revue objectifs" },
  { id: "progressReview", label: "Revue progres" }
];

export const crisisProtocol: GateItem[] = [
  { id: "pause", label: "Pause 10 min sans ecran" },
  { id: "breath", label: "Respiration 4-6" },
  { id: "journal", label: "Journal court" },
  { id: "prayer", label: "Priere ou gratitude" }
];

export function startOfDay(date: Date): Date {
  const start = new Date(date);
  start.setHours(0, 0, 0, 0);
  return start;
}

export function startOfWeek(date: Date): Date {
  const start = startOfDay(date);
  const day = start.getDay();
  const diff = (day + 6) % 7;
  start.setDate(start.getDate() - diff);
  return start;
}

export function isDailyComplete(data: Omit<GateStatus["daily"], "completed">): boolean {
  return Object.values(data).every(Boolean);
}

export function isWeeklyComplete(
  data: Omit<GateStatus["weekly"], "completed">
): boolean {
  return Object.values(data).every(Boolean);
}

export async function getGateStatusForUser(userId: string): Promise<GateStatus> {
  const now = new Date();
  const today = startOfDay(now);
  const weekStart = startOfWeek(now);

  const [daily, weekly, crisis] = await Promise.all([
    prisma.lifeGateDaily.findUnique({
      where: { userId_date: { userId, date: today } }
    }),
    prisma.lifeGateWeekly.findUnique({
      where: { userId_weekStart: { userId, weekStart } }
    }),
    prisma.lifeGateCrisis.findFirst({
      where: {
        userId,
        status: "ACTIVE",
        endsAt: { gt: now }
      },
      orderBy: { endsAt: "desc" }
    })
  ]);

  const dailyStatus = {
    prayer: daily?.prayer ?? false,
    health: daily?.health ?? false,
    finance: daily?.finance ?? false,
    code: daily?.code ?? false,
    relation: daily?.relation ?? false
  };

  const weeklyStatus = {
    budgetReview: weekly?.budgetReview ?? false,
    goalsReview: weekly?.goalsReview ?? false,
    progressReview: weekly?.progressReview ?? false
  };

  return {
    daily: {
      ...dailyStatus,
      completed: isDailyComplete(dailyStatus)
    },
    weekly: {
      ...weeklyStatus,
      completed: isWeeklyComplete(weeklyStatus)
    },
    crisis: {
      active: Boolean(crisis),
      lockUntil: crisis?.endsAt ?? null,
      reason: crisis?.reason ?? null
    }
  };
}

export function isMonetizationLocked(status: GateStatus): boolean {
  const now = new Date();
  if (status.crisis.lockUntil && status.crisis.lockUntil > now) {
    return true;
  }
  return !(status.daily.completed && status.weekly.completed);
}
