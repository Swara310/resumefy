// src/components/Pricing.js
import React from 'react';
import '../styles/Pricing.css';
const Pricing = () => {
  return (
    <div className="pricing" id="pricing">
      <header className="pricing-header">
        <h1>Pricing Plans</h1>
        <p>Choose the plan that fits your needs.</p>
      </header>
      <main className="pricing-content">
        <div className="pricing-card">
          <h2>Basic</h2>
          <p className="price">$9.99/month</p>
          <p>Perfect for individuals just starting out.</p>
          <ul>
            <li>Access to basic templates</li>
            <li>Download in PDF format</li>
            <li>Email support</li>
          </ul>
          <button className="pricing-btn">Get Started</button>
        </div>
        <div className="pricing-card">
          <h2>Pro</h2>
          <p className="price">$19.99/month</p>
          <p>Ideal for job seekers wanting more options.</p>
          <ul>
            <li>Access to all templates</li>
            <li>Download in multiple formats</li>
            <li>Priority email support</li>
          </ul>
          <button className="pricing-btn">Get Started</button>
        </div>
        <div className="pricing-card">
          <h2>Business</h2>
          <p className="price">$29.99/month</p>
          <p>Great for teams and businesses.</p>
          <ul>
            <li>All Pro features</li>
            <li>Collaboration tools</li>
            <li>Dedicated account manager</li>
          </ul>
          <button className="pricing-btn">Get Started</button>
        </div>
      </main>

      <section className="pricing-plans">
        <PricingCard
          title="FREE"
          package="Basic Package"
          price="FREE"
          features={[
            "Resume Tools",
            "Resume Builder",
            "Resume Templates",
            "Cover Letter Builder",
            "Cover Letter Templates",
            "Download in TXT Format",
            "Unlimited Downloads, Prints, and edits",
            "Job Tools",
            "Resume Check",
            "Instant Job Matches"
          ]}
        />
        <PricingCard
          title="MOST POPULAR"
          package="Pro Package"
          price="₹195.00"
          details="With a 14 day trial. After 14 days, auto-renews at ₹395.00 billed every 4 weeks. Cancel anytime."
          features={[
            "Resume Tools",
            "Resume Builder",
            "Resume Templates",
            "Cover Letter Builder",
            "Cover Letter Templates",
            "Download in Multiple Formats",
            "Unlimited Downloads, Prints, and edits",
            "Job Tools",
            "Resume Check",
            "Instant Job Matches",
            "Premium Tools",
            "Bold.Pro",
            "Big Interview"
          ]}
          popular
        />
        <PricingCard
          title="BEST VALUE"
          package="Annual Package"
          price="₹99.58/month"
          details="Pay ₹1,195.00 at once, save 77%. Auto-renews each year. Cancel anytime."
          features={[
            "Resume Tools",
            "Resume Builder",
            "Resume Templates",
            "Cover Letter Builder",
            "Cover Letter Templates",
            "Download in Multiple Formats",
            "Unlimited Downloads, Prints, and edits",
            "Job Tools",
            "Resume Check",
            "Instant Job Matches",
            "Premium Tools",
            "Bold.Pro",
            "Big Interview",
            
          ]}
          bestValue
        />
      </section>
      <section className="pricing-footer">
        <h3>Payment options we support:</h3>
        <p>Our customers have been hired by:</p>
      </section>
    </div>
  );
};

const PricingCard = ({ title, package: packageName, price, details, features, popular, bestValue }) => (
  <div className={`pricing-card ${popular ? 'popular' : ''} ${bestValue ? 'best-value' : ''}`}>
    {title && <div className="card-title">{title}</div>}
    <h2 className="package-name">{packageName}</h2>
    <p className="price">{price}</p>
    {details && <p className="details">{details}</p>}
    <ul className="features-list">
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
    <button className="choose-plan-btn">Choose {packageName}</button>
  </div>
);
export default Pricing;
