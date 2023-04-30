import React, { useState, useEffect } from 'react';

const WhoWeAre = (props) => {
  const data = props.whoWeAre;
  const { txt_1, txt_2, link, btnText, imgSrc1, imgSrc2, imgSrc3, imgAlt, years_in_service } = data[0];


  const [yearsInService, setYearsInService] = useState({
    years_in_service
  });

  useEffect(() => {
    const element = document.getElementById("years-in-service");
    element.innerHTML = years_in_service;
  }, [yearsInService]);

  const [whoWeAre, setWhoWeAre] = useState({
    txt_2
  });

  useEffect(() => {
    const element = document.getElementById("who-we-are");
    element.innerHTML = txt_2;
  }, [whoWeAre]);

  return (
    <section className="relative md:py-24 py-16">
      <div className="container">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
          <div className="lg:col-span-5 md:col-span-6">
            <div className="grid grid-cols-12 gap-6 items-center">
              <div className="col-span-6">
                <div className="grid grid-cols-1 gap-6">
                  <img src={imgSrc1} className="shadow rounded-md" alt={imgAlt} />
                  <img src={imgSrc2} className="shadow rounded-md" alt={imgAlt} />
                </div>
              </div>
              <div className="col-span-6">
                <div className="grid grid-cols-1 gap-6">
                  <img src={imgSrc3} className="shadow rounded-md" alt={imgAlt} />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 md:col-span-6">
            <div className="lg:ml-5" >
              <div id="years-in-service" >
              </div>
              <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">{txt_1}</h3>
              <div className="text-slate-400 text-justify" id="who-we-are"></div>
              <div className="mt-6">
                {/* <a href={link} className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mr-2 mt-2"><i className="uil uil-envelope" /> {btnText}</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre