import React from 'react';
import { Link } from 'react-router-dom';
import { CircleUser } from 'lucide-react';
function Dashboard() {
  return (
    <>
      <div className='entire'>
        <div className='sideapp'>
          <ul className='sidebar'>
            <Link to='/'><li>HOME</li></Link>
            <Link to='/story'><li>SUCCESS STORIES</li></Link>
            <Link to='/donate'><li>START A FUNDRAISER</li></Link>
            <Link to='/donors'><li>VIEW DONATERS</li></Link>
          </ul>
          <div>
            <button className='logout'>LOG OUT</button>
          </div>
        </div>
      </div>
      <div>
        <nav className="navigation">
          <ul>
            <li className="sample1">HopeHarvest</li>
            <li className="user">USER</li>
            <div className='accicon'>
              <CircleUser />
            </div>
          </ul>
        </nav>
        <div class="container">
          <div class="card">
            <div class="box">
              <div class="content">
                <h2>01</h2>
                <h3>Natural disasters</h3>
                <p>Nature's fury may break us, but humanity's kindness can rebuild us. Give generously to help heal the wounds left by disaster.</p>
                <span>Read More</span>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="box">
              <div class="content">
                <h2>02</h2>
                <h3>Education</h3>
                <p>Help Someone to learn world's powerful weapon called "Education"</p>
                <span>Read More</span>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="box">
              <div class="content">
                <h2>03</h2>
                <h3>Medical</h3>
                <p>Your generosity can be a lifeline for someone in need. Every donation, no matter how small, has the power to make a difference in someone's medical journey.</p>
                <span>Read More</span>
              </div>
            </div>
          </div>
          </div>
        </div>
      </>
      );
}

      export default Dashboard;
