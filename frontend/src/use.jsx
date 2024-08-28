import React, { useState, useEffect } from "react";
import './css/Part2.css';
import axios from 'axios';

function Part3() {
  const [items, setItems] = useState([]);
  const [itemCounts, setItemCounts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:5000/api/items2');
        if (Array.isArray(response.data)) {
          setItems(response.data);
          setItemCounts(new Array(response.data.length).fill(0)); // Initialize counts
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

  return (
    <div className="items-container">
      <h1 className="headd5" >BargainBazaar</h1>
   
      <div className="items-list">
        {items.map((item, index) => (
          <div key={item._id} className="item">
           
            <img src={item.imgurl} alt={item.type} onError={(e) => { e.target.onerror = null; e.target.src="default-image-url"; }} />
            <span>{item.type}</span>
            <h5>{item.name}</h5>
            <p>${item.price}</p>
         
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg><svg className="svgg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>

                    <div className="item-actions">
                      <button className="action-button" onClick={() => handleDecrement(index)}>-</button>
                      <span className="item-count">{itemCounts[index]}</span>
                      <button className="action-button" onClick={() => handleIncrement(index)}>+</button>
                    </div>
                    <button type="sumbit" className="btnn"><a className="hreff" href="/cart">Cart</a></button>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
</svg>
                    
                  </div>
                  
          
          
        ))}
        
      </div>
    </div>
  );
}

export { Part3 };
