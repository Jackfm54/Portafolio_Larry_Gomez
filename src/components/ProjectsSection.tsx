import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "LaboGrocery",
    description: "Plataforma de supermarché - Solution complète de gestion de supermarché développée en C#.",
    language: "C#",
    languageColor: "#178600",
    url: "https://github.com/Jackfm54/LaboGrocery",
  },
  {
    name: "yolo-vision-web",
    description: "Plateforme de détection d'objets basée sur YOLO avec interface web Python.",
    language: "Python",
    languageColor: "#3572A5",
    url: "https://github.com/Jackfm54/yolo-vision-web",
  },
  {
    name: "food-production-prediction-jj",
    description: "Système de prédiction de production alimentaire utilisant le Machine Learning avec Python.",
    language: "Python",
    languageColor: "#3572A5",
    url: "https://github.com/Jackfm54/food-production-prediction-jj",
  },
  {
    name: "food-production-prediction-ea",
    description: "Analyse prédictive de la production alimentaire avec TypeScript et algorithmes avancés.",
    language: "TypeScript",
    languageColor: "#3178C6",
    url: "https://github.com/Jackfm54/food-production-prediction-ea",
  },
  {
    name: "Clinical-backend-ia",
    description: "Backend intelligent pour application clinique avec fonctionnalités d'IA pour l'aide au diagnostic.",
    language: "JavaScript",
    languageColor: "#F7DF1E",
    url: "https://github.com/Jackfm54/Clinical-backend-ia",
  },
  {
    name: "app-mobile",
    description: "Application mobile moderne développée en TypeScript avec architecture scalable.",
    language: "TypeScript",
    languageColor: "#3178C6",
    url: "https://github.com/Jackfm54/app-mobile",
  },
  {
    name: "clinical",
    description: "Application clinique avec interface moderne en JavaScript pour la gestion médicale.",
    language: "JavaScript",
    languageColor: "#F7DF1E",
    url: "https://github.com/Jackfm54/clinical",
    forks: 1,
  },
  {
    name: "driver_taxi",
    description: "Application de taxi développée avec Flutter et Firebase pour une expérience temps réel.",
    language: "Dart",
    languageColor: "#00B4AB",
    url: "https://github.com/Jackfm54/driver_taxi",
  },
  {
    name: "TTpia2",
    description: "LaboIA2 - Projet d'intelligence artificielle avec Jupyter Notebook pour l'analyse de données.",
    language: "Jupyter Notebook",
    languageColor: "#DA5B0B",
    url: "https://github.com/Jackfm54/TTpia2",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Mes Projets</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Une sélection de mes projets open-source, du développement mobile aux solutions d'intelligence artificielle et Machine Learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.name}
              {...project}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
