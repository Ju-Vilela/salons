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

const db = globalThis.prisma ?? prismaClientSingleton()

// Exportação nomeada para compatibilidade
export const prisma = db

// Exportação padrão para compatibilidade com imports existentes
export default db

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db
}
