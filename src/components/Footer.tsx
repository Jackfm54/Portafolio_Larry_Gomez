import { Github, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <span>Créé avec</span>
          <Heart className="w-4 h-4 text-primary fill-primary" />
          <span>par Jackfm54</span>
        </div>

        <a
          href="https://github.com/Jackfm54"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <Github className="w-5 h-5" />
          <span>github.com/Jackfm54</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
