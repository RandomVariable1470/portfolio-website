import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, Gamepad2, Mail, Send, Sparkles } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form handling would go here
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Section title */}
        <motion.div
          className="flex items-center gap-3 mb-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border/50" />
          <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
            Contact
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border/50" />
        </motion.div>

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Connect <span className="text-gradient">✨</span>
          </h3>
          <p className="text-muted-foreground">
            Got a project idea? Want to collaborate? Or just want to say hi?
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            className="glass-soft frosted-border rounded-2xl p-6 md:p-8"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground/80">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-card/50 frosted-border focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground/80">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-card/50 frosted-border focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground/80">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-card/50 frosted-border focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="hoverable w-full py-3 px-6 rounded-xl bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 hover:glow-soft transition-all duration-300"
              >
                <Send className="w-4 h-4" />
                Send Message
              </motion.button>
            </div>
          </motion.form>

          {/* Social links and info */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {/* Quick contact */}
            <div className="glass-soft frosted-border rounded-2xl p-6 md:p-8">
              <h4 className="font-medium mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Quick Links
              </h4>
              
              <div className="space-y-3">
                <a
                  href="mailto:hello@randomvariable.dev"
                  className="hoverable flex items-center gap-3 p-3 rounded-xl bg-card/40 hover:bg-card/60 transition-colors group frosted-border"
                >
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-xs text-muted-foreground font-mono">hello@randomvariable.dev</p>
                  </div>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hoverable flex items-center gap-3 p-3 rounded-xl bg-card/40 hover:bg-card/60 transition-colors group frosted-border"
                >
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Github className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">GitHub</p>
                    <p className="text-xs text-muted-foreground font-mono">@randomvariable</p>
                  </div>
                </a>

                <a
                  href="https://itch.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hoverable flex items-center gap-3 p-3 rounded-xl bg-card/40 hover:bg-card/60 transition-colors group frosted-border"
                >
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Gamepad2 className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">itch.io</p>
                    <p className="text-xs text-muted-foreground font-mono">randomvariable.itch.io</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Fun message */}
            <div className="glass-soft frosted-border rounded-2xl p-6 text-center">
              <p className="text-muted-foreground text-sm font-mono">
                "I don't always respond immediately,<br />
                but when I do, it's probably 3 AM."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;