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


  render() { 
    return ( 
      <div>
        <h1>Welcome to Single Page Project!</h1>
        <h2>Please, Enter a Subject with some description.</h2>
        <form>
          <label>Subject: </label>
          <input
            onChange={ this.handleTitle }
            value={ this.state.title }
          />
          <label> Description: </label>
          <textarea
            onChange={ this.handleComment }
            value={ this.state.comment }
          />
        </form>
      </div>
    );
  }
}
 
export default CommentBox;