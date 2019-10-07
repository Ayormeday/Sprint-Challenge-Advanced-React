import React from 'react';
import useDarkMode from '../useDarkMode';
import * as rtl from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

let tools;
beforeEach(() => {
  rtl.cleanup();
  tools = rtl.render(<Counter user='Peter' />);
});

describe('use Dark Mode hook', () => {
  it('runs', () => {
    tools.debug();
  });
