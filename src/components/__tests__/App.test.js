import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';

it('renders CommentBox correctly', () => {
  const component = shallow(<App />);
  expect(component.find(CommentBox).length).toEqual(1);
});