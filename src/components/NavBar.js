import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';

function NavBar(){

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">GALERIA</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                    <Link to="/image/create" className="nav-link">
                        Crear Imagen
                    </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
   
}

export default NavBar;