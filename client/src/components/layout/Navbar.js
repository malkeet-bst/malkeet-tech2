import React, { Component } from "react";
import "./navbar.scss";
import Logo from "./../../icons/logo5.png";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Navbar extends Component {
  navigateTo = path => {
    this.props.history.push(path);
  };
  componentWillReceiveProps = () => {};
  render() {
    return (
      <div className="msd-navbar">
        {/* <nav className="z-depth-0">
          <div className="nav-bar white">
            {/* <Link to="/"> */}
        {/* <i className="material-icons">home</i> 
            <img className="logo" src={Logo} />
            {/* </Link> 
            <div className="about-nav" onClick={this.navigateTo}>
              About
            </div>
          </div>
        </nav> */}
        <header className="header">
          <div>
            <a className="site-logo" href="/">
              Malkeet singh
            </a>
          </div>

          <div>
            <a
              className="toggle-menu js-toggle-menu"
              href="#"
              aria-label="Toggle Menu"
            >
              <span className="toggle-menu__line"></span>
              <span className="toggle-menu__line"></span>
              <span className="toggle-menu__line"></span>
            </a>

            <div className="site-menu">
              <ul className="site-menu-inner">
                <li className="site-menu__item">
                  <a
                    className="site-menu-link "
                    onClick={() => this.navigateTo("projects")}
                  >
                    Projects
                  </a>
                </li>
                <li className="site-menu__item">
                  <a
                    className="site-menu-link active"
                    onClick={() => this.navigateTo("about")}
                  >
                    About
                  </a>
                </li>
                <li className="site-menu__item">
                  <a
                    className="site-menu-link "
                    onClick={() => this.navigateTo("contact")}
                  >
                    Contact
                  </a>
                </li>
                {this.props.auth.isAuthenticated ? (
                  <li className="site-menu__item">
                    <a
                      className="site-menu-link "
                      onClick={() => this.navigateTo("notes")}
                    >
                      Notes
                    </a>
                  </li>
                ) : (
                  ""
                )}{" "}
                {/* <li className="site-menu__item">
                  <a
                    className="site-menu-link "
                    href="https://www.linkedin.com/in/malkeet-singh/"
                    target="_blank"
                  >
                    Linkedin
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(mapStateToProps)(withRouter(Navbar));
