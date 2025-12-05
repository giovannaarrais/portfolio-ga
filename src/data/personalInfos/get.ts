import "server-only"
import { db } from "@/db"

export const InfosAboutMe = async () => {
    const infos = await db.query.personalInfos.findFirst()

    return infos
}