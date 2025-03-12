import React from 'react';
import '../App.css'; // Import the shared CSS file

const FAQ = () => {
    return (
        <div className="page-container">
            
            <section >
                <h1>Frequently Asked Questions</h1>
                <h2>What is LegoSec?</h2>
                <p>LegoSec is an open-source solution designed to simplify secure server communication over TCP. It provides easy-to-use SDKs for integrating encryption, authentication, and data integrity checks.</p>
                <h2>How do I get started?</h2>
                <p>Download the SDK from the <a href="/requirements">Requirements</a> page and follow the installation guide.</p>
                <h2>Is LegoSec free to use?</h2>
                <p>Yes, LegoSec is completely free and open-source.</p>
            </section>
        </div>
    );
};

export default FAQ;