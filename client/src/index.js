import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharacterSearch from './pages/characterSearch/CharacterSearch'
import PageNotFound from './pages/PageNotFound';
import CharacterGallery from './pages/charactersGalery/CharacterGallery';
import HomePage from './pages/homePage/HomePage';

import { Provider } from "react-redux";
import charactersStore from './redux/charactersStore';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={charactersStore}> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path='home' element={<HomePage />} />
            <Route path="allcharacters" element={<CharacterGallery />} />
            <Route path="singleChatacter" element={<CharacterSearch />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


