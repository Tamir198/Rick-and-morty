import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import AllCharacters from '../AllCharacters'

it('Should render characters grid to the screen',async () => {
  render(<AllCharacters pageNum={1} />);
  //TODO fix this not working
  // const characters =  screen.getByTestId('character');
  expect(characters).toBeInTheDocument();
})