import React, { Component } from 'react';
import {Link,withRouter} from 'react-router-dom';

import './assets/css/Advanced-NavBar---Multi-dropdown.css';


export class NavBar extends Component {
  render() {
    return (
        <div className="header2 bg-success-gradiant">
        <div className="">
    
          <nav className="navbar navbar-expand-lg h2-nav">

            <Link to="/" className="nav-link">
                <img src="assets/img/logo.svg" alt="wrapkit" />
            </Link>
            
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#header2" aria-controls="header2" aria-expanded="false" aria-label="Toggle navigation">
                <span className="icon-menu"></span>
            </button>

            <div className="collapse navbar-collapse hover-dropdown" id="header2">
              <ul className="navbar-nav">

                <li className="nav-item active">
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                </li>

                <li className="nav-item dropdown position-relative">
                  <a className="nav-link dropdown-toggle" href="#" id="h2-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  Product <i className="icon-arrow-down ml-1 font-12"></i>
                              </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                    <li className="divider" role="separator"></li>
                    <li><a className="dropdown-item" href="#">Separated link</a></li>
                    <li className="divider" role="separator"></li>
                    <li><a className="dropdown-item" href="#">One more separated link</a></li>
                    <li className="dropdown-submenu position-relative"> <a className="dropdown-toggle dropdown-item" data-toggle="dropdown" href="#">Dropdown <i className="icon-arrow-right float-right mt-1"></i></a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li className="dropdown-submenu position-relative"> <a className="dropdown-toggle dropdown-item" href="#" data-toggle="dropdown">Dropdown <i className="icon-arrow-right float-right mt-1"></i></a>
                          <ul className="nav navbar-nav dropdown-menu">
                            <li className="dropdown-submenu position-relative"> <a className="dropdown-toggle dropdown-item" href="#" data-toggle="dropdown">Dropdown <i className="icon-arrow-right float-right mt-1"></i></a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                <li className="divider" role="separator"></li>
                                <li><a className="dropdown-item" href="#">Separated link</a></li>
                                <li className="divider" role="separator"></li>
                                <li><a className="dropdown-item" href="#">One more separated link</a></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item"><a className="nav-link" href="#">Features</a></li>
                <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
              </ul>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active"><a className="nav-link" href="#"><i className="icon-bubble"></i> Need help?</a></li>

                <li className="nav-item active">
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/register" className="nav-link">
                        Sign up
                    </Link>
                </li>

              </ul>
            </div>
          </nav>
        
        </div>
      </div>
    )
  }
}

export default withRouter(NavBar);
