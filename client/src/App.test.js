import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "@testing-library/jest-dom/extend-expect";
import * as rtl from "@testing-library/react";

let tools;
beforeEach(() => {
  rtl.cleanup();
  tools = rtl.render(<Counter user='Peter' />);
});

describe('Counter component', () => {
  it('runs', () => {
    tools.debug();
  });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});






