import { commentsRef } from '../config/firebase';

export const saveComment = comment => dispatch => {
  commentsRef.push().set(comment);
}