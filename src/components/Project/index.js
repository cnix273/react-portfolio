import React from "react";

import "./style.css";
import directory_walkthrough from "../Assets/employee_directory.gif";
import burger_walkthrough from "../Assets/burger_walkthrough.gif";
import notetaker_walkthrough from "../Assets/notetaker_walkthrough.gif";
import readme_walkthrough from "../Assets/readme_walkthrough.gif";

const Portfolio = () => {
    return (
        <div className="container-fluid" id ="projectContainer">
            <header className="row">
                <div className="col-sm-12">
                    <h2 id="projectHead">RECENT PROJECTS</h2>
                    <p>Take a look at my portfolio page to discover some of my favorite coding projects I've completed recently.</p>
                </div>
            </header>

            <div className="row projectCards">
                <div className="col-sm-5 projectMain">
                    <h4 className="projectTitle">Employee Directory</h4>

                    <img className="img-thumbnail portfolioImage border-0 rounded-0" src={directory_walkthrough} alt="Employee directory app walkthrough"></img>

                    <p className="projectDescription">
                        A React-based web application that utilizes an API call to get employee data which can then be filtered or sorted for easy and efficienct viewing of employee records.
                    </p>

                    <br></br>
                    <a className="projectLinks" id="github" href="https://github.com/cnix273/employee-directory">  GitHub Repo</a>
                    <a className="projectLinks" id="live" href="https://cnix273.github.io/employee-directory/">  Live Application</a> 
                </div>

                <br></br>

                <div className="col-sm-5 projectMain">
                    <h4 className="projectTitle">Burger Logger</h4>
                    
                    <img className="img-thumbnail portfolioImage border-0 rounded-0" src={burger_walkthrough} alt="Burger logger app walkthrough"></img>

                    <p className="projectDescription">
                        A Node.js application for displaying burgers to be or already eaten using CRUD operations to add, update, and delete burgers from a MySQL database.
                    </p>

                    <a className="projectLinks" id="github" href="https://github.com/cnix273/Eat-Da-Burger">  GitHub Repo</a>
                    <a className="projectLinks" id="live" href="https://stark-reaches-59593.herokuapp.com/">  Live Application</a>

                </div>

                <br></br>

                <div className="col-sm-5 projectMain">
                    <h4 className="projectTitle">Note Taker</h4>
                    
                    <img className="img-thumbnail portfolioImage border-0 rounded-0" src={notetaker_walkthrough} alt="Note taker app walkthrough"></img>

                    <p className="projectDescription">
                        A sleak and simple note taker application built on Express through which the user can save, view or delete notes.
                    </p>

                    <a className="projectLinks" id="github" href="https://github.com/cnix273/Note-Taker">  GitHub Repo</a>
                    <a className="projectLinks" id="live" href="https://peaceful-cove-68607.herokuapp.com/">  Live Application</a>

                </div>

                <br></br>

                <div className="col-sm-5 projectMain">
                    <h4 className="projectTitle">README.md Generator</h4>
                    
                    <img className="img-thumbnail portfolioImage border-0 rounded-0" src={readme_walkthrough} alt="Readme generator app walkthrough"></img>

                    <p className="projectDescription">
                        A command-line application, built using Node, that serves as a dynamic README.md file generator, creating a README.md based on data inputed by the user.
                    </p>

                    <a className="projectLinks" id="github" href="https://github.com/cnix273/README-Generator">  GitHub Repo</a>

                </div>
            </div>
        </div>
    );
};

export default Portfolio;