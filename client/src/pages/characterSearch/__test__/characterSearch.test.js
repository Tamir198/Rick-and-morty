import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'

import CharacterSearch from '../CharacterSearch'

it('should have text fiend called "Waba laba dab dab"', ()=>{
  render(<CharacterSearch></CharacterSearch>)
  const text = screen.getByText('Waba laba dab dab');
  expect(text).toBeInTheDocument();
})