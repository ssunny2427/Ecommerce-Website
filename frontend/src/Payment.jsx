
import './css/pay.css';import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm'; 


const stripePromise = loadStripe('pk_test_51OtS88SCbgaBCb6xgenyTessrRgWgrQ94hYtxFXewoDimT2zvqpP1sz53WBULLlMqgDzfBbMhUtQU2wKUr20AioL00b6XFYMBF');

function Payment() {

    return (
        <>
            {/* <div className="pay">
                <h5>Bill</h5><hr />
                <br />
                <h6>Total Quantity:</h6>
                <br />
                <p>Total Amount:</p>
                <br />
                <button>Proceed To Payment</button>
            </div> */}

                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                        </Elements>
        </>
    );
}

export default Payment;
