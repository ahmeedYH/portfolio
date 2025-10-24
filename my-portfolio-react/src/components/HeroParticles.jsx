import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import { useCallback } from "react";

export default function HeroParticles() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="stars-bg"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        fpsLimit: 60,
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: { value: "#ffffff" },
          shape: { type: "star" },
          opacity: {
            value: 0.8,
            random: true,
            anim: {
              enable: true,
              speed: 0.4,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 1.5,
            random: true,
          },
          move: {
            enable: true,
            speed: 0.2,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "out",
            },
          },
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: ["repulse"],
            },
            onClick: {
              enable: true,
              mode: ["push"],
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 140,
              duration: 0.4,
              speed: 1,
            },
            push: {
              quantity: 4,
            },
          },
        },
        detectRetina: true,
      }}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: 0,
      }}
    />
  );
}
