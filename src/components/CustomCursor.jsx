import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    let mouseX = 0,
      mouseY = 0,
      posX = 0,
      posY = 0;

    const mouseMoveHandler = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const animate = () => {
      posX += (mouseX - posX) / 8;
      posY += (mouseY - posY) / 8;
      follower.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", mouseMoveHandler);
    animate();

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (
    <>
      {/* Diamond-shaped main cursor */}
      <div
        ref={cursorRef}
        className="custom-cursor pointer-events-none fixed z-9999 left-0 top-0 w-4 h-4 rotate-45 shadow-xl mix-blend-difference transition-transform duration-100"
        style={{
          willChange: "transform",
          borderRadius: "12%",
          background:
            "linear-gradient(135deg, var(--color-primary), var(--color-highlight))",
          boxShadow:
            "0 0 12px 4px var(--color-primary), 0 0 32px 8px var(--color-highlight)55",
        }}
      ></div>
      {/* Glowing, pulsing, rotating ring follower */}
      <div
        ref={followerRef}
        className="custom-cursor-follower pointer-events-none fixed z-9998 left-0 top-0 w-14 h-14 rounded-full border-4 border-transparent animate-cursor-pulse"
        style={{
          willChange: "transform",
          background:
            "conic-gradient(from 90deg at 50% 50%, var(--color-primary) 0deg, var(--color-highlight) 180deg, var(--color-primary) 360deg)",
          boxShadow:
            "0 0 40px 10px var(--color-primary)aa, 0 0 80px 20px var(--color-highlight)55",
          opacity: 0.5,
        }}
      ></div>
      {/* Custom animation for the follower */}
      <style>{`
        @keyframes cursor-pulse {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.15) rotate(20deg);
            opacity: 0.8;
          }
        }
        .animate-cursor-pulse {
          animation: cursor-pulse 1.2s infinite cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
