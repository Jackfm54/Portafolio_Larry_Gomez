import { Github, Linkedin, ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpeg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 overflow-hidden noise-overlay">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-blob" />
        <div className="absolute top-1/2 -right-20 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] animate-blob" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-20 left-1/3 w-[600px] h-[300px] bg-[hsl(220,90%,56%)]/15 rounded-full blur-[120px] animate-blob" style={{ animationDelay: '4s' }} />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-20 h-20 border border-primary/20 rounded-xl rotate-12 animate-float opacity-40" />
        <div className="absolute top-40 right-[15%] w-16 h-16 border border-accent/20 rounded-full animate-float opacity-30" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-[20%] w-12 h-12 bg-primary/10 rounded-lg rotate-45 animate-float opacity-50" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-40 right-[25%] w-8 h-8 border border-primary/30 rounded animate-float opacity-40" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Profile Photo with glow effect */}
        <div className="mb-10 opacity-0 animate-scale-in">
          <div className="relative inline-block group">
            {/* Animated ring */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl opacity-75 blur-lg group-hover:opacity-100 transition-opacity duration-500 animate-gradient" />
            
            <div className="relative">
              <img
                src={profilePhoto}
                alt="Larry Jack Gomez Casalins"
                className="w-52 md:w-72 rounded-2xl border-2 border-border/50 shadow-2xl relative z-10 object-cover"
              />
              
              {/* Badge */}
              <div className="absolute -bottom-4 -right-4 z-20">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary rounded-full blur-md animate-pulse-glow" />
                  <div className="relative w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-primary-foreground font-bold shadow-lg">
                    <Sparkles className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Status badge */}
        <div className="mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-muted-foreground">Disponible pour de nouvelles opportunités</span>
          </span>
        </div>

        {/* Name & Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 opacity-0 animate-fade-in tracking-tight" style={{ animationDelay: '300ms' }}>
          <span className="gradient-text text-glow">Larry Jack</span>
          <br />
          <span className="text-foreground">Gomez Casalins</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-4 opacity-0 animate-fade-in font-medium" style={{ animationDelay: '500ms' }}>
          Développeur Full-Stack & Expert IA
        </p>

        <p className="text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-in text-lg" style={{ animationDelay: '700ms' }}>
          Je conçois des applications innovantes avec{" "}
          <span className="text-primary font-medium">Flutter</span>,{" "}
          <span className="text-primary font-medium">TypeScript</span>,{" "}
          <span className="text-primary font-medium">Python</span> et{" "}
          <span className="text-primary font-medium">C#</span>.
          Spécialisé en développement mobile et solutions d'intelligence artificielle.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center opacity-0 animate-fade-in" style={{ animationDelay: '900ms' }}>
          <Button
            asChild
            size="lg"
            className="btn-gradient text-primary-foreground h-14 px-8 text-lg rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
          >
            <a href="https://github.com/Jackfm54" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              <span>Voir mon GitHub</span>
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-[#0A66C2] text-white hover:bg-[#0A66C2]/90 h-14 px-8 text-lg rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
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
            className="border-border/50 text-foreground hover:bg-secondary h-14 px-8 text-lg rounded-xl hover:border-primary/50 transition-all duration-300"
          >
            <a href="#projects">
              Découvrir mes projets
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '1200ms' }}>
        <a href="#projects" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors group">
          <span className="text-sm mb-3 font-medium">Scroll</span>
          <div className="w-8 h-12 rounded-full border-2 border-current flex items-start justify-center p-2 group-hover:border-primary transition-colors">
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
