import { render, screen } from "react-testing-library";
import Character from ".";
import CharacterModel from "../../models/Character";

it('Should have title named "Character model test title"', () => {
  const data = new CharacterModel({ name: "Character model test title" });

  render(<Character character={data} />);

  const titleElement = screen.getByText(/Character model test title/i);

  expect(titleElement).toBeInTheDocument();
});
