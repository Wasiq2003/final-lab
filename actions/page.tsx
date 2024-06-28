"use server";

import prisma from "@/lib/db"
import { UserSchema } from "@/schemas";
import { z } from "zod"

export async function cTasks(data: z.infer<typeof UserSchema>) {

    const validatedFields = UserSchema.safeParse(data);
    console.log(validatedFields)

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    try {

        await prisma.task.create({
            data: {
                task: data.task,
                isCompleted: data.isCompleted
            }
        })

        return {
            success: "Task saved successfully!"
        }

    } catch (error) {
        console.log(error)
    }
}