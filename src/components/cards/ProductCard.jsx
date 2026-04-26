import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ProductCard = ({ name, desc, price, image, tag, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="group relative rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-1"
      style={{
        background:
          "linear-gradient(145deg, rgba(45,18,0,0.9), rgba(26,10,0,0.95))",
        border: "1px solid rgba(212,168,83,0.12)",
      }}
    >
      {/* IMAGE */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 will-change-transform group-hover:scale-105"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* TAG */}
      {tag && (
        <div className="absolute top-3 right-3 px-2 py-1 text-xs rounded-full bg-[#d4a85320] text-[#d4a853] border border-[#d4a85330]">
          {tag}
        </div>
      )}

      {/* CONTENT */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-[#f5ead8]">{name}</h3>

        <p className="text-sm text-gray-400 mt-1 leading-relaxed">
          {desc}
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-[#d4a853] font-semibold">{price}</span>

          <button className="px-3 py-1 text-sm rounded-full border border-[#d4a853] text-[#d4a853] transition hover:scale-105">
            Add
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;