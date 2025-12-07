import "server-only"
import { db } from "@/db"
import { and, eq } from "drizzle-orm"
import { projectsTechnologies } from "@/db/schema"

export const ProjectsAndTechonologies = async (projectId: string) => {
    const projectsAndTechonologies = await db.query.projectsTechnologies.findMany({
        where: eq(projectsTechnologies.projectId, projectId)
    })
    return projectsAndTechonologies
}