import React from 'react';
import '../App.css'; // Import the shared CSS file

const Intro = () => {
    return (
        <div className='page'>

        <div className="page-container">
            <section >
                <h3>Introduction</h3>
                <h1>What's LegoSec?</h1>
                <h2>Overview</h2>
                <p>Legosec is a cutting-edge software development kit (SDK) designed to
                     facilitate the creation of secure communication channels for applications.
                     It aims to simplify the implementation of end-to-end encryption,
                     allowing developers to focus on building their applications without
                      the complexities of certificate management and secure key handling.</p>

                <br/> 
                
                <h2>Key Features</h2>
                <ul>
                    <li>No Certificate Management:</li>
                        <p>Developers don’t need to manage SSL/TLS certificates—Legosec uses a simpler Pre-Shared Key (PSK) system for secure connections.</p>
                    
                    <li>End-to-End Encryption:</li>
                        <p>All data sent is encrypted, so only the intended recipient can read it—keeping information safe from outsiders.</p>
                    
                    <li>Centralized Key Distribution Center (KDC):</li>
                        <p>A central system (KDC) handles user authentication and secure key sharing, ensuring only authorized users can connect.</p>
                   
                    <li>User -Friendly API:</li>
                        <p>Developers can quickly add secure communication with just a few lines of code using the simple SDK interface.</p>
                    
                    <li>Multithreading Support:</li>
                        <p>Legosec can handle multiple users at once, making it ideal for apps that need real-time or high-volume communication.</p>
                    
                    <li>Monitoring Dashboard:</li>
                        <p>Legosec includes a user-friendly dashboard that lets users monitor secure connections, view activity logs, and track system performance in real time.</p>
                    
                </ul>
                <br/>
                <h2>Use Cases</h2>
                <ul>
                    <li>Messaging Applications:</li>
                        <p>Legosec can be used to build secure messaging platforms where users can communicate without the risk of interception.</p>
                    
                    <li>File Transfer:</li>
                        <p>Applications that require secure file sharing can leverage Legosec to ensure that files are transmitted securely between users.</p>
                    
                    <li>IoT Devices:</li>
                        <p>The SDK is suitable for Internet of Things (IoT) applications, where secure communication between devices is critical
                         for maintaining data privacy and security.</p>
                   
                    <li>Enterprise Solutions:</li>
                        <p>Businesses can integrate Legosec into their internal systems to protect sensitive communications and data exchanges
                         between employees and departments.</p>
                    
                </ul>
              
                    <br/>
                    {/* <img src="/apiVSsdk.jpeg" width="90%" height="40%"  /> */}
            </section>
           
        </div>

        </div>
       
    );
};

export default Intro;