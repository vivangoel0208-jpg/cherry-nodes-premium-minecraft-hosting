import { motion } from "framer-motion";
import { Users, Server, Star } from "lucide-react";

const stats = [
  { icon: Users, value: "10,000+", label: "Active Players" },
  { icon: Server, value: "500+", label: "Servers Deployed" },
  { icon: Star, value: "99.9%", label: "Uptime" },
];

const TrustSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Trusted by <span className="text-gradient-cherry">Gaming Communities</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Join thousands of satisfied gamers who have chosen our hosting services for their communities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-cherry p-8 text-center"
            >
              <s.icon className="text-primary mx-auto mb-3" size={32} />
              <div className="text-3xl font-heading font-bold text-foreground mb-1">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
