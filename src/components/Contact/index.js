import React from "react";
import "./style.css";

import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const Contact = (props) => {
    return (
        <div className="container-fluid" id ="containerThree">
            <header className="row">
                <div className="header col-sm-10">
                    <h2>CONTACT</h2>
                    <hr/>
                </div>
            </header>

            <div className="contactContent">
                <h5>I'm always open to new projects to collaborate on, so if you're in need of a full-stack JavaScript developer, please get in touch!</h5>
                    
                    <FaLinkedin href="https://www.linkedin.com/in/cameronnix/" size="5em" className="contactIcon" id="linkedin"/>
                    <FaGithub href="https://github.com/cnix273" size="5em" className="contactIcon" id="github"/>
                    <FiMail href="mailto:camerondeverenix@gmail.com" size="5em" className="contactIcon" id="email"/>

            </div>
{/* 
            <div className="row">
                <div className="contactMain col-sm-10">
                    <form className="form-group">
                        <label for="inputName">NAME</label>
                        <input
                            onChange={props.handleInputChange}
                            value={props.name}
                            name="name"
                            type="text"
                            className="form-control rounded-0"
                            id="inputName"
                            placeholder="Name">
                        </input>
                    </form>
                    <form className="form-group">
                        <label for="inputEmail">EMAIL</label>
                        <input
                            onChange={props.handleInputChange}
                            value={props.email}
                            name="email"
                            type="email"
                            className="form-control rounded-0"
                            id="inputEmail"
                            placeholder="Email">
                        </input>
                    </form>
                    <form className="form-group">
                        <label for="inputMessage">MESSAGE</label>
                        <textarea
                            onChange={props.handleInputChange}
                            value={props.messsage}
                            name="message"
                            className="form-control rounded-0"
                            id="inputMessage"
                            rows="3"
                            placeholder="Message">
                        </textarea>
                    </form>
                    <button
                        onClick={props.handleFormSubmit}
                        id="submit-button"
                        type="submit"
                        className="btn rounded-0"
                        data-toggle="modal"
                        data-target="#submissionModal"
                    >Submit</button>
                </div>
            </div> */}
        </div>
    );
};

export default Contact;