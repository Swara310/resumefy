import React from "react";
import "../styles/Features.css";
import { Carousel } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper";
const Features = () => (
  <section className="features" id="features">
    {/* <h2>Our Features</h2> */}
    {/* <div className="feature-cards">
      <div className="feature-card">
        <h3>Easy to Use Resume</h3>
        <p>Our builder is easy to navigate for all users.</p>
      </div>
      <div className="feature-card">
        <h3>Customizable Templates</h3>
        <p>Choose from a variety of professional templates.</p>
      </div>
      <div className="feature-card">
        <h3>Instant Download</h3>
        <p>Download your resume in PDF format instantly.</p>
      </div>
    </div> */}
    <div className="homepage-container">
      <div className="content-container">
        {/* Left Side: Text Section */}
        <div className="text-section">
          <span className="highlight-text">Power of AI in your resume</span>
          <h1>
            <strong className="fw-bold">10x</strong>{" "}
            <span>your shortlisting chances with </span>
            <strong className="fw-bold">AI Powered</strong> customized Resumes
          </h1>
          <p>
            Our AI knows what employers look for in candidates across 150 roles.
            Get your own customized AI powered resume.
          </p>
          <br></br>
          <br></br>
          <br></br>
          <div className="cta-container">
            <a href="/login" className="cta-button">
              Make my resume
            </a>
            <span className="subtext">Takes only 3 steps</span>
          </div>
        </div>

        {/* Right Side: Carousel Section */}
        <div className="image-section">
          <Carousel>
            <Carousel.Item>
              <div class="slider_tagline">
                <h5>
                  <span class="love_text">
                    {" "}
                    <img
                      src="https://myoutspark.com/images/heart-icon.png"
                      class="heart_icon"
                      alt=""
                    />{" "}
                    By Engineers
                  </span>{" "}
                </h5>
              </div>
              <div className="testimonial">
                <img
                  src="https://myoutspark.com/images/rohit.png"
                  alt="Rohit Attri"
                  className="testimonial-image"
                />
                <p>
                  Customized resumes for each job application was a game
                  changer. It has helped me get so many more interview calls!
                </p>
                <div className="testimonial-author">
                  - Rohit Attri, Senior Java Developer
                </div>
              </div>
              <div className="testimonial">
                <img
                  src="https://myoutspark.com/images/uma.png"
                  alt="Uma Maheshwari"
                  className="testimonial-image"
                />
                <p>
                  This site is amazing. Personalized resume generated here has
                  helped me highlight my job application to so many more
                  applications. Mind-blowing!
                </p>
                <div className="testimonial-author">
                  - Uma Maheshwari, Java Developer
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div class="slider_tagline">
                <h5>
                  <span class="love_text">
                    {" "}
                    <img
                      src="https://myoutspark.com/images/heart-icon.png"
                      class="heart_icon"
                      alt=""
                    />{" "}
                    By Product Managers
                  </span>{" "}
                </h5>
              </div>
              <div className="testimonial">
                <img
                  src="https://myoutspark.com/images/rk.png"
                  alt="Rishi Kalantri "
                  className="testimonial-image"
                />
                <p>
                  Not getting interview calls when searching jobs is stressful.
                  That changed after creating a customized resume using this
                  platform. Even the bonuses are of amazing value &amp; give
                  confidence during interviews!
                </p>
                <div className="testimonial-author">
                  - Rishi Kalantri , Senior Product Manager
                </div>
              </div>
              <div className="testimonial">
                <img
                  src="https://myoutspark.com/images/vinay.png"
                  alt="Vinay Mehta"
                  className="testimonial-image"
                />
                <p>
                  I am still amazed by how my resume transformed after using
                  this platform. It's absolutely crisp and the right elements of
                  my profile are getting highlighted correctly.
                </p>
                <div className="testimonial-author">
                  - Uma Maheshwari, Product Manager
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div class="slider_tagline">
                <h5>
                  <span class="love_text">
                    {" "}
                    <img
                      src="https://myoutspark.com/images/heart-icon.png"
                      class="heart_icon"
                      alt=""
                    />{" "}
                    By HR Professionals
                  </span>{" "}
                </h5>
              </div>
              <div className="testimonial">
                <img
                  src="https://myoutspark.com/images/sonika.png"
                  alt="Sonika "
                  className="testimonial-image"
                />
                <p>
                  It was difficult to find the right design &amp; my resume
                  template was holding the job applications back. OutSpark not
                  only made it better but the templates are visually appealing.
                  Helped me get multiple interview confirmations
                </p>
                <div className="testimonial-author">
                  - Sonika , Senior HR Manager
                </div>
              </div>
              <div className="testimonial">
                <img
                  src="https://myoutspark.com/images/prateek.png"
                  alt="Prateek "
                  className="testimonial-image"
                />
                <p>
                  10 mins is all it took. I got an amazing resume and the
                  bonuses helped me be confident in my interview. 10/10 , will
                  use again.
                </p>
                <div className="testimonial-author">- Prateek , HR Manager</div>
              </div>
            </Carousel.Item>
            {/* Add more Carousel.Item as needed */}
          </Carousel>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 mr-auto align-content-end">
          <div class="feature-content">
            <h2 class="font-weight-bold">
              <p>One size doesn't fit all</p>
            </h2>
            <h3 class="font-weight-bold">
              Get different resumes for different job openings
            </h3>
            <p class="desc mt-4">
              Every job opening is unique and requires a certain skillset. Our
              resumes are tailormade for each job opening you apply for,
              increasing your selection likeliness manifold.
            </p>
            <div class="d-flex justify-content-center justify-content-md-start">
              <div class="hm_cta_btn d-flex flex-column align-items-center w-fit-content">
                <a href="/login" class="btn-main-md open-in-chrome">
                  Make my resume
                </a>
                <span class="mini_text">Takes only 3 steps </span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 ml-auto ">
          <div class="image-content">
            <img
              class="img-fluid figure-img"
              src="https://myoutspark.com/images/bnr1.png"
              alt="iphone"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-6 align-content-end mt-5">
          <div className="feature-content center-mob">
            <h2 className="font-weight-bold">
              <p>What they say about us</p>
            </h2>
            <p className="desc mt-4">
              Read what people have to say about resumes created from OutSpark
              and other bonuses that helped them in their careers.
            </p>
            <div className="d-flex justify-content-center justify-content-md-start">
              <div className="hm_cta_btn d-flex flex-column align-items-center w-fit-content">
                <a href="/login" className="btn-main-md open-in-chrome">
                  Make my resume
                </a>
                <span className="mini_text">Takes only 3 steps</span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-lg-6 ml-auto align-self-center"
          style={{ overflow: "hidden" }}
        >
          <div className="service-box">
            <div className="row align-items-center animate_testmonials">
              {[
                {
                  name: "Rohit Attri",
                  image: "https://myoutspark.com/images/ra.png",
                  tagline: "Recruiters Love My Tailored Resumes",
                  text: "Getting a tailored resume for each application was a dream. I've never received so much positive feedback from recruiters!",
                },
                {
                  name: "Rishi Kalantri",
                  image: "https://myoutspark.com/images/rk.png",
                  tagline: "From Interviews to Dream Job",
                  text: "I had interviews but no offers. That changed after using this platform. The interview prep tips were invaluable, and I secured my dream job!",
                },
                {
                  name: "Vinay Mehta",
                  image: "https://myoutspark.com/images/vm.png",
                  tagline: "The Ultimate Resume Upgrade",
                  text: "MyOutSpark turned my existing resume from ordinary to extraordinary. Recruiters are now noticing my skills and inviting me for interviews. It's like having a personal career booster!",
                },
                {
                  name: "Bhupender Singh",
                  image: "https://myoutspark.com/images/bs.png",
                  tagline: "Visually Appealing Resumes That Work",
                  text: "My resume's design was holding me back. This tool not only made it visually appealing but also helped me showcase my skills effectively.",
                },
              ].map((testimonial, index) => (
                <div className="col-md-6 col-xs-12" key={index}>
                  <div className="service-item">
                    <div className="profile_dt">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="image dp"
                      />
                      <p>
                        {testimonial.name}
                        <img
                          src="https://myoutspark.com/images/rating_icons.png"
                          alt="rating"
                          className="rating_cl"
                        />
                      </p>
                    </div>
                    <span className="mini_tagline">{testimonial.tagline}</span>
                    <p className="lightText">{testimonial.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="grid promoBannerGrid">
      <div className="promoBannerContent">
        <h2 className="promoBannerTitle">Try Our Easy-To-Use Resume Builder</h2>
        <p className="promoBannerDescription">
          Experience our intuitive resume builder and take a shortcut to your
          dream career. Discover why thousands of job seekers and HR experts
          trust us. Create your best resume quickly and easily today.
        </p>
        <a
          href="/resume-builder"
          className="button button--medium button--whiteBlue"
        >
          Build Your Resume Now
        </a>
      </div>
      <div className="promoBannerImageWrapper">
        <picture>
          <source
            media="(min-width: 1140px)"
            srcSet="https://cdn-images.zety.com/images/zety/landings/home/full-widht-banner-desktop-@3x.webp 1710w, https://cdn-images.zety.com/images/zety/landings/home/full-widht-banner-desktop-@2x.webp 1282w, https://cdn-images.zety.com/images/zety/landings/home/full-widht-banner-desktop-@1x.webp 641w"
            sizes="(min-width: 1140px) 1920px, (min-width: 768px) 768px"
          />
          <source
            srcSet="https://cdn-images.zety.com/images/zety/landings/home/full-widht-banner-mobile-@3x.webp 767w, https://cdn-images.zety.com/images/zety/landings/home/full-widht-banner-mobile-@3x.webp 682w, https://cdn-images.zety.com/images/zety/landings/home/full-widht-banner-mobile-@2x.webp 341w"
            sizes="(max-width: 767px) 360px, 720px"
          />
          <img
            className="promoBannerImage"
            decoding="auto"
            src="https://cdn-images.zety.com/images/zety/landings/home/full-widht-banner-desktop-@3x.webp"
            srcSet="https://cdn-images.zety.com/images/zety/landings/home/full-widht-banner-desktop-@1x.webp, https://cdn-images.zety.com/images/zety/landings/home/full-widht-banner-desktop-@2x.webp 2x, https://cdn-images.zety.com/images/zety/landings/home/full-widht-banner-desktop-@3x.webp 3x"
            sizes="(min-width: 1140px) 1920px, (min-width: 768px) 768px"
            loading="lazy"
            alt="Zety resume builder in action"
            width="872"
          />
        </picture>
      </div>
    </div>
  </section>
);

export default Features;
