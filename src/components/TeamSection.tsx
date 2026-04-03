import { Stethoscope, PawPrint } from "lucide-react";
import { useState } from "react";
import icono from "@/assets/icono.png";

/** Sustituye por rutas a fotos reales si las subes (ej. "/images/doctora.jpg"). */
const DOCTORA_PHOTO_SRC: string = icono;
const DOCTOR_PHOTO_SRC: string = icono;

type StaffCardProps = {
  title: string;
  subtitle: string;
  photoSrc: string | null;
};

const StaffCard = ({ title, subtitle, photoSrc }: StaffCardProps) => {
  const [broken, setBroken] = useState(false);
  const showPhoto = photoSrc && !broken;

  return (
    <div className="relative flex min-h-0 flex-col overflow-hidden rounded-2xl border-2 border-white/30 bg-card shadow-xl ring-1 ring-black/5">
      <div className="relative aspect-[5/6] w-full max-h-[220px] bg-gradient-to-b from-muted/80 to-muted sm:max-h-[240px]">
        {showPhoto ? (
          <img
            src={photoSrc}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover object-top"
            onError={() => setBroken(true)}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center sm:gap-3 sm:p-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary sm:h-[4.5rem] sm:w-[4.5rem]">
              <Stethoscope className="h-9 w-9 sm:h-10 sm:w-10" strokeWidth={1.75} />
            </div>
            <p className="text-xs font-semibold text-muted-foreground sm:text-sm">Foto próximamente</p>
          </div>
        )}
      </div>
      <div className="border-t border-border/60 bg-card px-5 py-4">
        <p className="text-lg font-black text-primary">{title}</p>
        <p className="text-sm font-semibold text-muted-foreground">{subtitle}</p>
      </div>
    </div>
  );
};

/** Colores vivos para las huellas (acordes a la marca). */
const pawPastel = {
  lilac: "text-[hsl(276_52%_52%)]",
  peach: "text-[hsl(24_72%_58%)]",
  teal: "text-[hsl(178_48%_42%)]",
  sky: "text-[hsl(210_58%_48%)]",
} as const;

const TEAM_PAW_DECOR: Array<{
  left: string;
  top: string;
  color: string;
  size: number;
  rot: string;
  opacity: string;
}> = [
  { left: "2%", top: "10%", color: pawPastel.lilac, size: 26, rot: "-rotate-[14deg]", opacity: "opacity-[0.88]" },
  { left: "5%", top: "22%", color: pawPastel.peach, size: 22, rot: "rotate-[18deg]", opacity: "opacity-[0.82]" },
  { left: "1%", top: "34%", color: pawPastel.teal, size: 25, rot: "-rotate-[20deg]", opacity: "opacity-[0.85]" },
  { left: "4%", top: "46%", color: pawPastel.sky, size: 23, rot: "rotate-[10deg]", opacity: "opacity-[0.8]" },
  { left: "3%", top: "58%", color: pawPastel.peach, size: 21, rot: "-rotate-[8deg]", opacity: "opacity-[0.83]" },
  { left: "5%", top: "70%", color: pawPastel.lilac, size: 27, rot: "rotate-[16deg]", opacity: "opacity-[0.86]" },
  { left: "2%", top: "82%", color: pawPastel.teal, size: 22, rot: "-rotate-[12deg]", opacity: "opacity-[0.8]" },
  { left: "4%", top: "92%", color: pawPastel.sky, size: 24, rot: "rotate-[22deg]", opacity: "opacity-[0.84]" },
  { left: "1%", top: "16%", color: pawPastel.sky, size: 20, rot: "rotate-[12deg]", opacity: "opacity-[0.79]" },
  { left: "5%", top: "40%", color: pawPastel.lilac, size: 19, rot: "-rotate-[18deg]", opacity: "opacity-[0.81]" },
  { left: "2%", top: "64%", color: pawPastel.peach, size: 23, rot: "rotate-[8deg]", opacity: "opacity-[0.82]" },
  { left: "3%", top: "76%", color: pawPastel.teal, size: 21, rot: "-rotate-[16deg]", opacity: "opacity-[0.8]" },
  { left: "98%", top: "11%", color: pawPastel.peach, size: 26, rot: "rotate-[12deg]", opacity: "opacity-[0.87]" },
  { left: "95%", top: "23%", color: pawPastel.teal, size: 22, rot: "-rotate-[18deg]", opacity: "opacity-[0.81]" },
  { left: "99%", top: "35%", color: pawPastel.lilac, size: 28, rot: "rotate-[8deg]", opacity: "opacity-[0.88]" },
  { left: "96%", top: "47%", color: pawPastel.sky, size: 24, rot: "-rotate-[14deg]", opacity: "opacity-[0.82]" },
  { left: "98%", top: "59%", color: pawPastel.peach, size: 21, rot: "rotate-[20deg]", opacity: "opacity-[0.85]" },
  { left: "95%", top: "71%", color: pawPastel.lilac, size: 26, rot: "-rotate-[10deg]", opacity: "opacity-[0.83]" },
  { left: "97%", top: "83%", color: pawPastel.teal, size: 23, rot: "rotate-[14deg]", opacity: "opacity-[0.8]" },
  { left: "99%", top: "93%", color: pawPastel.sky, size: 25, rot: "-rotate-[22deg]", opacity: "opacity-[0.86]" },
  { left: "96%", top: "17%", color: pawPastel.lilac, size: 20, rot: "-rotate-[10deg]", opacity: "opacity-[0.8]" },
  { left: "94%", top: "41%", color: pawPastel.peach, size: 19, rot: "rotate-[16deg]", opacity: "opacity-[0.78]" },
  { left: "98%", top: "65%", color: pawPastel.teal, size: 22, rot: "-rotate-[8deg]", opacity: "opacity-[0.83]" },
  { left: "95%", top: "77%", color: pawPastel.sky, size: 21, rot: "rotate-[20deg]", opacity: "opacity-[0.81]" },
];

const TeamPawDecor = () => (
  <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
    {TEAM_PAW_DECOR.map((p, i) => (
      <div
        key={i}
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={{ left: p.left, top: p.top }}
      >
        <PawPrint
          className={`${p.color} ${p.opacity} ${p.rot}`}
          size={p.size}
          strokeWidth={1.85}
          absoluteStrokeWidth
        />
      </div>
    ))}
  </div>
);

const TeamSection = () => {
  return (
    <section
      id="equipo"
      className="relative z-10 -mt-px overflow-x-hidden bg-team-section pb-28 pt-20 md:pb-32"
    >
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <TeamPawDecor />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 md:px-10">
        <div className="mb-10 text-center">
          <h2 className="mb-5 text-3xl font-black text-primary md:text-4xl">Nuestro equipo</h2>
          <blockquote className="mx-auto max-w-2xl px-2">
            <p className="text-lg font-semibold leading-relaxed text-foreground md:text-xl">
              Somos los veterinarios que, con mucho amor, cuidan de tus mascotas.
            </p>
            <footer className="mt-3 text-sm font-medium text-muted-foreground">
              Compromiso y cercanía en cada consulta.
            </footer>
          </blockquote>
        </div>

        <div className="mx-auto grid min-h-0 max-w-2xl grid-cols-2 gap-4 sm:gap-6">
          <StaffCard title="Dra.Maritza Soraya Villalta de Hernández" subtitle="Veterinaria" photoSrc={DOCTORA_PHOTO_SRC} />
          <StaffCard title="Dra." subtitle="Veterinario" photoSrc={DOCTOR_PHOTO_SRC} />
        </div>
      </div>

      {/* Onda inferior — mismo trazo que Hero/TikTok: corte curvo hacia la sección naranja */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-[5] w-full leading-none" aria-hidden>
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block h-auto w-full"
        >
          <path
            d="M0 40C360 100 720 0 1080 50C1260 75 1380 60 1440 50V100H0V40Z"
            fill="hsl(var(--orange))"
          />
        </svg>
      </div>
    </section>
  );
};

export default TeamSection;
