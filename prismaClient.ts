import { PrismaClient as GameClient} from "@prisma/client";
import { PrismaClient as WebClient} from "@prisma/client";

const prismaMuClientSingleton = () => {
  return new GameClient();
};
const prismaWebClientSingleton = () => {
  return new WebClient();
};


type MuPrismaClientSingleton = ReturnType<typeof prismaMuClientSingleton>;
type WebPrismaClientSingleton = ReturnType<typeof prismaWebClientSingleton>;


const globalForPrisma = globalThis as unknown as {
  prisma: WebPrismaClientSingleton | undefined;
  mugame: MuPrismaClientSingleton | undefined;
};
const WebDb = globalForPrisma.prisma ?? prismaWebClientSingleton();
const MuDb = globalForPrisma.mugame ?? prismaMuClientSingleton();

// export default WebDb;
export { MuDb, WebDb}



if (process.env.NODE_ENV !== "production")
  globalForPrisma.prisma = WebDb;
  globalForPrisma.mugame = MuDb