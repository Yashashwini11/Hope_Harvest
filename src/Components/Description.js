import React from 'react'
import '../Assets/CSS/Description.css'
import flood from "../Assets/Images/flood.jpg";
import education from '../Assets/Images/education.webp';
import women from '../Assets/Images/women.jpg';
import poverty from '../Assets/Images/poverty.jpg';
import medical from '../Assets/Images/medical.webp';
import nonprofit from '../Assets/Images/nprofit.jpg';
function Description() {
    return (
        <>
       
        <h1 className='des1'></h1>
            <h1 className='des2'>Causes you can raise funds for</h1>
            <div className="product-grid1">
                <div className="product1">
                    <div className="zoom1">
                        <img src={flood} alt="Product Image 1" style={{ height: '190px', width: '190px' }} />
                    </div>
                </div>
                <div className="product1">
                    <div className="zoom1">
                        <img src={education} alt="Product Image 2" style={{ height: '190px', width: '190px' }} />

                    </div>
                </div>
                <div className="product1">
                    <div className="zoom1">
                        <img src={women} alt="Product Image 3" style={{ height: '190px', width: '190px' }} />

                    </div>
                </div>
                <div className="product1">
                    <div className="zoom1">
                        <img src={women} alt="Product Image 3" style={{ height: '190px', width: '190px' }} />

                    </div>
                </div>
            </div>





        </>
    )
}

export default Description