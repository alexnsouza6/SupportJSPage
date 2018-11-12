import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';
import React, { Fragment } from 'react';
import CommentBox from './CommentBox';
import CommentList from './CommentList';

export default () => (
  <Fragment>
    <CommentBox />
    <CommentList />
  </Fragment>
);
