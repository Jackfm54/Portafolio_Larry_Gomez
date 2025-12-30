import { Code, GitBranch, Users, Briefcase, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Code,
    value: "9+",
    label: "Projets Open Source",
    color: "from-primary to-primary/50",
  },
  {
    icon: GitBranch,
    value: "42",
    label: "Contributions 2025",
    color: "from-accent to-accent/50",
  },
  {
    icon: TrendingUp,
    value: "5+",
    label: "Années d'expérience",
    color: "from-[hsl(220,90%,56%)] to-[hsl(220,90%,56%)]/50",
  },
  {
    icon: Briefcase,
    value: "15+",
    label: "Technologies maîtrisées",
    color: "from-green-500 to-green-500/50",
  },
];

const StatsSection = () => {
  return (
    <section className="py-20 px-4 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group glass-card-hover rounded-2xl p-6 md:p-8 text-center opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon with gradient background */}
              <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              
              <div className="text-4xl md:text-5xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
