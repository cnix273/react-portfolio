import React from "react";
// import "./style.css";

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" id="sticky">
            <div class="navbar-brand">
                <h2>CAMERON NIX</h2>
            </div>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
                
            <nav class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link text-dark" href="#containerOne">WHO</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#containerTwo">WHAT</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#containerThree">WHERE</a>
                    </li>
                </ul>
            </nav>
        </nav>
    )
};

export default Nav;