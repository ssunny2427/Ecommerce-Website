import React, { useState } from "react";
import axios from "axios";
import '../css/ingo.css';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Ingo() {
    const [name, setName] = useState("");
    const [name1, setName1] = useState("");
    const [message, setMessage] = useState("");
    const [selectedOption, setSelectedOption] = useState("");

    const navigate = useNavigate();

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleChange1 = (event) => {
        setName1(event.target.value);
    }

    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.textContent);
    }

    const handleForm = async (event) => {
        event.preventDefault(); // Prevent default form submission
        try {
            const response = await axios.post('http://localhost:5000/api/items5', { name, name1 });

            setMessage("User Found Redirecting");
            navigate('/shirts2');
            // Navigation based on selected dropdown option
            // if(selectedOption==="Shirts"){
            //     navigate('/shirts2'); 
            //   }
            //   else if(selectedOption==="Pants"){
            //     navigate('/pants2'); 
            //   }
            //   else if(selectedOption==="Accessories"){
            //     navigate('/accessories2'); 
            //   }
            //   else if(selectedOption==="Night-Tracks"){
            //     navigate('/nighttracks2'); 
            //   }
            //   else if(selectedOption==="Tshirts"){
            //     navigate('/tshirts2'); 
            //   }
            //   else if(selectedOption==="Watches"){
            //     navigate('/watches2'); 
            //   }
            //   else if(selectedOption==="Women-Wear"){
            //     navigate('/womenwear2'); 
            //   }
            //  else{
            //   navigate('/ingo')
            //  }
        } catch (error) {
            setMessage('Failed to process the request.');
        }
    }

    return (
        <div className="class1">
            <form onSubmit={handleForm}>
                <div className="class2">
                    <div className="class3">
                        <label className="class4">
                            Enter GST Number:
                            <input type="text" className="class5" value={name} required onChange={handleChange} />
                        </label>
                        <label className="class4">
                            Enter Account Number:
                            <input type="number" className="class5" maxLength={15} required value={name1} onChange={handleChange1} />
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
                        </div>
                        <br /> */}

                        <button type="submit" className="class6">Log In</button>
                        <p className="class7">{message}</p>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Ingo;
