import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';
import React from 'react';
import CommentBox from './CommentBox';
import CommentList from './CommentList';

export default () => (
  <div>
    <CommentBox />
    <CommentList />
  </div>
);