import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllCharacters from './componenets/AllCharacters';
import CharacterSearch from './pages/characterSearch/CharacterSearch';
import PageNotFound from './pages/PageNotFound';
import CharacterGallery from './pages/charactersGalery/CharacterGallery';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="allcharacters" element={<CharacterGallery/>} />
          <Route path="singleChatacter" element={<CharacterSearch/>} />
        <Route path="*" element={<PageNotFound/>} ></Route>
        </Route>
      </Routes>   
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


