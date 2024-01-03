import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <>
      <nav className="navigation">
        <ul className='navul'>
          <li className="sample"><span>HopeHarvest</span></li>
          <li className='navclass'><Link to="/">HOME</Link></li>
          <li className='navclass'><Link to="/login">LOGIN</Link></li>
          <li className='navclass'><span>CONTACT US</span></li>
          <Link to='/donate'><button className='but'>START A FUNDRAISER</button></Link>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
