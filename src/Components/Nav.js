import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <>
      <nav className="navigation">
        <ul className='navul'>
          <li className="sample"><a href="#">HopeHarvest</a></li>
          <li className='navclass'><Link to="/">HOME</Link></li>
          <li className='navclass'><Link to="/login">LOGIN</Link></li>
          <li className='navclass'><a href="#">CONTACT US</a></li>
          <Link to='/donate'><button className='but'>START A FUNDRAISER</button></Link>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
