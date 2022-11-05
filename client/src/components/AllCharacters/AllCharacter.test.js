import { render, screen } from "react-testing-library";
import AllCharacters from ".";

describe("Test characters grid", () => {
  it("Should render 20 characters on the screen", async () => {
    render(<AllCharacters pageNum={1} />);

    const characters = await screen.findAllByTestId("character");

    expect(characters.length).toBe(20);
  });

  it("Should render the last element from a 20 characters grid", async () => {
    render(<AllCharacters pageNum={2} />);

    const characters = await screen.findAllByTestId("character");

    expect(characters[characters.length - 1]).toBeInTheDocument();
  });

  it("Should render the first element from a 20 characters grid", async () => {
    render(<AllCharacters pageNum={2} />);

    const characters = await screen.findAllByTestId("character");

    expect(characters[0]).toBeInTheDocument();
  });
});
