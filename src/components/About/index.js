import React from "react";
import "./style.css";

import profPic from "../Assets/Me.jpg";

const About = () => {
    return (
        <div class="container-fluid" id="containerOne">
            <header class="row">
                <div class="header col-sm-10">
                    <h2>ABOUT ME</h2>
                    <hr/>
                </div>
            </header>

            <main class="row">
                <div class="aboutMeMain col-sm-10">
                    <img class="contactImage img-thumbnail float-left" src={profPic} alt="Photo of Cameron"/>
                    <p>I am a recent graduate of UCLA undergrad with a major in physiological science. I was on the pre-med track throughout my collegiate career, garnering an internship in UCLA's Ronald Raegan Medical Center starting my sophomore year as well as securing a showing position with a Plastic Surgeon my junior year.</p>
                    <p>I find joy in learning and exploring different academic disciplines, and have recently discovered a love of coding. I am currently working for an interior design company, launching ecommerce for their home goods and wellness store, while simultaneously enrolled in UCLA Extension's Full Stack Coding Bootcamp.</p>
                    <p>I am an outgoing, curious, and passionate 22-year-old living in LA. I have alwyas been drawn towards and excelled at mathematics and problem solving, solving rubik's cubes or jigsaw and sudoku puzzles for fun when I was growing up. This innate skill set gives me a natural propensity for coding.</p>
                    <p>I can't wait to fruther explore this newfound passion and to grow my coding skill set and portfolio each day. I am so excited for the opportunities that lie ahead that will enable me to turn this passion into a lifelong career.</p>
                    <p>Take a look at my portfolio page to discover some of my favorite coding projects I've completed recently. I also have a contact page for business inquiries. I look forward to growing my network and experience through helping others to build personal application or grow their business.</p>
                    <br/>
                    <h5 class="links"><strong>Professional Links</strong></h5>
                    <hr/>
                    <a class="profLinks" href="https://github.com/cnix273">   GitHub</a>
                    <br/>
                    <a class="profLinks" href="https://www.linkedin.com/in/cameron-nix-a74aa1109/">   LinkedIn</a>
                    <br/>
                    <a class="profLinks" href ="assets/Resume.pdf" download>  Resume</a>
                </div>
            </main>
    </div>
    );
};

export default About;