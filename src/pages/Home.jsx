import React from 'react';
import '../App.css'; // Import the shared CSS file
import { AiOutlineHome } from "react-icons/ai";
import { SlEnergy } from "react-icons/sl";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoCodeSlash } from "react-icons/io5";
import { TbGitMerge } from "react-icons/tb";
import { MdOutlineAccessTime } from "react-icons/md";
import { GrMoney } from "react-icons/gr";
import { PiHeadCircuitLight } from "react-icons/pi";


const Home = () => {
    return (

      
        <div className="page-container">
       
    
        <div className="home">
                <h1>Meet <span class="Legosec">LEGOSEC</span></h1>
                <h2>Secure Your Code with Every Piece</h2>
                
                <div>
                        <div class="home-item"> <AiOutlineHome /> Introduction</div>
                        <div class="home-item"> <SlEnergy /> Let's start</div>
                        <div class="home-item"> <IoCodeSlash /> SDK references</div>
                        <div class="home-item"> <IoIosHelpCircleOutline/> Help</div>
               </div>
               <br/>
              
               
               
        </div>
        <div className="benefits-grid">
  <h2>Why LegoSec?</h2>
  
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
</div>
        </div>

        
    );
};
export default Home;