import React, { useState, useEffect } from "react";
import './css/Part2.css';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";


function Part2() {
  return (
    <div className="floatt1">
      <h1>Hot Deals!!</h1>
      <a href="/fifty"><p>Flat 50% Offer</p></a>
      <a href="/twenty"><p>Flat 20% Offer</p></a>
      <a href="/ten"><p>Flat 10% Offer</p></a>
      <a href="/new"><p>New Arrivals</p></a>
    </div>
  );
}

function Part2a() {
  return (
    <>
      <div className="backk">
        <h2 className="heads">Our Features</h2>
        <div className="feature">
          <img className="img1" src="https://imgs.search.brave.com/0EcHlHsrB8do6uPUrnzlj2it2H75LXBW0YmwkTa_P-g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by93/b3JsZHdpZGUtc2hp/cHBpbmctZGVsaXZl/cnktZXhwcmVzcy1n/cnBhaGljLWNvbmNl/cHRfNTM4NzYtMTIw/ODQ5LmpwZz9zaXpl/PTYyNiZleHQ9anBn" alt="" />
          <span>Free Delivery</span>
        </div>
        <div className="feature">
          <img className="img2" src="https://imgs.search.brave.com/1klzxyY3Cnq819-vJFeDiKJwCa3agDeKGRo8aJrzohE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9lY29tbWVyY2Vf/NjcwMzgyLTE0NTMz/MC5qcGc_c2l6ZT02/MjYmZXh0PWpwZw" alt="" />
          <span>Online Order</span>
        </div>
        <div className="feature">
          <img className="img3" src="https://imgs.search.brave.com/WswHecD8MW5-IWyXQzvn4EYmcrIp_-Q0qziu5LdCaCw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvMzc1/NjQ1OTYwL3N0b2Nr/LXBob3RvLXdvbWFu/LXB1dHRpbmctbW9u/ZXktcGlnZ3ktYmFu/ay1tb25leS11c2Ut/Y2FsY3VsYXRvcg" alt="" />
          <span>Save Money</span>
        </div>
        <div className="feature">
          <img className="img4" src="https://imgs.search.brave.com/AgcLJ92wkzGEnzEkbJgrzkKNe1yhtMW9Oosb4J1-mhk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODYz/MTkwMjMyL3Bob3Rv/L2hhcHB5LWdpcmwt/c2hvcHBpbmctaW4t/dGhlLWZhc2hpb24t/c3RvcmUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTVKZnZv/V29PV1hhNVprNFVU/R1F1QVEzWldjX0Jh/cjN3blYwVGZlYzVo/Y1U9" alt="" />
          <span>Happy Sell</span>
        </div>
        <div className="feature">
          <img className="img5" src="https://imgs.search.brave.com/qEPPvk905LNUun5V3__-tgIc9PM0DC3YskLzYGhk9S0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by8yNDctc2Vydmlj/ZS1pY29uLXN1cHBv/cnQtY2xpY2tzLXNj/cmVlbl80MzgwOTkt/NzUyNy5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw" alt="" />
          <span>24/7 Support</span>
        </div>
      </div>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="https://seikatsumi.com/wp-content/uploads/2024/02/Japanese-Mens-Fashion.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3></h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img "
            src="https://dtbtob4osa700.cloudfront.net/OfferImages/11062024173859138_offer.jpeg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3></h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img "
            src="https://www.bewakoof.com/blog/wp-content/uploads/2023/03/Fashion-Trends-for-Women.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3></h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img "
            src="https://inkforall.com/wp-content/uploads/2022/12/29a1d393-2356-1d14-b53f-e37f4d66e3b6.jpeg"
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h3></h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img "
            src="https://dtbtob4osa700.cloudfront.net/OfferImages/07062024111127272_offer.jpg"
            alt="Fifth slide"
          />
          <Carousel.Caption>
            <h3></h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

function Part3() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:5000/api/items2');
        if (Array.isArray(response.data)) {
          setItems(response.data);
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

  const handleItemClick = (itemIndex) => {
    if (itemIndex === 0) {
      navigate('/page1');
    } else if (itemIndex === 1) {
      navigate('/page2');
    } else {
      // handle other cases or provide default behavior
    }
  };

  function handleBtn(){
    navigate('/cart');
  }

  return (
    <div className="items-container">
      <h1 className="headd5">BargainBazaar</h1>
      <div className="items-list">
        {items.map((item, index) => (
          <div key={item._id} className="item" onClick={() => handleItemClick(index)}>
            <img src={item.imgurl} alt={item.type} />
            <span>{item.type}</span>
            <br />

            <h5>{item.name}</h5>
            
            <p>${item.price}</p>
            
            <div className="ratings">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
              ))}
            </div>
            <br />
            <h6>{item.sellby}</h6>
            {/* <svg onClick={handleBtn} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart2" viewBox="0 0 16 16">
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
            </svg>  */}
          </div>
        ))}
      </div>
    </div>
  );
}

export { Part2, Part2a, Part3 };
