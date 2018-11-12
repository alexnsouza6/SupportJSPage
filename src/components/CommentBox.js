import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveComment } from '../actions/index';

class CommentBox extends Component {
  state = { 
    title: '',
    comment: '',
  };  

  handleTitle = (event) => {
    this.setState({ title: event.target.value });
  }

  handleComment = (event) => {
    this.setState({ comment: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.saveComment(this.state);
    this.setState({title: '', comment: ''});
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
              value={ this.state.comment }
              />
          </div>
          <div>
            <button className="btn btn-primary">Submit!</button>
          </div>
        </form>
      </div>
    );
  }
}
 
export default connect(null, { saveComment })(CommentBox);