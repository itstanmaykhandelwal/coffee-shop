import Section from "../common/Section";
import TestimonialCard from "../cards/TestimonialCard";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Aria Mendes",
      role: "Coffee Blogger",
      text: "Best coffee I’ve ever tasted.",
      avatar: "👩",
    },
    {
      name: "James Kroft",
      role: "Barista",
      text: "Absolutely premium quality beans.",
      avatar: "👨",
    },
    {
      name: "Sophie Laurent",
      role: "Cafe Owner",
      text: "Our customers love it!",
      avatar: "👩‍🍳",
    },
  ];

  return (
    <Section className="py-24 px-6" id="testimonials">
        <div className="text-center mb-16">
  <span className="inline-block text-xs tracking-widest uppercase mb-4 font-semibold text-[#d4a853]">
    ✦ What People Say
  </span>

  <h2 className="text-4xl md:text-5xl font-black text-[#f5ead8]">
    Loved by Coffee Purists
  </h2>
</div>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} {...t} delay={i * 0.2} />
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
