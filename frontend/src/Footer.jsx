import React from "react";
import './css/Footer.css';

function Footer(){
    return(
        <>
         <footer className="py-3 my-4 foot">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item"><a href="/home" className="nav-link px-2 text-muted">Home</a></li>
        <li className="nav-item"><a href="/contact" className="nav-link px-2 text-muted">Contact</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Mail</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
      </ul>
      <p className="text-center text-muted">Trendy Threads</p>
    </footer>

        </>
    )
}

export default Footer;