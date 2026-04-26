import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CTABanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      className="mx-6 my-10 p-12 text-center rounded-2xl"
      style={{ background: "linear-gradient(135deg, #3a1500, #1a0a00)" }}
    >
      <h2 className="text-3xl font-bold text-[#f5ead8] mb-4">
        Your Perfect Cup Awaits
      </h2>

      <p className="text-gray-400 mb-6">
        Use code <span className="text-[#d4a853]">FIRSTSIP</span>
      </p>

      <button className="px-6 py-3 bg-[#d4a853] rounded-full font-bold">
        Shop Now
      </button>
    </motion.div>
  );
};

export default CTABanner;
