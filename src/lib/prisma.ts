import { PrismaClient } from '@prisma/client';

declare global {
  // Avoid multiple Prisma instances in dev
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ??
  new PrismaClient({
    log: ['query'], // optional: logs queries for debugging
  });

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;
