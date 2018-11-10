import React, { Component } from 'react';

class CommentBox extends Component {
  state = { comment: '' };  
  render() { 
    return ( 
      <div class="container">
        <h1>Welcome to Single Page Project!</h1>
        <h2>Please, Enter a Subject with some description.</h2>
      </div>
    );
  }
}
 
export default CommentBox;