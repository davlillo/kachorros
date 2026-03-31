import { Stethoscope, Scissors, Apple, Pill } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Consulta Médica",
    description: "Diagnóstico y tratamiento profesional para tu mascota con los mejores especialistas.",
  },
  {
    icon: Scissors,
    title: "Peluquería / Estética",
    description: "Baño, corte y cuidado estético para que tu mascota luzca y se sienta increíble.",
  },
  {
    icon: Apple,
    title: "Nutrición Especializada",
    description: "Planes alimenticios personalizados para una vida saludable y balanceada.",
  },
  {
    icon: Pill,
    title: "Farmacia",
    description: "Medicamentos y productos veterinarios de alta calidad, siempre disponibles.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-20 bg-turquoise-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-primary text-center mb-4">
          Nuestros Servicios
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
          Todo lo que tu mascota necesita, en un solo lugar.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-card rounded-2xl p-8 shadow-md border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center group"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-orange/10 flex items-center justify-center mb-5 group-hover:bg-orange/20 transition-colors">
                <Icon className="text-orange" size={32} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
