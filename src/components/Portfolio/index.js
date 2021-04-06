import React from "react";
import "./style.css";
import directory_walkthrough from "../Assets/employee_directory.gif";

const Portfolio = () => {
    return (
        <div className="container-fluid" id ="containerTwo">
            <header className="row">
                <div className="header col-sm-10">
                    <h2 className="portText">PORTFOLIO</h2>
                    <hr></hr>
                </div>
            </header>

            <div className="row">
                <div className="col-sm-10 portfolioMain">
                    <h3 className="portText">Employee Directory</h3>
                </div>
            </div>
            <div className="row">
                <div className="portfolioMain col-sm-5">
                    <ul>
                        <li>Built using React</li>
                        <li>Populates table with random data from API call to randomuser.me</li>
                        <li>User can search by name</li>
                        <li>User can sort tabel alphabetically or reverse alphabetically</li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="portfolioMain col-sm-5">
                    <img className="img-thumbnail float-left portfolioImage border-0 rounded-0" src={directory_walkthrough} alt="Employee directory walkthrough"></img>
                </div>
            </div>
            <div className="row">
                <div className="portfolioMain col-sm-10">
                    <a href="https://github.com/cnix273/employee-directory">  GitHub Repo</a>
                    <br></br>
                    <a href="https://cnix273.github.io/employee-directory/">  Live Application</a>  
                </div>
            </div>
            <br></br>
            <div className="row">
                <div className="col-sm-10 portfolioMain">
                    <h3 className="portText">Burger Logger</h3>
                </div>
            </div>
            <div className="row">
                <div className="portfolioMain col-sm-5">
                    <img className="img-thumbnail float-left portfolioImage border-0 rounded-0" src="assets/images/burger_walkthrough.gif" alt="Burger logger walkthrough"></img>
                </div>
            </div>
            <div className="row">
                <div className="portfolioMain col-sm-10">
                    <a href="https://github.com/cnix273/Eat-Da-Burger">  GitHub Repo</a>
                    <br></br>
                    <a href="https://stark-reaches-59593.herokuapp.com/">  Live Application</a>  
                </div>
            </div>
            <br></br>
            <div className="row">
                <div className="col-sm-10 portfolioMain">
                    <h3 className="portText">Employee Management System</h3>
                </div>
            </div>
            <div className="row">
                <div className="portfolioMain col-sm-5">
                    <img className="img-thumbnail float-left portfolioImage border-0 rounded-0" src="assets/images/employee_walkthrough.gif" alt="Employee database generator walkthrough"></img>
                </div>
            </div>
            <div className="row">
                <div className="portfolioMain col-sm-10">
                    <a href="https://github.com/cnix273/employee-database">  GitHub Repo</a>
                </div>
            </div>
            <br></br>
            <div className="row">
                <div className="col-sm-10 portfolioMain">
                    <h3 className="portText">ReadMe Generator</h3>
                </div>
            </div>
            <div className="row">
                <div className="portfolioMain col-sm-5">
                    <img className="img-thumbnail float-left portfolioImage border-0 rounded-0" src="assets/images/password2.gif" alt="ReadMe generator walkthrough 1"></img>
                </div>
                <div className="portfolioMain col-sm-5">
                    <img className="img-thumbnail float-left portfolioImage border-0 rounded-0" src="assets/images/password1.gif" alt="ReadMe generator walkthrough 1"></img>
                </div>
            </div>
            <div className="row">
                <div className="portfolioMain col-sm-10">
                    <a href="https://github.com/cnix273/password-and-stowe">  GitHub Repo</a>
                    <br></br>
                    <a href="https://cnix273.github.io/password-and-stowe/">  Live Application</a>   
                </div>
            </div>
            <br></br>
            <div className="row">
                <div className="col-sm-10 portfolioMain">
                    <h3 className="portText">Daily Scheduler</h3>
                </div>
            </div>
            <div className="row">
                <div className="portfolioMain col-sm-5">
                    <img className="img-thumbnail float-left portfolioImage border-0 rounded-0" src="assets/images/scheduler.gif" alt="Daily scheduler walkthrough 1"></img>
                </div>
                <div className="portfolioMain col-sm-5">
                    <img className="img-thumbnail float-left portfolioImage border-0 rounded-0" src="assets/images/scheduler1.gif" alt="Daily scheduler walkthrough 2"></img>
                </div>
            </div>
            <div className="row">
                <div className="portfolioMain col-sm-10">
                    <a href="https://github.com/cnix273/carefree-calendar">  GitHub Repo</a>
                    <br></br>
                    <a href="https://cnix273.github.io/carefree-calendar/">  Live Application</a>   
                </div>
            </div>
            <br></br>
            <div className="row">
                <div className="col-sm-10 portfolioMain">
                    <h3 className="portText">Dharma's Bookclub</h3>
                </div>
            </div>
            <div className="row">
                <div className="portfolioMain col-sm-5">
                    <img className="img-thumbnail float-left portfolioImage border-0 rounded-0" src="assets/images/books.gif" alt="Bookclub walkthrough 1"></img>
                </div>
                <div className="portfolioMain col-sm-5">
                    <img className="img-thumbnail float-left portfolioImage border-0 rounded-0" src="assets/images/books1.gif" alt="Bookclub walkthrough 2"></img>
                </div>
            </div>
            <div className="row">
                <div className="portfolioMain col-sm-5">
                    <img className="img-thumbnail float-left portfolioImage border-0 rounded-0" src="assets/images/books2.gif" alt="Bookclub walkthrough 3"></img>
                </div>
            </div>
            <div className="row">
                <div className="portfolioMain col-sm-10">
                    <a href="https://github.com/cnix273/Dharmas-bookclub">  GitHub Repo</a>
                    <br></br>
                    <a href="https://cnix273.github.io/Dharmas-bookclub/">  Live Application</a> 
                </div>
            </div>
            <br></br>
        </div>
    );
};

export default Portfolio;