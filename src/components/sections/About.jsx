import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="py-24 px-6 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, rgba(45,18,0,0.4) 0%, rgba(26,10,0,0) 100%)",
      }}
    >
      {/* glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%, rgba(200,116,42,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto text-center mb-16">
        <span className="inline-block text-xs tracking-widest uppercase mb-4 font-semibold text-[#d4a853]">
          ✦ Our Story
        </span>

        <h2 className="text-4xl md:text-5xl font-black text-[#f5ead8]">
          A Love Affair with Coffee
        </h2>
      </div>

      <div
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center"
        ref={ref}
      >
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
        >
          <p className="text-gray-400 mb-6">
            It began in a tiny garage in 2012 with a secondhand roaster,
            a bag of beans, and an obsession.
          </p>

          <p className="text-gray-400 mb-8">
            Today, we source from farms across the globe, roast in small batches,
            and deliver a premium experience in every cup.
          </p>

          <button className="px-6 py-2 border border-[#d4a853] text-[#d4a853] rounded-full">
            Read Full Story →
          </button>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          className="grid grid-cols-2 gap-4"
        >
          {[
            { emoji: "🌍", title: "12 Origins", sub: "Direct farms" },
            { emoji: "🔥", title: "Small Batch", sub: "Fresh roast" },
            { emoji: "🧪", title: "Lab Tested", sub: "Quality assured" },
            { emoji: "♻️", title: "Sustainable", sub: "Eco friendly" },
          ].map((card, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-[#2d1200] border border-[#d4a85320]"
            >
              <div className="text-2xl mb-2">{card.emoji}</div>
              <div className="text-sm font-semibold text-[#f5ead8]">
                {card.title}
              </div>
              <div className="text-xs text-gray-400">{card.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;