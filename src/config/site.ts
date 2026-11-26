export const site = {
  name: "Legacy",
  description:
    "Conectamos tecnologia, educação e gestão para transformar empresas e construir o futuro dos negócios.",
  url:
    process.env.NEXT_PUBLIC_LEGACY_SITE_URL ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"),
  portalUrl: process.env.NEXT_PUBLIC_LEGACY_PORTAL_URL || "",
  contactEndpoint: process.env.NEXT_PUBLIC_LEGACY_CONTACT_ENDPOINT || "",
  whatsappNumber: process.env.NEXT_PUBLIC_LEGACY_WHATSAPP_NUMBER || "",
  linkedinUrl: process.env.NEXT_PUBLIC_LEGACY_LINKEDIN_URL || "",
  instagramUrl: process.env.NEXT_PUBLIC_LEGACY_INSTAGRAM_URL || "",
};

export const divisions = [
  {
    number: "01",
    name: "Legacy Gestão",
    slug: "gestao",
    descriptor: "Estrutura para decidir melhor.",
    description:
      "Sistemas inteligentes para organizar operações, conectar equipes e ampliar a clareza das decisões.",
  },
  {
    number: "02",
    name: "Legacy Educação",
    slug: "educacao",
    descriptor: "Conhecimento que move empresas.",
    description:
      "Desenvolvimento empresarial e capacitação para transformar potencial em capacidade de execução.",
  },
  {
    number: "03",
    name: "Legacy Digital",
    slug: "digital",
    descriptor: "Tecnologia aplicada ao negócio.",
    description:
      "Automação, inteligência artificial e experiências digitais com direção estratégica.",
  },
] as const;

export const navigation = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Ecossistema", href: "/ecossistema" },
  { label: "Soluções", href: "/gestao" },
  { label: "Contato", href: "/contato" },
];
