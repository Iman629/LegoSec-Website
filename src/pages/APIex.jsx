import React from 'react';
import { CopyBlock, dracula } from "react-code-blocks";


import '../App.css'; // Import the shared CSS file



const SDKref1 = () => {
    return (
        <div className='page'>
            
        <div className="page-container">
            <section >
                <h3>SDK Reference</h3>
                <h1>API Integration Example</h1>
               <p>This is a secondary page preview. As evident, content is displayed on this type of page.</p>
               <h2>Header 2</h2>
               <p>LegoSec is a cutting-edge, open-source API and SDK designed to simplify and enhance  secure communication between servers and hosts. It provides developers with a robust, 
                user-friendly solution to implement advanced security measures without the need for specialized  knowledge or costly third-party tools</p>
            </section>
                    <CopyBlock
                        text={`from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api', methods=['GET'])
def api_example():
    return jsonify({"message": "Hello from Legosec API!", "status": "Secure"})

app.run(debug=True)
`}
                        language="python"
                        showLineNumbers={true}
                        theme={dracula}
                        wrapLines={true}
                    />
        </div>

        </div>
        
    );

    
};


export default SDKref1;