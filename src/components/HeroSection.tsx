import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpeg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), 
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Avatar */}
        <div className="mb-8 opacity-0 animate-scale-in">
          <div className="relative inline-block">
            <img
              src={profilePhoto}
              alt="Larry Jack Gomez Casalins"
              className="w-32 h-32 rounded-full border-4 border-primary/30 glow object-cover"
            />
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xs animate-pulse-glow">
              AI
            </div>
          </div>
        </div>

        {/* Name & Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 opacity-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <span className="gradient-text">Larry Jack Gomez Casalins</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '400ms' }}>
          Développeur Full-Stack & Passionné d'IA
        </p>

        <p className="text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '600ms' }}>
          Je crée des applications innovantes avec Flutter, TypeScript, Python et C#. 
          Spécialisé dans le développement mobile, le Machine Learning et les solutions basées sur l'intelligence artificielle.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center opacity-0 animate-fade-in" style={{ animationDelay: '800ms' }}>
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-sm hover:glow transition-all duration-300"
          >
            <a href="https://github.com/Jackfm54" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-[#0A66C2] text-foreground hover:bg-[#0A66C2]/90 transition-all duration-300"
          >
            <a href="https://www.linkedin.com/in/larry-gomez-30b2a557" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300"
          >
            <a href="#projects">
              Découvrir mes projets
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '1200ms' }}>
        <a href="#projects" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
          <span className="text-sm mb-2">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
