import React, { Component } from "react";
import "./footer.scss";
import Logo from "./../../icons/logo5.png";
import { Link, withRouter } from "react-router-dom";
class Footer extends Component {
  navigateTo = path => {
    this.props.history.push(path);
  };
  componentWillReceiveProps = () => {};
  render() {
    return (
      <section className="site-cta">
        <div className="site-cta__inner">
          <div className="grid grid--m-1">
            <div className="grid__col grid__col--8">
              <div className="content-styles spacing-tiny-bottom">
                <h2 className="site-cta__title">Let's Work Together</h2>
                <p className="site-cta__txt">
                  Have a project you'd like to discuss?
                </p>
              </div>
              <div className="site-banner__btn">
                <a
                  className=" btn--large btn--hover-light"
                  onClick={() => this.navigateTo("contact")}
                >
                  Get in Touch
                </a>
              </div>
            </div>
            <div className="grid__col grid__col--4 grid__col--v-center">
              <ul className="icon-list icon-list--light">
                <li className="icon-list__item">
                  <span className="icon-list__img">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path
                        fill="#4b6cc1"
                        d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z"
                      ></path>
                    </svg>
                  </span>
                  <a target="_blank" href="mailto:12malkeet@gmail.com">
                    12malkeet@gmail.com
                  </a>
                </li>
                <li className="icon-list__item">
                  <span className="icon-list__img">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#919191"
                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                      ></path>
                    </svg>
                  </span>
                  <a
                    href="https://twitter.com/12malkeet"
                    target="_blank"
                    rel="noopener"
                  >
                    On Twitter
                  </a>
                </li>
                {/* <li className="icon-list__item">
                  <span className="icon-list__img">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#919191"
                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                      ></path>
                    </svg>
                  </span>
                  <a
                    href="https://www.linkedin.com/in/malkeet-singh/"
                    target="_blank"
                    rel="noopener"
                  >
                    Linkedin
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default withRouter(Footer);
