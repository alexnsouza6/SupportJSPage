import React from 'react'
import { shallow } from 'enzyme';
import CommentList from '../CommentList';

it('renders a ul list', () => {
  const component = shallow(<CommentList/>);
  expect(component.find('ul').length).toEqual(1);
});