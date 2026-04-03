import {
  Target,
  Eye,
  Award,
  Heart,
  Zap,
  CheckCircle,
  Shield,
  Clock,
} from "lucide-react";
import perrosImg from "@/assets/perros.png";

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
    <section
      id="nosotros"
      className="relative z-10 -mt-px overflow-x-hidden bg-about-section pb-20 pt-14 md:pb-24"
    >
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-black text-primary md:mb-10 md:text-4xl">
          Sobre Nosotros
        </h2>

        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 lg:mb-12 lg:gap-10">
          {/* Misión, Visión e imagen: grupo centrado en el ancho del contenedor */}
          <div className="flex w-full justify-center">
            <div className="inline-flex max-w-full flex-col items-center justify-center gap-6 md:flex-row md:flex-wrap md:items-center md:gap-5 lg:gap-6 xl:gap-8">
              <div className="flex flex-shrink-0 flex-row flex-wrap items-start justify-center gap-4 sm:gap-5">
                <div className="group relative flex aspect-square w-full max-w-[10.25rem] flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-orange via-orange to-orange-hover p-4 shadow-lg ring-2 ring-orange/30 transition-transform hover:-translate-y-0.5 hover:shadow-xl sm:max-w-[11.5rem] sm:p-5 md:max-w-[12.5rem] md:p-5">
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/15 blur-2xl" />
                  <div className="absolute -bottom-3 -left-3 h-16 w-16 rounded-full bg-accent-foreground/10" />
                  <div className="relative flex flex-col gap-2">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 text-accent-foreground shadow-inner backdrop-blur-sm">
                      <Target className="h-4 w-4" strokeWidth={2.25} />
                    </div>
                    <h3 className="text-lg font-black tracking-tight text-accent-foreground">Misión</h3>
                    <p className="text-[11px] font-medium leading-snug text-accent-foreground/95 sm:text-xs">
                      Brindar servicio integral dirigido a la salud, belleza, nutrición, confort y bienestar animal.
                    </p>
                  </div>
                </div>

                <div className="group relative flex aspect-square w-full max-w-[10.25rem] flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary to-purple-deep p-4 shadow-lg ring-2 ring-primary/35 transition-transform hover:-translate-y-0.5 hover:shadow-xl sm:max-w-[11.5rem] sm:p-5 md:max-w-[12.5rem] md:p-5">
                  <div className="absolute -right-6 top-0 h-28 w-28 rounded-full bg-secondary/25 blur-2xl" />
                  <div className="absolute bottom-0 left-0 h-14 w-14 rounded-full bg-white/10" />
                  <div className="relative flex flex-col gap-2">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 text-primary-foreground shadow-inner backdrop-blur-sm">
                      <Eye className="h-4 w-4" strokeWidth={2.25} />
                    </div>
                    <h3 className="text-lg font-black tracking-tight text-primary-foreground">Visión</h3>
                    <p className="text-[11px] font-medium leading-snug text-primary-foreground/95 sm:text-xs">
                      Ser líderes y referentes en el área médica para los animales de compañía.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex w-full max-w-[min(100%,20rem)] shrink-0 items-center justify-center md:w-auto md:max-w-none">
                <img
                  src={perrosImg}
                  alt="Mascotas atendidas en la clínica"
                  className="h-auto w-full max-h-[14rem] object-contain drop-shadow-2xl sm:max-h-[16rem] sm:max-w-[18rem] md:max-h-[18rem] md:max-w-[20rem] lg:max-h-[20rem] lg:max-w-[24rem] xl:max-h-[22rem] xl:max-w-[28rem]"
                />
              </div>
            </div>
          </div>

          {/* Valores — icono + texto dentro del círculo */}
          <div className="w-full max-w-5xl">
            <div className="mb-4 rounded-r-md border-l-[5px] border-primary py-1 pl-3 md:mb-5 md:border-l-[6px] md:py-1.5 md:pl-4">
              <h3 className="text-sm font-black uppercase tracking-wide text-white drop-shadow-md md:text-base">
                Valores
              </h3>
              <p className="mt-0.5 text-left text-xs text-white/95 drop-shadow-sm md:text-sm">
                Lo que nos guía cada día
              </p>
            </div>
            <div
              className="flex w-full flex-nowrap justify-start gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-3 md:overflow-x-visible md:gap-3 lg:gap-4 [&::-webkit-scrollbar]:hidden"
              role="list"
            >
              {values.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  role="listitem"
                  className="flex min-w-[5.5rem] shrink-0 justify-center md:min-w-0 md:flex-1"
                >
                  <div
                    lang="es"
                    className="flex h-[5.5rem] w-[5.5rem] shrink-0 flex-col items-center justify-center gap-1 rounded-full bg-card px-2 py-2 text-center shadow-md ring-2 ring-primary/15 sm:h-28 sm:w-28 sm:gap-1.5 sm:px-2.5"
                  >
                    <Icon className="h-[1.125rem] w-[1.125rem] shrink-0 text-primary sm:h-5 sm:w-5" strokeWidth={2.25} />
                    <span className="text-balance text-[9px] font-bold leading-[1.15] text-primary sm:text-[10px]">
                      {label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Ola inferior — transición curva hacia la sección Equipo */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full leading-none">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block h-auto w-full"
          aria-hidden
        >
          <path
            d="M0 40C360 100 720 0 1080 50C1260 75 1380 60 1440 50V100H0V40Z"
            fill="hsl(var(--team-section))"
          />
        </svg>
      </div>
    </section>
  );
};

export default AboutSection;
