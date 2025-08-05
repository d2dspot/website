import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (!hash) { 
            window.scrollTo({
                top: 0,
                behavior: "instant",
            });
        } else {
            const element = document.getElementById(hash.substring(1)); // Remove the '#' from hash
            if (element) {
                const top=element.getBoundingClientRect().top;
                element.scrollIntoView({ behavior: 'smooth', block: 'start',bottom:top });
            }
        }
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;
