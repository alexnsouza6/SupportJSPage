import React from 'react';
import { mount } from 'enzyme';
import CommentBox from '../CommentBox';

let component;

beforeEach(() => {
  component = mount(<CommentBox />);
});

afterEach(() => {
  component.unmount();
});

it('has an input, textarea and a button', () => {
  expect(component.find('input').length).toEqual(1);
  expect(component.find('textarea').length).toEqual(1);
  expect(component.find('button').length).toEqual(1);
});

describe('when testing input', () => {
  beforeEach(() => {
    component.find('input').simulate('change', {
      target: { value: 'typing something...' },
    });

    component.update();
  });

  it('has an input that user can type in', () => {
    expect(component.find('input').prop('value')).toEqual('typing something...');
  });

  it('gets empty when user submit form', () => {
    component.find('form').simulate('submit');
    component.update();
    expect(component.find('input').prop('value')).toEqual('');
  });
});

describe('when testing textarea', () => {
  beforeEach(() => {
    component.find('textarea').simulate('change', {
      target: { value: 'typing something...' },
    });

    component.update();
  });

  it('has an input that user can type in', () => {
    expect(component.find('textarea').prop('value')).toEqual('typing something...');
  });

  it('gets empty when user submit form', () => {
    component.find('form').simulate('submit');
    component.update();
    expect(component.find('textarea').prop('value')).toEqual('');
  });
});
