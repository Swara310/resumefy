import React from "react";
import Footer from "../Footer"; // Adjusted path
import "../../styles/RefundPolicy.css"; // Adjusted path

const RefundPolicy = () => {
    return (
        <>
        <div className="about-container">
            <h1>Return & Refund Policy</h1>

            <p className="intro">
                We understand that customer satisfaction is essential. Please review our refund policy below to ensure clarity on our terms and conditions.
            </p>

            <div className="about-section">
                <h2>Due to the Nature of Our Services</h2>
                <p>
                    Since our platform provides digital products such as resume templates and builder tools, all sales are final. We do not offer refunds for completed resume creations or any digital downloads. 
                    However, if you experience payment issues, encounter a faulty service, or receive an incomplete product, please contact our support team within 14 days of purchase. 
                    We strive to ensure that our digital offerings meet your expectations, and we are happy to assist with any technical difficulties.
                </p>
            </div>

            <div className="about-section">
                <h2>Incorrect Charges</h2>
                <p>
                    If you were incorrectly charged, please contact us immediately at <strong>[support email]</strong> with transaction details, including the date, amount, and reference number. 
                    Our team will review and resolve the issue at the earliest. In cases where an erroneous charge is verified, we will process a refund or credit within 5-7 business days.
                </p>
            </div>

            <div className="about-section">
                <h2>Exchanges</h2>
                <p>
                    As our services are digital products, exchanges are not applicable. However, if you experience any technical issues with your purchase, such as an inability to download or use the product properly, 
                    please reach out to our customer support team for assistance. We will work to provide an appropriate resolution, which may include troubleshooting or issuing an alternative digital product if necessary.
                </p>
            </div>
            </div>
        <Footer />
        </>
    );
};

export default RefundPolicy;
