import  { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function ProjectsSection() {
  const projectsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

   gsap.fromTo(
  projectsRef.current.children,
  { opacity: 0, y: 80 },
  {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: projectsRef.current,
      start: "top 70%"
    }
  }
);
  }, []);

  return (
    <section id="projects">
      <h2>Projects</h2>

      <div ref={projectsRef} className="projects-grid">

       <div className="project-card">
  <h3>Employee Manager</h3>
  <p>React app to manage employee data.</p>

  <div className="project-tech">
    <span>React</span>
    <span>Redux</span>
    <span>CSS</span>
  </div>

  <div className="project-links">
    <a href="https://employee-data-manager-chi.vercel.app/">Live</a>
    <a href="https://github.com/sakshideshmukh-ai/employee-data-manager">GitHub</a>
  </div>
</div>

        <div className="project-card">
          <h3>Task Tracker</h3>
          <p>Task management app using React.</p>
        <div className="project-tech">
    <span>React</span>
    <span>Redux</span>
    <span>CSS</span>
  </div>

  <div className="project-links">
    <a href="#">Live</a>
    <a href="#">GitHub</a>
  </div>
</div>

      </div>
    </section>
  );
}

export default ProjectsSection;