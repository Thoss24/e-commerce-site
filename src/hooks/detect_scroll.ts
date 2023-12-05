import { useState, useEffect} from "react"

export const useDetectScroll = () => {

    const [scrollDirection, setScrollDirection] = useState<String>("up");

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const updateScroll = () => {
            let scrollY = window.scrollY;
            let direction = lastScrollY > scrollY ? "up" : "down";
            if (direction !== scrollDirection) {
                setScrollDirection(direction)
            }
            lastScrollY = scrollY > 0 ? scrollY : 0
        };

        window.addEventListener("scroll", updateScroll);
        return () => {
            window.removeEventListener("scroll", updateScroll)
        }

    }, [scrollDirection])

    return { scrollDirection  }
}