import * as React from "react";
import { Sparkles } from "lucide-react";
import video2Src from "@/assets/video2.mp4";
import video1Src from "@/assets/video1.mp4";
import video3Src from "@/assets/video3.mp4";

type Slot = "left" | "center" | "right";

const VIDEOS: { slot: Slot; src: string }[] = [
  { slot: "left", src: video2Src },
  { slot: "center", src: video1Src },
  { slot: "right", src: video3Src },
];

const TikTokClipsSection = () => {
  const leftRef = React.useRef<HTMLVideoElement>(null);
  const centerRef = React.useRef<HTMLVideoElement>(null);
  const rightRef = React.useRef<HTMLVideoElement>(null);
  const reducedMotionRef = React.useRef(false);

  const refFor = (slot: Slot) => {
    switch (slot) {
      case "left":
        return leftRef;
      case "center":
        return centerRef;
      case "right":
        return rightRef;
    }
  };

  const pauseOthers = (active: Slot) => {
    if (active !== "left") leftRef.current?.pause();
    if (active !== "center") centerRef.current?.pause();
    if (active !== "right") rightRef.current?.pause();
  };

  const playFromStart = (slot: Slot) => {
    const el = refFor(slot).current;
    if (!el) return;
    el.currentTime = 0;
    // Necesario para que el encadenamiento funcione sin gesto del usuario (políticas de autoplay).
    el.muted = true;
    void el.play().catch(() => {});
  };

  const onEnded = (slot: Slot) => {
    if (reducedMotionRef.current) return;
    if (slot === "center") playFromStart("right");
    else if (slot === "right") playFromStart("left");
    else playFromStart("center");
  };

  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = mq.matches;
    const sync = () => {
      reducedMotionRef.current = mq.matches;
    };
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  React.useEffect(() => {
    if (reducedMotionRef.current) return;
    const el = centerRef.current;
    if (!el) return;
    el.muted = true;
    void el.play().catch(() => {
      /* Autoplay bloqueado: el usuario puede dar play en los controles */
    });
  }, []);

  return (
    <section
      id="momentos"
      className="relative z-[11] -mt-[2px] overflow-hidden bg-orange pt-20 md:pt-24"
    >
      <div className="container mx-auto px-4 pb-28 md:pb-36">
        <div className="mb-10 text-center md:mb-12">
          <div className="mb-3 flex items-center justify-center gap-2 text-primary">
            <Sparkles className="h-7 w-7 md:h-8 md:w-8" strokeWidth={2} aria-hidden />
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              Kachorros en cámara
            </h2>
          </div>
          <p className="mx-auto max-w-2xl text-base font-semibold text-white/90 md:text-lg">
            Un vistazo a la clínica en TikTok . . .
          </p>
        </div>

        <div className="mx-auto flex max-w-5xl flex-col items-stretch justify-center gap-4 sm:flex-row sm:gap-3 md:gap-4">
          {VIDEOS.map(({ slot, src }) => (
            <div
              key={slot}
              className="relative mx-auto w-full max-w-[220px] flex-1 sm:mx-0 sm:max-w-none"
            >
              <div className="overflow-hidden rounded-2xl bg-black shadow-xl">
                <div className="relative aspect-[9/16] w-full">
                  <video
                    ref={refFor(slot)}
                    className="absolute inset-0 h-full w-full object-cover"
                    src={src}
                    controls
                    playsInline
                    preload="metadata"
                    onPlay={() => pauseOthers(slot)}
                    onEnded={() => onEnded(slot)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Onda inferior (misma geometría que el Hero): encima de la curva, fondo naranja plano; debajo, turquesa = continúa Servicios */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full leading-none" aria-hidden>
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block h-auto w-full"
        >
          <path
            d="M0 40C360 100 720 0 1080 50C1260 75 1380 60 1440 50V100H0V40Z"
            fill="hsl(var(--turquoise-services))"
          />
        </svg>
      </div>
    </section>
  );
};

export default TikTokClipsSection;
