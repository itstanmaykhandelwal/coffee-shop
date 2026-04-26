import Section from "../common/Section";
import MenuCard from "../cards/MenuCard";
import { motion } from "framer-motion";

const Menu = () => {
  const categories = [
    {
      title: "Hot Coffee",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
      items: [
        { name: "Espresso", price: "$3.50" },
        { name: "Flat White", price: "$4.50" },
        { name: "Cappuccino", price: "$4.00" },
        { name: "Cortado", price: "$4.25" },
      ],
    },
    {
      title: "Cold Brew",
      image: "https://images.unsplash.com/photo-1527169402691-a4b0e6aef3f6",
      items: [
        { name: "Nitro Cold Brew", price: "$6.00" },
        { name: "Cold Brew Tonic", price: "$6.50" },
        { name: "Iced Americano", price: "$4.50" },
      ],
    },
    {
      title: "Specialty",
      image: "https://images.unsplash.com/photo-1498804103079-a6351b050096",
      items: [
        { name: "Lavender Latte", price: "$6.50" },
        { name: "Honey Latte", price: "$6.00" },
      ],
    },
  ];

  return (
    <Section className="py-24 px-6 relative overflow-hidden" id="menu">
      {/* subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 0%, rgba(200,116,42,0.06), transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="text-center mb-20">
          <span className="inline-block text-xs tracking-[0.2em] uppercase mb-4 font-semibold text-[#d4a853]">
            ✦ Menu Preview
          </span>

          <h2
            className="text-4xl md:text-5xl font-black leading-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              background: "linear-gradient(135deg, #c8742a, #d4a853, #e8c06e)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Crafted With Care
          </h2>

          <p className="mt-5 text-base max-w-lg mx-auto text-gray-400 leading-relaxed">
            Every drink on our menu is a deliberate, balanced composition —
            refined through technique, time, and taste.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((c, i) => (
            <MenuCard key={i} {...c} delay={i * 0.1} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="px-7 py-3 rounded-full font-semibold text-sm"
            style={{
              background: "linear-gradient(135deg, #c8742a, #d4a853)",
              color: "#1a0a00",
            }}
          >
            View Full Menu →
          </motion.button>
        </div>
      </div>
    </Section>
  );
};

export default Menu;
