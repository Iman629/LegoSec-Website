import React from 'react';
import '../App.css'; // Import the shared CSS file

const Support = () => {
    return (
        <div className="page-container">
            
            <section >
                <h1>Support</h1>
                <h2>Contact Us</h2>
                <p>If you need assistance, feel free to reach out to us:</p>
                <ul>
                    <li>Email: support@legosec.com</li>
                    <li>Phone: +1 (123) 456-7890</li>
                </ul>
                <h2>Additional Resources</h2>
                <p>Check out the following resources for more help:</p>
                <ul>
                    <li><a href="/documentation">Documentation</a></li>
                    <li><a href="/faq">FAQ</a></li>
                </ul>
            </section>
        </div>
    );
};

export default Support;