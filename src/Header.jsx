import React from "react";
import "./App.css"
import { NavLink } from "react-router-dom";
function Header() {
    return (
      <header>
        <div className="between">
        <h1>Company Name</h1>
        
        <nav>
            <ul>
            <NavLink to="Home1">HOme</NavLink>
              <NavLink to="Feature1"> Feature</NavLink>
              <NavLink to="Enterprise">Enterpriset</NavLink>  
              <NavLink to="Support1">Support</NavLink>

                
        
            </ul>
        </nav>
        </div>
       <hr />
      </header>
    );
  }
  
  export default Header