import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "Python", "C++", "JavaScript"],
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "React", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Core CS",
    skills: ["Data Structures & Algorithms", "OOPs", "Operating System", "Unit Testing"],
  },
  {
    title: "Tools & Databases",
    skills: ["Git/GitHub", "VS Code", "Eclipse", "SQL", "HANA Database"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Expertise</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I work with a variety of technologies and tools to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + categoryIndex * 0.1 }}
              className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="font-display text-lg font-semibold mb-6 text-primary">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
