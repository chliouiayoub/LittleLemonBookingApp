import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate to handle the redirect
import images from "../images/images.avif"
const PersonalInfos = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");

  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    // Optionally, you can log the form data here or send it to a server
    console.log({ firstName, lastName, email, phoneNumber, paymentMethod, specialRequest });
    
    // Redirect to another page after successful submission (e.g., a confirmation page)
    navigate("/Booking"); // Replace "/confirmation" with your desired route
  };

  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <label htmlFor="first-name">First Name</label>
              <input
                id="first-name"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="last-name">Last Name</label>
              <input
                id="last-name"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="phone-number">Phone Number</label>
              <input
                id="phone-number"
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="payment-method">Payment Method</label>
              <select
                id="payment-method"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                required
              >
                <option value="">Select Payment Method</option>
                <option value="paypal">PayPal</option>
                <option value="credit-card">Credit Card</option>
              </select>
            </div>
            <div>
              <label htmlFor="special-request">Special Request</label>
              <textarea
                id="special-request"
                value={specialRequest}
                onChange={(e) => setSpecialRequest(e.target.value)}
                placeholder="Enter any special requests"
              />
            </div>
            <div>
              <input
                aria-label="Submit Reservation"
                type="submit"
                value="Submit Information"
              />
            </div>
          </fieldset>
        </form>
        <div>
                <img src={images} />
        </div>
      </section>
    </header>
  );
};

export default PersonalInfos;
