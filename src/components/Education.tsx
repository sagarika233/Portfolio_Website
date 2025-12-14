import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar } from "lucide-react";
import { useIsMobile } from "../hooks/use-mobile";

const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "College Of IT & Management Education, Bhubaneswar",
    period: "2024 - 2026",
    description: "Currently pursuing advanced studies in computer applications and software development.",
  },
  {
    degree: "B.Sc Computer Science (Hons.)",
    institution: "Utkal University",
    period: "2020 - 2023",
    cgpa: "8.60",
    description: "Specialized in computer science fundamentals, data structures, and algorithms.",
  },
  {
    degree: "Higher Secondary (12th / CHSE)",
    institution: "RD Women's HS School, Bhubaneswar",
    period: "2018 — 2020",
    percentage: "72.33%",
    description: "Completed higher secondary education with a focus on science subjects.",
  },
  {
    degree: "Secondary (10th / CHSE)",
    institution: "Sri Aurobindo Institute of Integral Education, Matruvihar",
    period: "2018",
    percentage: "81%",
    description: "Completed secondary education with strong academic performance.",
  },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isMobile = useIsMobile();

  return (
    <section id="education" className="py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">My Journey</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My academic foundation in computer science and software development.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-primary/30 h-full"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: isMobile ? 0 : (isLeft ? -50 : 50), y: isMobile ? 50 : 0 }}
                  animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.2, ease: "easeOut" }}
                  className={`relative flex items-center ${isMobile ? 'justify-center' : (isLeft ? 'justify-start' : 'justify-end')} w-full`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                  {/* Card */}
                  <div className={`w-full max-w-md ${isMobile ? '' : (isLeft ? 'mr-8' : 'ml-8')} glass rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="font-display text-xl md:text-2xl font-semibold mb-2 md:mb-0">{edu.degree}</h3>
                      <div className="flex items-center gap-2 text-primary text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-lg mb-3">{edu.institution}</p>
                    {(edu.cgpa || edu.percentage) && (
                      <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                        {edu.cgpa ? `CGPA: ${edu.cgpa}` : `Percentage: ${edu.percentage}%`}
                      </span>
                    )}
                    <p className="text-muted-foreground">{edu.description}</p>
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

export default Education;
