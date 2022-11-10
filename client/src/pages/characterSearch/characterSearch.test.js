import { fireEvent, render, screen } from "react-testing-library";
import CharacterSearch from ".";

it('should have text fiend called "Waba laba dab dab"', () => {
  render(<CharacterSearch />);

  const text = screen.getByText(/Waba laba dab dab/i);

  expect(text).toBeInTheDocument();
});

describe("single character searchbar", () => {
  it("should render input element", () => {
    render(<CharacterSearch />);

    const input = screen.getByPlaceholderText("1-800");

    expect(input).toBeInTheDocument();
  });

  it("should be able to type into input", () => {
    render(<CharacterSearch />);

    const input = screen.getByPlaceholderText("1-800");

    fireEvent.change(input, { target: { value: "1" } });

    expect(input.value).toBe("1");
  });

  it('should render single character to the screen after pressing "Enter" button', async () => {
    render(<CharacterSearch />);
    
    const enterButton = screen.getByText("Enter");
    const input = screen.getByPlaceholderText("1-800");

    fireEvent.change(input, { target: { value: "1" } });

    fireEvent.click(enterButton);

    const character = await screen.findAllByTestId("character");

    expect(character[0]).toBeInTheDocument();
  });
});
