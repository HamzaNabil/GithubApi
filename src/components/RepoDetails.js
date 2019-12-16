import React, { Component } from "react";
import { getSingleRepo } from "../services/reposService";
import { NavLink } from "react-router-dom";
import { get_single_repo } from "../actions";
import { connect } from "react-redux";

class RepoDetails extends Component {
  state = {
    singleRepo: {}
  };
  async componentDidMount() {
    await this.props.get_single_repo(this.props.match.params.name);
    const singleRepo = await getSingleRepo(this.props.data.singleRepo);
    this.setState({ singleRepo: singleRepo.data });
  }
  render() {
    const { singleRepo } = this.state;
    return (
      <div className="jumbotron">
        <h1 className="display-4">{singleRepo.name}</h1>
        <p className="lead">
          {singleRepo.description
            ? singleRepo.description
            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"}
        </p>
        <span className="badge badge-primary">Forks: {singleRepo.forks}</span>
        <span className="badge badge-secondary">
          Watchers: {singleRepo.watchers}
        </span>

        <hr className="my-4" />
        <a
          className="btn btn-primary"
          href={singleRepo.html_url}
          role="button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repo Link
        </a>
        <NavLink to="/" className="btn btn-info mx-2">
          Go Home
        </NavLink>
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      data: state
    };
  },
  {
    get_single_repo
  }
)(RepoDetails);
