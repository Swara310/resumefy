import React from "react";
import Footer from "../Footer"; // Adjusted path
import "../../styles/PrivacyPolicy.css"; // Adjusted path

const PrivacyPolicy = () => {
    return (
        <>
            <div className="privacy-container">
                <h1>Privacy Policy</h1>
                <p className="intro">
                    At <strong>Resumefy</strong>, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our resume-building services.  
                    By using our website, you agree to the collection and use of information in accordance with this policy.
                </p>

                <div className="privacy-section">
                    <h2>Information We Collect</h2>
                    <ul>
                        <li>
                            <strong>Personal Information:</strong> We may collect details such as your name, email address, contact information, and payment details when you register, make a purchase, or contact support.
                        </li>
                        <li>
                            <strong>Usage Information:</strong> We gather data about your interactions with our website, including pages visited, time spent on the site, browser type, device type, and IP address.
                        </li>
                        <li>
                            <strong>Resume Data:</strong> Any information you input into your resume, such as work history, education, and skills, is stored to facilitate editing and future use.
                        </li>
                        <li>
                            <strong>Cookies and Tracking Technologies:</strong> We use cookies and similar tracking technologies to enhance user experience, analyze trends, and personalize content.
                        </li>
                    </ul>
                </div>

                <div className="privacy-section">
                    <h2>How We Use Your Information</h2>
                    <ul>
                        <li>To create, store, and manage your resume(s) for easy access and updates.</li>
                        <li>To process payments securely and send confirmation receipts.</li>
                        <li>To provide personalized services, including resume recommendations and career insights.</li>
                        <li>To send updates regarding your account, product features, or security notifications.</li>
                        <li>To analyze usage patterns and improve the performance and usability of our website.</li>
                        <li>To comply with legal obligations and prevent fraudulent activities.</li>
                    </ul>
                </div>

                <div className="privacy-section">
                    <h2>Data Protection</h2>
                    <p>
                        We take your privacy seriously and implement industry-standard security protocols to protect your personal data.  
                        We employ encryption, secure servers, and access control measures to safeguard your information from unauthorized access, alteration, or disclosure.  
                        However, while we strive to protect your data, no online platform is completely secure, and we encourage users to take precautions such as using strong passwords and enabling two-factor authentication where applicable.
                    </p>
                </div>

                <div className="privacy-section">
                    <h2>Sharing Your Information</h2>
                    <p>
                        We respect your privacy and do not sell, trade, or rent your personal information to third parties.  
                        However, we may share your data with trusted service providers and business partners, such as payment processors and hosting services, to operate and improve our services.  
                        These third parties are obligated to keep your information confidential and use it solely for the purposes we specify.
                    </p>
                    <p>
                        Additionally, we may disclose your information if required by law, such as in response to a legal request, court order, or government inquiry.
                    </p>
                </div>

                <div className="privacy-section">
                    <h2>Your Rights</h2>
                    <p>
                        You have the right to control your personal information. You may:
                    </p>
                    <ul>
                        <li>Request access to the data we hold about you.</li>
                        <li>Update or correct inaccurate or incomplete personal information.</li>
                        <li>Request the deletion of your data (subject to legal or contractual obligations).</li>
                        <li>Withdraw consent for marketing communications at any time by unsubscribing.</li>
                    </ul>
                    <p>
                        To exercise any of these rights, you can contact our support team at <strong>support@resumefy.com</strong>.
                    </p>
                </div>

                <div className="privacy-section">
                    <h2>Changes to This Privacy Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time to reflect changes in legal requirements, business practices, or improvements to our services.  
                        When we make changes, we will update the "Last Updated" date at the bottom of this page.  
                        We encourage you to review this policy periodically to stay informed about how we protect your information.
                    </p>
                </div>

                <div className="privacy-section">
                    <h2>Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy or your personal data, please contact us:
                    </p>
                    <ul>
                        <li>📧 Email: <strong>support@resumefy.com</strong></li>
                        <li>🌐 Website: <strong>www.resumefy.com</strong></li>
                        <li>📍 Office: [Your Location, City, Country]</li>
                    </ul>
                </div>

                <p className="last-updated"><em>Last Updated: March 2025</em></p>
            </div>

            <Footer />
        </>
    );
};

export default PrivacyPolicy;
