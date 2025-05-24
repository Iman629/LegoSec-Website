import React from 'react';
import '../App.css'; // Import the shared CSS file
import { CgAlignCenter } from 'react-icons/cg';

const Documentation = () => {
    return (
        <div className='page'>

        <div className="page-container">
            
            <section >
                <h3>Let's Start</h3>
                <h1>Architecture Overview</h1>
               <p>Welcome to the beating heart of the SDK. This section breaks down how the system is engineered,
                 who's talking to who, how trust is built, and how we securely connect clients without the hassle of certificates.</p>
                 
                <h2>System Components</h2>
                <ul>
                    <li>KDC (Key Distribution Center)</li>
                    <p>The KDC acts as the central authority for:
                        <ul>
                            <li className='normalFont'>Client registration and authentication.</li>
                            <li className='normalFont'>Key generation and distribution.</li>
                            <li className='normalFont'>Connection authorization between clients.</li>
                        </ul>
                    <p>Think of it like the control tower at an airport: it doesn't fly the planes, but nothing takes off without its green light.
                         It's the only component with a certificate, and its role is crucial during the initial handshake (a.k.a. the First Shot).</p>
                    </p>
                    <li>Client SDK</li>
                    <p>The Client SDK is what developers embed in their own applications. It:
                        <ul>
                        <li className='normalFont'>Connects securely to the KDC.</li>
                        <li className='normalFont'>Performs the initial handshake.</li>
                        <li className='normalFont'>Derives a PSK (Pre-Shared Key) with the KDC.</li>
                        <li className='normalFont'>Handles all peer-to-peer encrypted communication.</li>
                        <li className='normalFont'>Authenticates and authorizes connections with other clients.</li>
                        <li className='normalFont'>Supports both ECDH and TLS-PSK secure channels.</li>
                        </ul>
                        <p>For the developer, it's a plug-and-play solution. One method call and you've got secure communication 
                        with no certificate headaches.</p>
                    </p>
                </ul>
                <img src="/flowDiagram.png" width="95%" />
                <figcaption>High level Flow Diagram.</figcaption>
                <br/>
                <h2>Key Concepts</h2>
                <ul>

                    <li>First Shot (Initial Handshake)</li>
                    <p>The first contact between a client and the KDC. Here's what goes down:
                        <ol>
                            <li className='normalFont'>Client connects to KDC over TCP.</li>
                            <li className='normalFont'>KDC sends its public key.</li>
                            <li className='normalFont'>Client generates a random parameter, encrypts it using the KDC's public key, and sends it back.</li>
                            <li className='normalFont'>KDC decrypts, generates its own parameter, encrypts it with the derived key, and sends it to the client.</li>
                            <li className='normalFont'>Now both sides have enough info to derive a shared symmetric key for the session.</li>
                        </ol>         
                        <br/>
                        No pre-shared keys, no certs on the client side. Pure math and clean crypto.
                    </p>

                    <li>Derived PSK</li>
                    <p>Once both the client and KDC have exchanged their parameters, they each: 
                        <ul>
                            <li className='normalFont'>Run a key derivation function (HKDF) using ECDH-derived secrets.</li>
                            <li className='normalFont'>Produce a symmetric PSK that is:
                                <ol>
                                    <li className='normalFont'>Unique to the session.</li>
                                    <li className='normalFont'>Known only by the KDC and the client.</li>
                                    <li className='normalFont'>Used for secure future communication.</li>
                                </ol>
                            </li>
                        </ul>
                        <br/>
                        This derived key is the bedrock for the rest of the protocol.
                    </p>

                    <li>Peer-to-Peer TLS-PSK Tunnel</li>
                    <p>When one client wants to connect to another, the KDC orchestrates:
                        <ul>
                            <li className='normalFont'>Identity verification.</li>
                            <li className='normalFont'>Authorization check (is A allowed to talk to B?).</li>
                            <li className='normalFont'>Shared PSK generation between both clients.</li>
                        </ul>
                        Once both ends have the shared key, the SDK:
                        <ul>
                            <li className='normalFont'>Uses TLS with PSK mode (no x.509 certs involved).</li>
                            <li className='normalFont'>Establishes a peer-to-peer encrypted channel.</li>
                            <li className='normalFont'>Supports bi-directional communication, using either multithreading or async I/O.</li>
                        </ul>
                        This enables encrypted messaging, file sharing, or custom payloads between clients.
                    </p>

                    <li>Client Identity / Authentication</li>
                    <p>Each client has a Secret Identifier, which:
                        <ul>
                            <li className='normalFont'>Is encrypted and stored locally.</li>
                            <li className='normalFont'>Is also stored (encrypted) in the KDC database.</li>
                            <li className='normalFont'>Has an expiration date (auto-renewable).</li>
                        </ul>
                        On each new session:
                        <ul>
                            <li className='normalFont'>The client checks if it's registered.</li>
                            <li className='normalFont'>If not, it registers and stores the secret locally.</li>
                            <li className='normalFont'>If yes, it authenticates with the KDC using its encrypted secret.</li>
                        </ul>
                        This is how we keep clients persistent, authorized, and secure—without managing complex credentials.
                    </p>

                    <li>Encrypted Identifier / Secret</li>
                    <p>This is the client's VIP pass:
                        <ul>
                            <li className='normalFont'>Encrypted with the KDC's public key.</li>
                            <li className='normalFont'>Stored in local JSON format.</li>
                            <li className='normalFont'>Used to authenticate with the KDC before making or accepting connections.</li>
                            <li className='normalFont'>Automatically renewable when nearing expiration.</li>

                        </ul>
                        The identifier can live in a file, an environment variable, or a config system—depending on what best suits your deployment strategy.
                    </p>
                </ul>
            </section>
        </div>

        </div>
    );
};

export default Documentation;