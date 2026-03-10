import { useEffect, useRef } from "react";
import gsap from "gsap";
import Typed from "typed.js";

function IntroSection() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Frontend Developer",
        "React Developer",
        "JavaScript Enthusiast"
      ],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true
    });

    return () => typed.destroy();
  }, []);

  return (
    <section id="intro">
      <h1>Hello, I'm Sakshi 👋</h1>
  
      <h2>
        <span ref={typedRef}></span>
      </h2>
    </section>
  );
}

export default IntroSection;