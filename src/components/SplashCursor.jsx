import { useEffect, useRef } from "react";

// SplashCursor: creates a splash effect on click and follows the mouse with a circle
const SplashCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    let mouseX = 0,
      mouseY = 0;
    let posX = 0,
      posY = 0;

    const mouseMoveHandler = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const animate = () => {
      posX += (mouseX - posX) / 6;
      posY += (mouseY - posY) / 6;
      cursor.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
      requestAnimationFrame(animate);
    };

    const clickHandler = (e) => {
      const splash = document.createElement("span");
      splash.className =
        "splash-cursor-effect pointer-events-none fixed z-9999";
      splash.style.left = `${e.clientX - 30}px`;
      splash.style.top = `${e.clientY - 30}px`;
      splash.style.background = "var(--color-foreground)";
      document.body.appendChild(splash);
      setTimeout(() => {
        splash.remove();
      }, 600);
    };

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mousedown", clickHandler);
    animate();

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mousedown", clickHandler);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed z-9999 left-0 top-0 w-8 h-8 rounded-full border-2 border-solid border-[var(--color-foreground)] bg-[var(--color-background)] opacity-80 transition-transform duration-100"
        style={{
          willChange: "transform",
          mixBlendMode: "difference",
        }}
      ></div>
      <style>{`
        .splash-cursor-effect {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          position: fixed;
          pointer-events: none;
          z-index: 9999;
          background: var(--color-foreground);
          opacity: 0.25;
          transform: scale(0.7);
          animation: splash-cursor-anim 0.6s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes splash-cursor-anim {
          0% {
            opacity: 0.5;
            transform: scale(0.7);
          }
          60% {
            opacity: 0.25;
            transform: scale(1.2);
          }
          100% {
            opacity: 0;
            transform: scale(1.7);
          }
        }
      `}</style>
    </>
  );
};

export default SplashCursor;
