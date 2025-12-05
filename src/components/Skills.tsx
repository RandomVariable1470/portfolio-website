import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users } from "lucide-react";

const skills = [
  { name: "C", icon: "C", color: "from-blue-500 to-blue-600" },
  { name: "C++", icon: "C++", color: "from-blue-400 to-blue-600" },
  { name: "Rust", icon: "🦀", color: "from-orange-500 to-red-600" },
  { name: "Python", icon: "🐍", color: "from-yellow-400 to-green-500" },
  { name: "JavaScript", icon: "JS", color: "from-yellow-400 to-yellow-500" },
  { name: "TypeScript", icon: "TS", color: "from-blue-500 to-blue-700" },
  { name: "C#", icon: "C#", color: "from-purple-500 to-purple-700" },
  { name: "Unity", icon: "🎮", color: "from-gray-600 to-gray-800" },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section id="skills" className="py-32 px-6 relative">
      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Section title */}
        <motion.div
          className="flex items-center gap-3 mb-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border" />
          <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
            Skills
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border" />
        </motion.div>

        <motion.h3
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Skills I'm leveling up <span className="text-gradient">🎮</span>
        </motion.h3>

        <motion.p
          className="text-center text-muted-foreground mb-16 font-mono text-sm"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          Still learning, still leveling up. XP bar loading...
        </motion.p>

        {/* Skills grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
              className="hoverable group relative"
            >
              <div className="glass rounded-xl p-6 text-center relative overflow-hidden transition-all duration-300 group-hover:border-primary/30">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative">
                  <span className="text-3xl mb-3 block">
                    {skill.icon.length <= 3 ? (
                      <span className="font-mono font-bold text-2xl text-primary">
                        {skill.icon}
                      </span>
                    ) : (
                      skill.icon
                    )}
                  </span>
                  <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                    {skill.name}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Soft skill */}
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="hoverable glass rounded-full px-6 py-3 flex items-center gap-3 border border-primary/20"
          >
            <Users className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Team Collaboration</span>
            <span className="text-xs text-muted-foreground font-mono">+1 soft skill unlocked</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
