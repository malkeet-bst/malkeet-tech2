import React, { Component, Fragment as F } from "react";
import PropTypes from "prop-types";
import "./contact.scss";
import profile_pic from "../../images/profile_pic.jpg";
import { connect } from "react-redux";
import Navbar from "../layout/Navbar";

class Contact extends Component {
  render() {
    return (
      <F>
        <Navbar />
        <section class="site-banner site-banner--dark site-banner--alt">
          <div class="site-banner__inner anim anim-up anim-fade loaded">
            <div class="site-banner__content">
              <h1 class="site-banner__title">Contact me</h1>

              <h2 class="site-banner__subtitle">
                If you’d like to chat about a project please fill in the form
                below and I’ll get back within 1-2 days.
              </h2>
            </div>
          </div>
        </section>
        <section class="spacing-huge">
          <div class="section section--small spacing-large-bottom">
            <div class="page-cta">
              <div class="content-styles">
                <h2>
                  <span class="h4">Status</span>
                  <br></br>
                  <span class="txt-highlight">Available</span>
                </h2>
                <p class="txt-large">
                  I’m currently looking for new projects from{" "}
                  <strong>April 2020</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </F>
    );
  }
}
// Contact.propTypes = {
//   logoutUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired
// };
const mapStateToProps = state => ({
  auth: state.auth,
  parse: state.parse
});
export default connect(mapStateToProps, {})(Contact);
