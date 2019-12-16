import React, { Component } from "react";
import { renderLoader } from "../config";
import { NavLink } from "react-router-dom";
import Pagination from "./Pagination";
import { paginate } from "../utils/paginate";
import Comment from "./Comment";

class Home extends Component {
  state = {
    pageSize: 5,
    currentPage: 1
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    const { data } = this.props;
    const { currentPage, pageSize } = this.state;
    const newRepos = paginate(data.repos, currentPage, pageSize);
    return (
      <React.Fragment>
        <div className="">
          {localStorage.getItem("token") ? (
            <React.Fragment>
              <div>
                {data.repos.length ? (
                  <React.Fragment>
                    {newRepos.map(repo => {
                      return (
                        <div
                          key={repo.id}
                          className="jumbotron jumbotron-fluid"
                        >
                          <div className="container">
                            <h1 className="display-6">{repo.name}</h1>
                            <span className="text-secondary">
                              {repo.html_url}.
                            </span>
                            <NavLink
                              className="d-block repoLink btn btn-success"
                              to={"/repodetails/" + repo.name}
                            >
                              repo Details
                            </NavLink>
                            <div className="commentWrapper">
                              <Comment repo={repo} />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </React.Fragment>
                ) : (
                  renderLoader()
                )}
              </div>
            </React.Fragment>
          ) : null}
        </div>
        {localStorage.getItem("token") ? (
          <React.Fragment>
            <Pagination
              itemsCount={data.repos.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </React.Fragment>
        ) : (
          <div class="alert alert-secondary">
            There is No Repo To Show .. You Should Sign In{" "}
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Home;
