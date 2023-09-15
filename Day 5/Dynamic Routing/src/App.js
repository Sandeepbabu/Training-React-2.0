import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductsPage from './Products';
import ProductDetailPage from './ProductDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductsPage/>} />
        <Route path="/products/:userId" element={ <ProductDetailPage/>} />
           </Routes>
    </Router>
  );
}

export default App;

