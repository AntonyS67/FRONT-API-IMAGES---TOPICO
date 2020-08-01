import React, {Component} from 'react';
import '../Login.css';
class Register extends Component{
    render(){
        return(
            <div id="container">
                <h1>Registrarse</h1>
                <form>
                    <input type="text" name="name" placeholder="Nombre"></input>
                    <input type="email" name="email" placeholder="E-mail"></input>
                    <input type="password" name="pass" placeholder="Password"></input>
                    <a href="#"> Registrarse</a>
                </form>
            </div>
        );
    }
}

export default Register;