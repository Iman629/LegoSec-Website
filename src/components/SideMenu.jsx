import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { AiOutlineHome } from "react-icons/ai";
import { SlEnergy } from "react-icons/sl";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoCodeSlash } from "react-icons/io5";

const SideMenu = () => {
    return (
        
        <nav className="side-menu">
                <ul>
                    
                    <AiOutlineHome /> Introduction
                    <li>
                        <Link to="/home">Home</Link>
                        <Link to="/intro">What is LegoSec?</Link>
                        <Link to="/intro1">Why LegoSec?</Link>
                        <br/>
                    </li>

                    
                    <SlEnergy /> Let's Start
                    <li>
                        <Link to="/requirements">Pre-Requirement</Link>
                        <Link to="/documentation">Architecture Overview</Link>
                        <Link to="/installation">Installation And Setup</Link>
                        <br/>
                    </li>            
                    
                    
                    <IoCodeSlash /> SDK References
                    <li>
                        <Link to="/sdkref">Usage Instructions</Link>
                        <Link to="/sdkref1">API Integration Examples</Link>
                        <Link to="/sdkref2">Error Handling and Exceptions</Link>
                        <Link to="/sdkref3">Detailed API Functions</Link>
                        <br/>
                    </li>

                    
                    <IoIosHelpCircleOutline /> Help
                    <li>
                        <Link to="/faq">FAQ</Link>
                        <Link to="/support">Support</Link>
                        {/* <Link to="/feedback">Feedback</Link> */}
                        <br/>
                    </li>
                
                </ul>

          

        </nav>
    );
};


export default SideMenu;