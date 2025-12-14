import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Briefcase, GraduationCap, Code } from "lucide-react";

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

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            {workExperienceData.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                className="relative pl-20 pb-12 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-5 w-7 h-7 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                  <Briefcase className="w-3.5 h-3.5 text-primary" />
                </div>

                <div className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center gap-2 text-primary text-sm mb-2">
                    <Code className="w-4 h-4" />
                    <span>{exp.period}</span>
                    <span className="ml-auto px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {exp.type}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-1">{exp.title}</h3>
                  <p className="text-muted-foreground mb-3">{exp.company}</p>
                  <p className="text-muted-foreground text-sm">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default WorkExperience;
