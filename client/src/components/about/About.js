import React, { Component } from "react";
import PropTypes from "prop-types";
import "./about.scss";
import profile_pic from "../../images/profile_pic.jpg";
import { connect } from "react-redux";

class About extends Component {
  navigateTo = () => {
    this.props.history.push("projects");
  };
  render() {
    return (
      <section class="site-banner site-banner--dark site-banner--alt">
        <div class="site-banner__inner anim anim-up anim-fade loaded">
          <div class="site-banner__content">
            <h1 class="site-banner__title">Hey, I’m Malkeet.</h1>

            <h2 class="site-banner__subtitle">
              Front end web developer from Gurgaon, INDIA. I create custom
              websites to help businesses do better online.
            </h2>

            <div class="site-banner__btn">
              <a class=" btn--large btn--hover-light" onClick={this.navigateTo}>
                My Projects
              </a>
            </div>
          </div>

          <figure class="overlap-img">
            <img src={profile_pic} alt="Malkeet" />
          </figure>
        </div>
      </section>
    );
  }
}
// About.propTypes = {
//   logoutUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired
// };
const mapStateToProps = state => ({
  auth: state.auth,
  parse: state.parse
});
export default connect(mapStateToProps, {})(About);
