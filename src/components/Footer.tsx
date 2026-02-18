import logo from "@/assets/logo.webp";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-primary-foreground/80 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Cherry Nodes" className="h-10 w-10 rounded-lg" />
              <span className="text-xl font-heading font-bold text-primary-foreground">Cherry Nodes</span>
            </div>
            <p className="text-sm text-primary-foreground/60">
              Premium game server hosting with high performance hardware, global network, and 24/7
              support for gamers worldwide.
            </p>
          </div>

          {/* Games */}
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Games</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#games" className="hover:text-primary-foreground transition-colors">Minecraft</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {["About Us", "Blog", "Careers", "Privacy Policy", "Terms of Service", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-primary-foreground transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm">
              <li>123 Server Lane, Cloud City, 94043</li>
              <li>+1 (555) 123-4567</li>
              <li>support@cherrynodes.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center text-sm text-primary-foreground/40">
          © 2026 Cherry Nodes. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
