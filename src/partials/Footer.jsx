import React from 'react';
import { Link } from 'react-router-dom';

import uon_logo from '../images/uon-logo.jpg'
import usaid_log from '../images/USAID-Kenya.png'
import health_log from '../images/healthit.png'

function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">

          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="text-sm text-gray-600">
              
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <   img src={usaid_log} alt="University of Nairobi" />
            
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <img src={uon_logo} alt="University of Nairobi" />
            
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <img src={health_log} alt="University of Nairobi" />
            
          </div>

          {/* 5th block */}
          {/* <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="text-gray-800 font-medium mb-2">Subscribe</h6>
            
          </div>           */}

        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">

          {/* Social links */}

          {/* Copyrights note */}
          {/* <div className="text-sm text-gray-600 mr-4">Made by <a className="text-blue-600 hover:underline" href="">HealthIT</a>. All rights reserved.</div> */}

        </div>

      </div>
    </footer>
  );
}

export default Footer;


// import React from "react";
// import uon_logo from '../images/uon-logo.jpg'
// import usaid_log from '../images/USAID-Kenya.png'
// import health_log from '../images/healthit.png'

// const Footer = () => (
//   <div className="footer">
//         <div className="row flex-container">
//             <div className="col-md-4">
//             <   img src={usaid_log} alt="University of Nairobi" />
//             </div>
//             <div className="col-md-4 center">
//                 <img src={uon_logo} alt="University of Nairobi" />
//             </div>
//             <div className="col-md-4 right-align">
//                 <img src={health_log} alt="University of Nairobi" />
//             </div>

//         </div>
//   </div>
// );

// export default Footer;
