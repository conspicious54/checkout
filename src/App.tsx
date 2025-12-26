import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CheckoutPage from './components/CheckoutPage';
import MainCheckoutPage from './components/MainCheckoutPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CheckoutPage />} />
        <Route path="/main" element={<MainCheckoutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;