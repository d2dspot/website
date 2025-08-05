// hooks/useResponsiveCards.js
import { useEffect, useState } from "react";

const useResponsiveCards = () => {
  const [cardsPerPage, setCardsPerPage] = useState(2);

  useEffect(() => {
    const updateCardsPerPage = () => {
      const width = window.innerWidth;

      if (width <= 640) {
        // Mobile
        setCardsPerPage(1);
      } else {
        // Tablet and Desktop
        setCardsPerPage(2);
      }
    };

    updateCardsPerPage(); // run on mount
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  return cardsPerPage;
};

export default useResponsiveCards;
