import React from "react";
import Footer from "../Footer"; // Adjusted path
import "../../styles/TermsAndConditions.css"; // Adjusted path

const TermsAndConditions = () => {
    return (
        <>
            <div className="terms-container">
                <h1>Terms & Conditions</h1>
                <p className="intro">
                    Welcome to <strong>Resumefy</strong>, a resume builder platform. These Terms & Conditions govern your use of our website and services. By accessing or using our services, you agree to comply with these terms. If you do not agree with the terms, please do not use our platform.
                </p>

                <div className="terms-section">
                    <h2>1. Account Registration</h2>
                    <p>
                        To use our services, you may need to create an account. You agree to provide accurate, current, and complete information and maintain the confidentiality of your login credentials. Any activity under your account is your responsibility.
                    </p>
                </div>

                <div className="terms-section">
                    <h2>2. Service Use</h2>
                    <p>
                        You are granted a limited, non-exclusive, non-transferable license to access and use the resume builder tools for personal and professional purposes. All content created on the platform remains your property, but we retain the right to use anonymous data for improving the service.
                    </p>
                </div>

                <div className="terms-section">
                    <h2>3. User Responsibilities</h2>
                    <p>
                        You agree to use our platform responsibly and comply with all applicable laws. You must not engage in fraudulent, abusive, or unethical behavior while using our services.
                    </p>
                </div>

                <div className="terms-section">
                    <h2>4. Prohibited Activities</h2>
                    <p>
                        You may not:
                        <ul>
                            <li>Use our platform for illegal activities.</li>
                            <li>Distribute, copy, or modify content without authorization.</li>
                            <li>Upload malicious software, viruses, or engage in hacking.</li>
                            <li>Use automated scripts or bots to access our services.</li>
                        </ul>
                    </p>
                </div>

                <div className="terms-section">
                    <h2>5. Payment Terms</h2>
                    <p>
                        Certain features of our website may require a subscription or one-time payment. By purchasing our services, you agree to pay the indicated fees. Payments are processed securely through third-party payment processors.
                    </p>
                </div>

                <div className="terms-section">
                    <h2>6. Privacy & Data Protection</h2>
                    <p>
                        We respect your privacy and are committed to protecting your data. Please review our <strong>Privacy Policy</strong> for more details on how we collect, use, and protect your information.
                    </p>
                </div>

                <div className="terms-section">
                    <h2>7. Intellectual Property</h2>
                    <p>
                        All content and software on this website, including the resume builder tools, templates, and designs, are owned by <strong>Resumefy</strong> or licensed to us. You may not copy, modify, or distribute any content without our permission.
                    </p>
                </div>

                <div className="terms-section">
                    <h2>8. Limitation of Liability</h2>
                    <p>
                        We are not liable for any loss, damage, or inconvenience arising from the use of our services or website. The platform is provided "as is" and without any guarantees.
                    </p>
                </div>

                <div className="terms-section">
                    <h2>9. Termination of Services</h2>
                    <p>
                        We reserve the right to suspend or terminate your access to our services if you violate these terms. We may also remove content that violates our policies without prior notice.
                    </p>
                </div>

                <div className="terms-section">
                    <h2>10. Amendments</h2>
                    <p>
                        We reserve the right to update these Terms & Conditions at any time. Changes will be posted on this page, and the date of the last update will be indicated.
                    </p>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default TermsAndConditions;
