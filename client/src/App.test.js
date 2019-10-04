import React from 'react';
import App from './App';
import "@testing-library/jest-dom/extend-expect";
import * as rtl from "@testing-library/react";

let tools;
beforeEach(() => {
  rtl.cleanup();
  tools = rtl.render(<App />);
});

describe('Counter component', () => {
  it('runs', () => {
    tools.debug();
  });
});