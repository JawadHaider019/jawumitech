import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle,
  Award,
  Clock,
  Users,
  TrendingUp,
} from "lucide-react";
import { FaStar } from "react-icons/fa";
import { getProjectBySlug, getAllProjectSlugs } from "../../data/project";

// Import tech icons from your techStack
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiLaravel,
  SiPhp,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiVercel,
  SiFigma,
  SiAdobe,
  SiTailwindcss,
  SiCloudinary,
  SiStripe,
} from "react-icons/si";
import { TbBrandFramerMotion, TbBrandJavascript } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";

// Your exact techStack array - ONLY these technologies will have icons
const techStack = [
  { name: "Next.js", icon: SiNextdotjs, color: "text-white hover:text-white" },
  {
    name: "React",
    icon: SiReact,
    color: "text-[#61DAFB] hover:text-[#61DAFB]",
  },
  {
    name: "JavaScript",
    icon: TbBrandJavascript,
    color: "text-[#FFCA28] hover:text-[#FFCA28]",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "text-[#339933] hover:text-[#339933]",
  },
  { name: "Express", icon: SiExpress, color: "text-white hover:text-white" },
  {
    name: "Laravel",
    icon: SiLaravel,
    color: "text-[#FF2D20] hover:text-[#FF2D20]",
  },
  { name: "PHP", icon: SiPhp, color: "text-[#777BB4] hover:text-[#777BB4]" },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-[#47A248] hover:text-[#47A248]",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "text-[#4479A1] hover:text-[#4479A1]",
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    color: "text-[#FFCA28] hover:text-[#FFCA28]",
  },
  { name: "Vercel", icon: SiVercel, color: "text-white hover:text-white" },
  {
    name: "Figma",
    icon: SiFigma,
    color: "text-[#F24E1E] hover:text-[#F24E1E]",
  },
  {
    name: "Adobe",
    icon: SiAdobe,
    color: "text-[#FF0000] hover:text-[#FF0000]",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-[#06B6D4] hover:text-[#06B6D4]",
  },
  {
    name: "Framer Motion",
    icon: TbBrandFramerMotion,
    color: "text-[#FF69B4] hover:text-[#FF69B4]",
  },
  {
    name: "Cloudinary",
    icon: SiCloudinary,
    color: "text-[#3448C5] hover:text-[#3448C5]",
  },
  {
    name: "Stripe",
    icon: SiStripe,
    color: "text-[#008CDD] hover:text-[#008CDD]",
  },
  { name: "GitHub", icon: FaGitAlt, color: "text-white hover:text-white" },
];

// Convert techStack array to a map for easy lookup
const techIconMap = techStack.reduce((map, tech) => {
  map[tech.name] = { icon: tech.icon, color: tech.color };
  return map;
}, {});

// Generate static paths for all projects
export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}
const StarRating = ({ rating }) => {
  return (
    <div className="flex justify-start items-start gap-1 mb-4">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 ${index < rating ? "text-[#bff747]" : "text-gray-400"}`}
          fill="currentColor"
        />
      ))}
    </div>
  );
};
const renderListItems = (items) => {
  if (Array.isArray(items)) {
    return (
      <ul className="space-y-3">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <span className="text-[#bff747] text-lg font-bold mt-0.5">•</span>
            <span className="text-gray-300 text-lg leading-relaxed">
              {item}
            </span>
          </li>
        ))}
      </ul>
    );
  }
  return <p className="text-gray-300 text-lg leading-relaxed">{items}</p>;
};
// Generate metadata for each case study
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Case Study`,
    description: project.description,
  };
}

// Main case study page component
export default async function CaseStudyPage({ params }) {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-black min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-48 h-48 sm:w-72 sm:h-72 bg-[#bff747]/10 rounded-full blur-2xl sm:blur-3xl" />
          <div className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-[#bff747]/10 rounded-full blur-2xl sm:blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-72 sm:h-72 bg-[#bff747]/5 rounded-full blur-2xl sm:blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#bff747] transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Case Studies</span>
          </Link>

          <div className="grid grid-cols-1  gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-[#bff747]/10 text-[#bff747] text-sm font-semibold rounded-full border border-[#bff747]/20">
                  {project.category}
                </span>
                <span className="text-gray-400">{project.year}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                {project.title}
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-8">
                <div>
                  <span className="text-sm text-gray-400 block mb-1">
                    Client
                  </span>
                  <span className="text-lg font-semibold">
                    {project.client}
                  </span>
                </div>
                <div>
                  <span className="text-sm text-gray-400 block mb-1">
                    Live Link
                  </span>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-[#bff747] hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    Visit Website
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="relative h-[300px] lg:h-[450px] rounded-xl overflow-hidden border border-white/10 group">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Challenge & <span className="text-[#bff747]">Solution</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              How we transformed requirements into reality
            </p>
          </div>

          <div className="grid grid-cols-1  gap-8">
            {/* Challenge */}
            <div className="bg-black/50 p-8 rounded-xl border border-white/10 hover:border-[#bff747]/30 transition-all group">
              <h3 className="text-2xl font-bold text-white group-hover:text-[#bff747] transition-colors mb-5">
                The Challenge
              </h3>

              {renderListItems(project.challenge)}
            </div>

            {/* Solution */}
            <div className="bg-black/50 p-8 rounded-xl border border-white/10 hover:border-[#bff747]/30 transition-all group">
              <h3 className="text-2xl font-bold text-white group-hover:text-[#bff747] transition-colors mb-5">
                The Solution
              </h3>
              {renderListItems(project.solution)}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-28 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('/grid.svg')] opacity-5" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Key <span className="text-[#bff747]">Results</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Tangible outcomes that drove real business impact
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {project.results.map((result, index) => {
              const icons = [TrendingUp, Award, Users, Clock];
              const Icon = icons[index % icons.length];
              return (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#bff747]/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-gradient-to-b from-[#0a0a0a] to-black p-8 rounded-xl border border-white/10 group-hover:border-[#bff747]/30 transition-all">
                    <div className="w-12 h-12 bg-[#bff747]/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-[#bff747]" />
                    </div>
                    <p className="text-gray-300 text-lg font-medium leading-relaxed">
                      {result}
                    </p>

                    {/* Animated Number Background */}
                    <div className="absolute bottom-0 right-0 text-7xl font-black text-white/5 select-none">
                      {(index + 1).toString().padStart(2, "0")}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Tech Stack Section - Using ONLY techStack icons */}
      <section className="py-20 bg-[#0a0a0a] overflow-hidden relative">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-72 h-72 bg-[#bff747]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-[#bff747]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Technologies<span className="text-[#bff747]">Used</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Modern tools and technologies that powered this solution
            </p>
          </div>

          {/* Tech Icons Grid - Only showing technologies that exist in techStack */}
          <div className="flex justify-center">
            <div className="flex flex-wrap justify-center gap-8 max-w-4xl">
              {project.technologies.map((tech, i) => {
                const techInfo = techIconMap[tech];
                // Only render if technology exists in techStack
                if (!techInfo) return null;
                const IconComponent = techInfo.icon;
                return (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center cursor-pointer group w-24"
                  >
                    <div
                      className={`text-5xl md:text-6xl ${techInfo.color} transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2`}
                    >
                      <IconComponent />
                    </div>
                    <span className="text-sm">{tech}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* If no matching technologies found */}
          {project.technologies.filter((tech) => techIconMap[tech]).length ===
            0 && (
              <div className="text-center text-gray-400">
                <p>
                  No matching technologies from our stack were used in this
                  project.
                </p>
              </div>
            )}

          {/* Tech Stack Visualization - Only for technologies that exist */}
          {project.technologies.filter((tech) => techIconMap[tech]).length >
            0 && (
              <div className="mt-16 relative h-20">
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-20">
                  {project.technologies
                    .filter((tech) => techIconMap[tech])
                    .slice(0, 7)
                    .map((_, i) => (
                      <div
                        key={i}
                        className="w-1 bg-[#bff747] mx-2 rounded-full"
                        style={{
                          height: `${20 + i * 8}px`,
                          opacity: 0.2 + i * 0.1,
                        }}
                      />
                    ))}
                </div>
              </div>
            )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Key <span className="text-[#bff747]">Features</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              What makes this solution stand out
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {project.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-[#0b0b0b] rounded-lg border border-white/5 hover:border-[#bff747]/30 transition-all group"
              >
                <CheckCircle className="w-5 h-5 text-[#bff747] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonial */}
      {project.testimonial && (
        <section className="py-20 bg-[#0a0a0a] relative overflow-hidden">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Client <span className="text-[#bff747]"> Reviews</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              What our clinet says
            </p>
          </div>
          <div className="relative max-w-6xl mx-auto">
            <div className="relative min-h-[400px] sm:min-h-[450px] lg:min-h-[400px]">
              <div
                className={`transition-all duration-500 ease-in-out transform            
                }`}
              >
                <div className="bg-[#0b0b0b] backdrop-blur-xl rounded-2xl border border-gray-800 hover:border-[#bff747]/30 transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-[#bff747]/20 p-6 sm:p-8 lg:p-10 h-full">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#bff747]/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>

                  <div className="relative z-10 h-full flex flex-col">
                    <StarRating rating={project.testimonial.rating} />

                    <div className="flex-grow mb-6 sm:mb-8">
                      <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed sm:leading-loose">
                        {project.testimonial.quote}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 mt-auto">
                      <div className="flex-shrink-0">
                        <div className="relative w-12 h-12 sm:w-14 sm:h-14">
                          {project.testimonial.image ? (
                            <Image
                              src={project.testimonial.image}
                              alt={project.testimonial.author}
                              fill
                              className="rounded-full object-cover border-2 border-[#bff747]"
                              sizes="(max-width: 640px) 48px, 56px"
                            />
                          ) : (
                            <div className="w-full h-full rounded-full bg-gradient-to-br from-[#bff747] to-green-400 flex items-center justify-center border-2 border-[#bff747]">
                              <span className="text-black text-lg font-bold">
                                {project.testimonial.author.charAt(0)}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-white font-bold text-lg sm:text-xl truncate">
                          {project.testimonial.author}
                        </div>
                        <div className="text-[#bff747] text-sm sm:text-base truncate">
                          {project.testimonial.position}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
