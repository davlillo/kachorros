import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  TIKTOK_URL,
  WHATSAPP_URL,
} from "@/socialLinks";
import { TikTokIcon } from "@/components/TikTokIcon";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const FooterSection = () => {
  return (
    <footer id="contacto" className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Contacto */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <div className="flex items-center gap-3">
              <Phone size={18} />
              <span>+503 7315 8160</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} />
              <span>arirebe2011@gmail.com</span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-1 flex-shrink-0" />
              <span>
                Calle Sierra Madre y Avenida Miramundo, Mejicanos, San Salvador, El Salvador
                <span className="block text-sm text-primary-foreground/70 mt-1">
                  Plus code: PQGJ+657 Mejicanos
                </span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=13.725533,-89.219569"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-turquoise hover:underline mt-2"
                >
                  Ver en Google Maps
                </a>
              </span>
            </div>
          </div>

          {/* Horarios + Redes */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Horarios de Atención</h3>
            <div className="flex items-center gap-3">
              <Clock size={18} />
              <span>Lunes a Sábado 7:00 AM - 7:00 PM</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock size={18} />
              <span>Domingos: 9:00 AM - 3:00 PM</span>
            </div>
            <div className="mt-6 pt-6 border-t border-primary-foreground/20">
              <h4 className="text-xl font-bold mb-4">Redes Sociales</h4>
              <div className="flex items-center gap-6">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-[#25D366] transition-colors p-1"
                  aria-label="Abrir WhatsApp"
                >
                  <WhatsAppIcon className="h-10 w-10" />
                </a>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-[#1877F2] transition-colors p-1"
                  aria-label="Facebook — Veterinaria Kachorros"
                >
                  <Facebook className="h-10 w-10" strokeWidth={1.75} />
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-turquoise transition-colors p-1"
                  aria-label="Instagram @vet_kachorros"
                >
                  <Instagram className="h-10 w-10" strokeWidth={1.75} />
                </a>
                <a
                  href={TIKTOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-[#25F4EE] transition-colors p-1"
                  aria-label="TikTok — Veterinaria Kachorros"
                >
                  <TikTokIcon className="h-10 w-10" />
                </a>
              </div>
            </div>
          </div>

          {/* Mapa placeholder */}
          <div>
            <h3 className="text-xl font-bold mb-4">Ubicación</h3>
            <iframe
              title="Ubicación en Google Maps — Mejicanos, San Salvador"
              src="https://maps.google.com/maps?q=13.725533,-89.219569&z=17&hl=es&output=embed"
              className="w-full h-48 rounded-2xl border border-primary-foreground/20"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60 text-sm">
          © {new Date().getFullYear()} Veterinaria KACHORROS. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
