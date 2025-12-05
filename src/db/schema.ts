import { boolean, pgEnum, pgTable, primaryKey, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
    id: uuid().primaryKey().defaultRandom(),
    name: text().notNull(),
    email: text().notNull(),
    password: text().notNull()
})

export const personalInfos = pgTable("personal_infos", {
    id: uuid().primaryKey().defaultRandom(),
    fullName: text('full_name').notNull(),
    jobTitle: text('job_title').notNull(),
    bio: varchar('description', {length: 700}),
    profileImage: text('profile_image'),
    location: text(),
    emailPublic: text('email_public'),
    phonePublic: text('phone_public'),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
})

export const socialLinks = pgTable("social_links", {
    id: uuid().primaryKey().defaultRandom(),
    platform: text(),
    url: text().notNull(),
    icon: text(),
    isActive: boolean('is_active').default(true).notNull(),
})

export const levelOptions = pgEnum('level_options', ['basico', 'medio', 'intermediario', 'avancado'])
export const categoryOptions = pgEnum('category_options', ['Front-End', 'Back-End', 'Ferramentas', 'Outros'])

export const technologies = pgTable("technologies", {
    id: uuid().defaultRandom().primaryKey(),
    name: text().notNull(),
    icon: text().notNull(),
    level: levelOptions(),
    category: categoryOptions(),
    isActive: boolean('is_active').default(true).notNull(),
})


export const projects = pgTable("projects", {
    id: uuid().defaultRandom().primaryKey(),
    title: text().notNull(),
    description: varchar('description', {length: 500}),
    image: text().notNull(),
    urlSite: text('url_site').notNull(),
    urlGithub: text('url_github').notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    isActive: boolean('is_active').default(true).notNull(),
})
// RELATION PROJECTS <-> TECHNOLOGIES
export const projectsTechnologies = pgTable(
    "projects_technologies",
    {
        projectId: uuid('project_id')
            .notNull()
            .references(() => projects.id, { onDelete: 'cascade' }),

        techId: uuid('tech_id')
            .notNull()
            .references(() => technologies.id, { onDelete: 'cascade' }),
    },
    (table) => ({
        pk: primaryKey(table.projectId, table.techId),
    })
);