import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Briefcase, GraduationCap, Code } from "lucide-react";
import { useIsMobile } from "../hooks/use-mobile";

const workExperienceData = [
  {
    title: "Summer Internship - SAP Consultant",
    company: "Electro-Mech Enterprises (EME), Odisha Skill Development Authority (OSDA)",
    period: "Jun '25 — Jul '25",
    type: "Internship",
    description: "Gained hands-on experience in SAP consulting, working on enterprise solutions and business process optimization.",
  },
  {
    title: "Full Stack Development Intern",
    company: "Cognifyz Technologies",
    period: "Jul '25 — Aug '25",
    type: "Internship",
    description: "Developed full-stack web applications using modern technologies, focusing on user experience and scalable solutions.",
  },
  {
    title: "AI Powered Blockchain Builder",
    company: "FITT IIT Delhi",
    period: "Feb '25 — May '25",
    type: "Training Program",
    description: "Advanced training program in AI-powered blockchain technologies, building decentralized applications and smart contracts.",
  },
];

const WorkExperience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isMobile = useIsMobile();

  return (
    <section id="work-experience" className="py-32 bg-gradient-to-br from-background to-secondary/20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Professional Journey</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Internships and training programs that shaped my career in software development.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-primary/30 h-full"></div>

          <div className="space-y-12">
            {workExperienceData.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                  className={`relative flex items-center ${isLeft ? 'justify-start' : 'justify-end'} w-full`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                  {/* Card */}
                  <div className={`w-full max-w-md ${isLeft ? 'mr-8' : 'ml-8'} glass rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                    <div className="flex flex-col mb-4">
                      <h3 className="font-display text-xl md:text-2xl font-semibold mb-2">{exp.title}</h3>
                      <div className="flex items-center gap-4 mb-2">
                        <div className="flex items-center gap-2 text-primary text-sm">
                          <Code className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-lg mb-4">{exp.company}</p>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
