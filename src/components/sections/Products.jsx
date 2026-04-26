import Section from "../common/Section";
import ProductCard from "../cards/ProductCard";
import { motion } from "framer-motion";
import { useMemo } from "react";

const Products = () => {

  const products = useMemo(() => [
    {
      image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
      name: "Arabica Supreme",
      tag: "Bestseller",
      desc: "Smooth, sweet notes of caramel and jasmine.",
      price: "$24.99 / 250g",
    },
    {
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
      name: "Robusta Bold",
      tag: "Intense",
      desc: "Full-bodied and earthy.",
      price: "$19.99 / 250g",
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1674327105074-46dd8319164b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Signature Blend",
      tag: "House Fav",
      desc: "Perfectly balanced blend.",
      price: "$22.99 / 250g",
    },
    {
      image: "https://images.unsplash.com/photo-1639906512494-dd4a536abc4e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "French Press",
      tag: "Equipment",
      desc: "Classic brewing tool.",
      price: "$49.00",
    },
    {
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
      name: "Espresso Machine",
      tag: "Pro Grade",
      desc: "Cafe-level espresso at home.",
      price: "$299.00",
    },
    {
      image: "https://images.unsplash.com/photo-1507914372368-b2b085b925a1",
      name: "Burr Grinder",
      tag: "Precision",
      desc: "Consistent grind every time.",
      price: "$89.00",
    },
  ], []);

  return (
    <Section className="py-24 px-6 relative overflow-hidden" id="products">
      
      {/* glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(200,116,42,0.08), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-20">
          <span className="inline-block text-xs tracking-widest uppercase mb-4 text-[#d4a853]">
            ✦ Our Collection
          </span>

          <h2 className="text-4xl md:text-5xl font-black text-[#f5ead8]">
            Beans & Equipment
          </h2>

          <p className="mt-4 text-gray-400 max-w-lg mx-auto">
            Curated for the perfect coffee experience.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <ProductCard key={i} {...p} delay={i * 0.1} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 bg-[#d4a853] rounded-full font-bold text-black"
          >
            Explore All →
          </motion.button>
        </div>
      </div>
    </Section>
  );
};

export default Products;