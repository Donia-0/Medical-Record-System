import React from "react";

import section1 from "../../images/section1.png";
import section2 from "../../images/light-color.png";

const Landing = () => {
  return (
    <div>
      {/** Welcome Area Start ** */}
      <div class="welcome-area" id="welcome">
        {/* <!-- ***** Header Text Start ***** --> */}
        <div class="text">
          <div class="container">
            <div class="row">
              <div class=" col-lg-12 col-md-12 col-sm-12">
                <h1>Electronic health record</h1>
                <p>
                  welcome to our amazing technology, we'll help you Just add our
                  Simple Store and connect to PayPal or Stripe.
                </p>
                <div className="btn">
                  <a href="#Register" class="main-button-slider">
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
      <section class="section home-feature text-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="row">
                {/* <!-- ***** Features Small Item Start ***** --> */}
                <div
                  class="col-lg-4 col-md-6 col-sm-6 col-12"
                  style={{ paddingRight: "20px" }}
                  data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s"
                >
                  <div class="card">
                    <div class="icon">
                      <i>
                        <img src="assets/images/featured-item-01.png" alt="" />
                      </i>
                    </div>
                    <h5 class="title">Modern Strategy</h5>
                    <p>
                      Customize anything in this template to fit your website
                    </p>
                  </div>
                </div>
                {/* <!-- ***** Features Small Item End ***** --> */}

                {/* <!-- ***** Features Small Item Start ***** --> */}
                <div
                  class="col-lg-4 col-md-6 col-sm-6 col-12"
                  style={{ paddingRight: "20px" }}
                  data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s"
                >
                  <div class="card">
                    <div class="icon">
                      <i>
                        <img src="assets/images/featured-item-01.png" alt="" />
                      </i>
                    </div>
                    <h5 class="title">Best Relationship</h5>
                    <p>Contact us immediately if you have a question in mind</p>
                  </div>
                </div>
                {/* <!-- ***** Features Small Item End ***** --> */}

                {/* <!-- ***** Features Small Item Start ***** --> */}
                <div
                  class="col-lg-4 col-md-6 col-sm-6 col-12"
                  data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s"
                >
                  <div class="card">
                    <div class="icon">
                      <i>
                        <img src="assets/images/featured-item-01.png" alt="" />
                      </i>
                    </div>
                    <h5 class="title">Ultimate Marketing</h5>
                    <p>
                      You just need to tell your friends about our free
                      templates
                    </p>
                  </div>
                </div>
                {/* <!-- ***** Features Small Item End ***** --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ***** Features Small End ***** --> */}

      {/* <!-- ***** Features Big Item Start ***** --> */}
      <div className="section-container">
        <section class="section ">
          <div class="container">
            <div class="row">
              <div
                class="col-lg-5 col-md-12 col-sm-12 align-self-center"
                data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
              >
                <img
                  src={section2}
                  class="rounded img-fluid d-block mx-auto"
                  alt="App"
                />
              </div>
              <div class="col-lg-1"></div>
              <div class="col-lg-6 col-md-12 col-sm-12 section-text ">
                <div class="left-heading">
                  <h2 class="section-title">Let’s discuss about you project</h2>
                </div>
                <div class="left-text">
                  <p>
                    Nullam sit amet purus libero. Etiam ullamcorper nisl ut
                    augue blandit, at finibus leo efficitur. Nam gravida purus
                    non sapien auctor, ut aliquam magna ullamcorper.
                  </p>
                </div>
              </div>
            </div>
            {/* <div class="row">
            <div class="col-lg-12">
              <div class="hr"></div>
            </div>
          </div> */}
          </div>
        </section>
        {/* <!-- ***** Features Big Item End ***** --> */}

        {/* <!-- ***** Features Big Item Start ***** --> */}
        <section class="section ">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix">
                <div class="left-heading">
                  <h2 class="section-title">
                    We can help you to grow your business
                  </h2>
                </div>
                <div class="left-text">
                  <p>
                    Aenean pretium, ipsum et porttitor auctor, metus ipsum
                    iaculis nisi, a bibendum lectus libero vitae urna. Sed id
                    leo eu dolor luctus congue sed eget ipsum. Nunc nec luctus
                    libero. Etiam quis dolor elit.
                  </p>
                </div>
              </div>
              <div class="col-lg-1"></div>
              <div
                class="col-lg-5 col-md-12 col-sm-12 align-self-center mobile-bottom-fix-big"
                data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
              >
                <img
                  src={section1}
                  class="rounded img-fluid d-block mx-auto"
                  alt="App"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* <!-- ***** Features Big Item End ***** --> */}
    </div>
  );
};

export default Landing;
