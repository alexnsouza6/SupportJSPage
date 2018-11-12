import React, { Component } from 'react';
import { collectionData } from 'rxfire/firestore';
import { commentsRef } from '../config/firebase';

class CommentList extends Component {
  state = { comments: [] }; /* comments refers to the array of comments that is loaded from db */

  componentDidMount() {
    /* collectionData is a method from rxfire that works like a observable.
       It fires whenever a new data is posted in db.
    */
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
