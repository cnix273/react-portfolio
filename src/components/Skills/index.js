import React from "react";
import "./style.css";

import { IoIosGlobe } from 'react-icons/io';
import { IoCodeSlashOutline } from 'react-icons/io5';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';

const Skills = () => {
    return (
        <div className="container-fluid" id="skillsContainer">
            <div className="row cards">
                <div className="profile-card" id="engineer">
                    <IoCodeSlashOutline className="icon" size="5em"/>
                    
                    <h5 className="card-title">Software Engineer</h5>
                    <p className="card-text">Building practical and secure server-side applications to meet your business
                        and personal needs.</p>
                    <h5 className="card-title">
                        Technologies I use:
                    </h5>
                    <p className="card-text">
                        Node.js, Express.js, MySQL/PostgreSQL/MSSQL &amp; MongoDB, Java, Spring, Python, Flask
                    </p
                    ><h5 className="card-title">
                        Dev Tools:
                    </h5>
                    <p className="card-text">
                        Eclipse &amp; IntelliJ<br></br>
                        Sequelize &amp; Mongoose<br></br>
                        Database Architecting<br></br>
                        Application Design<br></br>
                        Secure Authentication<br></br>
                        Payment Processing<br></br>
                    </p>
                </div>
                <div className="profile-card" data-speed="2" id="webdev">
                    <IoIosGlobe className="icon" size="5em"/>

                    <h5 className="card-title">Web Developer</h5>
                    <p className="card-text">
                        I like to build projects from scratch, and I can make your designs a reality.
                    </p>
                    <h5 className="card-title">
                        Languages I speak:
                    </h5>
                    <p className="card-text">
                        CSS3, HTML5, Sass, JavaScript, React, Angular 2+
                    </p>
                    <h5 className="card-title">
                        Dev Tools:
                    </h5>
                    <p className="card-text">
                        Bootstrap<br></br>
                        Codepen<br></br>
                        Github<br></br>
                        Gitlab<br></br>
                        Material Design<br></br>
                        Terminal<br></br>
                        VSCode<br></br>
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-10 offset-md-1">
                    <div className="row text-center">

                        <div className="col">
                            <div className="skill-bar-title">
                                <FaHtml5 size="3em"/>
                                <p>HTML5</p>
                            </div>
                        </div>

                        <div className="col">
                            <div className="skill-bar-title">
                                <FaCss3Alt size="3em"/>
                                <p>CSS3</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="skill-bar-title">
                                <SiJavascript size="3em"/>
                                <p>JavaScript</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="skill-bar-title">
                                <FaReact size="3em"/>
                                <p>NodeJS</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="skill-bar-title">
                                <i className="fab fa-react fa-3x"></i>
                                <p>React</p>
                            </div>
                        </div>

                        <div className="col">
                            <div className="skill-bar-title">
                                <i className="fab fa-git fa-3x"></i>
                                <p>Git</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;