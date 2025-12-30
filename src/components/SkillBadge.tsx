interface SkillBadgeProps {
  name: string;
  delay?: number;
}

const SkillBadge = ({ name, delay = 0 }: SkillBadgeProps) => {
  return (
    <span
      className="px-4 py-2 rounded-full glass-card text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 cursor-default opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      {name}
    </span>
  );
};

export default SkillBadge;
