import { PrismaClient } from "@prisma/client"

// Configuração otimizada para Vercel + Supabase
const prismaClientSingleton = () => {
  return new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_URL + 
          (process.env.NODE_ENV === "production" 
            ? "?pgbouncer=true&connection_limit=5&pool_timeout=10"
            : "")
      }
    },
    log: ['error'] // Apenas logs de erro em produção
  })
}

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>
}

const db = globalThis.prismaGlobal ?? prismaClientSingleton()

export default db

if (process.env.NODE_ENV !== "production") {
  globalThis.prismaGlobal = db
}
