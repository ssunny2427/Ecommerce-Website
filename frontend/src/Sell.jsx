import React, { useState } from "react";
import './css/sell.css';
import Nav from './Nav.jsx';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Footer from './Footer.jsx'

function Sell() {
    // const [name, setName] = useState('');
    // const [type, setType] = useState('');
    // const [imgurl, setImgurl] = useState('');
    // const [price, setPrice] = useState(0);
    // const [sellby, setSellby] = useState('');
    // const [message, setMessage] = useState('');
    // const navigate = useNavigate();

    // function handleChange(event) {
    //     setName(event.target.value);
    // }

    // function handleChange1(event) {
    //     setType(event.target.value);
    // }
    
    // function handleChange2(event) {
    //     setImgurl(event.target.value);
    // }

    // function handleChange3(event) {
    //     setPrice(event.target.value);
    // }

    // function handleChange4(event) {
    //     setSellby(event.target.value);
    // }

    // const handleForm1 = async (event) => {
        
        
    //     try {
    //         const response = await axios.post('http://localhost:5000/api/items3', { name, type, imgurl, price, sellby });
    //         setMessage('Data saved successfully!');
    //         navigate('/sell1')

    //     } catch (error) {
    //         if (error.response && error.response.status === 404) {
    //             setMessage('User not found.');
    //         } else {
    //             setMessage('Failed to register user.');
    //         }
    //     }
    // }

    return (
        <>
            <div className="bodyy">
                <Nav />
                <form >
                    <h4>Mastering Product Sales on Trendy Threads</h4>
                    <p className="box-model">
                        Selling products on Trendy Threads is a breeze with our user-friendly platform designed to maximize your reach and boost your sales. Whether you're a seasoned seller or just starting out, Trendy Threads provides you with all the tools you need to showcase your products effectively, connect with a wide audience, and manage your business seamlessly. From intuitive listing options to advanced analytics, we're here to help you succeed in the dynamic world of fashion retail. Join Trendy Threads today and take your sales to the next level!
                    </p>


                    {/* <label>Brand Name:
                        <input type="text" onChange={handleChange1} value={type} />
                    </label>
                    <br />

                    <label>Image URL:
                        <input type="text" onChange={handleChange2} value={imgurl} />
                    </label>
                    <br />

                    <label>Price:
                        <input type="number" onChange={handleChange3}  value={price} min={0} />
                    </label>
                    <br />

                    <label>Item Name:
                        <input type="text" onChange={handleChange} value={name} />
                    </label>
                    <br />

                    <label>Company Name:
                        <input type="text" onChange={handleChange4} value={sellby} />
                    </label>
                    <br /> */}
                    
                    {/* <button type="submit">Save</button> */}
                </form>
                <div className="floats">
                    <h4>Sell Your Products!!</h4>
                <button type="click" ><a className="sellbtn" href="/sellshirts">Sell Your Products</a></button>
                    <br />
                    <br />
                    {/* <button type="click" ><a className="sellbtn" href="/sellpants">Pants</a></button>
                    <br />
                    <br />
                    <button type="click" ><a className="sellbtn" href="/selltshirts">T-Shirts</a></button>
                    <br />
                    <br />
                    <button type="click" ><a className="sellbtn" href="/sellnight">Night-Tracks</a></button>
                    <br />
                    <br />
                    <button type="click" ><a className="sellbtn" href="/sellwomen">Women-Wear</a></button>
                    <br />
                    <br />
                    <button type="click" ><a className="sellbtn" href="/sellwatch">Watches</a></button>
                    <br />
                    <br />
                    <button type="click" ><a className="sellbtn" href="/sellaccer">Accessories</a></button> */}
                </div>
                <div className="image-container">
                   
                    <img className="image2" src="https://imgs.search.brave.com/OeMpYMu5a4S7sn1KP1cwg30JZWaVSukwyNu2-SK82Sg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzQzLzEwLzE1/LzM2MF9GXzQzMTAx/NTYyX3dOQmNvRlFO/UThURm9LZnJDbTFF/OGFydDRjU0pHYnYy/LmpwZw" alt="" />
                    <img className="image3" src="https://imgs.search.brave.com/x8ZbhVxcN1o90JTDQXif0PUmhc7rgDQnJ51bEylujH0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXdlYXJ0c2hpcnRz/LmNvbS9jZG4vc2hv/cC9maWxlcy9Ib21l/cGFnZWdyYXBoaWMu/anBnP3Y9MTY3ODc4/ODUwNiZ3aWR0aD0x/NDIw" alt="" />
                    <img className="image4" src="https://imgs.search.brave.com/N_S_qaVY_qHlUDGjVTtDVf8VHmRxdlrKe3xHp0-w31c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NjEwNTM3MjAtNzZj/ZDczZmYyMmMzP3E9/ODAmdz0xMDAwJmF1/dG89Zm9ybWF0JmZp/dD1jcm9wJml4bGli/PXJiLTQuMC4zJml4/aWQ9TTN3eE1qQTNm/REI4TUh4elpXRnlZ/Mmg4TVRaOGZITm9h/WEowYzN4bGJud3dm/SHd3Zkh4OE1BPT0" alt="" />
                   
                    <img className="image6" src="https://imgs.search.brave.com/NdkP_hGsEQw2TR4NRlYKARwtEeM-hmAah40FNpYemdM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/NC8wNi8xMS8yNC9m/YXNoaW9uLTIyMDgw/NDVfNjQwLmpwZw" alt="" />
                    
                </div>
                <Footer />

                {/* {message && <p>{message}</p>} */}
            </div>

        </>
    );
}

export default Sell;
