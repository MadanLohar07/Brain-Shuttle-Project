import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./CSS/services.css";

function Services() {
  return (
    <div className="services-main-div">
      <div className="services-main-div-1">
        <h1 className="RTCBS">Reasons to choose Brain Shuttle.</h1>
      </div>
      <div className="services-main-div-2-a">
        <div className="services-main-div-2-card">
          <h4 className="card-name">
            <div className="card-name-e">#one</div>
          </h4>
          <h2 class="card-title">Mental Health Assessments</h2>
          <p class="card-description">
            Tools to assess mental health and cognitive functioning.
          </p>
        </div>
        <div className="services-main-div-2-card">
          <h4 className="card-name">
            <div className="card-name-e">#two</div>
          </h4>
          <h2 class="card-title">Brain Games</h2>
          <p class="card-description">
            Fun and interactive activities that challenge various aspects of
            cognitive function.
          </p>
        </div>
        <div className="services-main-div-2-card">
          <h4 className="card-name">
            <div className="card-name-e">#three</div>
          </h4>
          <h2 class="card-title">Brain Health Education</h2>
          <p class="card-description">
            Information on the science behind brain health and strategies for
            maintaining it.
          </p>
        </div>
      </div>

      <div className="services-main-div-2-b">
        <div className="services-main-div-2-card">
          <h4 className="card-name">
            <div className="card-name-e">#four</div>
          </h4>
          <h2 class="card-title">Cognitive Training</h2>
          <p class="card-description">
            Activities and exercises designed to enhance memory, attention,
            problem-solving, and other cognitive functions.
          </p>
        </div>
        <div className="services-main-div-2-card">
          <h4 className="card-name">
            <div className="card-name-e">#five</div>
          </h4>
          <h2 class="card-title">Sleep Monitoring and Improvement</h2>
          <p class="card-description">
            Tools to help track and improve sleep quality, which is crucial for
            brain health.
          </p>
        </div>
        <div className="services-main-div-2-card">
          <h4 className="card-name">
            <div className="card-name-e">#six</div>
          </h4>
          <h2 class="card-title">Social Engagement Features</h2>
          <p class="card-description">
            Community forums, social groups, or challenges to promote social
            interaction and combat isolation.
          </p>
        </div>
      </div>
      <div className="services-main-div-3">
        <Link className="services-main-div-3-e" to="/starttraining">
          Start training today ➲
        </Link>
      </div>
    </div>
  );
}

export default Services;
