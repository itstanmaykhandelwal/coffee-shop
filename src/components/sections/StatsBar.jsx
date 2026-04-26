import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const StatsBar = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { value: "12+", label: "Years of Craft" },
    { value: "40+", label: "Coffee Origins" },
    { value: "98%", label: "Happy Customers" },
    { value: "200k+", label: "Cups Served" },
  ];

  return (
    <div
      ref={ref}
      className="py-12"
      style={{
        background: "rgba(45,18,0,0.5)",
        borderTop: "1px solid rgba(212,168,83,0.08)",
        borderBottom: "1px solid rgba(212,168,83,0.08)",
      }}
    >
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1 }}
          >
            <div className="text-3xl font-bold text-[#d4a853]">
              {s.value}
            </div>
            <div className="text-xs text-gray-400 uppercase">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StatsBar;