import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const MenuCard = ({ title, items, emoji, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="rounded-2xl p-7"
      style={{
        background:
          "linear-gradient(135deg, rgba(45,18,0,0.8) 0%, rgba(26,10,0,0.9) 100%)",
        border: "1px solid rgba(212,168,83,0.12)",
      }}
    >
      {/* Emoji */}
      <div className="text-4xl mb-4">{emoji}</div>

      {/* Title */}
      <h3
        className="text-xl font-bold mb-5"
        style={{
          fontFamily: "'Playfair Display', serif",
          color: "#d4a853",
        }}
      >
        {title}
      </h3>

      {/* Items */}
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex justify-between items-center py-2"
            style={{
              borderBottom: "1px solid rgba(245,234,216,0.08)",
            }}
          >
            <span
              className="text-sm"
              style={{ color: "rgba(245,234,216,0.75)" }}
            >
              {item.name}
            </span>

            <span
              className="text-sm font-semibold"
              style={{ color: "#c8742a" }}
            >
              {item.price}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default MenuCard;