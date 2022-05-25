import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import AllCharacters from '../AllCharacters'

import { Provider } from "react-redux";
import charactersStore from '../../../redux/charactersStore';

const allcharacters = (pageNum) =>{
  return (
    <Provider store={charactersStore}>
      <AllCharacters pageNum={pageNum} />);
    </Provider>
  )
}

describe('Test characters grid', () => {

  it('Should render 20 characters on the screen', async () => {
    render(allcharacters(1));
    const characters = await screen.findAllByTestId('character');
    expect(characters.length).toBe(20);
  });


  it('Should render the last element from a 20 characters grid ', async () => {
    render(allcharacters(1));
    const characters = await screen.findAllByTestId('character');
    expect(characters[characters.length - 1]).toBeInTheDocument();
  });

  it('Should render the first element from a 20 characters grid ', async () => {
    render(allcharacters(1));
    const characters = await screen.findAllByTestId('character');
    expect(characters[0]).toBeInTheDocument();
  });

});