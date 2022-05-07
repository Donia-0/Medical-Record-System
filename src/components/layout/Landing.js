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
import Footer from "./Footer";

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
      {/* <!-- ***** Home Parallax Start ***** --> */}
      <section class="mini" id="work-process">
        <div class="mini-content">
          <div class="container">
            <div class="row">
              <div class="offset-lg-3 col-lg-6">
                <div class="info">
                  <h1>Work Process</h1>
                  <p>
                    Aenean nec tempor metus. Maecenas ligula dolor, commodo in
                    imperdiet interdum, vehicula ut ex. Donec ante diam.
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* <!-- ***** Mini Box Start ***** --> */}
            <div class="row">
              <div class="col-lg-2 col-md-3 col-sm-6 col-6">
                <a href="#" class="mini-box">
                  <i>
                    <img src="assets/images/work-process-item-01.png" alt="" />
                  </i>
                  <strong>Get Ideas</strong>
                  <span>Godard pabst prism fam cliche.</span>
                </a>
              </div>
              <div class="col-lg-2 col-md-3 col-sm-6 col-6">
                <a href="#" class="mini-box">
                  <i>
                    <img src="assets/images/work-process-item-01.png" alt="" />
                  </i>
                  <strong>Sketch Up</strong>
                  <span>Godard pabst prism fam cliche.</span>
                </a>
              </div>
              <div class="col-lg-2 col-md-3 col-sm-6 col-6">
                <a href="#" class="mini-box">
                  <i>
                    <img src="assets/images/work-process-item-01.png" alt="" />
                  </i>
                  <strong>Discuss</strong>
                  <span>Godard pabst prism fam cliche.</span>
                </a>
              </div>
              <div class="col-lg-2 col-md-3 col-sm-6 col-6">
                <a href="#" class="mini-box">
                  <i>
                    <img src="assets/images/work-process-item-01.png" alt="" />
                  </i>
                  <strong>Revise</strong>
                  <span>Godard pabst prism fam cliche.</span>
                </a>
              </div>
              <div class="col-lg-2 col-md-3 col-sm-6 col-6">
                <a href="#" class="mini-box">
                  <i>
                    <img src="assets/images/work-process-item-01.png" alt="" />
                  </i>
                  <strong>Approve</strong>
                  <span>Godard pabst prism fam cliche.</span>
                </a>
              </div>
              <div class="col-lg-2 col-md-3 col-sm-6 col-6">
                <a href="#" class="mini-box">
                  <i>
                    <img src="assets/images/work-process-item-01.png" alt="" />
                  </i>
                  <strong>Launch</strong>
                  <span>Godard pabst prism fam cliche.</span>
                </a>
              </div>
            </div>
            {/* <!-- ***** Mini Box End ***** --> */}
          </div>
        </div>
      </section>
      {/* <!-- ***** Home Parallax End ***** --> */}
      {/* <!-- ***** Testimonials Start ***** --> */}
      <section class="section" id="testimonials">
        <div class="container">
          {/* <!-- ***** Section Title Start ***** --> */}
          <div class="row">
            <div class="col-lg-12">
              <div class="center-heading">
                <h2 class="section-title">What do they say?</h2>
              </div>
            </div>
            <div class="offset-lg-3 col-lg-6">
              <div class="center-text text-center">
                <p>
                  Donec tempus, sem non rutrum imperdiet, lectus orci fringilla
                  nulla, at accumsan elit eros a turpis. Ut sagittis lectus
                  libero.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- ***** Section Title End ***** --> */}

          <div class="row">
            {/* <!-- ***** Testimonials Item Start ***** --> */}
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="team-item">
                <div class="team-content">
                  <i>
                    <img src="assets/images/testimonial-icon.png" alt="" />
                  </i>
                  <p>
                    Integer molestie aliquam gravida. Nullam nec arcu finibus,
                    imperdiet nulla vitae, placerat nibh. Cras maximus venenatis
                    molestie.
                  </p>
                  <div class="user-image">
                    <img src="http://placehold.it/60x60" alt="" />
                  </div>
                  <div class="team-info">
                    <h3 class="user-name">Catherine Soft</h3>
                    <span>Managing Director</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- ***** Testimonials Item End ***** --> */}

            {/* <!-- ***** Testimonials Item Start ***** --> */}
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="team-item">
                <div class="team-content">
                  <i>
                    <img src="assets/images/testimonial-icon.png" alt="" />
                  </i>
                  <p>
                    Integer molestie aliquam gravida. Nullam nec arcu finibus,
                    imperdiet nulla vitae, placerat nibh. Cras maximus venenatis
                    molestie.
                  </p>
                  <div class="user-image">
                    <img src="http://placehold.it/60x60" alt="" />
                  </div>
                  <div class="team-info">
                    <h3 class="user-name">Kelvin Wood</h3>
                    <span>Digital Marketer</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- ***** Testimonials Item End ***** --> */}

            {/* <!-- ***** Testimonials Item Start ***** --> */}
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="team-item">
                <div class="team-content">
                  <i>
                    <img src="assets/images/testimonial-icon.png" alt="" />
                  </i>
                  <p>
                    Quisque diam odio, maximus ac consectetur eu, auctor non
                    lorem. Cras quis est non ante ultrices molestie. Ut vehicula
                    et diam at aliquam.
                  </p>
                  <div class="user-image">
                    <img src="http://placehold.it/60x60" alt="" />
                  </div>
                  <div class="team-info">
                    <h3 class="user-name">David Martin</h3>
                    <span>Website Manager</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- ***** Testimonials Item End ***** --> */}
          </div>
        </div>
      </section>
      {/* <!-- ***** Testimonials End ***** --> */}
      {/* <!-- ***** Counter Parallax Start ***** --> */}
      <section class="counter">
        <div class="content">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6 col-sm-12">
                <div class="count-item decoration-bottom">
                  <strong>126</strong>
                  <span>Projects</span>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-12">
                <div class="count-item decoration-top">
                  <strong>63</strong>
                  <span>Happy Clients</span>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-12">
                <div class="count-item decoration-bottom">
                  <strong>18</strong>
                  <span>Awards Wins</span>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-12">
                <div class="count-item">
                  <strong>27</strong>
                  <span>Countries</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ***** Counter Parallax End ***** -->    */}
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
      {/* /* <!-- ***** Features Big Item End ***** --> */}
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
