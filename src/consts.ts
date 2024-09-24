import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Slyvon Blanco",
  EMAIL: "",
  NUM_POSTS_ON_HOMEPAGE: 4,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Strategist, designer, and a 'systems guy'. I take complex ideas and simplify them for people. Probably somewhere in the world drinking coffee.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const ABOUT: Metadata = {
  TITLE: "About Slyvon Blanco",
  DESCRIPTION: "A glimpse into the life of Sly.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const THINGS: Metadata = {
  TITLE: "Things I Use",
  DESCRIPTION: "Some of the tools and resources I use on a regular basis.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "x",
    HREF: "https://x.com/slyvonblanco",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/slyvon"
  },
  { 
    NAME: "instagram",
    HREF: "https://www.instagram.com/slyvonblanco",
  }
];
