import logo from "@/assets/LOGO.png";
import { MessageCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-turquoise min-h-[90vh] flex items-center overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-orange/10 blur-3xl" />

      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
        {/* Logo */}
        <div className="flex-shrink-0 w-64 md:w-80 lg:w-96 animate-fade-in">
          <img src={logo} alt="Veterinaria KACHORROS logo" className="w-full h-auto drop-shadow-2xl" />
        </div>

        {/* Text content */}
        <div className="text-center space-y-6 animate-fade-in flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-tight">
            Veterinaria
            <br />
            <span className="text-purple-deep">KACHORROS</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-lg mx-auto">
            Cuidamos a tu mascota con amor, dedicación y profesionalismo. ¡Tu mejor amigo merece lo mejor!
          </p>
          <a
            href="https://wa.me/50373158160"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-orange hover:bg-orange-hover text-accent-foreground font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <MessageCircle size={24} />
            Contactanos por WhatsApp
          </a>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 40C360 100 720 0 1080 50C1260 75 1380 60 1440 50V100H0V40Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
