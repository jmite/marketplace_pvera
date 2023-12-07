import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <Router>
        <MainHeader />

        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
