import "server-only"
import { db } from "@/db"

export const ProjectsCompleted = async () => {
    const projects = await db.query.projects.findMany()
    return projects
}