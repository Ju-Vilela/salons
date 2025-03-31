// @/app/_lib/prisma.ts
import { PrismaClient } from "@prisma/client"

const prismaClientSingleton = () => {
  return new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_URL + 
          (process.env.NODE_ENV === "production" 
            ? "?pgbouncer=true&connection_limit=5"
            : "")
      }
    }
  })
}

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prisma ?? prismaClientSingleton()
export default prisma

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prisma
}
