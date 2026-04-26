import { motion, useScroll, useTransform } from "framer-motion";
import Particle from "../common/Particle";

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const particles = [
    { x: 10, y: 20, size: 6, duration: 4, delay: 0 },
    { x: 85, y: 15, size: 4, duration: 5, delay: 1 },
    { x: 70, y: 70, size: 8, duration: 6, delay: 0.5 },
    { x: 25, y: 80, size: 5, duration: 4.5, delay: 2 },
  ];

  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 60% 40%, #3a1500 0%, #1a0a00 50%, #0d0500 100%)",
      }}
    >
      {/* Particles */}
      {particles.map((p, i) => (
        <Particle key={i} {...p} />
      ))}

      <motion.div
        style={{ y, opacity }}
        className="text-center z-10 px-6"
      >
        <motion.div
          className="text-8xl mb-6"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          ☕
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-black mb-6 text-[#f5ead8]">
          Brewed to <br />
          <span className="text-[#d4a853]">Perfection</span>
        </h1>

        <p className="text-lg mb-8 text-gray-300">
          Experience the finest coffee crafted with passion.
        </p>

        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 bg-[#d4a853] rounded-full text-black font-bold">
            Order Now
          </button>
          <button className="px-6 py-3 border rounded-full text-white">
            Explore
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;