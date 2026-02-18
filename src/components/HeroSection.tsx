import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const DISCORD_LINK = "https://discord.com/invite/JZARrGC8g6";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary-foreground mb-4 drop-shadow-lg">
            Cherry Nodes
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-primary-foreground/90 mb-4">
            High Performance Minecraft Hosting — Fast & Reliable
          </p>
          <p className="text-base md:text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Get powerful, low-latency Minecraft hosting built for serious gamers. Instant setup,
            premium hardware, and 24/7 uptime.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={DISCORD_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-foreground text-primary font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-sm"
            >
              Get Started
            </a>
            <a
              href="#pricing"
              className="border-2 border-primary-foreground text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:bg-primary-foreground/10 transition-colors text-sm"
            >
              View Plans
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
