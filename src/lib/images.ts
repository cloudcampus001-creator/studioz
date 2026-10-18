// ---------------------------------------------------------------------------
// Image registry — every photograph used on the site, in one place.
//
// All files live in /public/images/. To swap a photo later, drop the new file
// into that folder (same name, or a new name + update `src` below). Every
// component reads from this file, so nothing else needs to change.
//
// `position` is the CSS object-position used when the photo is cropped
// (e.g. "50% 30%" keeps faces in frame on wide banners).
// ---------------------------------------------------------------------------

export type SiteImage = {
  src: string;
  alt: string;
  position?: string;
};

export const images = {
  // Program photos (also reused on each program's detail page)
  agri: {
    src: "/images/program-agri.webp",
    alt: "A smiling farmer in a checked shirt and apron picking fruit from a tree",
    position: "30% 40%",
  },
  it: {
    src: "/images/program-it.webp",
    alt: "A young woman walking through a modern office corridor while working on a laptop",
    position: "50% 30%",
  },
  design: {
    src: "/images/program-design.webp",
    alt: "A designer smiling as she draws on a graphics tablet beside colour swatches",
    position: "70% 12%",
  },
  arts: {
    src: "/images/program-arts.webp",
    alt: "A fashion designer in an African-print top smiling in front of a clothing rack",
    position: "50% 30%",
  },
  technical: {
    src: "/images/craft-chair.webp",
    alt: "A trainee photographing a restored wooden chair with green upholstery in a workshop",
    position: "40% 50%",
  },

  // Section / page photos
  homeHero: {
    src: "/images/program-technical.webp",
    alt: "A master carpenter guiding an apprentice at a workshop saw",
    position: "60% 40%",
  },
  aboutHero: {
    src: "/images/program-design.webp",
    alt: "A young designer smiling while working at her desk",
    position: "70% 12%",
  },
  employers: {
    src: "/images/employers.webp",
    alt: "An employer smiling and reaching out for a handshake across a table",
    position: "40% 40%",
  },
  students: {
    src: "/images/program-it.webp",
    alt: "A confident young woman walking through an office with a laptop",
    position: "50% 30%",
  },
  contact: {
    src: "/images/program-arts.webp",
    alt: "A smiling young entrepreneur standing in her boutique",
    position: "50% 25%",
  },
  workshop: {
    src: "/images/program-technical.webp",
    alt: "A master carpenter guiding an apprentice at a workshop saw",
    position: "60% 40%",
  },
} satisfies Record<string, SiteImage>;

// Program id → photo (ids match `programs[].id` in content.ts)
export const programImageMap: Record<string, SiteImage> = {
  agri: images.agri,
  it: images.it,
  design: images.design,
  arts: images.arts,
  technical: images.technical,
};
