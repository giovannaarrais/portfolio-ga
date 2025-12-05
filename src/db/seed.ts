import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import {
  usersTable,
  personalInfos,
  socialLinks,
  technologies,
  projects,
  projectsTechnologies,
} from "./schema"; // ajuste o caminho conforme seu projeto

// Conexão com DB (Supabase Postgres)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL!,
});

const db = drizzle(pool);

async function seed() {
  console.log("🌱 Iniciando Seed...");

  // LIMPAR TABELAS (ordem correta por FK)
  await db.delete(projectsTechnologies);
  await db.delete(projects);
  await db.delete(technologies);
  await db.delete(socialLinks);
  await db.delete(personalInfos);
  await db.delete(usersTable);

  console.log("🗑️ Tabelas limpas.");

  // ================================
  // 1) USER
  // ================================
  const [user] = await db.insert(usersTable).values({
    name: "Admin",
    email: "admin@example.com",
    password: "senhaHashAqui",
  }).returning();

  console.log("👤 Usuário criado:", user.id);

  // ================================
  // 2) PERSONAL INFO
  // ================================
  const [info] = await db.insert(personalInfos).values({
    fullName: "Giovanna Arrais",
    jobTitle: "Fullstack Developer",
    bio: "Desenvolvedora apaixonada por tecnologia, criando projetos com foco em qualidade, UI/UX e escalabilidade.",
    profileImage: "https://via.placeholder.com/300",
    location: "Brasília - DF",
    emailPublic: "giovanna@example.com",
    phonePublic: "(61) 99999-9999"
  }).returning();

  console.log("📄 Personal info criada:", info.id);

  // ================================
  // 3) SOCIAL LINKS
  // ================================
  await db.insert(socialLinks).values([
    {
      platform: "GitHub",
      url: "https://github.com/seuusuario",
      icon: "github",
      isActive: true,
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/seuusuario",
      icon: "linkedin",
      isActive: true,
    },
    {
      platform: "Instagram",
      url: "https://instagram.com/seuusuario",
      icon: "instagram",
      isActive: true,
    },
  ]);

  console.log("🔗 Social links criados.");

  // ================================
  // 4) TECHNOLOGIES
  // ================================
  const techs = await db.insert(technologies).values([
    {
      name: "React",
      icon: "react",
      level: "intermediario",
      category: "Front-End",
      isActive: true,
    },
    {
      name: "TypeScript",
      icon: "typescript",
      level: "intermediario",
      category: "Front-End",
      isActive: true,
    },
    {
      name: "Node.js",
      icon: "node",
      level: "medio",
      category: "Back-End",
      isActive: true,
    },
    {
      name: "PostgreSQL",
      icon: "postgresql",
      level: "medio",
      category: "Back-End",
      isActive: true,
    },
    {
      name: "Git",
      icon: "git",
      level: "intermediario",
      category: "Ferramentas",
      isActive: true,
    },
  ]).returning();

  console.log("🛠️ Technologies inseridas:", techs.length);

  // Helper para pegar IDs
  const getTechId = (name: string) => techs.find(t => t.name === name)?.id!;

  // ================================
  // 5) PROJECTS
  // ================================
  const proj = await db.insert(projects).values([
    {
      title: "Meu Portfólio Moderno",
      description: "Portfólio com backend próprio, painel administrativo e integração com Supabase.",
      image: "https://via.placeholder.com/600x400",
      urlSite: "https://meu-portfolio.dev",
      urlGithub: "https://github.com/seuusuario/portfolio",
      isActive: true
    },
    {
      title: "Sistema de Reservas",
      description: "Sistema completo com login, pagamentos, dashboard e automações.",
      image: "https://via.placeholder.com/600x400",
      urlSite: "https://sistema-reservas.dev",
      urlGithub: "https://github.com/seuusuario/reservas",
      isActive: true
    }
  ]).returning();

  console.log("📦 Projetos criados:", proj.length);

  // ================================
  // 6) PROJECTS <-> TECHNOLOGIES
  // ================================
  await db.insert(projectsTechnologies).values([
    // projeto 1
    { projectId: proj[0].id, techId: getTechId("React") },
    { projectId: proj[0].id, techId: getTechId("TypeScript") },
    { projectId: proj[0].id, techId: getTechId("Node.js") },
    { projectId: proj[0].id, techId: getTechId("PostgreSQL") },

    // projeto 2
    { projectId: proj[1].id, techId: getTechId("React") },
    { projectId: proj[1].id, techId: getTechId("Node.js") },
    { projectId: proj[1].id, techId: getTechId("Git") },
  ]);

  console.log("🔗 Relações projeto-tecnologia criadas.");

  console.log("🌳 Seed finalizado com sucesso!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("❌ Erro no seed:", err);
  process.exit(1);
});
