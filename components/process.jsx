"use client";

import LeftRight from "./LeftRight";

const ProcessSection = () => {
  return (
    <section className="bg-white text-black relative w-full">
      {/* Background circles - optional */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#bff747]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-[#bff747]/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <LeftRight
          badge="HOW IT WORKS"
          title="Driving business growth and long-term success through a proven development process focused on performance, scalability, user experience, and real results."

          buttonText="Get Free Quote"
          buttonLink="/contact"
          sections={[
            {
              step: "01",
              title: "Requirement Analysis & Planning",
              image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
              description:
                "We start by understanding your business goals, target audience, and technical requirements, then define the project scope, features, timeline, and success strategy to build a strong foundation.",
            },
            {
              step: "02",
              title: "UI/UX Design & System Architecture",
              image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
              description:
                "We create modern, user-friendly designs and scalable technical architecture, wireframes and prototypes ensure an intuitive experience, responsive design, and a solution built for long-term growth.",
            },
            {
              step: "03",
              title: "Development & Implementation",
              image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
              description:
                "Our team develops secure, high-performance software, websites, and mobile apps, using clean coding practices, responsive development, and optimized functionality for a fast, reliable product.",
            },
            {
              step: "04",
              title: "Testing & Quality Assurance",
              image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
              description:
                "We thoroughly test every feature for performance, security, and stability, functional testing, performance optimization, and bug fixing guarantee a smooth, reliable user experience.",
            },
            {
              step: "05",
              title: "Deployment & Ongoing Maintenance",
              image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
              description:
                "We launch your solution smoothly and provide continuous support, regular updates, monitoring, and performance improvements keep your platform secure, scalable, and optimized.",
            },
          ]}
          isLight={true}
        />
      </div>
    </section>
  );
};

export default ProcessSection;
