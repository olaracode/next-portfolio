import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
const handleScrollToAboutMe = (id: string) => {
  const aboutSection = document.getElementById(id);
  if (!aboutSection) return;
  scroll.scrollTo(aboutSection.offsetTop, {
    duration: 100,
    smooth: true,
  });
};
function useScroll() {
  const [scrollY, setScrollY] = useState(0);
  const [scrolled100px, setScrolled100px] = useState(false);

  const handleScroll = () => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrollY > 100) {
      setScrolled100px(true);
    } else {
      setScrolled100px(false);
    }
  }, [scrollY]);
  return { scrolled100px, handleScrollToAboutMe };
}

export default useScroll;
