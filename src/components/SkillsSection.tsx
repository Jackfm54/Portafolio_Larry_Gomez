import SkillBadge from "./SkillBadge";

const skills = [
  "Flutter",
  "Dart",
  "TypeScript",
  "JavaScript",
  "Python",
  "C#",
  "Machine Learning",
  "YOLO",
  "Firebase",
  "React",
  "Node.js",
  "Jupyter",
  "Git",
  "REST APIs",
  "Mobile Development",
  "Backend Development",
  "Computer Vision",
];

const SkillsSection = () => {
  return (
    <section className="py-24 px-4 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-muted-foreground">
            Les outils et langages que j'utilise au quotidien
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill, index) => (
            <SkillBadge key={skill} name={skill} delay={index * 50} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
