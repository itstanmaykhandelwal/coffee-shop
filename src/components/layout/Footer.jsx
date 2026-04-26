import { motion } from "framer-motion";

const Footer = () => (
  <footer
    className="pt-16 pb-8 px-6"
    id="contact"
    style={{
      background: "rgba(10,4,0,0.95)",
      borderTop: "1px solid rgba(212,168,83,0.08)",
    }}
  >
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div>
          <div
            className="text-2xl font-black mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#d4a853",
            }}
          >
            ☕ ROAST&CO
          </div>

          <p
            className="text-sm leading-relaxed mb-6"
            style={{ color: "rgba(245,234,216,0.4)" }}
          >
            Artisan coffee roasters. Small batches. Big flavors.
          </p>

          <div className="flex gap-3">
            {["𝕏", "📷", "in", "▶"].map((icon, i) => (
              <motion.button
                key={i}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(212,168,83,0.15)",
                }}
                className="w-9 h-9 rounded-full flex items-center justify-center text-sm"
                style={{
                  border: "1px solid rgba(212,168,83,0.2)",
                  color: "#d4a853",
                }}
              >
                {icon}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Links */}
        {[
          {
            title: "Shop",
            links: ["Coffee Beans", "Equipment", "Subscriptions", "Gift Cards"],
          },
          {
            title: "Company",
            links: ["About Us", "Our Farms", "Sustainability", "Careers"],
          },
          {
            title: "Support",
            links: ["Brewing Guides", "FAQ", "Shipping Info", "Returns"],
          },
        ].map((col, i) => (
          <div key={i}>
            <h4
              className="font-bold text-sm mb-4 uppercase"
              style={{ color: "#d4a853" }}
            >
              {col.title}
            </h4>

            <ul className="space-y-3">
              {col.links.map((link, j) => (
                <li key={j}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 2, color: "#d4a853" }}
                    className="text-sm"
                    style={{ color: "rgba(245,234,216,0.45)" }}
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div
        className="flex flex-col md:flex-row justify-between pt-8 text-xs"
        style={{
          borderTop: "1px solid rgba(245,234,216,0.06)",
          color: "rgba(245,234,216,0.25)",
        }}
      >
        <span>© 2024 Roast&Co. All rights reserved.</span>
        <span>📍 Coffee Street · ✉ hello@coffee.com</span>
      </div>
    </div>
  </footer>
);

export default Footer;