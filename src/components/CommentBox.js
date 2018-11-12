import React, { Component } from 'react';
import { commentsRef } from '../config/firebase';
import {NotificationContainer, NotificationManager} from 'react-notifications';

class CommentBox extends Component {
  state = { 
    title: '',
    body: '',
  };  

  handleTitle = (event) => {
    this.setState({ title: event.target.value });
  }

  handleComment = (event) => {
    this.setState({ body: event.target.value });
  }

  handleSubmit = (event) => {
    const { title, body } = this.state;
    event.preventDefault();
    title && body ? commentsRef.add(this.state) : NotificationManager.error('No Blank Messages Allowed', 'Pay Attention!', 3000);
    this.setState({title: '', body: ''});
  }

  render() { 
    return ( 
      <div className="container">
        <h1>Welcome to Single Page Project!</h1>
        <h2>Please, Enter a Subject with some description.</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <h4>Subject: </h4>
            <input
              onChange={ this.handleTitle }
              value={ this.state.title }
              />
            <h4> Description: </h4>
            <textarea
              className="form-control"
              onChange={ this.handleComment }
              value={ this.state.body }
              />
          </div>
          <div>
            <button className="btn btn-primary mb-4">Submit!</button>
          </div>
        </form>
        <NotificationContainer/>
      </div>
    );
  }
}
 
export default CommentBox;