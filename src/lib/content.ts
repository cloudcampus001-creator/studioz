// ---------------------------------------------------------------------------
// Site content — single source of truth.
// Pulled directly from the client's existing site copy (learningstudioz.org).
// Edit this file to update text across the whole site; no other file should
// contain hard-coded marketing copy.
// ---------------------------------------------------------------------------

export const site = {
  name: "TC-Learning Studioz",
  shortName: "Learning Studioz",
  tagline: "Build Skills. Launch Careers.",
  description:
    "Hands-on apprenticeship training in Agrientrepreneurship, IT, Design, Arts, and Technical trades for young adults aged 16–25.",
  url: "https://learningstudioz.org",
  email: {
    general: "info@learningstudioz.org",
    admissions: "admissions@learningstudioz.org",
  },
  phone: "+237 683245600",
  address: {
    line1: "Mile 18",
    line2: "Buea, Cameroon",
  },
  hours: {
    weekdays: "Monday – Friday: 8:00 AM – 5:00 PM",
    saturday: "Saturday: 9:00 AM – 1:00 PM",
    sunday: "Sunday: Closed",
  },
  social: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
    youtube: "#",
  },
  // No founding year is present anywhere in the client's site data.
  // If you want to show "Est. 20XX" somewhere, get the real year from the
  // client and add it here — nothing currently reads this field.
};

export type Program = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  duration: string;
  format: string;
  level: string;
  color: string;
  tag: string;
  outcomes: string[];
  modules: string[];
};

export const programs: Program[] = [
  {
    id: "agri",
    slug: "agrientrepreneurship",
    name: "Agrientrepreneurship",
    tagline: "Grow a business, not just crops.",
    description:
      "Our Agrientrepreneurship program combines modern farming techniques with business fundamentals. You'll learn soil science, crop management, agro-processing, and how to build a profitable agri-business from the ground up.",
    duration: "24 months",
    format: "Full-time with apprenticeship",
    level: "Diploma and HND",
    color: "#4CAF50",
    tag: "Agriculture",
    outcomes: [
      "Certified in modern farming and agro-processing techniques",
      "Ability to develop and manage a profitable farm business",
      "Hands-on experience with agri-tech tools and equipment",
      "Access to employer network and agri-business mentors",
    ],
    modules: [
      "Soil Science & Crop Management",
      "Agro-Processing & Value Addition",
      "Farm Business Planning",
      "Agri-Tech & Modern Equipment",
      "Marketing & Sales for Agri-Businesses",
    ],
  },
  {
    id: "it",
    slug: "information-technology",
    name: "Information Technology",
    tagline: "Build the digital world.",
    description:
      "From software development to networking and cybersecurity, our IT program gives you the technical foundation to thrive in the digital economy. Learn by building real projects with industry-standard tools.",
    duration: "12 months",
    format: "Full-time apprenticeship",
    level: "Beginner to Intermediate",
    color: "#2196F3",
    tag: "Technology",
    outcomes: [
      "Proficiency in programming languages and web development",
      "Networking and systems administration skills",
      "Portfolio of real-world projects built during training",
      "Industry-recognized certification upon completion",
    ],
    modules: [
      "Web Development (HTML, CSS, JavaScript)",
      "Programming Fundamentals",
      "Networking & Systems Administration",
      "Database Management",
      "Cybersecurity Basics",
    ],
  },
  {
    id: "design",
    slug: "design",
    name: "Design",
    tagline: "Make ideas visible.",
    description:
      "Our Design program covers graphic design, branding, UI/UX, and digital media production. You'll graduate with a professional portfolio and the skills to work with agencies, brands, or as a freelancer.",
    duration: "10 months",
    format: "Full-time apprenticeship",
    level: "Beginner to Intermediate",
    color: "#9C27B0",
    tag: "Creative",
    outcomes: [
      "Mastery of industry-standard design tools (Adobe, Figma)",
      "Professional portfolio ready for employment or freelancing",
      "Understanding of branding, typography, and visual communication",
      "UI/UX design skills for digital products",
    ],
    modules: [
      "Graphic Design Fundamentals",
      "Branding & Identity Design",
      "UI/UX Design Principles",
      "Digital Media & Motion Graphics",
      "Portfolio Development",
    ],
  },
  {
    id: "arts",
    slug: "arts",
    name: "Arts",
    tagline: "Create with purpose.",
    description:
      "The Arts program develops creative skills across fine arts, crafts, textile design, and applied artistic disciplines. You'll learn to channel creativity into marketable skills and build a body of work that speaks for itself.",
    duration: "10 months",
    format: "Full-time apprenticeship",
    level: "Beginner to Intermediate",
    color: "#FF5722",
    tag: "Creative",
    outcomes: [
      "Proficiency in fine arts, crafts, and applied artistic techniques",
      "Ability to produce and sell original creative work",
      "Exhibition-ready portfolio of completed works",
      "Business skills for creative entrepreneurs",
    ],
    modules: [
      "Drawing & Painting Fundamentals",
      "Textile & Craft Design",
      "Sculpture & Mixed Media",
      "Art History & Theory",
      "Creative Business & Entrepreneurship",
    ],
  },
  {
    id: "technical",
    slug: "technical-trades",
    name: "Technical Trades",
    tagline: "Build, fix, and power the world.",
    description:
      "Our Technical Trades program trains you in electrical installation, mechanical engineering, plumbing, and construction. Every skill is taught on real equipment in real environments — so you're job-ready from day one.",
    duration: "12 months",
    format: "Full-time apprenticeship",
    level: "Beginner to Intermediate",
    color: "#F5A800",
    tag: "Trades",
    outcomes: [
      "Certified in one or more technical trade disciplines",
      "Hands-on experience with professional tools and equipment",
      "Safety certification and compliance training",
      "Direct pathway to employment with partner employers",
    ],
    modules: [
      "Electrical Installation & Wiring",
      "Mechanical Engineering Basics",
      "Plumbing & Pipefitting",
      "Construction & Building Trades",
      "Health, Safety & Compliance",
    ],
  },
];

export const home = {
  hero: {
    headline: "Build Skills.",
    headlineAccent: "Launch Careers.",
    subheadline:
      "Hands-on apprenticeship training across 5 disciplines. Real skills, real employers, real futures.",
    ctaPrimary: "Explore Programs",
    ctaSecondary: "Partner With Us",
  },
  stats: [
    { id: "stat-1", value: "5", label: "Disciplines" },
    { id: "stat-2", value: "100%", label: "Hands-On Training" },
    { id: "stat-3", value: "50+", label: "Industry Partners" },
    { id: "stat-4", value: "16–25", label: "Age Group Served" },
  ],
  dualCta: {
    students: {
      eyebrow: "For Students",
      headline: "Start Your Apprenticeship",
      description:
        "Apply for a program, get matched with an employer, and earn while you learn. No prior experience needed.",
      cta: "Apply Now",
    },
    employers: {
      eyebrow: "For Employers",
      headline: "Hire Trained Talent",
      description:
        "Partner with us to access a pipeline of motivated, job-ready apprentices trained to your industry's standards.",
      cta: "Become a Partner",
    },
  },
  testimonials: [
    {
      id: "test-1",
      quote:
        "TC-Learning Studioz gave me the practical skills I needed. Within three months of graduating, I had my first client.",
      name: "Adaeze Okonkwo",
      program: "Design",
    },
    {
      id: "test-2",
      quote:
        "The hands-on training is unlike anything else. I learned more in six months here than I did in two years of theory.",
      name: "Emeka Nwosu",
      program: "Information Technology",
    },
    {
      id: "test-3",
      quote:
        "I came in with no farming experience. Now I run my own agri-business and employ two people.",
      name: "Fatima Bello",
      program: "Agrientrepreneurship",
    },
  ],
  quickLinks: [
    { label: "Explore Programs", href: "/programs" },
    { label: "Apprenticeships", href: "/apprenticeships" },
    { label: "Enroll Now", href: "/enroll" },
    { label: "About Us", href: "/about" },
  ],
};

export const aboutContent = {
  hero: {
    eyebrow: "Our Story",
    headline: "Built on a Belief That Every Young Person Deserves a Chance.",
    subheadline:
      "TC-Learning Studioz was founded to bridge the gap between education and employment — giving young adults the practical skills, mentorship, and real-world experience they need to thrive.",
  },
  story: {
    heading: "Where It All Began",
    paragraphs: [
      "TC-Learning Studioz was born out of a simple but urgent observation: too many young people in our communities were leaving school without the skills employers actually needed. Degrees and certificates weren't translating into livelihoods.",
      "Our founders — educators, entrepreneurs, and community leaders — came together to build something different. A learning environment that blends structured training with hands-on apprenticeships, mentorship, and real employer partnerships.",
      "Since opening our doors, we have trained hundreds of young adults across five vocational disciplines, placing them with partner employers and helping them launch their own ventures. Every cohort strengthens our resolve to do more.",
    ],
    stats: [
      { label: "Students Trained", value: "500+" },
      { label: "Employer Partners", value: "40+" },
      { label: "Disciplines Offered", value: "5" },
    ],
  },
  mission: {
    heading: "Mission, Vision & Values",
    mission: {
      label: "Our Mission",
      text: "To equip young adults aged 16–25 with industry-relevant vocational skills, entrepreneurial mindsets, and real-world experience — creating pathways to meaningful employment and self-sufficiency.",
    },
    vision: {
      label: "Our Vision",
      text: "A generation of skilled, confident, and self-reliant young Africans driving economic growth in their communities and beyond.",
    },
    values: [
      {
        title: "Practical First",
        description:
          "We believe learning happens by doing. Every program is built around hands-on experience, not just theory.",
      },
      {
        title: "Radical Inclusion",
        description:
          "We open our doors to young people regardless of background, prior education, or economic status.",
      },
      {
        title: "Community Rooted",
        description:
          "Our success is measured by the impact we create in the communities we serve — not just in the classroom.",
      },
      {
        title: "Employer Aligned",
        description:
          "We co-design our programs with industry partners so graduates are ready to contribute from day one.",
      },
      {
        title: "Continuous Growth",
        description:
          "We hold ourselves to the same standard we set for our students — always learning, always improving.",
      },
      {
        title: "Integrity Always",
        description:
          "We are transparent with our students, partners, and funders. Trust is the foundation of everything we do.",
      },
    ],
  },
  team: {
    heading: "Meet the Team",
    subheading:
      "The people behind TC-Learning Studioz are practitioners, educators, and community builders who have dedicated their careers to youth development.",
    members: [
      {
        name: "Tunde Coker",
        role: "Founder & Executive Director",
        bio: "Tunde has spent over 15 years working at the intersection of education, workforce development, and entrepreneurship across West Africa.",
      },
      {
        name: "Amaka Osei",
        role: "Head of Programs",
        bio: "Amaka leads curriculum design and program delivery, ensuring every track meets the highest standards of vocational excellence.",
      },
      {
        name: "Chidi Nwosu",
        role: "Employer Partnerships Lead",
        bio: "Chidi manages our growing network of employer partners, matching apprentices with placements that accelerate their careers.",
      },
      {
        name: "Fatima Bello",
        role: "Student Success Manager",
        bio: "Fatima supports students from enrolment through graduation and beyond, ensuring no one falls through the cracks.",
      },
    ],
  },
  cta: {
    heading: "Ready to Be Part of the Story?",
    subheading:
      "Whether you're a prospective student, an employer, or a supporter — there's a place for you at TC-Learning Studioz.",
    ctaEnroll: "Apply Now",
    ctaPartner: "Become a Partner",
  },
};

export const apprenticeshipsContent = {
  hero: {
    eyebrow: "For Employers",
    headline: "Partner With Us.",
    headlineAccent: "Shape the Next Generation.",
    subheadline:
      "Join our growing network of employers who are co-creating the workforce of tomorrow — by offering real apprenticeship placements to motivated young talent.",
  },
  whyPartner: {
    heading: "Why Partner With TC-Learning Studioz?",
    subheading: "We do the training. You get the talent.",
    benefits: [
      {
        title: "Pre-Trained Apprentices",
        description:
          "Every apprentice arrives with foundational skills already in place. You spend less time on basics and more time on real work.",
      },
      {
        title: "Zero Recruitment Cost",
        description:
          "We match you with candidates who fit your industry and role. No agency fees, no lengthy hiring processes.",
      },
      {
        title: "Flexible Engagement",
        description:
          "Choose the duration, number of apprentices, and level of involvement that works for your business.",
      },
      {
        title: "CSR & Community Impact",
        description:
          "Investing in young talent builds your brand reputation and contributes directly to community development.",
      },
      {
        title: "Talent Pipeline",
        description:
          "Many of our partners convert top-performing apprentices into full-time hires — building loyalty from day one.",
      },
      {
        title: "Dedicated Support",
        description:
          "Our team handles all coordination, progress tracking, and compliance so you can focus on your business.",
      },
    ],
  },
  howItWorks: {
    heading: "How the Partnership Works",
    steps: [
      {
        number: "01",
        title: "Submit Your Inquiry",
        description:
          "Fill out the employer inquiry form below. Tell us about your business, the disciplines you need, and how many apprentices you can host.",
      },
      {
        number: "02",
        title: "We Match & Vet",
        description:
          "Our team reviews your requirements and matches you with apprentices from the relevant program who meet your criteria.",
      },
      {
        number: "03",
        title: "Onboard & Begin",
        description:
          "We handle the paperwork and onboarding. Your apprentice starts on an agreed date — ready to contribute from day one.",
      },
      {
        number: "04",
        title: "Ongoing Support",
        description:
          "We stay involved throughout the placement — monitoring progress, resolving issues, and ensuring a great experience for both sides.",
      },
    ],
  },
  partners: {
    heading: "Our Partner Network",
    subheading:
      "Employers across 5 sectors trust TC-Learning Studioz to supply skilled, motivated apprentices.",
    sectors: [
      "Agriculture & Agribusiness",
      "Technology & IT Services",
      "Creative & Design Agencies",
      "Arts & Cultural Organisations",
      "Construction & Technical Trades",
    ],
  },
  form: {
    heading: "Become an Employer Partner",
    subheading:
      "Fill in the form below and our partnerships team will be in touch within 2 business days.",
    reassurance: [
      "Response within 2 business days",
      "No commitment required to inquire",
      "Dedicated partnerships coordinator assigned",
    ],
  },
};

export const contactContent = {
  hero: {
    eyebrow: "Get in Touch",
    headline: "We'd Love to Hear From You",
    subheadline:
      "Whether you're a prospective student, an employer partner, or just curious about what we do — reach out and we'll get back to you promptly.",
  },
  form: {
    heading: "Send Us a Message",
    subheading: "Fill in the form and our team will respond within 1–2 business days.",
    subjects: [
      "General Inquiry",
      "Admissions & Enrollment",
      "Employer Partnership",
      "Programs & Courses",
      "Other",
    ],
  },
  faq: {
    heading: "Frequently Asked Questions",
    items: [
      {
        question: "Who can apply to TC-Learning Studioz?",
        answer:
          "Our programs are open to young adults aged 16–25 who are motivated to learn a vocational skill and build a career or business.",
      },
      {
        question: "Are the programs free?",
        answer:
          "We offer subsidised and fully-funded pathways for qualifying applicants. Contact our admissions team to learn about available support.",
      },
      {
        question: "How long do programs take?",
        answer:
          "Program lengths vary from 3 to 12 months depending on the discipline and track. Visit our Programs page for details on each offering.",
      },
      {
        question: "Can employers host more than one apprentice?",
        answer:
          "Yes — employers can host multiple apprentices across one or more disciplines. Use the Apprenticeships page to submit an employer inquiry.",
      },
    ],
  },
};

export const enrollContent = {
  hero: {
    eyebrow: "Applications Open",
    headline: "Start Your Journey.",
    headlineAccent: "Apply Today.",
    subheadline:
      "Take the first step toward a skilled, self-reliant future. Applications are reviewed on a rolling basis — the sooner you apply, the sooner you begin.",
  },
  steps: {
    heading: "How the Application Works",
    items: [
      {
        number: "01",
        title: "Submit Your Application",
        description:
          "Fill in the form below with your details and chosen program. It takes less than 5 minutes.",
      },
      {
        number: "02",
        title: "We Review & Reach Out",
        description:
          "Our admissions team reviews every application and contacts you within 3 business days to discuss next steps.",
      },
      {
        number: "03",
        title: "Orientation & Enrolment",
        description:
          "Once accepted, you'll attend a brief orientation session and complete your formal enrolment before your cohort begins.",
      },
    ],
  },
  eligibility: {
    heading: "Who Can Apply?",
    items: [
      "Aged 16–25 years old",
      "Based in or able to commute to our training centre",
      "Motivated to learn a practical, in-demand skill",
      "No prior qualifications required for most programs",
      "Subsidised and fully-funded places available for qualifying applicants",
    ],
  },
  form: {
    heading: "Application Form",
    subheading: "All fields marked with * are required. We'll be in touch within 3 business days.",
    hearAboutOptions: [
      "Social Media",
      "Friend or Family",
      "School or Teacher",
      "Community Event",
      "Other",
    ],
    note: "Applications are free. Submitting this form does not guarantee a place — our admissions team will be in touch to confirm your status.",
  },
};
