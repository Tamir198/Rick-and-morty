import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllCharacters from './componenets/AllCharacters';
import SingleCharacter from './componenets/SingleCharacter/SingleCharacter';
import PageNotFound from './pages/PageNotFound';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="allcharacters" element={<AllCharacters />} />
          <Route path="singleChatacter" element={<SingleCharacter />} />
        <Route path="*" element={<PageNotFound/>} ></Route>
        </Route>
      </Routes>   
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


