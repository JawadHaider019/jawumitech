"use client"

import LeftRight from './LeftRight'

const ProcessSection = () => {
  return (
    <section className="bg-black text-white relative w-full">
      {/* Background circles - optional */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#bff747]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-[#bff747]/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <LeftRight
          badge="HOW IT WORKS"
          title="Driving results through a proven"
          titleAccent="development process"
          description="Our structured software development process ensures seamless project execution, high performance, and scalable digital solutions from concept to launch."
          buttonText="Get Free Quote"
          buttonLink="/contact"
          sections={[
            {
              step: "01",
              title: "Requirement Analysis & Planning",
              description: "We begin by understanding your business goals, target audience, and technical requirements.",
              additional: "Through detailed consultation and research, we define the project scope, features, timeline, and success strategy to build a strong foundation."
            },
            {
              step: "02", 
              title: "UI/UX Design & System Architecture",
              description: "We create modern, user-friendly designs and scalable technical architecture.",
              additional: "Wireframes and prototypes ensure an intuitive user experience, responsive design, and a solution built for long-term growth."
            },
            {
              step: "03",
              title: "Development & Implementation",
              description: "Our team develops secure, high-performance web and software solutions.",
              additional: "Clean coding practices, responsive development, and optimized functionality ensure a fast and reliable digital product."
            },
            {
              step: "04",
              title: "Testing & Quality Assurance",
              description: "We thoroughly test every feature to ensure performance, security, and stability.",
              additional: "Functional testing, performance optimization, and bug fixing guarantee a smooth and reliable user experience."
            },
            {
              step: "05",
              title: "Deployment & Ongoing Maintenance",
              description: "We launch your solution smoothly and ensure continuous support.",
              additional: "Regular updates, monitoring, and performance improvements keep your digital platform secure, scalable, and optimized."
            }
          ]}
        />
      </div>
    </section>
  )
}

export default ProcessSection