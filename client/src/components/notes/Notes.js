import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import uuid from "uuid/v3";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./notes.scss";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import Utils from "../common/Utils";
class Notes extends Component {
  constructor() {
    super();
    this.state = {
      notesList: [
        { id: "712f3ac230eb443485466271b7264f92", content: "welcome" }
      ],
      activeContent: "",
      activeId: "712f3ac230eb443485466271b7264f92"
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
    if (document.getElementById("editor")) {
      document
        .getElementById("editor")
        .addEventListener("input", this.saveContent, false);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser(newUser, this.props.history);
  };
  saveContent = (a, b) => {};
  addNotes = () => {
    let { notesList } = this.state;
    notesList.push({ id: Utils.createUuidV2(), content: "" });
    this.setState({ notesList });
  };
  setActiveNote = (activeId, activeContent) => {
    this.setState({ activeId, activeContent });
  };
  navigateTo = path => {
    this.props.history.push("/");
  };
  render() {
    const { errors, notesList } = this.state;
    return (
      <div className="tech-notes">
        <div className="left-side">
          <div className="top-bar">
            <i className="material-icons home" onClick={this.navigateTo}>
              home
            </i>
            <div className="search-field">
              {" "}
              <input
                onChange={this.onChange}
                value={this.state.search}
                id="search"
                placeholder="search"
              />
            </div>
            <i className="material-icons add-notes" onClick={this.addNotes}>
              note_add
            </i>
          </div>
          <div className="list">
            {notesList.map(note => {
              return (
                <div
                  key={note.id}
                  onClick={() => this.setActiveNote()}
                  className="note"
                >
                  {note.content}
                </div>
              );
            })}
          </div>
        </div>
        <div className="right-side">
          <div
            id="editor"
            contentEditable="true"
            className="editor"
            onChange={this.saveContent}
          ></div>
        </div>
      </div>
    );
  }
}
Notes.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(mapStateToProps)(withRouter(Notes));
