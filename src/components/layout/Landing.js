import React from "react";

import section1 from "../../images/section1.png";
import section2 from "../../images/light-color.png";
import Cards from "./Cards";
import {
  faFolderPlus,
  faHeartPulse,
  faLaptopMedical,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";

const Landing = () => {
  return (
    <div>
      {/** Welcome Area Start ** */}
      <div className="welcome-area" id="welcome">
        {/* <!-- ***** Header Text Start ***** --> */}
        <div className="text">
          <div className="container">
            <div className="row">
              <div className=" col-lg-12 col-md-12 col-sm-12">
                <h1>Electronic health record</h1>
                <p>
                  welcome to our amazing technology, we'll help you Just add our
                  Simple Store and connect to PayPal or Stripe.
                </p>
                <div className="btn">
                  <a href="/auth/register" className="main-button-slider">
                    Create account
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ***** Header Text End ***** --> */}
      </div>
      {/* <!-- ***** Features Small Start ***** --> */}
      <section className="section home-feature text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                {/* <!-- ***** Features Small Item Start ***** --> */}
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="card">
                    <Cards
                      icon={faHeartPulse}
                      title="Heart Pulse"
                      text="The pulse is a bulge of an artery from waves of blood that course through the blood vessels each time the heart beats. The pulse is often taken at the wrist to estimate the heart rate"
                    />
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="card">
                    <Cards
                      icon={faFolderPlus}
                      title="History"
                      text="The pulse is a bulge of an artery from waves of blood that course through the blood vessels each time the heart beats. The pulse is often taken at the wrist to estimate the heart rate"
                    />
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="card">
                    <Cards
                      icon={faLaptopMedical}
                      title="Electronic health"
                      text="e-health is an emerging field in the intersection of medical informatics, public health and business, referring to health services and information delivered or enhanced through the Internet and related technologies."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-container">
        <section className="section ">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-12 col-sm-12 align-self-center">
                <img
                  src={section2}
                  className="rounded img-fluid d-block mx-auto"
                />
              </div>
              <div className="col-lg-1"></div>
              <div className="col-lg-6 col-md-12 col-sm-12 section-text ">
                <div className="left-heading">
                  <h2 className="section-title">
                    Let’s discuss about you project
                  </h2>
                </div>
                <div className="left-text">
                  <p>
                    Nullam sit amet purus libero. Etiam ullamcorper nisl ut
                    augue blandit, at finibus leo efficitur. Nam gravida purus
                    non sapien auctor, ut aliquam magna ullamcorper.
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div class="hr"></div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ***** Features Big Item End ***** -->

        <!-- ***** Features Big Item Start ***** --> */}
        <section className="section ">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 section-text ">
                <div className="left-heading">
                  <h2 className="section-title">
                    We can help you to grow your business
                  </h2>
                </div>
                <div className="left-text">
                  <p>
                    Aenean pretium, ipsum et porttitor auctor, metus ipsum
                    iaculis nisi, a bibendum lectus libero vitae urna. Sed id
                    leo eu dolor luctus congue sed eget ipsum. Nunc nec luctus
                    libero. Etiam quis dolor elit.
                  </p>
                </div>
              </div>
              <div className="col-lg-1"></div>
              <div className="col-lg-5 col-md-12 col-sm-12 align-self-center">
                <img
                  src={section1}
                  className="rounded img-fluid d-block mx-auto"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* <!-- ***** Features Big Item End ***** -->

      {/* ////////////////////////////////////////////////////////////////////////////////// */}
    </div>
  );
};

export default Landing;
