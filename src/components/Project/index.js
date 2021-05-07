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
                </div>
            </header>

            <div className="row">
                <div className="col-sm-5 projectMain">
                    <h4 className="portText">Employee Directory</h4>
                    <a href="https://github.com/cnix273/employee-directory">  GitHub Repo</a>
                    <a href="https://cnix273.github.io/employee-directory/">  Live Application</a>  
                    
                    <hr></hr>
                    <br></br>

                    <img className="img-thumbnail portfolioImage border-0 rounded-0" src={directory_walkthrough} alt="Employee directory app walkthrough"></img>

                    <ul>
                        <li>Built using React</li>
                        <li>Populates table with random data from API call to randomuser.me</li>
                        <li>User can search by name</li>
                        <li>User can sort tabel alphabetically or reverse alphabetically</li>
                    </ul>

                    <br></br>
                </div>

                <br></br>

                <div className="col-sm-5 projectMain">
                    <h4 className="portText">Burger Logger</h4>
                    <a href="https://github.com/cnix273/Eat-Da-Burger">  GitHub Repo</a>
                    <a href="https://stark-reaches-59593.herokuapp.com/">  Live Application</a>

                    <hr></hr>
                    <br></br>

                    <img className="img-thumbnail portfolioImage border-0 rounded-0" src={burger_walkthrough} alt="Burger logger app walkthrough"></img>

                    <ul>
                        <li>Built using React</li>
                        <li>Populates table with random data from API call to randomuser.me</li>
                        <li>User can search by name</li>
                        <li>User can sort tabel alphabetically or reverse alphabetically</li>
                    </ul>

                    <br></br>
                </div>

                <br></br>

                <div className="col-sm-5 projectMain">
                    <h4 className="portText">Note Taker</h4>
                    <a href="https://github.com/cnix273/Note-Taker">  GitHub Repo</a>
                    <a href="https://peaceful-cove-68607.herokuapp.com/">  Live Application</a>

                    <hr></hr>
                    <br></br>

                    <img className="img-thumbnail portfolioImage border-0 rounded-0" src={notetaker_walkthrough} alt="Note taker app walkthrough"></img>

                    <ul>
                        <li>Built using React</li>
                        <li>Populates table with random data from API call to randomuser.me</li>
                        <li>User can search by name</li>
                        <li>User can sort tabel alphabetically or reverse alphabetically</li>
                    </ul>

                    <br></br>
                </div>

                <br></br>

                <div className="col-sm-5 projectMain">
                    <h4 className="portText">README.md Generator</h4>
                    <a href="https://github.com/cnix273/README-Generator">  GitHub Repo</a>

                    <hr></hr>
                    <br></br>

                    <img className="img-thumbnail portfolioImage border-0 rounded-0" src={readme_walkthrough} alt="Readme generator app walkthrough"></img>

                    <ul>
                        <li>Built using React</li>
                        <li>Populates table with random data from API call to randomuser.me</li>
                        <li>User can search by name</li>
                        <li>User can sort tabel alphabetically or reverse alphabetically</li>
                    </ul>

                    <br></br>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;