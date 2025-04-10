import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';  // Import SweetAlert
import '../styles/Payment.css';
import {url} from '../api/apiendpoint';
function PaymentForm({ selectedPlan, onPaymentSuccess }) {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const paymentData = {
      plan: selectedPlan,
      cardNumber,
      expiryDate,
      cvv,
    };

    try {
      const response = await axios.post(url+'/api/pricing', paymentData);
      console.log(response.data.message);
      Swal.fire('Success', response.data.message, 'success'); // Show success SweetAlert
      onPaymentSuccess();
    } catch (error) {
      console.error('Error processing payment:', error);
      Swal.fire('Error', 'Error processing payment. Please try again.', 'error'); // Show error SweetAlert
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <div>
        <label className="card-label">Card Number</label>
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          required
          className="card-element"
          placeholder="1234 5678 9012 3456"
        />
      </div>
      <div>
        <label className="card-label">Expiry Date (MM/YY)</label>
        <input
          type="text"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          required
          className="card-element"
          placeholder="MM/YY"
        />
      </div>
      <div>
        <label className="card-label">CVV</label>
        <input
          type="text"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          required
          className="card-element"
          placeholder="123"
        />
      </div>
      <button type="submit" disabled={isSubmitting} className="payment-button">
        {isSubmitting ? 'Processing...' : 'Pay Now'}
      </button>
    </form>
  );
}

function Payment() {  
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setPaymentSuccessful(false);
  };

  const handlePaymentSuccess = () => {
    setPaymentSuccessful(true);
  };

  return (
    <div className="pricing-container">
      <h1 className="pricing-title">Simple payment with one goal.<br />To get you hired.</h1>
      <div className="pricing-statistics">
        <div className="statistic">
          <h2>30%</h2>
          <p>higher chance of getting a job</p>
        </div>
        <div className="statistic">
          <h2>40%</h2>
          <p>higher response rate from recruiters</p>
        </div>
      </div>
      <div className="pricing-plans">
        <div className="plan" onClick={() => handlePlanSelect('free')}>
          <h3>Basic Package</h3>
          <p className="price">FREE</p>
          <p>Start building your resume today for free.</p>
        </div>
        <div className="plan popular" data-label="MOST POPULAR" onClick={() => handlePlanSelect('pro')}>
          <h3>Pro Package</h3>
          <p className="price">₹195.00 (14-day trial)</p>
          <p>Then ₹395.00 billed every 4 weeks. Cancel anytime.</p>
        </div>
        <div className="plan best-value" data-label="BEST VALUE" onClick={() => handlePlanSelect('annual')}>
          <h3>Annual Package</h3>
          <p className="price">₹4900.00</p>
          <p>Save ₹900 when you pay annually.</p>
        </div>
      </div>
      {(selectedPlan === 'pro' || selectedPlan === 'annual') && !paymentSuccessful && (
        <div className="payment-section">
          <h2 className="payment-title">Complete Your Purchase</h2>
          <PaymentForm selectedPlan={selectedPlan} onPaymentSuccess={handlePaymentSuccess} />
        </div>
      )}
      {paymentSuccessful && (
        <div className="payment-success-message">
          <h2>Thank you for your purchase!</h2>
          <p>Your selected plan is: {selectedPlan}</p>
        </div>
      )}
    </div>
  );
}

export default Payment;
