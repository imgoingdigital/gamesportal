import { PrismaClient as GameClient} from "@prisma/client";

const prismaMuClientSingleton = () => {
  return new GameClient();
};




type MuPrismaClientSingleton = ReturnType<typeof prismaMuClientSingleton>;


const globalForPrisma = globalThis as unknown as {
  prisma: MuPrismaClientSingleton | undefined;
};

const MuDb = globalForPrisma.prisma ?? prismaMuClientSingleton();
export default MuDb;

if (process.env.NODE_ENV !== "production")
  globalForPrisma.prisma = MuDb;