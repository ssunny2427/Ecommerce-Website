import React, { useState } from "react";
import axios from "axios";
import Nav from "../Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../css/sellglobal2.css';
import { Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';

function Shirts2() {
    const [name, setName] = useState("");
    const [name1, setName1] = useState("");
    const [name2, setName2] = useState("");
    const [name3, setName3] = useState("");  
    const [name4, setName4] = useState("");
    const [message, setMessage] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [selectedOption1, setSelectedOption1] = useState("");
    const [selectedSizeCategory, setSelectedSizeCategory] = useState("");
    const [selectedSizes, setSelectedSizes] = useState([]);

    const handleChange = (event) => setName(event.target.value);
    const handleChange1 = (event) => setName1(event.target.value);
    const handleChange2 = (event) => setName2(event.target.value);
    const handleChange3 = (event) => setName3(event.target.value);
    const handleChange4 = (event) => setName4(event.target.value);

    const handleForm = async (event) => {
        event.preventDefault();

        if (!selectedOption) {
            setMessage('Please select a category.');
            return;
        }
        
        if (!selectedOption1) {
            setMessage('Please select who can wear.');
            return;
        }

        if (!selectedSizeCategory) {
            setMessage('Please select a size category.');
            return;
        }

        if (selectedSizes.length === 0) {
            setMessage('Please select at least one size.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/items6', {
                name, 
                name1, 
                name2, 
                name3, 
                name4, 
                selectedOption, 
                selectedOption1,
                sizes: selectedSizes
            });
            setMessage("Product Added Successfully!");
            // Reset form fields after successful submission
            setName("");
            setName1("");
            setName2("");
            setName3("");
            setName4("");
            setSelectedOption("");
            setSelectedOption1("");
            setSelectedSizeCategory("");
            setSelectedSizes([]);
        } catch (error) {
            console.error(error);
            setMessage('Failed to process the request.');
        }
    };

    // Size categories and their corresponding sizes
    const sizeOptions = {
        "Standard Sizes": ["S", "M", "L", "XL", "XXL"],
       "Watch Size": ["Sm", "Md", "Lg", "Ov"],
        "Shoes Sizes": ["US 6", "US 8", "US 10", "US 12", "US 14"],
        "Acessories":["Free Size"],
    };

    const handleSizeCategoryChange = (category) => {
        setSelectedSizeCategory(category);
        setSelectedSizes([]); // Reset selected sizes when category changes
    };

    const handleSizeSelection = (size) => {
        if (selectedSizes.includes(size)) {
            setSelectedSizes(selectedSizes.filter(s => s !== size));
        } else {
            setSelectedSizes([...selectedSizes, size]);
        }
    };

    return (
        <>
            <Nav />
            <div className="center-wrapper">
                <div className="form-container">
                    <form onSubmit={handleForm} encType="multipart/form-data">
                        <h2 className="mb-4">Add New Product</h2>
                            <br />
                        <div className="mb-3">
                            <label className="form-label" htmlFor="brandName">Brand Name:</label>
                            <input 
                                id="brandName"
                                className="form-control" 
                                type="text" 
                                required 
                                value={name} 
                                onChange={handleChange} 
                                placeholder="Enter brand name"
                            />
                        </div>
                        <br />
                        
                        <div className="mb-3">
                            <label className="form-label" htmlFor="productName">Product Name:</label>
                            <input 
                                id="productName"
                                className="form-control" 
                                type="text" 
                                required 
                                value={name1} 
                                onChange={handleChange1} 
                                placeholder="Enter product name"
                            />
                        </div>
                        <br />
                        <div className="mb-3">
                            <label className="form-label" htmlFor="cost">Cost:</label>
                            <input 
                                id="cost"
                                className="form-control" 
                                type="number" 
                                required 
                                value={name2} 
                                onChange={handleChange2}  
                                min={0}
                                placeholder="Enter product cost"
                            />
                        </div>
                        <br />
                        <div className="mb-3">
                            <label className="form-label" htmlFor="imageUrl">Enter Image URL:</label>
                            <input 
                                id="imageUrl"
                                className="form-control" 
                                type="url" 
                                required 
                                value={name3} 
                                onChange={handleChange3} 
                                placeholder="Enter image URL"
                            />
                        </div>
                        <br />

                        {/* <div className="mb-3">
                            <label className="form-label" htmlFor="imageUpload">Upload Image:</label>
                            <input 
                                id="imageUpload" 
                                className="form-control" 
                                type="file" 
                                name="image" 
                            />
                        </div> */}
                        <br />

                        <div className="mb-3">
                            <label className="form-label">Category:</label>
                            <DropdownButton
                                as={ButtonGroup}
                                title={selectedOption || "Select Category"}
                                variant="secondary"
                            >
                                {["Shirts", "Tshirts", "Accessories", "Pants", "Night-Tracks", "Watches", "Women-Wear", "Shoes"].map((category, index) => (
                                    <Dropdown.Item 
                                        key={index} 
                                        onClick={() => setSelectedOption(category)}
                                        active={selectedOption === category}
                                    >
                                        {category}
                                    </Dropdown.Item>
                                ))}
                            </DropdownButton>
                        </div>
                        <br />
                        <div className="mb-3">
                            <label className="form-label">Who Can Wear/Use:</label>
                            <DropdownButton
                                as={ButtonGroup}
                                title={selectedOption1 || "Select Gender"}
                                variant="secondary"
                            >
                                {["Men", "Women", "Both"].map((option, index) => (
                                    <Dropdown.Item 
                                        key={index} 
                                        onClick={() => setSelectedOption1(option)}
                                        active={selectedOption1 === option}
                                    >
                                        {option}
                                    </Dropdown.Item>
                                ))}
                            </DropdownButton>
                        </div>
                        <br />
                        <div className="mb-3">
                            <label className="form-label">Size Category:</label>
                            <DropdownButton
                                as={ButtonGroup}
                                title={selectedSizeCategory || "Select Size Category"}
                                variant="secondary"
                            >
                                {Object.keys(sizeOptions).map((category, index) => (
                                    <Dropdown.Item 
                                        key={index} 
                                        onClick={() => handleSizeCategoryChange(category)}
                                        active={selectedSizeCategory === category}
                                    >
                                        {category}
                                    </Dropdown.Item>
                                ))}
                            </DropdownButton>
                        </div>
                        <br />
                        {selectedSizeCategory && (
                            <div className="mb-3">
                                <label className="form-label">Available Sizes:</label>
                                <div className="d-flex flex-wrap gap-2">
                                    {sizeOptions[selectedSizeCategory].map((size, index) => (
                                        <button 
                                            type="button"
                                            key={index}
                                            className={`btn ${selectedSizes.includes(size) ? 'btn-secondary' : 'btn-outline-secondary'}`}
                                            onClick={() => handleSizeSelection(size)}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="mb-3">
                            <label className="form-label" htmlFor="businessName">Your Business Name:</label>
                            <input 
                                id="businessName"
                                className="form-control" 
                                type="text" 
                                required 
                                value={name4} 
                                onChange={handleChange4} 
                                placeholder="Enter your business name"
                            />
                        </div>

                        {message && (
                            <div className={`alert ${message.includes("Success") ? 'alert-success' : 'alert-danger'}`} role="alert">
                                {message}
                            </div>
                        )}
                             <br />
                        <button className="btn btn-secondary" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Shirts2;
