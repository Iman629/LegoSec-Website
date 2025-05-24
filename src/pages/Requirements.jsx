import React from 'react';
import '../App.css'; // Import the shared CSS file
import { CopyBlock, dracula } from "react-code-blocks";
import { SiPycharm } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { DiAtom } from "react-icons/di";
import { SiSublimetext } from "react-icons/si";
import { HiMiniCommandLine } from "react-icons/hi2";
import { FaWindows } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FcLinux } from "react-icons/fc";








const Requirements = () => {
    return (
        <div className='page'>

        <div className="page-container">
           
            <section >
                <h3>Let's Start</h3>
                <h1>Requirements</h1>
                <h2>Prerequisites</h2>
                <p>Before getting started with the Legosec SDK, developers must ensure that they meet the following prerequisites:</p>
                <ol>
                    <li>Programming Language:</li>
                    <p>Python Version: The Legosec SDK is built using Python. Developers must have Python version 3.6 or higher installed on their systems. 
                    It is recommended to use the latest stable version of Python to ensure compatibility and access to the latest features.</p>
                    
                    <br/>

                    <li>Required Libraries:</li>
                    <p>The Legosec SDK relies on several external libraries for its functionality. Developers must install the following libraries:</p>
                    <ul>
                        <li>cryptography:</li>
                        <p>This library provides cryptographic recipes and primitives to Python developers. It is essential for implementing encryption and decryption functionalities within the SDK.</p>

                        <li>requests:</li>
                        <p>A simple and elegant HTTP library for Python, used for making HTTP requests to the KDC and other services.</p>

                        <li>sqlite3:</li>
                        <p>This library is included with Python's standard library and is used for database management. It allows the SDK to store client identities and other necessary data securely.</p>
                        
                        <li>OpenSSL</li>
                        <p> A robust library that provides tools for implementing SSL and TLS protocols. The SDK uses OpenSSL for secure socket connections.</p>

                    </ul>

                    <br/>

                    <li>Development Environment:</li>
                    <p>IDE/Text Editor: Developers should have a suitable Integrated Development Environment (IDE) or text editor for Python development. Popular choices include:</p>
                    <ul className='listStyle' >
                        <li className='normalFont'><SiPycharm /> PyCharm</li>
                        <li className='normalFont'><DiVisualstudio /> Visual Studio Code</li>
                        <li className='normalFont'><DiAtom /> Atom</li>
                        <li className='normalFont'><SiSublimetext /> Sublime Text</li>
                        <li className='normalFont'><HiMiniCommandLine /> Command Line Interface</li>
                    </ul>

                    <br/>

                    <li>Operating System:</li>
                    <p>The Legosec SDK is compatible with major operating systems, including:</p>
                    <ul className='listStyle'>
                        <li className='normalFont'><FaWindows /> Windows</li>
                        <li className='normalFont'><FaApple /> macOS</li>
                        <li className='normalFont'><FcLinux /> Linux (Ubuntu, Fedora, etc.)</li>
                    </ul>

                    <br/>

                    <li>Network Configuration:</li>
                    <p>Ensure that the network settings allow for communication between clients and the KDC. This may involve configuring firewalls or network security settings to permit 
                    traffic on the designated ports.</p>

                    <br/>

                    <li>Database Setup:</li>
                    <p>The SDK uses SQLite for local data storage. Developers should ensure that they have the necessary permissions to create and manage SQLite databases on their systems.</p>

                    </ol>
                    <br/>

                    <p>Requirements File To simplify the installation of the required libraries, developers can use the following requirements.txt file. This file lists all the necessary dependencies for the Legosec SDK.
                        **link to the requerements file (requirements.txt)**</p>
                        <p>How to Use the Requirements File
                            Create a requirements.txt file in the root directory of your project and copy the above content into it.
                            Install the required libraries using pip by running the following command in your terminal: </p>

                            <CopyBlock
                            text={`
 pip install -r requirements.txt 
                                 `}
                            language="bash"
                            showLineNumbers={false}
                            theme={dracula}
                            wrapLines={true}
                                                />

                        <p>This command will automatically install all the libraries listed in the requirements.txt file, ensuring that your development environment is set up correctly for using the Legosec SDK.</p>
                    
                
            </section>
        </div>

        </div>
    );
};

export default Requirements;