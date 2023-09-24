import { Component } from "react";
import {Link} from "react-router-dom";
import logo from "./newspaper.png";
export default class Navbar extends Component{
render(){
    return (
        <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container-fluid">
            <Link className="navbar-brand" style={{fontFamily:"fantasy"}}>
            <img src={logo} alt="" srcset="" style={{width:"50px",marginRight:"5px"}} />
            News Villa </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link" aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/technology" className="nav-link" >Technology </Link>
        </li>
        <li className="nav-item">
          <Link to="/entertainment" className="nav-link" >Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link to="/science" className="nav-link" >Science</Link>
        </li>
        <li className="nav-item">
          <Link to="/politics" className="nav-link" >Politics</Link>
        </li>
        <li className="nav-item">
          <Link to="/health" className="nav-link" >Health</Link>
        </li>
        <li className="nav-item">
          <Link to="/sports" className="nav-link" >Sports</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link" >About</Link>
        </li>
      </ul>
    </div>
        </div>
        </nav>
    )
}
}