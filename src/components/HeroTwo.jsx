import React from 'react';
import { useEffect } from 'react';

const HeroTwo = (props) => {
  const data = props.heroTwoData;
  const { txt_1, txt_2, imgBg } = data[0];

  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <div>
      <section className={`relative table w-full py-32 lg:py-36 bg-[url('${imgBg}')] bg-center bg-no-repeat`} >
        <div className="absolute inset-0 bg-black opacity-80" />
        <div className="container">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">
              {txt_1}
            </h3>
          </div>
          <p className="text-slate-300 text-lg max-w-xl mx-auto text-justify">
            {txt_2}
          </p>
        </div>
        <div className="absolute text-center z-10 bottom-5 right-0 left-0 mx-3 justify-center">
          <ul className="flex items-center tracking-[0.5px] breadcrumb-light mb-0 text-center justify-center">
            <li className="inline-block uppercase text-xs font-bold duration-500 ease-in-out text-white/50 hover:text-white text-center">
              <a href="index.html">Home</a>
            </li>
            <li className=" text-center inline-block mx-2">
              <i data-feather="chevron-right" className="h-4 w-4 text-gray-400" />
            </li>
            <li className=" text-center inline-block uppercase text-xs font-bold duration-500 ease-in-out text-white" aria-current="page">
              {txt_1}
            </li>
          </ul>
        </div>
      </section>
      <div className="relative">
        <div className="shape absolute right-0 sm:-bottom-px -bottom-[2px] left-0 overflow-hidden z-1 text-white dark:text-slate-900">
          <svg className="w-full h-auto" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default HeroTwo