import React, { useEffect } from 'react';
import '../App.css';
import { SlQuestion } from "react-icons/sl";

const FAQ = () => {
  useEffect(() => {
    const coll = document.querySelectorAll(".collapsible");

    coll.forEach(btn => {
      btn.addEventListener("click", function () {
        this.classList.toggle("active");

        const content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    });

    return () => {
      coll.forEach(btn => {
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);
      });
    };
  }, []);

  return (
    <div className='page'>
      <div className="page-container">


        <h3>Help</h3>
        <h1>Frequently Asked Questions</h1>

        <button className="collapsible"><SlQuestion /> What is LegoSec and how is it different from traditional TLS?</button>
        <div className="content" style={{ display: 'none' }}>
          <p> LegoSec is an SDK and protocol that enables developers to create secure communication channels without relying on traditional digital certificates. Instead of x.509 certificates, it uses a parameter-based PSK (pre-shared key) model, derived during a secure handshake with a central Key Distribution Center (KDC). This makes it simpler, faster, and easier to manage at scale, especially in dynamic or ephemeral environments.</p>
        </div>

        <button className="collapsible"><SlQuestion /> Can clients control who connects to them?</button>
        <div className="content" style={{ display: 'none' }}>
          <p> Yes. Each client has an authorization list stored in the KDC database. Only clients with matching authorized identifiers will be allowed to request or accept connections. This enables controlled access and privacy.</p>
        </div>

        <button className="collapsible"><SlQuestion /> Is this protocol open-source?</button>
        <div className="content" style={{ display: 'none' }}>
          <p> Yes. The SDK, KDC server, and related modules are open-source and available on GitHub. Contributions, suggestions, and security audits are welcome!</p>
        </div>

        <button className="collapsible"><SlQuestion /> How does this SDK avoid using certificates?</button>
        <div className="content" style={{ display: 'none' }}>
          <p> The SDK replaces x.509 certificates with a secure key derivation process using public key cryptography (ECDH + RSA). Each client derives a PSK through a secure handshake with the KDC and uses that to establish encrypted TLS-PSK connections.</p>
        </div>

        <button className="collapsible"><SlQuestion /> What happens if a client's identity expires?</button>
        <div className="content" style={{ display: 'none' }}>
          <p> The SDK checks expiration before authentication. If expired, it renews the identity automatically by securely communicating with the KDC, provided the original identifier is still valid and untampered.</p>
        </div>




        

      </div>
    </div>
  );
};

export default FAQ;
