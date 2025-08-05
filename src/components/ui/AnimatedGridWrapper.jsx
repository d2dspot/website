import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

// Reuse the hook here
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);
  return matches;
}

export default function AnimatedGridWrapper({ customClassName }) {
  const isSmOrAbove = useMediaQuery("(min-width: 640px)");

  return (
    <div className="relative">
      {/* Hidden on mobile */}
      <div className=" sm:block  -top-70 -left-20  sm:-top-50 sm:-left-100 w-[60vw] h-[100vh] absolute bg-[radial-gradient(circle,rgba(99,102,241,0.3)_0%,rgba(255,255,255,0)_50%)] blur-3xl" />
      <div className=" sm:block -top-70 -right-20 sm:-top-50 sm:-right-100 w-[60vw] h-[100vh] absolute bg-[radial-gradient(circle,rgba(99,102,241,0.3)_0%,rgba(255,255,255,0)_50%)] blur-3xl" />

      {/* Always visible */}
      <div className=" -top-70 sm:-top-50 right-0 w-[100vw] h-[90vh] absolute bg-[linear-gradient(to_bottom,rgba(99,102,241,0.5)_0%,rgba(255,255,255,0)_100%)] blur-3xl"></div>

      {/* Grid Pattern Wrapper */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 translate-y-1  w-[200vw] h-[500px] sm:w-[70vw] sm:h-[80vw] max-h-[90vh] rounded-full z-0 pointer-events-none">
        <div className={cn(
          "absolute inset-0 sm:rounded-4xl ob overflow-hidden outline-none",
          customClassName
        )}>
          <AnimatedGridPattern
            numSquares={10}
            maxOpacity={0.1}
            duration={3}
            repeatDelay={1}
            width={isSmOrAbove ? 80 : 30}
            height={isSmOrAbove ? 80 : 30}
            className={cn(
              " [mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
              " sm:[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
              "inset-x-0 inset-y-[0%] h-[100%] "
            )}
          />
        </div>
      </div>
    </div>
  );
}
