import { useEffect, useMemo, useRef } from "react";
import {
  FaAngular,
  FaDocker,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";
import { SiC, SiExpress, SiSpringboot, SiTailwindcss } from "react-icons/si";

const TECH_ITEMS = [
  { name: "React", Icon: FaReact, color: "#61dafb" },
  { name: "Angular", Icon: FaAngular, color: "#dd0031" },
  { name: "Node.js", Icon: FaNodeJs, color: "#339933" },
  { name: "Express.js", Icon: SiExpress, color: "#111827" },
  { name: "Java", Icon: FaJava, color: "#f89820" },
  { name: "C", Icon: SiC, color: "#00599c" },
  { name: "JavaScript", Icon: FaJs, color: "#f7df1e" },
  {name: "TypeScript", Icon: FaJs, color: "#3178c6" },
  { name: "Python", Icon: FaPython, color: "#3776ab" },
  { name: "Docker", Icon: FaDocker, color: "#2496ed" },
  { name: "HTML5", Icon: FaHtml5, color: "#e34f26" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06b6d4" },
  { name: "SQL", Icon: FiDatabase, color: "#00758f" },
  { name: "Spring Boot", Icon: SiSpringboot, color: "#6db33f" },
];

const GLOBE_RADIUS = 145;

const TechGlobe = () => {
  const containerRef = useRef(null);
  const points = useMemo(() => {
    const total = TECH_ITEMS.length;

    return TECH_ITEMS.map((item, index) => {
      const phi = Math.acos(-1 + (2 * index) / total);
      const theta = Math.sqrt(total * Math.PI) * phi;

      return {
        x: GLOBE_RADIUS * Math.sin(phi) * Math.cos(theta),
        y: GLOBE_RADIUS * Math.sin(phi) * Math.sin(theta),
        z: GLOBE_RADIUS * Math.cos(phi),
        item,
      };
    });
  }, []);

  const angleXRef = useRef(0);
  const angleYRef = useRef(0);
  const speedXRef = useRef(0.003);
  const speedYRef = useRef(-0.005);
  const isHoveredRef = useRef(false);
  const mousePosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let frameId;

    const updateRotation = () => {
      if (isHoveredRef.current) {
        const targetSpeedY = mousePosRef.current.x * 0.00015;
        const targetSpeedX = -mousePosRef.current.y * 0.00015;
        speedYRef.current += (targetSpeedY - speedYRef.current) * 0.1;
        speedXRef.current += (targetSpeedX - speedXRef.current) * 0.1;
      } else {
        speedYRef.current += (-0.005 - speedYRef.current) * 0.05;
        speedXRef.current += (0.002 - speedXRef.current) * 0.05;
      }

      angleXRef.current += speedXRef.current;
      angleYRef.current += speedYRef.current;

      const elements = containerRef.current?.getElementsByClassName("globe-item");
      if (elements) {
        const cosX = Math.cos(angleXRef.current);
        const sinX = Math.sin(angleXRef.current);
        const cosY = Math.cos(angleYRef.current);
        const sinY = Math.sin(angleYRef.current);

        points.forEach((point, index) => {
          const element = elements[index];
          if (!element) return;

          const y1 = point.y * cosX - point.z * sinX;
          const z1 = point.y * sinX + point.z * cosX;
          const x2 = point.x * cosY + z1 * sinY;
          const z2 = -point.x * sinY + z1 * cosY;
          const depth = GLOBE_RADIUS * 2 + z2;
          const scale = (GLOBE_RADIUS * 2) / depth;
          const opacity = 0.2 + 0.8 * ((z2 + GLOBE_RADIUS) / (GLOBE_RADIUS * 2));

          element.style.transform = `translate3d(${x2}px, ${y1}px, ${z2}px) translate(-50%, -50%) scale(${Math.max(0.65, Math.min(1.4, scale))})`;
          element.style.opacity = opacity.toFixed(2);
          element.style.zIndex = Math.round(z2 + GLOBE_RADIUS).toString();
        });
      }

      frameId = requestAnimationFrame(updateRotation);
    };

    frameId = requestAnimationFrame(updateRotation);
    return () => cancelAnimationFrame(frameId);
  }, [points]);

  const handleMouseMove = (event) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    mousePosRef.current = {
      x: event.clientX - (rect.left + rect.width / 2),
      y: event.clientY - (rect.top + rect.height / 2),
    };
  };

  return (
    <div className="flex min-h-[340px] flex-col items-center justify-center select-none sm:min-h-[390px]">
      <div
        ref={containerRef}
        onMouseEnter={() => { isHoveredRef.current = true; }}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => { isHoveredRef.current = false; }}
        className="relative flex h-[330px] w-[330px] max-w-full items-center justify-center overflow-visible cursor-grab active:cursor-grabbing sm:h-[390px] sm:w-[390px]"
        aria-label="Interactive technology skills globe"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 scale-75 rounded-full bg-blue-500/10 blur-3xl animate-pulse" />

        {points.map((point) => {
          const ItemIcon = point.item.Icon;

          return (
            <div
              key={point.item.name}
              className="globe-item absolute left-1/2 top-1/2 flex flex-col items-center gap-1 pointer-events-auto"
              style={{ color: "var(--text-muted)" }}
            >
              <div
                className="flex items-center justify-center rounded-2xl border border-line bg-surface p-3 shadow-lg transition-all duration-300 hover:scale-125"
                onMouseEnter={(event) => {
                  event.currentTarget.style.borderColor = point.item.color;
                  event.currentTarget.style.color = point.item.color;
                  event.currentTarget.style.boxShadow = `0 0 20px ${point.item.color}30`;
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.borderColor = "";
                  event.currentTarget.style.color = "";
                  event.currentTarget.style.boxShadow = "";
                }}
              >
                <ItemIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <span className="pointer-events-none rounded-full border border-line/40 bg-page/80 px-2 py-0.5 text-[9px] font-semibold tracking-wide sm:text-[10px]">
                {point.item.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechGlobe;