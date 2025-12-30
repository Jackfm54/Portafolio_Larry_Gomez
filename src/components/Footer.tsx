import { Github, Linkedin, Heart, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main footer content */}
        <div className="glass-card rounded-3xl p-8 md:p-12 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left side - CTA */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-3">
                <span className="gradient-text">Travaillons ensemble</span>
              </h3>
              <p className="text-muted-foreground max-w-md">
                Je suis toujours ouvert aux nouvelles opportunités et collaborations passionnantes.
              </p>
            </div>

            {/* Right side - Contact button */}
            <a
              href="mailto:jack.fm.54@hotmail.com"
              className="btn-gradient px-8 py-4 rounded-xl text-primary-foreground font-semibold flex items-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-primary/25"
            >
              <Mail className="w-5 h-5" />
              <span>Me contacter</span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-border/50">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>© {currentYear} • Créé avec</span>
            <Heart className="w-4 h-4 text-accent fill-accent animate-pulse" />
            <span>par Larry Jack Gomez Casalins</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Jackfm54"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/larry-gomez-30b2a557"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-[#0A66C2] hover:border-[#0A66C2]/50 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
