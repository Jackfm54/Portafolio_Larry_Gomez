import { ExternalLink, GitBranch, Star } from "lucide-react";

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
      className="group glass-card rounded-xl p-6 hover-glow block opacity-0 animate-fade-in hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <GitBranch className="w-4 h-4 text-primary" />
          </div>
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
        </div>
        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
      </div>

      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
        {description}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: languageColor }}
          />
          <span className="text-sm text-muted-foreground">{language}</span>
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          {stars > 0 && (
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3" />
              <span>{stars}</span>
            </div>
          )}
          {forks > 0 && (
            <div className="flex items-center gap-1">
              <GitBranch className="w-3 h-3" />
              <span>{forks}</span>
            </div>
          )}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
