import React from "react";
import "@testing-library/jest-dom/extend-expect";
import * as rtl from "@testing-library/react";
import Player from "../playerCard";

let tools;

beforeEach(() => {
  rtl.cleanup();
  tools = rtl.render(<Player name="Josh" country="Nigeria" searches={100} />);
});

describe("PlayerCard component", () => {
  it("can debug the output", () => {
    tools.debug();
  });

  it("shows the correct name", () => {
    const elementWithJoshText = tools.queryByText(/josh/i);
    expect(elementWithJoshText).toBeInTheDocument();
  });

  it("it shows the correct country", () => {
    const elementWithNigeria = tools.queryByText(/Nigeria/i);
    expect(elementWithNigeria).toBeInTheDocument();
  });

  it("it shows the correct searches", () => {
    const elementWithHundred = tools.queryByText(/100/);
    expect(elementWithHundred).toBeInTheDocument();
  });
});
