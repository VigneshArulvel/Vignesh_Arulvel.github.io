import React from 'react';
import ReactDOM from 'react-dom';
import {Add, App} from './App';
// import test1 from 'jest';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});  

test('fake test',() => {
  expect(Add(2,3)).toBe(5);
})
