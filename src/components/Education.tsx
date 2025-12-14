import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar } from "lucide-react";

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

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            {educationData.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                className="relative pl-20 pb-12 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-5 w-7 h-7 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                  <GraduationCap className="w-3.5 h-3.5 text-primary" />
                </div>

                <div className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center gap-2 text-primary text-sm mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-1">{edu.degree}</h3>
                  <p className="text-muted-foreground mb-3">{edu.institution}</p>
                  {(edu.cgpa || edu.percentage) && (
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                      {edu.cgpa ? `CGPA: ${edu.cgpa}` : `Percentage: ${edu.percentage}%`}
                    </span>
                  )}
                  <p className="text-muted-foreground text-sm">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
