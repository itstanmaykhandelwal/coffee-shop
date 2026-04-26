import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TestimonialCard = ({ name, role, text, avatar, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className="relative p-8 rounded-2xl"
      style={{
        background:
          "linear-gradient(145deg, rgba(45,18,0,0.7) 0%, rgba(26,10,0,0.85) 100%)",
        border: "1px solid rgba(212,168,83,0.12)",
      }}
    >
      {/* Quote */}
      <div
        className="text-5xl mb-4 opacity-30"
        style={{ color: "#d4a853", fontFamily: "serif" }}
      >
        "
      </div>

      {/* Text */}
      <p
        className="text-sm leading-relaxed mb-6"
        style={{
          color: "rgba(245,234,216,0.7)",
          fontStyle: "italic",
        }}
      >
        {text}
      </p>

      {/* User */}
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
          style={{ background: "rgba(212,168,83,0.2)" }}
        >
          {avatar}
        </div>

        <div>
          <div className="font-semibold text-sm" style={{ color: "#f5ead8" }}>
            {name}
          </div>
          <div className="text-xs" style={{ color: "rgba(245,234,216,0.45)" }}>
            {role}
          </div>
        </div>

        {/* Stars */}
        <div className="ml-auto flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <span key={i} style={{ color: "#d4a853" }}>
              ★
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
