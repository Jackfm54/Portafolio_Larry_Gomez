import { Wrench } from "lucide-react";

interface TechLogoProps {
  name: string;
  logo: string;
  delay?: number;
}

const TechLogo = ({ name, logo, delay = 0 }: TechLogoProps) => {
  return (
    <div
      className="group flex flex-col items-center gap-3 p-5 glass-card-hover rounded-2xl opacity-0 animate-fade-in cursor-default"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <img 
          src={logo} 
          alt={name} 
          className="w-14 h-14 object-contain relative z-10 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg"
        />
      </div>
      <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
        {name}
      </span>
    </div>
  );
};

const technologies = [
  {
    name: "Flutter",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  {
    name: "Dart",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "C#",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Firebase",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Jupyter",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
  },
  {
    name: "TensorFlow",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  {
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-28 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-transparent to-secondary/50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          {/* Section badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium mb-6 opacity-0 animate-fade-in">
            <Wrench className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">Stack Technique</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '100ms' }}>
            <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg opacity-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
            Les outils et langages que je maîtrise au quotidien
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
          {technologies.map((tech, index) => (
            <TechLogo 
              key={tech.name} 
              name={tech.name} 
              logo={tech.logo} 
              delay={300 + index * 40} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
