import React, { useEffect, useState } from 'react';
import { useCart } from './cartContext';
import './css/cart.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './css/pay.css';

function Cart() {
  const { cart, setCart } = useCart();
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const removeItem = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart); 
  };

  useEffect(() => {
    const quantity = cart.reduce((acc, item) => acc + item.count, 0);
    const amount = cart.reduce((acc, item) => acc + (item.count * item.price), 0);
    setTotalQuantity(quantity);
    setTotalAmount(amount);
  }, [cart]);

  return (
    <div className='box'>
      <a href="/home" >
          <svg className='svv' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
          </svg>
        </a>
      <div className="cart-container">
        {/* <a href="/home" >
          <svg className='svv' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
          </svg>
        </a>   */}
        {cart.length === 0 ? (
          <p className='pp'>Your Cart Is Empty</p>
        ) : (
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className='imm' />
                <h5 className='t1'>{item.name}</h5>
                <p className='t2'>₹{item.price}</p>
                <p className='t3'>Quantity: {item.count}</p>
                <p>{item.size}</p>
                <button className='but' onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="pay">
        <h5>Bill</h5><hr />
        <br />
        <h6>Total Quantity: {totalQuantity}</h6>
        <br />
        <p>Total Amount: ₹{totalAmount}</p>
        <br />
        <a href="/payment"><button>Proceed To Payment</button></a>     
      </div>
    </div>
  );
}

export default Cart;
