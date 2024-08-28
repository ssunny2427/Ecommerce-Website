
import Nav from "./Nav";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useCart } from './cartContext';
function Pants(){
  const [items, setItems] = useState([]);
  const [itemCounts, setItemCounts] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState({});
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:5000/api/items7', { 
          selectedOption: "Pants"
        });
        if (Array.isArray(response.data)) {
          setItems(response.data);
          setItemCounts(new Array(response.data.length).fill(0));
        } else {
          console.error('Unexpected response format:', response.data);
          setItems([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setItems([]);
      }
    };

    fetchData();
  }, []);

  const handleIncrement = (index) => {
    const newCounts = [...itemCounts];
    newCounts[index] += 1;
    setItemCounts(newCounts);
  };

  const handleDecrement = (index) => {
    const newCounts = [...itemCounts];
    if (newCounts[index] > 0) {
      newCounts[index] -= 1;
    }
    setItemCounts(newCounts);
  };

  const handleSizeSelect = (itemId, size) => {
    setSelectedSizes(prevSizes => ({
      ...prevSizes,
      [itemId]: size,
    }));
  };

  const handleAddToCart = (item, index) => {
    if (itemCounts[index] > 0) {
      addToCart({ 
        id: item._id, 
        name: item.name, 
        price: item.name2, 
        image: item.name3,
        count: itemCounts[index],
        size: selectedSizes[item._id] || "N/A" // Include selected size
      });
    }
  };

  return (
    <div className="items-container">
      <Nav />
      <h2 className="headd5">Pants</h2>
      <div className="items-list">
        {items.map((item, index) => (
          <div key={item._id} className="item">
            <img 
              src={item.name3} 
              alt={item.name1} 
              onError={(e) => { e.target.onerror = null; e.target.src="default-image-url"; }} 
            />
            <h5>{item.name}</h5>
            <h4>{item.name1}</h4>
            <p>₹{item.name2}</p>
            <p>{item.name4}</p>
            <p>{item.selectedOption1}</p>

            <p>Available Sizes:</p>
            <div className="sizes-container">
              {item.sizes.map((size, idx) => (
                <button  
                  key={idx} 
                  className={`size-button ${selectedSizes[item._id] === size ? 'selected' : ''}`} 
                  onClick={() => handleSizeSelect(item._id, size)}
                >
                  {size}
                </button>
              ))}
            </div>

            <div className="item-actions">
              <button className="action-button" onClick={() => handleDecrement(index)}>-</button>
              <span className="item-count">{itemCounts[index]}</span>
              <button className="action-button" onClick={() => handleIncrement(index)}>+</button>
            </div>
            <NavLink to='/cart' onClick={() => handleAddToCart(item, index)}>
              <button type="submit" className="btnn">Add to Cart</button>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pants;