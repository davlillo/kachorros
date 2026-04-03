import * as React from "react";
import { Stethoscope, Scissors, Syringe, Home, Store, Bug } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Scissors,
    title: "Peluquería canina",
    description: "Baño, corte y cuidado estético para que tu perro luzca y se sienta bien.",
  },
  {
    icon: Bug,
    title: "Desparasitación",
    description: "Protección interna y externa contra parásitos, con productos veterinarios.",
  },
  {
    icon: Syringe,
    title: "Vacunación",
    description: "Esquemas de vacunas al día para prevenir enfermedades.",
  },
  {
    icon: Stethoscope,
    title: "Consulta general",
    description: "Atención veterinaria integral, diagnóstico y seguimiento de salud.",
  },
  {
    icon: Home,
    title: "Hospedaje canino y felino",
    description: "Estadía segura y cómoda para perros y gatos cuando no puedas cuidarlos en casa.",
  },
  {
    icon: Store,
    title: "Farmacia, venta de alimentos y accesorios",
    description: "Medicamentos, alimentos y accesorios para el cuidado diario de tu mascota.",
  },
];

const ServicesSection = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [snapCount, setSnapCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setSnapCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());
    };

    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <section
      id="servicios"
      className="relative z-[12] -mt-[2px] overflow-hidden bg-turquoise-services pb-20 pt-28 md:pt-32"
    >
      <div className="container relative z-10 mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-primary text-center mb-4">
          Nuestros Servicios
        </h2>
        <p className="text-primary-foreground/90 text-center mb-10 max-w-lg mx-auto">
          Todo lo que tu mascota necesita, en un solo lugar.
        </p>

        <div className="mx-auto max-w-6xl relative px-14 sm:px-16 md:px-20">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-3 md:-ml-4">
              {services.map(({ icon: Icon, title, description }) => (
                <CarouselItem
                  key={title}
                  className="pl-3 md:pl-4 basis-[88%] sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="bg-card rounded-2xl p-7 md:p-8 shadow-md border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center group h-full min-h-[220px] flex flex-col">
                    <div className="w-16 h-16 mx-auto rounded-full bg-orange/10 flex items-center justify-center mb-5 group-hover:bg-orange/20 transition-colors shrink-0">
                      <Icon className="text-orange" size={32} />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">{title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">{description}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              variant="outline"
              className="h-9 w-9 rounded-full border-primary/25 bg-background/90 text-primary shadow-sm hover:bg-background -left-14 sm:-left-16"
            />
            <CarouselNext
              variant="outline"
              className="h-9 w-9 rounded-full border-primary/25 bg-background/90 text-primary shadow-sm hover:bg-background -right-14 sm:-right-16"
            />
          </Carousel>

          <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Posición del carrusel">
            {Array.from({ length: snapCount }).map((_, index) => (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={current === index}
                aria-label={`Ir al servicio ${index + 1}`}
                className={cn(
                  "h-2.5 w-2.5 rounded-full transition-all duration-300",
                  current === index
                    ? "bg-primary scale-110 w-6"
                    : "bg-primary/35 hover:bg-primary/55",
                )}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
