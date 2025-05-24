import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header'; // Import the Header component
import SideMenu from './components/SideMenu';

import Home from './pages/Home';
import Intro from './pages/WhatsLegoSec';
import Intro1 from './pages/WhyLegoSec';

import Requirements from './pages/Requirements';
import Documentation from './pages/Architecture';
import Installation from './pages/Installation';

import SDKref from './pages/UsageInstructions';
import SDKref1 from './pages/APIex';
import SDKref2 from './pages/Error';
import SDKref3 from './pages/Detailed';

import FAQ from './pages/FAQ';
import Support from './pages/Support';

// import Feedback from './pages/Feedback';


import './App.css';


const App = () => {
    return (
        <Router>
            <Header /> {/* Header is rendered on all pages */}
            <SideMenu />
            <Routes>
            
            <Route path="/" element={<Home />} />  {/* Default page */}
                <Route path="/home" element={<Home />} />
                <Route path="/intro" element={<Intro />} />
                <Route path="/intro1" element={<Intro1 />} />

                <Route path="/requirements" element={<Requirements />} />
                <Route path="/documentation" element={<Documentation />} />
                <Route path="/installation" element={<Installation />} />

                <Route path="/sdkref" element={<SDKref />} />
                <Route path="/sdkref1" element={<SDKref1 />} />
                <Route path="/sdkref2" element={<SDKref2 />} />
                <Route path="/sdkref3" element={<SDKref3 />} />

                <Route path="/faq" element={<FAQ />} />
                <Route path="/support" element={<Support />} />

                {/* <Route path="/feedback" element={<Feedback />} /> */}
            </Routes>
        </Router>
    );
};

export default App;