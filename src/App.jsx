import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import HomePage from "./HomePage";
import Services from "./Services";
import AboutUs from "./AboutUs";
import FAQs from "./FAQs";
import img1 from "./images/mainDivimg2.png";
import SignUp from "./SignUp";
import StartTraining from "./StartTraining";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="faqs" element={<FAQs />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="starttraining" element={<StartTraining />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const Home = () => {
  return (
    <>
      <div className="main-div">
        <div className="main-div-1">
          <div id="brainShuttle1">
            <h5 className="main-div-1-ele-1">#brainShuttle</h5>
          </div>

          <h1 className="main-div-1-ele">
            Support for Mental Wellness Stress Management
          </h1>

          <h4 className="main-div-1-ele-3">
            "Welcome to Brain Shuttle. Empowering you to take charge of your
            mental well- being, we're here to provide you with accessible and
            effective tools for optimal brain health."
          </h4>

          <div id="start-training">
            <Link className="main-div-1-ele-4" to="/starttraining">
              Start training today →
            </Link>
          </div>
        </div>
        <div className="main-div-2">
          <img className="mainDivimg2" src={img1} alt="image" />
        </div>
      </div>
    </>
  );
};

export default App;
