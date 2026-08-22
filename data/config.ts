import setupImage from "@/assets/setup.png";
import type { SidebarNavigation } from "@/lib/docs/types";
import type {
  ContentConfig,
  HeaderFeatures,
  LocaleConfig,
  NavItem,
  SiteConfig,
  SocialObjects,
  TableOfContentsConfig,
} from "@/lib/types";

// ---------------------------------------------------------------------------
// System-wide configuration
// ---------------------------------------------------------------------------
export const LOCALE: LocaleConfig = {
  lang: "es",
};

export const CONTENT: ContentConfig = {
  systems: [
    {
      id: "docs",
      dir: "content/docs",
      defaultDocRedirect: "/docs/introduction",
      route: "/docs",
    },
    {
      id: "proyectos",
      dir: "content/proyectos",
      defaultDocRedirect: "/proyectos/inicio",
      route: "/proyectos",
    },
  ],
};

export const SITE: SiteConfig = {
  website: "https://yeriel.github.io/datahub",
  author: "Yeriel",
  authorUrl: "",
  repo: "https://github.com/yeriel/datahub",
  title: "DataHub",
  description: "Web personal para la gestión de conocimiento, notas y documentación.",
  image: setupImage,
  imageAlt: "DataHub - Gestión de Conocimiento",
  twitterHandle: "",
};

// ---------------------------------------------------------------------------
// Header-specific configuration
// ---------------------------------------------------------------------------
export const HEADER_FEATURES: HeaderFeatures = {
  enableGitHubButton: false,
  starCountThreshold: 0,
  enableLayoutWidthToggle: true,
};

export const HEADER_NAV_ITEMS: NavItem[] = [
  { href: "/docs/introduction", label: "Notas y Documentación" },
  { href: "/proyectos/inicio", label: "Proyectos" },
];

export const HEADER_SOCIAL_LINKS: SocialObjects[] = [];

// ---------------------------------------------------------------------------
// Footer-specific configuration
// ---------------------------------------------------------------------------
export const FOOTER_SOCIAL_LINKS: SocialObjects[] = [];

// ---------------------------------------------------------------------------
// Sidebar navigation structure for docs & other collections
// ---------------------------------------------------------------------------
export const SIDEBAR_NAVIGATION: SidebarNavigation = {
  docs: {
    defaultTab: {
      label: "General",
      icon: "📚",
    },
    groups: [
      { slug: "introduction" },
      {
        id: "guias",
        label: "Guías",
        icon: "🧭",
        tab: true,
        entries: [{ slug: "guias/organizacion" }],
      },
      {
        id: "notas",
        label: "Notas",
        icon: "📝",
        tab: true,
        entries: [{ slug: "notas/primeros-pasos" }],
      },
    ],
  },
  proyectos: {
    defaultTab: {
      label: "Proyectos",
      icon: "🚀",
    },
    groups: [{ slug: "inicio" }],
  },
};

// ---------------------------------------------------------------------------
// Right-side table of contents configuration
// ---------------------------------------------------------------------------
export const TABLE_OF_CONTENTS: TableOfContentsConfig = {
  enableExtra: false,
};
