import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './css/Nav.css';

function Nav() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleChange = () => {
    navigate('/cart');
  }

  const handleSearch = async (event) => {
    event.preventDefault();
    navigate(`/search?q=${query}`);
  };

  const fetchSuggestions = async (query) => {
    if (query.length > 0) {
      const response = await fetch(`http://localhost:5000/search?q=${query}`);
      const data = await response.json();
      setSuggestions(data);
    } else {
      setSuggestions([]);
    }
  };

  useEffect(() => {
    fetchSuggestions(query);
  }, [query]);

  return (
    <>
      <div className='navv'>
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-custom">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/shirts">Shirts</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/pants">Pants</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/tshirts">T-Shirts</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/nighttrack">Night-Tracks</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/women">Women-Wear</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/watches">Watches</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/accessories">Accessories</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/shoes">Shoes</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/sell">Sell</a>
                </li>
              </ul>
              <form className="d-flex position-relative" role="search" onSubmit={handleSearch}>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button className="btn btn-outline-success" type="submit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                  </svg>
                </button>
                {suggestions.length > 0 && (
                  <ul className="suggestions-list">
                    {suggestions.map((item, index) => (
                      <li
                        key={index}
                        onClick={() => navigate(item.path)}
                        className="suggestion-item"
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>
                )}
              </form>
              <svg
                onClick={handleChange}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-cart navbar-cart-icon"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
              </svg>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Nav;
