"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { isDailyComplete, isWeeklyComplete, startOfDay, startOfWeek } from "@/lib/gates";

function requireUserId(userId?: string | null): string {
  if (!userId) {
    throw new Error("Unauthorized");
  }
  return userId;
}

export async function updateDailyGate(formData: FormData) {
  const session = await auth();
  const userId = requireUserId(session?.user?.id);
  const date = startOfDay(new Date());

  const dailyData = {
    prayer: formData.get("prayer") === "on",
    health: formData.get("health") === "on",
    finance: formData.get("finance") === "on",
    code: formData.get("code") === "on",
    relation: formData.get("relation") === "on"
  };

  const completed = isDailyComplete(dailyData);

  await prisma.lifeGateDaily.upsert({
    where: { userId_date: { userId, date } },
    create: {
      userId,
      date,
      ...dailyData,
      completedAt: completed ? new Date() : null
    },
    update: {
      ...dailyData,
      completedAt: completed ? new Date() : null
    }
  });

  revalidatePath("/dashboard");
}

export async function updateWeeklyGate(formData: FormData) {
  const session = await auth();
  const userId = requireUserId(session?.user?.id);
  const weekStart = startOfWeek(new Date());

  const weeklyData = {
    budgetReview: formData.get("budgetReview") === "on",
    goalsReview: formData.get("goalsReview") === "on",
    progressReview: formData.get("progressReview") === "on"
  };

  const completed = isWeeklyComplete(weeklyData);

  await prisma.lifeGateWeekly.upsert({
    where: { userId_weekStart: { userId, weekStart } },
    create: {
      userId,
      weekStart,
      ...weeklyData,
      completedAt: completed ? new Date() : null
    },
    update: {
      ...weeklyData,
      completedAt: completed ? new Date() : null
    }
  });

  revalidatePath("/dashboard");
}

export async function triggerCrisisLock(formData: FormData) {
  const session = await auth();
  const userId = requireUserId(session?.user?.id);
  const reason = (formData.get("reason") as string | null) || "declaration utilisateur";
  const endsAt = new Date(Date.now() + 24 * 60 * 60 * 1000);

  await prisma.lifeGateCrisis.create({
    data: {
      userId,
      reason,
      endsAt,
      status: "ACTIVE"
    }
  });

  revalidatePath("/dashboard");
}

export async function resolveCrisisLock() {
  const session = await auth();
  const userId = requireUserId(session?.user?.id);

  await prisma.lifeGateCrisis.updateMany({
    where: { userId, status: "ACTIVE" },
    data: { status: "RESOLVED" }
  });

  revalidatePath("/dashboard");
}
