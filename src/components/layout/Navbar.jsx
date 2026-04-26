import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled ? "rgba(26,10,0,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(212,168,83,0.1)"
          : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-xl font-bold text-[#d4a853]">
          ☕ Roast&Co
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center text-sm">
          {["Menu", "Products", "About", "Contact"].map((link) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              whileHover={{ color: "#d4a853" }}
              className="text-gray-300 cursor-pointer"
            >
              {link}
            </motion.a>
          ))}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 bg-[#d4a853] text-black rounded-full font-semibold"
          >
            Order Now
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl text-[#d4a853]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
            style={{
              background: "rgba(26,10,0,0.95)",
              borderTop: "1px solid rgba(212,168,83,0.1)",
            }}
          >
            <div className="flex flex-col items-center gap-6 py-6">
              {["Menu", "Products", "About", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-300"
                >
                  {link}
                </a>
              ))}

              <button className="px-6 py-2 bg-[#d4a853] text-black rounded-full font-semibold">
                Order Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;