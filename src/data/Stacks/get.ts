import { technologies } from './../../db/schema';
import "server-only"
import { db } from "@/db"
import { eq } from 'drizzle-orm';

export const StacksEFerramentas = async () => {
    const technologies = await db.query.technologies.findMany()

    return technologies
}

