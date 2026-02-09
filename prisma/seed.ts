import { PrismaClient } from "@prisma/client";
import { arsenalEntities } from "../src/lib/arsenal";

const prisma = new PrismaClient();

async function main() {
  await prisma.arsenalEntity.deleteMany();

  for (const entity of arsenalEntities) {
    await prisma.arsenalEntity.create({
      data: {
        kind: entity.role,
        name: entity.name,
        purpose: entity.message,
        checklist: entity.checklist,
        script: entity.script,
        message: entity.message
      }
    });
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
