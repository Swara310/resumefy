import React, { useState } from "react";
import Footer from "../Footer";
import "../../styles/FAQ.css";

const FAQ = () => {
    // FAQ Data with 10 Questions
    const faqs = [
        {
            question: "What is Resumefy?",
            answer: "Resumefy is an AI-powered resume-building platform that helps job seekers create professional resumes easily."
        },
        {
            question: "Is Resumefy free to use?",
            answer: "We offer both free and premium plans. The free version includes basic templates, while the premium version unlocks advanced features."
        },
        {
            question: "Can I download my resume?",
            answer: "Yes, you can download your resume as a PDF file once you complete it."
        },
        {
            question: "How secure is my data?",
            answer: "We use industry-standard security measures, including encryption and secure servers, to protect your personal data."
        },
        {
            question: "How do I contact customer support?",
            answer: "You can reach us at support@resumefy.com for any inquiries or assistance."
        },
        {
            question: "Can I edit my resume after downloading?",
            answer: "Yes! You can edit your resume anytime before downloading. However, for major changes after downloading, you may need to re-upload the resume for modification."
        },
        {
            question: "Do you provide resume templates?",
            answer: "Yes, we offer a variety of modern and professional resume templates tailored to different industries."
        },
        {
            question: "Do I need an account to use Resumefy?",
            answer: "Yes, creating an account allows you to save your progress and access your resumes anytime."
        },
        {
            question: "What if I forget my password?",
            answer: "You can reset your password by clicking on 'Forgot Password' on the login page and following the instructions."
        }
    ];

    // State to track open questions
    const [openIndex, setOpenIndex] = useState(null);

    // Toggle function
    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <div className="faq-container">
                <h1>Frequently Asked Questions (FAQ)</h1>
                <p className="intro">Find answers to common questions about Resumefy.</p>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div key={index} className="faq-item">
                            <button className="faq-question" onClick={() => toggleFAQ(index)}>
                                {faq.question} {openIndex === index ? "▲" : "▼"}
                            </button>
                            {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    );
};

export default FAQ;
