import React from 'react'
import { admissionAds } from '../constants';

const AdmissionAds = () => {
    const { txt_1, txt_2, txt_3, sy, description, imgSrc, imgAlt, applyLink, btnText, help_1, help_2} = admissionAds[0];
  return (
    <section className="relative table w-full py-36 overflow-hidden bg-gradient-to-b to-transparent from-indigo-600/20 dark:from-indigo-600/40">
        <div className="container">
          <div className="relative grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
            <div className="md:col-span-6">
              <div className="md:mr-8">
                <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-black dark:text-white relative">
                  {txt_1}
                  <br />
                  <span className="text-indigo-600">{txt_2} </span> {txt_3}
                  <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-indigo-600 relative inline-block">
                    <span className="relative text-white">{sy}</span></span>
                </h4>
                <p className="text-lg max-w-xl text-indigo-600">
                {description}
                </p>
                <div className="mt-6 mb-6">
                  <a href={applyLink} className="btn bg-indigo-700 hover:bg-indigo-500 border-indigo-700 hover:border-indigo-500 text-white rounded-md mr-2 mt-2 transition-all duration-500 hover:scale-105 ease-in-out">
                    {btnText}
                  </a>
                </div>
                <span className="text-slate-400 font-medium">
                    {help_1}
                    <br/>
                    <p className="text-indigo-600">{help_2}</p>
                </span>
              </div>
            </div>
            {/*end col*/}
            <div className="md:col-span-6">
              <div className="relative">
                <div className="relative rounded-xl overflow-hidden shadow-md dark:shadow-gray-800">
                  <div className="w-full bg-no-repeat bg-top" data-jarallax="{&quot;speed&quot;: 0.1}">
                    <img src={imgSrc} alt={imgAlt} />
                  </div>
                </div>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end grid*/}
        </div>
        {/*end container*/}
      </section>
  )
}

export default AdmissionAds