import React from "react";
// import { NavLink } from "react-router-dom";
import "./footer.css";
import Logo from "../images/logo.png";

function Footer() {

  return (
    <>
       <footer className="pie-pagina">
        <div className="grupo-1">
            <div className="box">
                    <a href="https://www.facebook.com/josue.morenoluciano.7">
                        <img src={Logo} alt="" />
                    </a>
            </div>
            <div className="box">
                <h2>SOBRE NOSOTROS</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsa?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsa?</p>
            </div>
            <div className="box">
                <h2>SIGUENOS</h2>
                <div className="red-social">
                    <i  className="fa fa-facebook"></i>
                    <i  className="fa fa-instagram"></i>
                    <i  className="fa fa-twitter"></i>
                    <i className="fa fa-youtube"></i>
                </div>
            </div>
        </div>
        <div className="grupo-2">
            <small>&copy; 2021 <b>Transmitec</b> - Todos los Derechos Reservados.</small>
        </div>
    </footer>
      
    </>

    
  );
}

export default Footer;
