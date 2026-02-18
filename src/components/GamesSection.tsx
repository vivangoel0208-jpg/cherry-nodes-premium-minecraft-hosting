import { motion } from "framer-motion";
import { Gamepad2 } from "lucide-react";

const DISCORD_LINK = "https://discord.com/invite/JZARrGC8g6";

const GamesSection = () => {
  return (
    <section id="games" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Support for <span className="text-gradient-cherry">Popular Games</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer optimized hosting for all major games with one-click deployment and custom
            configuration options.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto card-cherry-hover p-8 text-center"
        >
          <div className="w-16 h-16 gradient-cherry rounded-2xl flex items-center justify-center mx-auto mb-5">
            <Gamepad2 className="text-primary-foreground" size={32} />
          </div>
          <h3 className="text-xl font-heading font-bold text-foreground mb-2">Minecraft</h3>
          <p className="text-muted-foreground text-sm mb-6">
            Host vanilla or modded Minecraft servers with automatic backups and plugin support.
          </p>
          <a
            href={DISCORD_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-cherry text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-semibold inline-block hover:opacity-90 transition-opacity"
          >
            Deploy Server
          </a>
        </motion.div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4 text-sm">
            Don't see your game? We support hundreds of other games and custom server configurations.
          </p>
          <a
            href={DISCORD_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-primary text-primary font-semibold px-6 py-2.5 rounded-lg text-sm hover:bg-primary/10 transition-colors inline-block"
          >
            View All Supported Games
          </a>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
