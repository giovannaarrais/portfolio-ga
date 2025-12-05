import { technologies } from './../../db/schema';
import "server-only"
import { db } from "@/db"

export const StacksEFerramentas = async () => {
    const technologies = await db.query.technologies.findMany()

    return technologies
}