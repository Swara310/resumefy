import React from "react";
import "../styles/Testimonials.css";

const Testimonials = () => (
  <section className="testimonials" id="testimonials">
    <div className="press-room">
      <div className="row align-items-center h-100">
        <div className="container_1 rounded">
          <h1
            className="text-center"
            style={{ fontSize: "30px", fontWeight: 600 }}
          >
            Trusted by Professionals who've worked at
          </h1>
          <div className="slider_row mt-4">
            <img
              className="fab"
              src="https://myoutspark.com/images/amazon_logo.png"
              alt="Amazon"
            />

            <img
              className="fab"
              src="https://myoutspark.com/images/flipkart_logo.png"
              alt="Flipkart"
            />

            <img
              className="fab"
              src="https://myoutspark.com/images/adobe_logo.png"
              alt="Adobe"
            />

            <img
              className="fab"
              src="https://myoutspark.com/images/microsoft_logo.png"
              alt="Microsoft"
            />

            <img
              className="fab"
              src="https://myoutspark.com/images/hcl_logo.png"
              alt="HCL"
            />

            <img
              className="fab"
              src="https://myoutspark.com/images/timesinternet_logo.png"
              alt="Times Internet"
            />

            <img
              className="fab"
              src="https://myoutspark.com/images/tcs_logo.png"
              alt="TCS"
            />

            <img
              className="fab"
              src="https://myoutspark.com/images/naukari.png"
              alt="Naukari"
            />
          </div>
        </div>
      </div>
      {/* Additional Images */}
      {/* <img
        src="https://cdn-images.zety.com/images/zety/landings/templates/introduction-left.png"
        alt="Introduction Left"
        className="left-image"
      />
      <img
        src="https://cdn-images.zety.com/images/zety/landings/templates/introduction-right.png"
        alt="Introduction Right"
        className="right-image"
      /> */}
    </div>
  </section>
);

export default Testimonials;
