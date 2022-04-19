import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Character from "../Character";
import CharacterModel from "../../../models/CharacterModel"


it('Should have title named "Character model test title"', () => {
  const data = new CharacterModel(
    name = "Character model test title",
  )
  render(<Character character={data} />)
  const titleElement = screen.getByText(/Character model test title/i);
  expect(titleElement).toBeInTheDocument();
})