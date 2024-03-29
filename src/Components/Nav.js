import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <>
      <nav className="navigation">
        <ul className='navul'>
          <li className="sample"><Link to="">HopeHarvest</Link></li>
          <li className='navclass'><Link to="/">HOME</Link></li>
          <li className='navclass'><Link to="/login">LOGIN</Link></li>
          <li className='navclass'><Link to="">CONTACT US</Link></li>
          <Link to='/donate'><button className='but'>START A FUNDRAISER</button></Link>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
