import React from 'react';
import '../App.css'; // Import the shared CSS file

const Documentation = () => {
    return (
        <div className="page-container">
            
            <section >
                <h1>Documentation</h1>
                <ul>
                    <li><a href="#installation">Installation and Setup</a></li>
                    <li><a href="#usage">Usage Instructions</a></li>
                    <li><a href="#integration">SDK Integration Examples</a></li>
                    <li><a href="#error-handling">Error Handling and Exceptions</a></li>
                    <li><a href="#functions">Detailed SDK Functions</a></li>
                </ul>
            </section>
        </div>
    );
};

export default Documentation;