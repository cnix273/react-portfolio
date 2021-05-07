import React from "react";
import "./style.css";

import profPic from "../Assets/IMG_1253.jpg";

const About = () => {
    return (
        <div className="container-fluid" id="aboutContainer">
            <div className="row">
                <div className="col-sm-12">
                        <h2 className="title">FRONT END & FULL STACK WEB DEVELOPER</h2>
                        {/* <h3 class="subtitle" id="element" data-typeit-id="8114449">I write code and build beautifully simple applications.<span class="ti-cursor with-delay" style="display: inline; color: rgb(33, 37, 41); font: 300 28.8px / 34.56px Lato, sans-serif; margin: 0px -6.32031px 0px -2.32031px;">|</span></h3> */}
                </div>
            </div>
            <main className="row">
                <div className="aboutMeMain col-sm-12">
                    <img className="contactImage img-thumbnail" src={profPic} alt="Cameron Nix headshot"/>
                    <p>I am a recent graduate of UCLA undergrad with a major in physiological science. I was on the pre-med track throughout my collegiate career, garnering an internship in UCLA's Ronald Raegan Medical Center starting my sophomore year as well as securing a showing position with a Plastic Surgeon my junior year.</p>
                    <p>I find joy in learning and exploring different academic disciplines, and have recently discovered a love of coding. I am currently working for an interior design company, launching ecommerce for their home goods and wellness store, while simultaneously enrolled in UCLA Extension's Full Stack Coding Bootcamp.</p>
                    <p>I am an outgoing, curious, and passionate 22-year-old living in LA. I have alwyas been drawn towards and excelled at mathematics and problem solving, solving rubik's cubes or jigsaw and sudoku puzzles for fun when I was growing up. This innate skill set gives me a natural propensity for coding.</p>
                    <p>I can't wait to fruther explore this newfound passion and to grow my coding skill set and portfolio each day. I am so excited for the opportunities that lie ahead that will enable me to turn this passion into a lifelong career.</p>
                    <p>Take a look at my portfolio page to discover some of my favorite coding projects I've completed recently. I also have a contact page for business inquiries. I look forward to growing my network and experience through helping others to build personal application or grow their business.</p>
                    {/* <br/>
                    <h5 className="links"><strong>Professional Links</strong></h5>
                    <hr/>
                    <a className="profLinks" href="https://github.com/cnix273">   GitHub</a>
                    <br/>
                    <a className="profLinks" href="https://www.linkedin.com/in/cameron-nix-a74aa1109/">   LinkedIn</a>
                    <br/>
                    <a className="profLinks" href ="assets/Resume.pdf" download>  Resume</a> */}
                </div>
            </main>
        </div>
    );
};

export default About;