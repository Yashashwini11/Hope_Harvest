import React from 'react'
import img1 from "../Assets/Images/Renamef.png";
import Description from './Description';
import Story from './Story';
import { Link } from 'react-router-dom';

function Home() {
  return(
         <>
        <div class="img-container">
        <img src="C:\Users\Yashashwini\Documents\GitHub\React_IRC\Day_5\mainapp\src\Assets\Images\Renamef.png" alt="no image"/>
        </div>
             <div class="description">
             Small donations, big impacts.
        Join us in creating a world where kindness echoes and dreams flourish.

        <div className='btn'>
        <Link to="/dashboard"><button className='butt'>DONATE</button></Link>

        </div>
        </div>
        <img src={img1} alt="donate" />
        <Description/>
        <Story/>
        </>
  )
}
export default Home