import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharacterSearch from './pages/characterSearch/CharacterSearch'
import PageNotFound from './pages/PageNotFound';
import CharacterGallery from './pages/charactersGalery/CharacterGallery';
import HomePage from './pages/homePage/HomePage';

import { Provider } from "react-redux";
import { URLS } from 'constants/url';
import charactersStore from './redux/charactersStore';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={charactersStore}> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path={URLS.HOME} element={<HomePage />} />
            <Route path={URLS.ALL_CHARACTERS} element={<CharacterGallery />} />
            <Route path={URLS.SINGLE_CHARACTER} element={<CharacterSearch />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


