import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Brain, Code2 } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section title */}
          <div className="flex items-center gap-3 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border" />
            <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
              About Me
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border" />
          </div>

          {/* Main content */}
          <div className="glass rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
            
            <div className="relative">
              <motion.p
                className="text-2xl md:text-3xl font-light leading-relaxed text-foreground/90 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                I'm a{" "}
                <span className="text-gradient font-medium">random variable</span>{" "}
                trying to find my distribution in the world of code.
              </motion.p>

              <motion.p
                className="text-lg text-muted-foreground leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Think of me as that friend who gets way too excited about game engines, 
                spends hours debugging physics simulations, and probably has too many 
                half-finished projects on GitHub. Currently on a quest to understand 
                computers at every level—from transistors to Unity shaders.
              </motion.p>

              {/* Fun facts / interests */}
              <motion.div
                className="grid md:grid-cols-3 gap-4 mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/30 border border-border/30">
                  <Code2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-sm text-foreground">Currently</h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      Breaking things in C++ and calling it "learning"
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/30 border border-border/30">
                  <Brain className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-sm text-foreground">Long-term</h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      Curious about AI/ML engineering
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/30 border border-border/30">
                  <Sparkles className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-sm text-foreground">Philosophy</h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      Ship it, break it, fix it, repeat
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Real name signature */}
              <motion.p
                className="mt-12 text-right font-mono text-sm text-muted-foreground/60"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
              >
                — Naman, a.k.a. Random Variable
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
