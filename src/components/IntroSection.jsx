import { useEffect } from "react";
import gsap from "gsap";

function IntroSection() {
  useEffect(() => {
    gsap.fromTo(
      ".intro-title",
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2 }
    );
  }, []);

  return (
    <section id="intro">
      <h1 className="intro-title">Hello, I'm Sakshi 👋</h1>
      <p>Aspiring Full Stack Developer</p>
      <></>
    </section>
  );
}

export default IntroSection;