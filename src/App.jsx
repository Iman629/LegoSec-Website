import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Documentation from './pages/Documentation';
import Feedback from './pages/Feedback';
import Requirements from './pages/Requirements';
import FAQ from './pages/FAQ';
import Support from './pages/Support';
import Header from './components/Header'; // Import the Header component
import './App.css';

const App = () => {
    return (
        <Router>
            <Header /> {/* Header is rendered on all pages */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/documentation" element={<Documentation />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/requirements" element={<Requirements />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/support" element={<Support />} />
            </Routes>
        </Router>
    );
};

export default App;