import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

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
              <span>+00 0000-0000</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} />
              <span>info@kachorros.com</span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-1 flex-shrink-0" />
              <span>Tu dirección aquí, Ciudad, País</span>
            </div>
            <a
              href="https://wa.me/TUNUMERO"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange hover:bg-orange-hover text-accent-foreground font-bold px-6 py-3 rounded-full mt-2 transition-colors"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>

          {/* Horarios */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Horarios de Atención</h3>
            <div className="flex items-center gap-3">
              <Clock size={18} />
              <span>Lunes a Viernes: 8:00 AM - 6:00 PM</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock size={18} />
              <span>Sábados: 8:00 AM - 1:00 PM</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock size={18} />
              <span>Domingos: Cerrado</span>
            </div>
          </div>

          {/* Mapa placeholder */}
          <div>
            <h3 className="text-xl font-bold mb-4">Ubicación</h3>
            <div className="w-full h-48 rounded-2xl bg-primary-foreground/10 flex items-center justify-center border border-primary-foreground/20">
              <p className="text-primary-foreground/60 text-sm text-center px-4">
                Aquí va tu mapa de Google Maps
                <br />
                <span className="text-xs">(Inserta tu iframe de Google Maps)</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60 text-sm">
          © {new Date().getFullYear()} Veterinaria +KACHORROS. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
