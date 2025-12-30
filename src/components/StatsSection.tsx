import { Code, GitBranch, Users, Briefcase } from "lucide-react";

const stats = [
  {
    icon: Code,
    value: "9",
    label: "Repositories",
  },
  {
    icon: GitBranch,
    value: "42",
    label: "Contributions (2025)",
  },
  {
    icon: Users,
    value: "2",
    label: "Followers",
  },
  {
    icon: Briefcase,
    value: "5+",
    label: "Technologies",
  },
];

const StatsSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="glass-card rounded-xl p-6 text-center opacity-0 animate-fade-in hover-glow hover:border-primary/30 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
