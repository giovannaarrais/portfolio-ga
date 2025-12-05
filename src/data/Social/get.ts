import "server-only"
import { db } from "@/db"

export const SocialLinks = async () => {
    const infos = await db.query.socialLinks.findMany()

    return infos
}