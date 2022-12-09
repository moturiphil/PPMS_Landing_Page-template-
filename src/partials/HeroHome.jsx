import React, { useState } from "react";
import Modal from "../utils/Modal";

// import HeroImage from '../images/hero-image.png';

function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <u><h4 className="h4 mb-4">Partner Performance Monitoring System</h4></u>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Data Import App
              </h4>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Dashboard PPMS
              </h4>
            </div>

            <br />
            {/* <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h4 className="h4 mb-4">HIV DQA 2022</h4>
            </div> */}
          </div>

          <br />
          <br />
          <br />

          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                  <a href="https://partnermanagementsystem.uonbi.ac.ke/api/apps/hiv-dqa-2022-visuals/html/index.html">
                    HIV DQA 2020 Dashboard
                  </a>
                </h4>
              </div>
            </div>
            

          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item */}

            {/* <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h4 className="h4 mb-4">HIV DQA 2022</h4>
            </div> */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                <a href="https://partnermanagementsystem.uonbi.ac.ke/dhis-web-capture/index.html#/programId=lWNCcizbWF3">
                  1. IP System <br></br>Assessment
                </a>
              </h4>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                <a href="https://partnermanagementsystem.uonbi.ac.ke/dhis-web-capture/index.html#/programId=rWscGhjShfE">
                  2. IP Data Quality <br></br> Checklist
                </a>
              </h4>
            </div>

            {/* 5th item */}

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                <a href="https://partnermanagementsystem.uonbi.ac.ke/dhis-web-capture/index.html#/programId=ilWNUxRen9a">
                  3. Site Visit <br></br> System Assessment
                </a>
              </h4>
            </div>
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <h4  className="text-xl font-bold leading-snug tracking-tight mb-1">
                <a href="https://partnermanagementsystem.uonbi.ac.ke/dhis-web-dataentry/index.action">
                  4. Site Level Data Verification
                </a>
              </h4>
            </div>
          
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
