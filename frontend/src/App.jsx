import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from './Signin';
import Home from './Home';
import Signup from './Signup';
import Shirts from './Shirts';
import Cart from './Cart';
import Pants from './Pants';
import Tshirts from './Tshirts';
import Watches from './Watches';
import Accessories from './Accessories';
import Women from './Women';
import Nighttracks from './Nighttracks';
import Shoes from './Shoes';
import Fifty from './Fifty';
import Fourty from './Fourty';
import Thirty from './Thirty';
import Twenty from './Twenty';
import Ten from './Ten';
import New from './New';
import Page1 from './pages/Page1';
import Sell1 from './Sell1';
import Sell from './Sell';
import Shirts1 from './sell/Shirts1';
import Shirts2 from './sell/Shirts2';
import Ingo  from './sell/Ingo';
import { CartProvider } from './cartContext';
import Home1 from './Home1';
import Payment from './Payment';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/shirts" element={<Shirts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pants" element={<Pants />} />
          <Route path="/tshirts" element={<Tshirts />} />
          <Route path="/women" element={<Women />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/watches" element={<Watches />} />
          <Route path="/nighttrack" element={<Nighttracks />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/fifty" element={<Fifty />} />
          <Route path="/fourty" element={<Fourty />} />
          <Route path="/thirty" element={<Thirty />} />
          <Route path="/twenty" element={<Twenty />} />
          <Route path="/ten" element={<Ten />} />
          <Route path="/new" element={<New />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/sell" element={<Sell1 />} />
          <Route path="/sell1" element={<Sell />} />
          <Route path="/sellshirts" element={<Shirts1 />} />
          <Route path="/shirts2" element={<Shirts2 />} />
          <Route path="/ingo" element={<Ingo />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
