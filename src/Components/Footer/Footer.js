import { Component } from "react";

export default class Footer extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg bg-body-tertiary p-3">
  <div className="container-fluid w-75">
    <a className="navbar-brand" href="#">Navbar</a>
    <div>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        )
    }
}