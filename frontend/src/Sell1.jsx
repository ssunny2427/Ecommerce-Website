import React from "react";
import './css/sell.css';
import Nav from './Nav.jsx';

function Sell1() {
    return (
        <div className="sell-container">
            <Nav />
            <div className="header-section">
                <h1 className="headline">Marketplace Magic: Unleash Your Goods Here!</h1>
            </div>
            <div className="content-section">
            <img className="promo-image" src="https://barrymoltz.com/wp-content/uploads/2018/04/momswhosell.jpg" alt="Selling Promotion 1" />
                <h3>Become a seller on Threndy Threads</h3>
                <p>Join the ThrendyThreads.in Revolution: India’s Hottest Shopping Platform! Sell Your Products and Reap Benefits Worth $25,000!</p>

                <button className="sell-button">
                    <a href="/sell1">Start Selling</a>
                </button>

            </div>
            <div className="why-sell-section">
                <h3>Why Become a Seller on Threndy Threads?</h3>
                <ul>
                    <li>Low Costs: Benefit from minimal fees and maximize your profits.</li>
                    <li>Direct Customer Reach: Connect directly with a vast audience.</li>
                    <li>Easy to Start: Simple setup process to get your store running quickly.</li>
                    <li>24/7 Support: Get assistance whenever you need it.</li>
                    <li>Marketing Assistance: Leverage our platform’s marketing tools to boost your sales.</li>
                </ul>
            </div>
           
        </div>
    );
}

export default Sell1;
