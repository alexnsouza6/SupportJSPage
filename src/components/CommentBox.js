import React, { Component } from 'react';

class CommentBox extends Component {
  state = { 
    title: '',
    comment: ''
  };  

  handleTitle = (event) => {
    this.setState({ title: event.target.value });
  }

  handleComment = (event) => {
    this.setState({ comment: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({title: '', comment: ''});
  }

  render() { 
    return ( 
      <div>
        <h1>Welcome to Single Page Project!</h1>
        <h2>Please, Enter a Subject with some description.</h2>
        <form onSubmit={ this.handleSubmit }>
          <h4>Subject: </h4>
          <input
            onChange={ this.handleTitle }
            value={ this.state.title }
          />
          <h4> Description: </h4>
          <textarea
            onChange={ this.handleComment }
            value={ this.state.comment }
          />
          <div>
            <button>Submit!</button>
          </div>
        </form>
      </div>
    );
  }
}
 
export default CommentBox;