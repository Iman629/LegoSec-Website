import React from 'react';
import '../App.css'; // Import the shared CSS file

const Installation = () => {
    return (
        <div className='page'>

        <div className="page-container">
           
            <section >
                <h3>Let's Start</h3>
                <h1>Installation</h1>
                <h2>Prerequisites</h2>
                <p>Before using LegoSec, ensure you have the following:</p>
                <ul>
                    <li>Node.js installed (version 16 or higher).</li>
                    <li>A supported operating system (Windows, macOS, or Linux).</li>
                    <li>Basic knowledge of TCP/IP communication.</li>
                </ul>
                <h2>Download Links</h2>
                <p>Download the latest SDK and API files:</p>
                <ul>
                    <li><a href="/download/sdk">SDK Download</a></li>
                    <li><a href="/download/api">API Download</a></li>
                </ul>
            </section>
        </div>

        </div>
    );
};

export default Installation;