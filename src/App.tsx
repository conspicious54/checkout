import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CheckoutPage from './components/CheckoutPage';
import MainCheckoutPage from './components/MainCheckoutPage';
import CompletedPurchasePage from './components/CompletedPurchasePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CheckoutPage />} />
        <Route path="/main" element={<MainCheckoutPage />} />
        <Route path="/completedpurchase" element={<CompletedPurchasePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;