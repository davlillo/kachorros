import { Target, Eye, Award, Heart, Zap, CheckCircle, Shield, Clock } from "lucide-react";

const values = [
  { icon: Award, label: "Profesionalismo" },
  { icon: Heart, label: "Dedicación" },
  { icon: Zap, label: "Eficiencia" },
  { icon: CheckCircle, label: "Calidad" },
  { icon: Shield, label: "Honradez" },
  { icon: Clock, label: "Disciplina" },
];

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-primary text-center mb-16">
          Sobre Nosotros
        </h2>

        <div className="grid md:grid-cols-2 gap-10 mb-16 max-w-4xl mx-auto">
          {/* Misión */}
          <div className="bg-card rounded-2xl p-8 shadow-md border border-border hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Target className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-primary">Misión</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Brindar servicio integral dirigido a la salud, belleza, nutrición, confort y bienestar animal.
            </p>
          </div>

          {/* Visión */}
          <div className="bg-card rounded-2xl p-8 shadow-md border border-border hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <Eye className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-secondary">Visión</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Ser líderes y referentes en el área médica para los animales de compañía.
            </p>
          </div>
        </div>

        {/* Valores */}
        <h3 className="text-2xl font-bold text-primary text-center mb-8">Nuestros Valores</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
          {values.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-turquoise-light hover:bg-turquoise/10 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon className="text-primary" size={28} />
              </div>
              <span className="text-sm font-bold text-foreground text-center">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
