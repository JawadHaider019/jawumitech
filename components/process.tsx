"use client"

import LeftRight from './LeftRight'

const ProcessSection = () => {
  return (
    <section className="bg-black text-white relative ">
      {/* Background circles */}

      {/* Use inline styles to ensure proper background */}
      <div className="relative z-10" style={{ background: 'black' }}>
        <LeftRight
          badge="HOW IT WORK"
          title="Streamlining success through proven"
          titleAccent="process"
          description="Our step-by-step approach ensures seamless project execution, from understanding your needs to delivering tailored IT solutions."
          buttonText="Get Free Quote"
          buttonLink="/contact"
          sections={[
            {
              step: "01",
              title: "Understanding your needs",
              description: "We start by listening to your challenges and goals to identify your unique IT requirements.",
              additional: "Through detailed discussions and requirement analysis, we ensure we fully comprehend your business objectives and technical needs."
            },
            {
              step: "02", 
              title: "Customized consultation",
              description: "We provide tailored solutions after analyzing your requirements.",
              additional: "Our experts design personalized strategies and technology stacks that align perfectly with your business goals and budget."
            },
            {
              step: "03",
              title: "Collaboration with stakeholders", 
              description: "We collaborate closely with your team for seamless execution.",
              additional: "Regular updates, transparent communication, and agile methodologies ensure your project stays on track and meets expectations."
            }
          ]}
        />
      </div>
    </section>
  )
}

export default ProcessSection