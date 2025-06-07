import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FHome from './pages/F.Home.jsx';
import SearchResult from './pages/searchResult.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FHome />} />
        <Route path="/search" element={<SearchResult />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
