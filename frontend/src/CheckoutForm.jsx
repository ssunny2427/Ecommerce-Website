import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './css/pay.css'

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState('');
  const [isPaymentLoading, setPaymentLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setPaymentLoading(true);

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      'your_test_secret_key', // Replace with your actual secret key from Stripe
      {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      }
    );

    setPaymentLoading(false);

    if (error) {
      setErrorMessage(error.message);
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      alert('Payment successful!');
    }
  };

  return (
    <form className='fff' onSubmit={handleSubmit}>
      <CardElement />
      <button disabled={!stripe || isPaymentLoading}>
        {isPaymentLoading ? 'Processing...' : 'Pay Now'}
      </button>
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
}

export default CheckoutForm;
