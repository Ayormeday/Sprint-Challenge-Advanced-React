import React from "react";
import "@testing-library/jest-dom/extend-expect";
import * as rtl from "@testing-library/react";
import Player from "../playerCard";

let tools;

beforeEach(() => {
  rtl.cleanup();
  tools = rtl.render(<Player name="Peter" country='Nigeria' searches={100} />);
});

describe("PlayerCard component", () => {
  it("can debug the output", () => {
    tools.debug();
  });

  it("shows the correct name", () => {
    const elementWithJoshText = tools.queryByText(/peter/i);
    expect(elementWithJoshText).toBeInTheDocument();
  });

  it("it shows the correct country", () => {
    const elementWithZero = tools.queryByText(/Nigeria/i);
    expect(elementWithZero).toBeInTheDocument();
  });

  it("it shows the correct searches", () => {
    const elementWithZero = tools.queryByText(/100/);
    expect(elementWithZero).toBeInTheDocument();
  });
});
