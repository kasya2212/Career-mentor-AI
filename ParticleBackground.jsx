import Particles from "react-tsparticles";

export default function ParticleBackground() {
  return (
    <Particles
      options={{
        background: { color: "#020617" },
        particles: {
          number: { value: 50 },
          size: { value: 2 },
          opacity: { value: 0.4 },
          move: { enable: true, speed: 0.3 },
          links: { enable: true, color: "#6366f1" }
        }
      }}
      style={{ position: "fixed", zIndex: -1 }}
    />
  );
}
