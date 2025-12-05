import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Game Engine",
    description: "A custom 2D/3D game engine built from scratch. Because why use Unity when you can suffer?",
    tags: ["C++", "OpenGL", "Physics"],
    status: "In Progress",
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Physics Simulation",
    description: "Real-time fluid dynamics and particle systems. Very satisfying to watch, painful to debug.",
    tags: ["Rust", "WGPU", "Math"],
    status: "Concept",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Multiplayer Game",
    description: "Fast-paced multiplayer racing game. Currently just cubes racing, but it's a start.",
    tags: ["Unity", "C#", "Networking"],
    status: "In Progress",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      viewport={{ once: true }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="hoverable relative group"
    >
      <div className={`glass rounded-2xl p-6 md:p-8 h-full relative overflow-hidden transition-all duration-300 group-hover:border-primary/30`}>
        {/* Gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: "linear-gradient(105deg, transparent 40%, hsla(160, 100%, 50%, 0.1) 45%, transparent 50%)",
            transform: "translateZ(0)",
          }}
        />

        <div className="relative" style={{ transform: "translateZ(50px)" }}>
          {/* Status badge */}
          <div className="flex justify-between items-start mb-4">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
              {project.status}
            </span>
            <div className="flex gap-2">
              <button className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                <Github className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-gradient transition-all duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-2 py-1 rounded bg-secondary/50 text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Section title */}
        <motion.div
          className="flex items-center gap-3 mb-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border" />
          <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
            Projects
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border" />
        </motion.div>

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Work In Progress <span className="inline-block animate-wiggle">👀</span>
          </h3>
          <p className="text-muted-foreground font-mono text-sm flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            Cool stuff coming soon. Probably involving physics, engines, or breaking things in C++.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: "1000px" }}>
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Coming soon placeholder */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-dashed border-border text-muted-foreground text-sm">
            <span className="w-2 h-2 bg-primary/50 rounded-full animate-pulse" />
            More projects loading...
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
