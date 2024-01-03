import React from 'react';
import { Link } from 'react-router-dom';
import flood from "../Assets/Images/flood.jpg";
import education from '../Assets/Images/education.webp';
import women from '../Assets/Images/women.jpg';
import poverty from '../Assets/Images/poverty.jpg';
import medical from '../Assets/Images/medical.webp';
import nonprofit from '../Assets/Images/nprofit.jpg';
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
          </ul>
          <div>
            <button className='logout'>LOG OUT</button>
          </div>
        </div>
      </div>
      <div>
        <nav className="navigation">
          <ul>
            <li className="sample">HopeHarvest</li>
            <li>USER</li>
            <div className='accicon'>
              <CircleUser/>
              </div>
            </ul>
          </nav>
        </div>
        <div className='mainbox'>
         
        <div className="product-grid">
            <div className="product">
                <div className="zoom">
                    <img src={flood} alt="Product  1" style={{ height: '190px', width: '190px' }}/>
                <h2>NATURAL DISASTERS</h2>
                <button className='donatebutton'>DONATE</button>
                </div>
            </div>
            <div className="product">
                <div className="zoom">
                    <img src={education} alt="Product  2" style={{ height: '190px', width: '190px' }} />
                <h2>EDUCATION</h2>
                <button className='donatebutton'>DONATE</button>

                </div>
            </div>
            <div className="product">
                <div className="zoom">
                    <img src={women} alt="Product  3" style={{ height: '190px', width: '190px' }} />
                <h2>WOMEN</h2>
                <button className='donatebutton'>DONATE</button>

                </div>
            </div>
            <div className="product">
                <div className="zoom">
                    <img src={poverty} alt="Product  4" style={{ height: '190px', width: '190px' }} />
                <h2>POVERTY</h2>
                <button className='donatebutton'>DONATE</button>

                </div>
            </div>
            <div className="product">
                <div className="zoom">
                    <img src={medical} alt="Product  5" style={{ height: '190px', width: '190px' }} />
                <h2>MEDICAL CARE</h2>
                <button className='donatebutton'>DONATE</button>

                </div>
            </div>
            <div className="product">
                <div className="zoom">
                    <img src={nonprofit} alt="Product  6" style={{ height: '190px', width: '190px' }} />
                <h2>NON-PROFIT</h2>
                <button className='donatebutton'>DONATE</button>

                </div>
            </div>
        </div>

        </div>
    </>
  );
}

export default Dashboard;
