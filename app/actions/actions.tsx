"use server"
const { PrismaClient } = require('@prisma/client');
import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";

export async function activatePlan(){
    const prisma = new PrismaClient();
    const session = await getServerSession(authOptions);
    const updatedUser = await prisma.User.update({
        where: { email: session?.user?.email },
        data: {
            isActive: true,
        },
      });
    console.log(updatedUser);

}