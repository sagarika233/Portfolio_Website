import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Certifications", href: "#certifications" },
  { name: "Work Experience", href: "#work-experience" },
  { name: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <motion.a
          href="#"
          className="font-display text-2xl font-bold text-primary"
          whileHover={{ scale: 1.05 }}
        >
          Portfolio
        </motion.a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <a
                href={item.href}
                className={`transition-colors duration-300 font-medium ${
                  activeSection === item.href.substring(1)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {item.name}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Desktop Hire Me Button */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="hidden md:block px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:glow transition-all duration-300"
        >
          Hire Me
        </motion.a>

        {/* Mobile Hamburger Menu */}
        
        {isMobile && (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <motion.button
                className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
                whileTap={{ scale: 0.95 }}
              >
                <Menu className="w-6 h-6 text-primary" />
              </motion.button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-8">
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium transition-colors duration-300 ${
                        activeSection === item.href.substring(1)
                          ? "text-primary"
                          : "text-muted-foreground hover:text-primary"
                      }`}
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-center hover:glow transition-all duration-300"
                >
                  Hire Me
                </a>
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
