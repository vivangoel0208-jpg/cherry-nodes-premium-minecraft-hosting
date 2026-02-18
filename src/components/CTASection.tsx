import { motion } from "framer-motion";

const DISCORD_LINK = "https://discord.com/invite/JZARrGC8g6";

const CTASection = () => {
  return (
    <section className="py-20 gradient-cherry relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Ready to Level Up Your Cherry Nodes?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Join thousands of gaming communities already using our platform. Get started in minutes
            with our one-click deployment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <a
              href={DISCORD_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-foreground text-primary font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-sm"
            >
              Start Free Trial
            </a>
            <a
              href={DISCORD_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-primary-foreground text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:bg-primary-foreground/10 transition-colors text-sm"
            >
              Contact Sales
            </a>
          </div>
          <p className="text-primary-foreground/60 text-sm">
            No credit card required. 7-day free trial.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
