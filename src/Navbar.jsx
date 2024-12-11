

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <p className="company">Company Name</p>
        <div className="">
          <ul className="">
            <li className="nav-item">
              <Link className="nav-link" to="Home1">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Feature1">Feature</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Enterprise">Enterprise</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Support1">Support</Link>
            </li>
          </ul>
         
        </div>
      </div>
      <hr className='line'/>
    </nav>
  );
};

export default Navbar;
