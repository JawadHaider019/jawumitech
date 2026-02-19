export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  liveLink: string;
  category: string;
  client: string;
  year: string;
  challenge: string[];
  solution: string[];
  results: string[];
  technologies: string[];
  features: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
    image?: string;
    rating: number;
  };
}

export const projects: Project[] = [
{
  id: 1,
  slug: "naturablissorganics",
  title: "Natura Bliss – Organic Skincare",
  description: "Pakistan's first all-natural personal care brand with an e-commerce platform featuring handmade products, brand storytelling, and educational content.",
  image: "/Projects/naturabliss.webp",
  liveLink: "https://naturablissorganics.com/",
  category: "E-commerce",
  client: "Natura Bliss",
  year: "2024",
  challenge: [
    "Manual order handling through WhatsApp was chaotic and difficult to manage",
  "No online platform cause poor user experience and lost sales",
    "Outdated website design not reflecting ancient herbal wisdom brand identity",
    "Poor product presentation making it hard for customers to browse all organic products",
],
solution: [
  "Built custom e-commerce platform with comprehensive admin panel for product and content management",
  "Designed brand storytelling sections highlighting philosophy, mission, and chemical-free values",
  "Integrated educational blog and ingredient glossary to inform customers about natural ingredients",
  "Created seamless shopping experience reflecting handmade and sustainable brand identity"
],
results: [
  "Successfully positioned as Pakistan's first all-natural personal care brand",
  "Educated customers about natural ingredients through blog ",
  "Streamlined operations with custom admin panel for product and content management",
  "Built engaged community through newsletter marketing  resources"
],
  technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
  features: [
    "Custom admin panel for product and content management",
    "WhatsApp ordering integration for easy customer purchases",
    "Customer review and rating system for social proof",
    "Fast checkout process with minimal steps",
    "SEO-optimized content structure for better search rankings",
    "Mobile-responsive design for all devices",
    "User-friendly navigation and intuitive interface",
    "Product search and filtering by category",
    "Blog CMS for publishing skincare tips and articles",
    "Newsletter subscription management",
    "Related products recommendations",
    "Stock availability indicators"
  ],
testimonial: {
    quote: "The new website has completely transformed how we sell our products. No more taking orders manually on Instagram  everything is automated and our customers love the seamless shopping experience.",
    author: "Muhammad Noman",
    position: "Founder, Natura Bliss",
    image: "/clients/noman.jpeg",
    rating: 5
  }
},
{
  id: 2,
  slug: "timexperts",
  title: "TimeXperts – IT Outsourcing & Team Augmentation",
  description: "A professional corporate website for a global IT outsourcing partner, featuring modern UI/UX design, service showcases, and lead generation tools.",
  image: "/Projects/timeexpert.webp",
  liveLink: "https://timexperts.com.pk/",
  category: "Corporate Website",
  client: "TimeXperts",
  year: "2024",
  challenge: [
    "Outdated website design not reflecting company's 18+ years of industry expertise",
    "Complex service offerings needed clear and organized information architecture",
    "Poor mobile experience affecting user engagement and lead generation",
    "Slow loading pages impacting user retention and search rankings"
  ],
  solution: [
    "Designed modern, responsive website with clean UI/UX and professional aesthetics",
    "Created intuitive information architecture with dedicated service pages",
    "Built mobile-first responsive design for seamless experience across all devices",
    "Optimized performance with fast loading images and efficient code structure"
  ],
  results: [
    "Launched modern website with improved user experience across all devices",
    "Achieved faster page loading through optimized images and code",
    "Integrated booking system enabling direct client consultations",
    "Implemented SEO best practices improving search engine visibility"
  ],
  technologies: ["React", "Laravel", "Tailwind CSS" ,"MySQL"],
  features: [
    "Book a meeting integration for direct client consultations",
    "Mobile-responsive design optimized for all devices",
    "Fast page loading with optimized images and assets",
    "SEO-optimized content structure for better search rankings",
    "Contact forms with automated email responses",
    "Interactive service showcase with smooth animations",
  ],
testimonial: {
    quote: "Our old website was outdated and wasn't bringing in quality leads. The new site clearly showcases our 18+ years of expertise and has made it easy for global clients to understand and contact us.",
    author: "Team",
    position: "Team, TimeXperts",
    image: "/clients/unknow.jpg",
    rating: 4.5
  }
},
 {
  id: 3,
  slug: "pureclay",
  title: "Pure Clay – Organic Food & Skincare",
  description: "An e-commerce platform for organic food and skincare products with brand storytelling and educational content.",
  image: "/Projects/pureclay.webp",
  liveLink: "https://www.pureclay.org/",
  category: "E-commerce",
  client: "Pure Clay",
  year: "2025",
challenge: [
  "Outdated website design not reflecting premium organic brand identity",
  "Manual order handling via social media (Instagram/Facebook) was time-consuming and error-prone",
  "Poor product presentation making it hard for customers to browse oils, nuts, dates, and teas",
  "Non-responsive design causing poor mobile user experience and lost sales"
],
solution: [
  "Designed modern e-commerce platform with clean, organic aesthetic reflecting brand identity",
  "Developed automated ordering system eliminating manual social media order management",
  "Created intuitive product categories for easy browsing across oils, nuts, dates, and teas",
  "Built mobile-responsive design ensuring seamless shopping experience on all devices"
],
results: [
  "Launched modern e-commerce platform with automated ordering system replacing manual social media management",
  "Mobile-responsive design providing seamless shopping experience across all devices",
  "Organized product catalog with intuitive category navigation reducing customer effort",
  "SEO-optimized content improving search engine visibility and organic traffic"
],
  technologies: ["React", "Node.js", "Express", "Tailwind CSS", "MongoDB"],
 features: [
    "Custom admin panel for managing products, blog, and orders",
    "Automated ordering system replacing manual social media order handling",
    "Product catalog with categories for Oils, Nuts, Dates, and Teas",
    "Blog section with organic food tips and cooking ideas",
    "Customer review and rating system for social proof",
    "Fast checkout process with minimal steps",
    "Mobile-responsive design for seamless shopping on all devices",
    "Product search and filtering by category and price",
    "Newsletter subscription for exclusive deals and recipes",
    "Stock availability indicators with low stock alerts",
  ],
testimonial: {
    quote: "We were managing all orders manually through Instagram DMs it was chaos. Now with the automated website, customers order directly and we save hours of work every day.",
    author: "Muhammad Ahmad",
    position: "Founder, Pure Clay",
    image: "/clients/Ahmad.png",
    rating: 5
  }
},
 
  // {
  //   id: 4,
  //   slug: "gogency",
  //   title: "Gogency – Travel Agency Platform",
  //   description: "A B2B travel management platform with automated client onboarding, bookings, and communication tools to streamline operations and improve customer satisfaction.",
  //   image: "/Projects/gogency.webp",
  //   liveLink: "https://www.gogency.com/",
  //   category: "B2B Platform",
  //   client: "Gogency",
  //   year: "2024",
  //   challenge: "Travel agencies needed a streamlined way to manage bookings, client communication, and onboarding in one centralized platform.",
  //   solution: "We developed a comprehensive B2B platform with automated workflows, real-time booking updates, and integrated communication tools.",
  //   results: [
  //     "70% reduction in booking time",
  //     "500+ agencies onboarded",
  //     "99.9% platform uptime",
  //     "€2M+ in bookings processed"
  //   ],
  //   technologies: ["React", "Node.js", "PostgreSQL", "WebSocket", "Redis"],
  //   features: [
  //     "Automated onboarding",
  //     "Real-time bookings",
  //     "Client communication",
  //     "Analytics dashboard",
  //     "API integrations"
  //   ],
  //   testimonial: {
  //     quote: "This platform has revolutionized how we manage our travel agency operations.",
  //     author: "Michael Chen",
  //     position: "Operations Director, Gogency",
  //     image: "/clients/michael-chen.jpg",
  //     rating: 5
  //   }
  // },
 
{
  id: 4,
  slug: "sz-naturals",
  title: "SZ Naturals – Herbal Hair Care",
  description: "An e-commerce platform for herbal hair care products featuring ancient Ayurvedic ingredients, brand storytelling, and customer reviews.",
  image: "/Projects/sznaturals.webp",
  liveLink: "https://sznaturals.com",
  category: "E-commerce",
  client: "SZ Naturals",
  year: "2026",
  challenge: [
    "Manual order handling through WhatsApp was chaotic and difficult to manage",
    "Outdated website design not reflecting ancient herbal wisdom brand identity",
    "Poor product presentation making it hard for customers to browse herbal oils and shampoos",
    "Needed to educate customers about Ayurvedic ingredients (Amla, Shikakai, Bhringraj) benefits"
  ],
  solution: [
    "Built custom e-commerce platform with automated ordering replacing manual WhatsApp orders",
    "Designed modern website reflecting ancient herbal wisdom with clean, natural aesthetic",
    "Created intuitive product categories with Recently Added and Customers Favorites sections",
    "Integrated educational content about herbal ingredients and their time-tested benefits"
  ],
  results: [
    "Launched automated e-commerce platform eliminating manual WhatsApp order handling",
    "Showcased 100% natural ingredients with clear chemical-free messaging",
    "Streamlined operations with custom admin panel for product and content management",
    "Built customer trust through authentic reviews and herbal heritage storytelling"
  ],
 technologies: ["React", "Node.js", "Express", "Tailwind CSS", "MongoDB"],
  features: [
    "Custom admin panel for product and order management",
    "Automated ordering system replacing manual WhatsApp order handling",
    "Product catalog with Recently Added and Customers Favorites sections",
    "Customer review system with WhatsApp integration for social proof",
    "Six pillars showcase (Pure Ingredients, Handmade with Care, Eco-Friendly)",
    "Mobile-responsive design for all devices",
    "Fast page loading with optimized product images",
    "SEO-optimized content structure for better search rankings",
    "Newsletter subscription for updates and offers",
  ],
  testimonial: {
    quote: "We were overwhelmed managing WhatsApp orders manually. Now customers order directly on the website and we save hours every day. The platform perfectly reflects our herbal heritage.",
    author: "Muhammad Sheraz",
    position: "Owner, SZ Naturals",
    image: "/clients/unknow.jpg",
    rating: 5
  }
}
];

// Helper functions
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

export function getAllProjects(): Project[] {
  return projects;
}

export function getAllProjectSlugs(): string[] {
  return projects.map(project => project.slug);
}

export function getRelatedProjects(currentSlug: string, limit: number = 3): Project[] {
  return projects
    .filter(project => project.slug !== currentSlug)
    .slice(0, limit);
}