import React, { useState, useEffect } from 'react';

const WhoWeAreTwo = (props) => {
  const data = props.whoWeAreTwo;
  const { txt_1, txt_2, imgSrc, imgAlt, link } = data[0];

  
  const [txt1, setTxt1] = useState({
    txt_2
  });

  useEffect(() => {
    const element = document.getElementById("who-we-are-two-txt-1");
    element.innerHTML = txt_2;
  }, [txt1]);

  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <section className="relative md:py-24 py-16 bg-white dark:bg-slate-800 md:pt-0 pt-0">
    <div className="container">
      <div className="grid grid-cols-1 justify-center">
        <div className="relative z-1">
          <div className="grid lg:grid-cols-12 grid-cols-1 md:text-left text-center justify-center">
            <div className="lg:col-start-2 lg:col-span-10">
              <div className="relative">
                <img src={imgSrc} className="rounded-md shadow-lg" alt={imgAlt} />
                {/* <div className="absolute bottom-2/4 translate-y-2/4 right-0 left-0 text-center">
                  <a href="#!" data-type="youtube" data-id="AeN060QnN68" className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600">
                    <i data-feather="play-circle" className="h-8 w-8 text-purple-600 " />
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          <div className="content md:mt-8">
            <div className="grid lg:grid-cols-12 grid-cols-1 md:text-left text-center justify-center">
              <div className="lg:col-start-2 lg:col-span-10">
                <div className="grid items-center">
                  {/* <div id="who-we-are-two-txt-1">
                  </div> */}
                  <div className="text-justify">
                    <div className="section-title text-md-start">
                      {/* <p className="text-white max-w-xl mx-auto mb-2">
                        {txt_2}
                      </p> */}
                      <div className="text-white max-w-xl mx-auto mb-2" id="who-we-are-two-txt-1">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 sm:h-2/3 h-4/5 bg-gradient-to-b from-indigo-300 to-indigo-700" />
  </section>
  )
}

export default WhoWeAreTwo