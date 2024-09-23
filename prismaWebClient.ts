import { PrismaClient as WebClient } from "@prisma/client";

const prismaWebClientSingleton = () => {
  return new WebClient();
}

type WebPrismaClientSingleton = ReturnType<typeof prismaWebClientSingleton>;


const globalForPrisma = globalThis as unknown as {
  webPrisma: WebPrismaClientSingleton | undefined;
};

const WebDb = globalForPrisma.webPrisma ?? prismaWebClientSingleton();
export default WebDb;

if (process.env.NODE_ENV !== "production")
  globalForPrisma.webPrisma = WebDb;