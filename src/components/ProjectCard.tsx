import { ExternalLink, GitBranch, Star, Folder } from "lucide-react";

interface ProjectCardProps {
  name: string;
  description: string;
  language: string;
  languageColor: string;
  url: string;
  stars?: number;
  forks?: number;
  delay?: number;
}

const ProjectCard = ({
  name,
  description,
  language,
  languageColor,
  url,
  stars = 0,
  forks = 0,
  delay = 0,
}: ProjectCardProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group glass-card-hover rounded-2xl p-6 block opacity-0 animate-fade-in relative overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
              <Folder className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
              {name}
            </h3>
          </div>
          <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-300" />
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-6 line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full ring-2 ring-offset-2 ring-offset-card"
              style={{ backgroundColor: languageColor, boxShadow: `0 0 10px ${languageColor}40` }}
            />
            <span className="text-sm text-muted-foreground font-medium">{language}</span>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            {stars > 0 && (
              <div className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors">
                <Star className="w-4 h-4" />
                <span>{stars}</span>
              </div>
            )}
            {forks > 0 && (
              <div className="flex items-center gap-1.5 hover:text-primary transition-colors">
                <GitBranch className="w-4 h-4" />
                <span>{forks}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
