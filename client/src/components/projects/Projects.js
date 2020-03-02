import React, { Component, Fragment as F } from "react";
import PropTypes from "prop-types";
import "./projects.scss";
import Project1 from "../../images/project1.png";
import { connect } from "react-redux";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";

class Projects extends Component {
  render() {
    return (
      <F>
        <Navbar />
        <section class="site-banner site-banner--dark site-banner--alt">
          <div class="site-banner__inner anim anim-up anim-fade loaded">
            <div class="site-banner__content">
              <h1 class="site-banner__title">My Projects</h1>

              <h2 class="site-banner__subtitle">
                For the 4 years I’ve been designing and developing websites.
                Below are some of my favourites.
              </h2>
            </div>
          </div>
        </section>
        <div class="spacing-huge-bottom">
          <article class="project-preview ">
            <div class="project-preview__img">
              <figure class="overlap-img">
                <a href="/projects/inspirational-pixels/">
                  <img src={Project1} alt="Inspirational Pixels" />
                </a>
              </figure>
            </div>

            <div class="project-preview__content">
              <div class="content-styles">
                <h2>
                  <a target="_blank" href="https://game.tv/user">
                    Game.tv
                  </a>
                </h2>

                <p class="txt-large">
                  Run a ton of tournaments,Stream your tournaments
                </p>
              </div>

              <div class="site-banner__btn spacing-tiny-top">
                <a target="_blank" href="https://game.tv/user">
                  Visit website
                </a>
              </div>
            </div>
          </article>
        </div>
        <Footer />
      </F>
    );
  }
}
// Projects.propTypes = {
//   logoutUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired
// };
const mapStateToProps = state => ({
  auth: state.auth,
  parse: state.parse
});
export default connect(mapStateToProps, {})(Projects);
