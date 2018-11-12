import React, { Component } from 'react';
import { collectionData } from 'rxfire/firestore';
import { commentsRef } from '../config/firebase';

class CommentList extends Component {
  state = { comments: [] };

  componentDidMount() {
    collectionData(commentsRef, 'id').subscribe(comments => this.setState({ comments }));
  }

  render() {
    const { comments } = this.state;
    return (
      <div className="container">
        <h4>See what has been posted!</h4>
        <ul className="list-group">
          {comments.map(comment => (
            <li className="list-group-item" key={comment.id}>
              <h5>{comment.title}</h5>
              <p>{comment.body}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CommentList;
