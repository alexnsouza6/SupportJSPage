import React, { Component } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { commentsRef } from '../config/firebase';

class CommentBox extends Component {
  state = {
    title: '' /* title of the post */,
    body: '' /* Body of the comment */,
  };

  handleTitle = (event) => {
    /* This method handles changes on comment title */
    this.setState({ title: event.target.value });
  };

  handleComment = (event) => {
    /* This method handles changes on comment body */
    this.setState({ body: event.target.value });
  };

  handleSubmit = (event) => {
    /* This method handles submit action for form and make validations before it occurs */
    const { title, body } = this.state;
    event.preventDefault();

    if (title && body) {
      commentsRef.add(this.state);
    } else {
      /* Third party lib that displays a errors if any field is w/ blank value */
      NotificationManager.error('No Blank Messages Allowed', 'Pay Attention!', 3000);
    }

    this.setState({ title: '', body: '' });
  };

  render() {
    const { title, body } = this.state;
    return (
      <div className="container">
        <h1>Welcome to Single Page Project!</h1>
        <h2>Please, Enter a Subject with some description.</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <h4>Subject: </h4>
            <input onChange={this.handleTitle} value={title} />
            <h4> Description: </h4>
            <textarea className="form-control" onChange={this.handleComment} value={body} />
          </div>
          <div>
            <button type="submit" className="btn btn-primary mb-4">
              Submit!
            </button>
          </div>
        </form>
        <NotificationContainer />
      </div>
    );
  }
}

export default CommentBox;
