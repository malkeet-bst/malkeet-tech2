import React, { Component, Fragment as F } from "react";
import PropTypes from "prop-types";
import "./dashboard.scss";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { fetchParsedData } from "../../actions/commonActions";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  componentDidMount = () => {
    this.props.fetchParsedData();
  };
  render() {
    let { data = { urls: [] } } = this.props.parse;
    const { user } = this.props.auth;
    return (
      <F>
        <Navbar />
        <div
          style={{ height: "75vh" }}
          className="dashboard container valign-wrapper"
        >
          <div className="row">
            <div className="content col s12 center-align">
              <h4>
                <b>Hey there,</b> {user.name.split(" ")[0]}
                <p className="flow-text grey-text text-darken-1">
                  You are logged into{" "}
                  <span style={{ fontFamily: "monospace" }}>Malkeet.tech</span>{" "}
                  👏
                </p>
                {/* <div
                className="parsed-data "
                dangerouslySetInnerHTML={{ __html: data.content }}
              /> */}
              </h4>

              <button
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem"
                }}
                onClick={this.onLogoutClick}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </F>
    );
  }
}
// Dashboard.propTypes = {
//   logoutUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired
// };
const mapStateToProps = state => ({
  auth: state.auth,
  parse: state.parse
});
export default connect(mapStateToProps, { logoutUser, fetchParsedData })(
  Dashboard
);
