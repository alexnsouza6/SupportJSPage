import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

it('renders CommentBox correctly', () => {
  const component = shallow(<App />);
  expect(component.find(CommentBox).length).toEqual(1);
  expect(component.find(CommentList).length).toEqual(1);
});
