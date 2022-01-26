import React  from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

export default function Navbar(props) {
  
  // const [text,setText]=useState("Enable dark mode");

    return (
        <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             
              
              
            </ul>
           
            
          </div>
          
        </div>
        <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.mode==='dark'?'light':'dark'}`} htmlFor="flexSwitchCheckDefault">{props.mode==='dark'?'Enable light mode':'Enable dark mode'}</label>
</div>
      </nav>
        </div>
    )
}
Navbar.defaultProps={
    title:" your title here",
    about:"About"
}

Navbar.prototype={
    title:PropTypes.string,
    about:PropTypes.string
}