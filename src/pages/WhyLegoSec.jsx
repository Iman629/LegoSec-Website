import React from 'react';
import '../App.css'; // Import the shared CSS file
import { TbGitMerge } from "react-icons/tb";
import { MdOutlineAccessTime } from "react-icons/md";
import { GrMoney } from "react-icons/gr";
import { PiHeadCircuitLight } from "react-icons/pi";

const Intro1 = () => {
    return (
        <div className='page'>
            
        <div className="page-container">
            <section >
                <h3>Introduction</h3>
                <h1>Why LegoSec?</h1>
            </section>
            {/* <div className="benefits-grid">
             
              
              <div className="benefit-pair">
                <div >
                  <h3><TbGitMerge/> Ease of Integration</h3>
                  <p>Secure communication features<br/> with minimal code changes.</p>
                </div>
                
                <div >
                  <h3><MdOutlineAccessTime/> Time-Saving</h3>
                  <p>Simplifies security protocols,<br/> speeding up development</p>
                </div>
              </div>
            
              <div className="benefit-pair">
                <div >
                  <h3><GrMoney/> Cost-Effective</h3>
                  <p>Open-source solution eliminates<br/> the need for expensive tools.</p>
                </div>
                <div >
                  <h3><PiHeadCircuitLight/> Developer-Friendly</h3>
                  <p>Works seamlessly with existing<br/> workflows and tools.</p>
                </div>
              </div>
            </div> */}

            <h3>Why Use LegoSec Instead of Traditional TLS/Certificates?</h3>
            <p>Let's be honest—TLS with certificates is a pain in the neck.<br/>
            From endless certificate chains and CA dependency, to devops nightmares
         like cert renewal and revocation, the traditional TLS model is bloated, fragile,
          and outdated for many real-world systems—especially in peer-to-peer, decentralized, or IoT contexts.</p>

          <br/>
          <h3>This SDK was built for one purpose:</h3>
          <p>To make secure end-to-end encrypted communication effortless—without needing to babysit a single certificate.</p>

          <br/>
          <h3>The Problem with Traditional TLS</h3>
          <p>Sure, TLS is secure. But managing it? That's a full-time job.
            <ul>
                <li>Cert Creation:</li>
                <p>Manual CSR generation, CA approval, time delays.</p>
                <li>Renewal Madness:</li>
                <p>Every few months, rotate and restart services.</p>
                <li>Revocation:</li>
                <p>CRLs and OCSP barely work at scale.</p>
                <li>Complex PKI:</li>
                <p>Private CA setups are fragile, expensive, and overkill for most apps.</p>
                <li>Dev Fatigue:</li>
                <p>Your team shouldn't be blocked because Let's Encrypt failed today.</p>
            </ul>
          </p>

          <br/>
          <h3>Why Our SDK Wins?</h3>
          <p>Our SDK uses modern cryptographic primitives (ECDH + HKDF) and PSK-based TLS
             to create a secure channel without needing any x.509 certs on the client side.
             <ul>
                <li className="normalFont">One-time handshake with the KDC.</li>
                <li className="normalFont">Dynamic PSK generation on the fly.</li>
                <li className="normalFont">Peer-to-peer secure tunnels without any cert configuration.</li>
                <li className="normalFont">Simplified identity system using encrypted secrets instead of cert chains.</li>
                <li className="normalFont">Drop-in experience for devs: No certs, no OpenSSL config, no BS.</li>

             </ul>
          </p>

          <br/>
            <table>
                <tr>
                    <th>Feature</th>
                    <th>Traditional TLS (Certificate)</th>
                    <th>Our SDK</th>
                </tr>
                <tr>
                    <td>Certificate Management</td>
                    <td>Requires CSR, CA, manual renewal, and
                    tracking expiration</td>
                    <td>No certificates needed on client side</td>
                </tr>
                <tr>
                    <td>Renewal</td>
                    <td>Needs periodic renewal and service restart</td>
                    <td>Identities auto-renewed seamlessly</td>
                </tr>
                <tr>
                    <td>Mutual Authentication</td>
                    <td>Complex with mutual TLS, needs certs on
                    both ends</td>
                    <td>Achieved via encrypted secret and
                    KDC validation</td>
                </tr>
                <tr>
                    <td>Setup Complexity</td>
                    <td>Openssl config, trust stores, cert pinning </td>
                    <td>Single SDK method call handles the
                    entire handshake</td>
                </tr>
                <tr>
                    <td>Peer-to-Peer Encryption</td>
                    <td>Requires mTLS or complex PKI</td>
                    <td>Done via TLS-PSK + shared session
                    key</td>
                </tr>
                <tr>
                    <td>Revocation</td>
                    <td>CRLs, OCSP, mostly ignored in practice </td>
                    <td>Centralized at KDC level, updated
                    instantly</td>
                </tr>
                <tr>
                    <td>Deployability</td>
                    <td>Heavy, brittle in dynamic environments (IoT, P2P, microservices)</td>
                    <td>Lightweight, dynamic, no certs,works anywhere</td>
                </tr>
                <tr>
                    <td>Performance</td>
                    <td>TLS handshakes and certificate validation
                    overhead</td>
                    <td>ECDH + symmetric PSK = minimal overhead</td>
                </tr>
                <tr>
                    <td>Developer Experience</td>
                    <td>Painful, error-prone, and hard to debug </td>
                    <td>Devs call one method: secure
                    channel “just works”</td>
                </tr>
            </table>
            
            <br/>
            <h3>Ideal For</h3>
            <ul>
                <li>Peer-to-peer apps</li>
                <li>Microservices in dynamic clusters</li>
                <li>Secure messaging platforms</li>
                <li>IoT devices (low-power, no cert storage)</li>
                <li>Developing teams who hate dealing with cert infrastructure</li>
            </ul>

            <br/>
            <h3>Conclusion</h3>
            <p>If you're building a modern app and still dealing with x.509 certs manually,
                 you're wasting time and exposing your system to operational risks.
                 <br/><br/>
                 With LEGOSEC, you get the security of TLS without the overhead of PKI. 
                 It's lean, secure, and purpose-built for today's distributed systems.
            </p>
         
        </div>

        

        </div>
    );
};

export default Intro1;