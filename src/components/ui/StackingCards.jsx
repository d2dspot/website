import React, { useRef, useLayoutEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function StackingCards({ cards, CardComponent }) {
  const { scrollY } = useScroll();
  const cardRefs = useRef([]);
  const [tops, setTops] = useState([]);

  const SHRINK_SCALE = 0.9;
  const MAX_TRANSLATE = 120;
  const ANIM_RANGE = 10000;

  useLayoutEffect(() => {
    const measure = () => {
      setTops(cardRefs.current.map((el) => el?.offsetTop || 0));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <div className="min-h-[200vh]">
      <div className="max-w-2xl mx-auto gap-0">
        {cards.map((cardData, i) => {
          const currentTop = tops[i] || 0;
          const nextTop = tops[i + 1] || null;

          const activationOffset = window.innerHeight * 0.9;
          const animStart = nextTop ? nextTop - activationOffset : currentTop;
          const animEnd = animStart + ANIM_RANGE;
          const isLastCard = i === cards.length - 1;

          const scale = useTransform(
            scrollY,
            [animStart, animEnd],
            [1, SHRINK_SCALE],
            { clamp: true }
          );

          const y = useTransform(
            scrollY,
            [animStart, animEnd],
            ["0px", isLastCard ? "0px" : `-${MAX_TRANSLATE}px`],
            { clamp: true }
          );

          return (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className="sticky top-100 pb-0.5 z-0"
            >
              <motion.div
                style={{
                  scale,
                  y,
                  transformOrigin: "top center",
                  zIndex: cards.length - i,
                }}
                className="pb-2"
              >
                <CardComponent {...cardData} />
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
