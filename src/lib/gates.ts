export type GateItem = {
  id: string;
  label: string;
  done?: boolean;
};

export type GateStatus = {
  dailyComplete: boolean;
  weeklyComplete: boolean;
  crisisLockUntil?: Date | null;
};

export const dailyGateTemplate: GateItem[] = [
  { id: "prayer", label: "Priere ou centrage (5 min)" },
  { id: "health", label: "Une action sante" },
  { id: "finance", label: "Une action finance" },
  { id: "code", label: "Un micro-livrable code" },
  { id: "relation", label: "Un geste relation/maison" }
];

export const weeklyGateTemplate: GateItem[] = [
  { id: "budget", label: "Revue budget" },
  { id: "goals", label: "Revue objectifs" },
  { id: "progress", label: "Revue progres" }
];

export const crisisProtocol: GateItem[] = [
  { id: "pause", label: "Pause 10 min sans ecran" },
  { id: "breath", label: "Respiration 4-6" },
  { id: "journal", label: "Journal court" },
  { id: "prayer", label: "Priere ou gratitude" }
];

export function getSampleGateStatus(): GateStatus {
  return {
    dailyComplete: false,
    weeklyComplete: false,
    crisisLockUntil: null
  };
}

export function isMonetizationLocked(status: GateStatus): boolean {
  const now = new Date();
  if (status.crisisLockUntil && status.crisisLockUntil > now) {
    return true;
  }
  return !(status.dailyComplete && status.weeklyComplete);
}
