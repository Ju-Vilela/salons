// ./app/_data/barbershop-service/create-service.ts
"use server"
import prisma from "@/app/_lib/prisma" // Corrigido aqui
import { authOptions } from "@/app/_lib/auth"
import { BarbershopService } from "@prisma/client"
import { getServerSession } from "next-auth"

interface CreateServiceProps {
  barbershopId: string;
  serviceData: Omit<BarbershopService, 'id'| "barbershopId">;

}

export const createService = async ({ barbershopId, serviceData }: CreateServiceProps) => {
  const user = await getServerSession(authOptions);
  if (!user) {
    throw new Error("Usuário não autenticado");
  }

  return db.barbershopService.create({
    data: {
      ...serviceData,  
      barbershopId,
    },
  });
};
