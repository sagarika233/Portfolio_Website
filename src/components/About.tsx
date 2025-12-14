import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Rocket, GraduationCap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Dev",
    description: "Building responsive applications with React, Node.js, Express & MongoDB.",
  },
  {
    icon: Database,
    title: "Problem Solving",
    description: "Applying DSA and algorithms to solve problems efficiently.",
  },
  {
    icon: Rocket,
    title: "Clean Code",
    description: "Writing maintainable code with best practices and version control.",
  },
  {
    icon: GraduationCap,
    title: "Quick Learner",
    description: "Passionate about AI, cloud applications, and scalable system design.",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">About Me</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Software Engineering Student &<br />
            <span className="text-gradient">Full Stack Developer</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Motivated and detail-oriented Software Engineering student with strong foundations 
              in Java, Python, C++, and full-stack development. Skilled in building responsive 
              applications, working with REST APIs, databases, and cloud platforms, and applying 
              data structures and algorithms to solve problems efficiently.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Adept at debugging, writing clean code, and collaborating in team-based projects. 
              Passionate about creating scalable, user-focused solutions and continuously learning 
              new technologies.
            </p>
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300"
              >
                Let's work together
                <span>→</span>
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="p-6 glass rounded-2xl hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:glow-sm transition-all duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
