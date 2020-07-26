import M from "materialize-css";

import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";

import lawyer from "./lawyer.jpg";
import doctor from "./stethoscope.jpg";
import background from "./background.png";

const Home = (props) => {
  useEffect(() => {
    let elems = document.querySelectorAll(".parallax");
    M.Parallax.init(elems, {});
  });

  return (
    <Fragment>
      <div id="index-banner" className="parallax-container valign-wrapper">
        <div className="section no-pad-bot">
          <div className="container">
            <div className="row center">
              <h3 className="header s12 light">GetItDone</h3>
              <h5 className="header s12 light">We Suggest, You Decide</h5>
              <p>Get services from expert lawyers and doctors</p>
            </div>
          </div>
        </div>
        <div className="parallax">
          <img src={background} alt="Unsplashed background img 1" />
        </div>
      </div>
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s12 m6">
              <div className="icon-block">
                <h2 className="center brown-text">
                  <i className="material-icons">group</i>
                </h2>
                <h5 className="center">Easy registrations</h5>

                <p className="light">
                  If you are an expert who can offer services go to the{" "}
                  <Link
                    to="/register"
                    style={{ textDecoration: "none", color: "blue" }}
                  >
                    register
                  </Link>{" "}
                  page and fill in your details along with your expertise. So we
                  can suggest you to our customers efficienly.
                </p>
              </div>
            </div>

            <div className="col s12 m6">
              <div className="icon-block">
                <h2 className="center brown-text">
                  <i className="material-icons">flash_on</i>
                </h2>
                <h5 className="center">Best Suggestions</h5>

                <p className="light">
                  The GetItDone bot will analyze your problem and suggest the
                  best lawyer or doctor to solve your problem. You can improve
                  your experience by providing feedback in the{" "}
                  <Link
                    to="/contact"
                    style={{ textDecoration: "none", color: "blue" }}
                  >
                    Contact Us
                  </Link>{" "}
                  Page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="parallax-container valign-wrapper">
        <div className="parallax">
          <img src={lawyer} alt="Unsplashed background img 2" />
        </div>
      </div>

      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s12 center">
              <h4>Services Offered</h4>
              <div className="row">
                <div className="col s12 m6">
                  <div className="card darken-1">
                    <div className="card-content">
                      <span className="card-title">Lawyers</span>
                      <p className="left-align">
                        Not sure which lawyer to choose to represent you. Ask
                        GetItDone to suggest one for you.
                      </p>
                    </div>
                    <div className="card-action">
                      Click here to use services of{" "}
                      <Link to="/lawyers" style={{ color: "blue" }}>
                        Lawyers..
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col s12 m6">
                  <div className="card darken-1">
                    <div className="card-content">
                      <span className="card-title">Doctors</span>
                      <p className="left-align">
                        Not sure which doctor to choose to treat you. GetItDone
                        can suggest a doctor for you.
                      </p>
                    </div>
                    <div className="card-action">
                      Click here to use services of{" "}
                      <Link to="/doctors" style={{ color: "blue" }}>
                        Doctors..
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="parallax-container valign-wrapper">
        <div className="parallax">
          <img src={doctor} alt="Unsplashed background img 3" />
        </div>
      </div>

      <footer className="page-footer black">
        <div className="container">
          <div className="row">
            <div className="col l6 push-l3 s12">
              <h5 className="white-text">About Us</h5>
              <p className="grey-text text-lighten-4">
                GetItDone is a website which provides Law and Medical services.
                The Intelligent Chatbot will suggest the lawyers and doctors
                based on your problem and location. The chatbot can predict the
                disease based on symptoms and suggests a relevand doctor.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Home;
