import React, { useEffect } from "react";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
}

type Edge = "left" | "right";
type ShapeType = "square" | "triangle" | "circle";

type ShapeItem = {
  left: number;
  top: number;
  size: number;
  rotate: number;
  opacity: number;
  edge: Edge;
  type: ShapeType;
  orientRotate: number; // base orientation for triangles
};

const Section: React.FC<SectionProps> = ({
  id = "psicologiaclinica",
  children,
}) => {
  const sectionRef = React.useRef<HTMLElement | null>(null);
  const [rect, setRect] = React.useState({ width: 0, height: 0 });
  const [shapes, setShapes] = React.useState<ShapeItem[]>([]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // determine if we're on a small viewport (mobile-like)
    const isMobile =
      typeof window !== "undefined" &&
      (window.matchMedia ? window.matchMedia("(max-width: 768px)").matches : window.innerWidth <= 768);

    const r = el.getBoundingClientRect();
    const width = r.width;
    const height = r.height;
    setRect({ width, height });
    const count = Math.min(4, Math.floor(height / 150));
    const newShapes: ShapeItem[] = Array.from({ length: count }).map((_, i) => {
      const size = isMobile ? Math.round(50 + Math.random() * 150) : Math.round(100 + Math.random() * 300); // 100-200px
      const edgeChoices: Edge[] = ["left", "right"];
      const edge = edgeChoices[i % edgeChoices.length];
      const type: ShapeType = Math.random() < 0.33 ? "square" : Math.random() < 0.5 ? "triangle" : "circle";

      // orientation base for triangles (so they point outward)
      const orientMap: Record<Edge, number> = {
        right: 90,
        left: -90,
      };
      const orientRotate = orientMap[edge];

      const maxH = Math.max(0, height - size);

      let left = 0;
      // distribute shapes evenly along the section height (e.g. for 3 items: ~20%,50%,80%)
      const top = (() => {
        if (count <= 1) return Math.round(maxH / 2);
        const margin = 0.2; // 20% inset from top and bottom
        const step = (1 - 2 * margin) / Math.max(1, count - 1);
        const frac = Math.min(1, Math.max(0, margin + i * step));
        return Math.round(frac * maxH);
      })();

      if (edge === "left") {
        left = -Math.round(size / 2);

      } else {
        // right
        left = Math.round(width - size / 2);
      }

      return {
        left,
        top,
        size,
        rotate: Math.round((Math.random() - 0.5) * 30), // small random jitter
        opacity: +(0.1 + Math.random() * 0.3).toFixed(2), // 0.1..0.3
        edge,
        type,
        orientRotate,
      };
    });

    setShapes(newShapes);
    // only initial placement
  }, []);

  // color used for shapes (semi-transparent green); adjust as needed
  const color = "92,125,193";

  return (
    <section
      id={id}
      ref={sectionRef}
      className="relative w-full min-h-[70vh] px-[10%] flex flex-col items-center justify-center text-black py-20 gap-12 overflow-hidden"
    >

      {children}

      <div
        className="pointer-events-none absolute left-0 top-0 w-full h-full -z-[10000] opacity-80 md:opacity-100"
      >
        {shapes.map((s, i) => {
          const commonStyle: React.CSSProperties = {
            position: "absolute",
            left: `${s.left}px`,
            top: `${s.top}px`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: s.opacity,
            transform: `rotate(${s.orientRotate + s.rotate}deg)`,
            transformOrigin: "center",
            willChange: "transform, opacity",
            userSelect: "none",
            pointerEvents: "none",
            zIndex: -10000
          };

          if (s.type === "square") {
            return (
              <div
                key={i}
                style={{
                  ...commonStyle,
                  backgroundColor: `rgba(${color}, ${s.opacity})`,
                  borderRadius: 4,
                }}
              />
            );
          }

          if (s.type === "circle") {
            return (
              <div
                key={i}
                style={{
                  ...commonStyle,
                  backgroundColor: `rgba(${color}, ${s.opacity})`,
                  borderRadius: "50%",
                }}
              />
            );
          }

          // triangle: draw a simple SVG triangle inside a square viewBox, rotate via CSS
          const points = `${s.size / 2},0 0,${s.size} ${s.size},${s.size}`;
          return (
            <svg
              key={i}
              viewBox={`0 0 ${s.size} ${s.size}`}
              width={s.size}
              height={s.size}
              style={commonStyle}
            >
              <polygon points={points} fill={`rgba(${color}, ${s.opacity})`} />
            </svg>
          );
        })}
      </div>
    </section>
  );
};

export default Section;