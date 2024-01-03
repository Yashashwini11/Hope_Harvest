import { Instagram } from 'lucide-react';
import React from 'react'
import { PhoneCall } from 'lucide-react';
import { Twitter } from 'lucide-react';

function Foot() {
    return (
        <>
            <div class="footer">© 2023 Your Organization. All rights reserved.
                <div className='footericons'>
                    <PhoneCall />
                    <Instagram />
                    <Twitter />
                </div>

            </div>
        </>
    )
}
export default Foot;