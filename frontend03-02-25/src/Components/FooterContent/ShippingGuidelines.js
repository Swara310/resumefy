import React from "react";
import Footer from "../Footer";
import "../../styles/ShippingGuidelines.css";

const ShippingGuidelines = () => {
    return (
        <>
            <div className="shipping-container">
                <h1>Shipping Guidelines</h1>

                <section className="policy-section">
                    <h2>Shipping Policy</h2>
                    <p>
                        Resumefy provides only digital services. There are no physical shipments associated with our platform. 
                        Once a resume is created, it is instantly available for download. This ensures a seamless and hassle-free experience.
                    </p>
                    <p>
                        Additionally, users receive a confirmation email with a direct download link for their resume.
                        Please ensure your email is entered correctly to avoid delivery issues.
                    </p>
                </section>

                <section className="policy-section">
                    <h2>Digital Delivery</h2>
                    <p>
                        All services on our platform are digital in nature. Once you complete your resume using our builder, 
                        it will be immediately available for download from your account.
                    </p>
                    <p>
                        There are no physical shipping charges or delivery times. Users can download their resumes in multiple formats, such as PDF or Word.
                        In case of any file access issues, our support team is always ready to assist.
                    </p>
                </section>

                <section className="policy-section">
                    <h2>Support Services</h2>
                    <p>
                        If you face any difficulties while downloading or accessing your resume, our dedicated support team is here to help.
                        We offer assistance with:
                    </p>
                    <ul>
                        <li>Resume download issues</li>
                        <li>Editing and re-downloading resumes</li>
                        <li>Account-related queries</li>
                    </ul>
                    <p>
                        For any support-related concerns, reach out to us via email at 
                        <a href="mailto:support@resumefy.com"> support@resumefy.com</a>. 
                        We aim to respond within 24 hours.
                    </p>
                </section>

                <section className="policy-section">
                    <h2>Technical Assistance</h2>
                    <p>
                        Our technical support team is available to help with any issues related to:
                    </p>
                    <ul>
                        <li>Login and account access problems</li>
                        <li>Payment failures or transaction issues</li>
                        <li>Resume formatting and template concerns</li>
                    </ul>
                    <p>
                        You can visit our <a href="/faq">FAQ</a> page for common troubleshooting steps or 
                        <a href="/contact"> contact us</a> for direct assistance.
                    </p>
                </section>
            </div>

            <Footer />
        </>
    );
};

export default ShippingGuidelines;
