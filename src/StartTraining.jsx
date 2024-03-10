import React from "react";
import "./CSS/starttraining.css";

function StartTraining() {
  return (
    <div className="main-div">
      <div className="start-training-card">
        <h5 className="card-name-st">Free</h5>
        <h1 className="amount">FREE</h1>
        <p className="card-para">forever free for individuals</p>
        <ul className="stlist">
          <li>Unlimited Access</li>
          <li>Basic Cognitive Assessments </li>
          <li>Educational Articles</li>
          <li>Unlimited Tasks </li>
        </ul>
        <button className="card-btn">Start for free ➲</button>
      </div>
      <div className="start-training-card">
        <h5 className="card-name-st-1">Unlimited</h5>
        <h1 className="amount">₹499</h1>
        <p className="card-para">per user/month billed </p>
        <ul className="stlist">
          <li>All in Free + </li>
          <li>Unlimited Guests</li>
          <li>Priority Support</li>
          <li>Smart Notifications </li>
        </ul>
        <button className="card-btn">Get Unlimited ➲</button>
      </div>
      <div className="start-training-card">
        <h5 className="card-name-st-1">Enterprise</h5>
        <h1 className="amount">₹799</h1>
        <p className="card-para">per user/month billed</p>
        <ul className="stlist">
          <li>All in Unlimited +</li>
          <li>Bulk User Onboarding </li>
          <li>Custom Programs</li>
          <li>Dedicated Support </li>
        </ul>
        <button className="card-btn">Get Enterprise ➲</button>
      </div>
    </div>
  );
}

export default StartTraining;
