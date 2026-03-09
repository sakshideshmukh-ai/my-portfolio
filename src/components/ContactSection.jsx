import {FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
function ContactSection(){
    return(
        <section id="contact">
            <h2>Contact</h2>
            <p>If you'd like to work together or have any questions,feel free to reach out.</p>
            <div className="contact-links">
                <a href="mailto:d1sakshi@gmail.com">
                    <FaEnvelope/>Email
                    </a>
                <a href="https://github.com/sakshideshmukh-ai">
                <FaGithub/>Github
                </a>
                <a href="https://linkedin.com/in/sakshi-fullstack">
                <FaLinkedin/>LinkedIn
                </a>
            </div>
        </section>
    
    );
}
export default ContactSection;