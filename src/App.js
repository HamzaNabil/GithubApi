import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import RepoDetails from "./components/RepoDetails";
import Logout from "./components/Logout";
import { get_repos } from "./actions";

import { getRepos } from "./services/reposService";
import * as auth from "./services/authService";

import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

class App extends Component {
  state = {};

  async componentDidMount() {
    const { href } = window.location;
    if (href && href.indexOf("code") !== -1) {
      auth.login();
    }
    // check if there is user
    if (!localStorage.getItem("token")) {
      this.setState({ user: false });
    } else {
      getRepos().then(data => {
        this.props.get_repos(data);
      });
      this.setState({ user: true });
    }
  }

  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <Navbar user={user} />
        <div className="container">
          <Switch>
            <Route path="/logout" component={Logout} />
            <Route
              path="/"
              exact
              render={props => <Home {...props} data={this.props.repos} />}
            />
            <Route path="/repodetails/:name" component={RepoDetails} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(
  state => {
    return {
      repos: state
    };
  },
  {
    get_repos
  }
)(App);
