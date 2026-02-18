import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const DISCORD_LINK = "https://discord.com/invite/JZARrGC8g6";

type Plan = {
  name: string;
  price: string;
  specs: string[];
  highlighted?: boolean;
};

type Category = {
  label: string;
  emoji: string;
  plans: Plan[];
};

const categories: Category[] = [
  {
    label: "Budget",
    emoji: "🌱",
    plans: [
      { name: "Dirt Plan", price: "₹39", specs: ["2GB RAM", "50% CPU", "10GB Disk", "1 Backup", "1 Port", "1 Database"] },
      { name: "Coal Plan", price: "₹60", specs: ["4GB RAM", "100% CPU", "20GB Disk", "2 Backups", "2 Ports", "2 Databases"] },
      { name: "Redstone Plan", price: "₹90", specs: ["6GB RAM", "150% CPU", "30GB Disk", "3 Backups", "3 Ports", "3 Databases"] },
      { name: "Diamond Plan", price: "₹120", specs: ["8GB RAM", "200% CPU", "40GB Disk", "4 Backups", "4 Ports", "4 Databases"], highlighted: true },
    ],
  },
  {
    label: "Standard",
    emoji: "⚡",
    plans: [
      { name: "Standard 2GB", price: "₹50", specs: ["2GB RAM", "100% CPU", "20GB Disk", "2 Backups", "2 Ports", "2 Databases"] },
      { name: "Standard 4GB", price: "₹80", specs: ["4GB RAM", "200% CPU", "40GB Disk", "5 Backups", "5 Ports", "5 Databases"] },
    ],
  },
  {
    label: "Advanced",
    emoji: "🚀",
    plans: [
      { name: "Advanced Plan", price: "₹199", specs: ["6GB RAM", "300% CPU", "60GB Disk", "7 Backups", "7 Ports", "7 Databases"] },
      { name: "Premium Plan", price: "₹299", specs: ["8GB RAM", "400% CPU", "80GB Disk", "10 Backups", "10 Ports", "10 Databases"] },
    ],
  },
  {
    label: "Premium MC",
    emoji: "👑",
    plans: [
      { name: "Premium Silver", price: "₹199", specs: ["8GB RAM", "400% CPU", "80GB Disk", "10 Backups", "10 Ports", "10 Databases"] },
      { name: "Premium Gold", price: "₹299", specs: ["12GB RAM", "600% CPU", "120GB Disk", "15 Backups", "15 Ports", "15 Databases"], highlighted: true },
      { name: "Premium Platinum", price: "₹450", specs: ["16GB RAM", "800% CPU", "160GB Disk", "20 Backups", "20 Ports", "20 Databases"] },
      { name: "Premium Diamond", price: "₹599", specs: ["24GB RAM", "1200% CPU", "240GB Disk", "30 Backups", "30 Ports", "30 Databases"] },
    ],
  },
];

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="pricing" className="py-20 gradient-cherry-soft">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Cherry Nodes — <span className="text-gradient-cherry">Minecraft Plans</span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat, i) => (
            <button
              key={cat.label}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeTab === i
                  ? "gradient-cherry text-primary-foreground shadow-md"
                  : "bg-card text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              {cat.emoji} {cat.label}
            </button>
          ))}
        </div>

        {/* Plans grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {categories[activeTab].plans.map((plan) => (
            <div
              key={plan.name}
              className={`card-cherry-hover p-6 flex flex-col relative ${
                plan.highlighted ? "ring-2 ring-primary" : ""
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-cherry text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                  <Star size={12} /> Popular
                </div>
              )}
              <h3 className="font-heading font-bold text-foreground text-lg mb-1">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-heading font-bold text-gradient-cherry">{plan.price}</span>
                <span className="text-muted-foreground text-sm">/mo</span>
              </div>
              <ul className="space-y-2 mb-6 flex-1">
                {plan.specs.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check size={14} className="text-primary flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
              <a
                href={DISCORD_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full text-center py-2.5 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90 ${
                  plan.highlighted
                    ? "gradient-cherry text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                }`}
              >
                Deploy Now
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
