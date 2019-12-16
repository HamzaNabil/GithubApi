import React, { Component } from "react";

class Comment extends Component {
  constructor(props) {
    super(props);

    let comments = localStorage.getItem("repo-comments-" + props.repo.id);
    if (comments) {
      comments = JSON.parse(comments);
    }

    this.state = {
      comments: comments ? comments : [],
      name: "",
      comment: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { comments, name, comment } = this.state;
    this.setState(
      {
        comments: [
          ...comments,
          {
            name,
            comment
          }
        ],
        name: "",
        comment: ""
      },
      () => {
        localStorage.setItem(
          "repo-comments-" + this.props.repo.id,
          JSON.stringify(this.state.comments)
        );
      }
    );
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { comments, name, comment } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Enter Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Enter Comment</label>
                <input
                  type="text"
                  name="comment"
                  value={comment}
                  className="form-control"
                  id="comment"
                  placeholder="Enter Comment"
                  onChange={this.handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Add Comment
              </button>
            </form>
          </div>
          <div className="col-md-6">
            {comments.length > 0 ? (
              <div className="commentData">
                <h2>All Comment For This Repo </h2>
                {comments.map(com => {
                  return (
                    <div className="comment" key={com.name}>
                      <h3 className="text-primary">Name: {com.name}</h3>
                      <p>Comment: {com.comment}</p>
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Comment;
