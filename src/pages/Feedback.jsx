import React, { useState } from 'react';
import '../App.css'; // Import the shared CSS file

const Feedback = () => {
    const [feedback, setFeedback] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost/backend/feedback.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ feedback }),
        });
        const result = await response.json();
        alert(result.message);
    };

    return (
        <div className="page-container">
           
            <section >
                <h1>Feedback</h1>
                <form onSubmit={handleSubmit}>
                    <textarea
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
            </section>
        </div>
    );
};

export default Feedback;