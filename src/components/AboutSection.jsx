import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function AboutSection() {
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      aboutRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 60%",
        },
      }
    );
  }, []);

  return (
    <section id="about" ref={aboutRef}>
        <div ref={aboutRef}>
      <h2>About Me</h2>
      <p>
        I am a beginner developer learning React, Next.js, Redux and modern
        frontend tools. I enjoy building interactive web applications and
        improving my coding skills every day.
      </p>
      </div>
    </section>
  );
}

export default AboutSection;