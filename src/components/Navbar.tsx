import { useEffect, useState } from "react";
import { Facebook, Instagram, Menu, X } from "lucide-react";
import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  TIKTOK_URL,
  WHATSAPP_URL,
} from "@/socialLinks";
import { TikTokIcon } from "@/components/TikTokIcon";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { cn } from "@/lib/utils";

const links = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
];

const SCROLL_THRESHOLD = 16;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /** Cristal solo al bajar; en el hero el fondo es sólido para contraste con el turquesa. */
  const glassActive = scrolled;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 isolate transition-[background-color,box-shadow,border-color] duration-500 ease-out motion-reduce:transition-none",
        glassActive ? "border-b border-border/40" : "border-b border-border/25 shadow-sm",
        glassActive
          ? "bg-card/85 backdrop-blur-xl shadow-[0_8px_32px_-8px_hsl(var(--foreground)/0.12)] supports-[backdrop-filter]:bg-card/70"
          : "bg-card/95 backdrop-blur-md supports-[backdrop-filter]:bg-card/90",
        "after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:content-[''] after:opacity-0 after:transition-opacity after:duration-500 after:ease-out motion-reduce:after:transition-none",
        glassActive && "after:opacity-100 after:bg-gradient-to-r after:from-secondary/0 after:via-secondary/55 after:to-secondary/0",
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="text-xl font-black text-primary">
          KACHORROS
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-foreground/80 hover:text-primary font-semibold transition-colors">
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-4 border-l border-border pl-8">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-[#25D366] transition-colors"
              aria-label="Abrir WhatsApp"
            >
              <WhatsAppIcon className="h-6 w-6" />
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-[#1877F2] transition-colors"
              aria-label="Facebook — Veterinaria Kachorros"
            >
              <Facebook className="h-6 w-6" strokeWidth={2} />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-colors"
              aria-label="Instagram @vet_kachorros"
            >
              <Instagram className="h-6 w-6" strokeWidth={2} />
            </a>
            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-[#25F4EE] transition-colors"
              aria-label="TikTok — Veterinaria Kachorros"
            >
              <TikTokIcon className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border/50 bg-card/90 backdrop-blur-md px-4 pb-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-foreground/80 hover:text-primary font-semibold py-2"
            >
              {l.label}
            </a>
          ))}
          <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-border">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="p-3 text-foreground/80 hover:text-[#25D366] transition-colors rounded-md"
              aria-label="Abrir WhatsApp"
            >
              <WhatsAppIcon className="h-7 w-7" />
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="p-3 text-foreground/80 hover:text-[#1877F2] transition-colors rounded-md"
              aria-label="Facebook — Veterinaria Kachorros"
            >
              <Facebook className="h-7 w-7" strokeWidth={2} />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="p-3 text-foreground/80 hover:text-primary transition-colors rounded-md"
              aria-label="Instagram @vet_kachorros"
            >
              <Instagram className="h-7 w-7" strokeWidth={2} />
            </a>
            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="p-3 text-foreground/80 hover:text-[#25F4EE] transition-colors rounded-md"
              aria-label="TikTok — Veterinaria Kachorros"
            >
              <TikTokIcon className="h-7 w-7" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
