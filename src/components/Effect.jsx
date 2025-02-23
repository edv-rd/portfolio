import { useEffect, useRef } from "react";
import styled from "styled-components";

const StyledCanvas = styled.canvas`
  width: 100%;
  height: 100%;
`;

const Effect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let hue = 0;

    const words = ["React", "JavaScript", "TypeScript", "Node.js", "CSS"];
    const particles = words.map((word, i) => ({
      x: canvas.width / 2,
      y: canvas.height / 2,
      word: word,
      angle: (i * Math.PI * 2) / words.length,
      speed: 0.005,
      radius: 100,
    }));

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.angle += particle.speed;
        particle.x =
          canvas.width / 2 + Math.cos(particle.angle) * particle.radius;
        particle.y =
          canvas.height / 2 + Math.sin(particle.angle) * particle.radius;

        ctx.font = "20px Arial";
        ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;
        ctx.textAlign = "center";
        ctx.fillText(particle.word, particle.x, particle.y);
      });

      hue = (hue + 0.5) % 360;
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <StyledCanvas ref={canvasRef} />;
};

export default Effect;
