import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Award, BookOpen, Code } from "lucide-react";

const certificationsData = [
  {
    title: "SAP Certified Associate - Back-End Developer - ABAP Cloud",
    issuer: "SAP",
    type: "Professional",
    description: "Certification demonstrating expertise in SAP ABAP Cloud development.",
  },
  {
    title: "AI Powered Blockchain Certificate",
    issuer: "Blockchain Institute",
    type: "Professional",
    description: "Certification in AI-powered blockchain technologies and applications.",
  },
  {
    title: "Full Stack Development Intern",
    issuer: "Tech Company",
    type: "Professional",
    description: "Internship certification in full-stack web development technologies.",
  },
];

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("all");

  const filteredCertifications = activeTab === "all"
    ? certificationsData
    : certificationsData.filter(cert => cert.type.toLowerCase() === activeTab);

  return (
    <section id="certifications" className="py-32 bg-gradient-to-br from-primary/5 to-secondary/5" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Credentials</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional and academic certifications that validate my expertise.
          </p>
        </motion.div>

        {/* Horizontal Navigation Bar */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4 bg-background/50 backdrop-blur-sm rounded-full p-2 border border-border/50">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeTab === "all" ? "bg-primary text-primary-foreground shadow-lg" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab("professional")}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeTab === "professional" ? "bg-primary text-primary-foreground shadow-lg" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Professional
            </button>
            <button
              onClick={() => setActiveTab("academic")}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeTab === "academic" ? "bg-primary text-primary-foreground shadow-lg" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Academic
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredCertifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  {cert.type === "Professional" ? (
                    <Code className="w-6 h-6 text-primary" />
                  ) : (
                    <BookOpen className="w-6 h-6 text-primary" />
                  )}
                </div>
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-1">
                    {cert.type}
                  </span>
                  <h3 className="font-display text-lg font-semibold">{cert.title}</h3>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-3">{cert.issuer}</p>
              <p className="text-muted-foreground text-sm">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
