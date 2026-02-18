import { motion } from "framer-motion";
import { Cpu, Globe, Clock, Shield, Rocket, TrendingUp, Settings, Users } from "lucide-react";

const features = [
  { icon: Cpu, title: "High-Performance Hardware", desc: "Powered by the latest AMD & Intel CPUs with NVMe SSDs for maximum speed and responsiveness." },
  { icon: Globe, title: "Low Latency Network", desc: "Global server locations ensure minimal ping and smooth gameplay worldwide." },
  { icon: Clock, title: "24/7 Availability", desc: "99.9% uptime guarantee with constant monitoring." },
  { icon: Shield, title: "DDoS Protection", desc: "Advanced protection systems keep your servers safe from attacks." },
  { icon: Rocket, title: "One-Click Deployment", desc: "Launch your game server in seconds using our control panel." },
  { icon: TrendingUp, title: "Scalable Resources", desc: "Upgrade resources anytime without downtime." },
  { icon: Settings, title: "Full Admin Access", desc: "Root access, custom mods, and full configuration control." },
  { icon: Users, title: "Unlimited Players", desc: "Host as many players as your game allows." },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 gradient-cherry-soft">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Premium Features for <span className="text-gradient-cherry">Serious Gamers</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our hosting platform is built by gamers, for gamers. Experience the difference with our
            high-performance servers and gamer-focused features.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card-cherry-hover p-6 text-center"
            >
              <div className="w-14 h-14 gradient-cherry rounded-xl flex items-center justify-center mx-auto mb-4">
                <f.icon className="text-primary-foreground" size={24} />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
