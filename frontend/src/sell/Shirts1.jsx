import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../css/sellglobal.css';
import axios from "axios";


function Shirts1() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [name3, setName3] = useState("");
  const [message, setMessage] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => setName(event.target.value);
  const handleChange1 = (event) => setName1(event.target.value);
  const handleChange2 = (event) => setName2(event.target.value);
  const handleChange3 = (event) => setName3(event.target.value);
  const handleDropdownChange = (event) => setSelectedOption(event.target.textContent);

  const handleForm = async (event) => {
    event.preventDefault(); // Prevent default form submission

    try {
      const response = await axios.post("http://localhost:5000/api/items4", {
        name,
        name1,
        name2,
        name3,
        selectedOption,
      });
      navigate('/shirts2');
      // if(selectedOption==="Shirts"){
      //   navigate('/shirts2'); 
      // }
      // else if(selectedOption==="Pants"){
      //   navigate('/pants2'); 
      // }
      // else if(selectedOption==="Accessories"){
      //   navigate('/accessories2'); 
      // }
      // else if(selectedOption==="Night-Tracks"){
      //   navigate('/nighttracks2'); 
      // }
      // else if(selectedOption==="Tshirts"){
      //   navigate('/tshirts2'); 
      // }
      // else if(selectedOption==="Watches"){
      //   navigate('/watches2'); 
      // }
      // else if(selectedOption==="Women-Wear"){
      //   navigate('/womenwear2'); 
      // }
    //  else{
    //   navigate('/ingo')
    //  }
    } catch (error) {
      setMessage('Failed to process the request.');
    }
  };

  return (
    
    <div className="center-wrapper">
      
      <form onSubmit={handleForm} className="form-container">
        <label className="label">
          Enter GST Number:
          <input type="text" className="input" required onChange={handleChange} maxLength={15} />
        </label>
        <label className="label">
          Enter Account Number:
          <input type="number" className="input" required onChange={handleChange1} maxLength={14} min={0}/>
        </label>
        <label className="label">
          Enter Account Name:
          <input type="text" className="input" required onChange={handleChange2} />
        </label>
        
        <label className="label">
          Enter Mobile Number:
          <input type="text" className="input" required onChange={handleChange3} maxLength={10} />
        </label>

        {/* Dropdown */}
        {/* <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {selectedOption || "Select An Option"}
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><button className="dropdown-item" type="button" onClick={handleDropdownChange}>Shirts</button></li>
            <li><button className="dropdown-item" type="button" onClick={handleDropdownChange}>Tshirts</button></li>
            <li><button className="dropdown-item" type="button" onClick={handleDropdownChange}>Accessories</button></li>
            <li><button className="dropdown-item" type="button" onClick={handleDropdownChange}>Pants</button></li>
            <li><button className="dropdown-item" type="button" onClick={handleDropdownChange}>Night-Tracks</button></li>
            <li><button className="dropdown-item" type="button" onClick={handleDropdownChange}>Watches</button></li>
            <li><button className="dropdown-item" type="button" onClick={handleDropdownChange}>Women-Wear</button></li>
           
          </ul>
        </div> */}

        <p>{message}</p>
        <button type="submit" className="submit-button">Register</button>
        <p>Already have an account? Go to <a href="/ingo">Sign In.</a></p>
      </form>
    </div>
  );
}

export default Shirts1;
