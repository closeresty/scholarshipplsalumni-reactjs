import React from 'react'
import { useEffect } from 'react';

const CardPartners = (props) => {
  const { txt_1, txt_2, txt_3 } = props.partnersText[0];
  const partners = props.partners;

  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="grid grid-cols-1 pb-8 text-center my-10">
          <h6 className="mb-4 text-base font-medium text-indigo-600">{txt_1}</h6>
          <h3 className="mb-6 md:text-4xl text-3xl md:leading-normal leading-normal font-medium">{txt_2}</h3>
          <p className="text-slate-400 max-w-xl mx-auto text-justify">
            {txt_3}
          </p>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {partners.map((data) => (
            <div key={data.id} className="items-center bg-gray-50 rounded-lg shadow-md sm:flex dark:bg-gray-800 dark:border-gray-700 transition-all duration-500 hover:scale-105 ease-in-out">
              <a href="#">
                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={data.imgSrc} alt={data.imgAlt} />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">{data.fullname}</a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">{data.position}</span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">{data.short_description}</p>
                <ul className="list-none mt-4">
                    <li key={data.fbLinkId} className="inline m-1"><a href={data.fbLink} className="btn btn-icon btn-sm border border-gray-200 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i id="facebook" data-feather="facebook" className="h-5 w-5 text-gray-500 hover:text-white" /></a></li>
                    <li key={data.instagramLinkId}  className="inline m-1"><a href={data.instagramLink} className="btn btn-icon btn-sm border border-gray-200 dark:border-gray-800 rounded-md hover:border-indigo-600  dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="instagram" className="h-5 w-5 text-gray-600 hover:text-white" /></a></li>
                    <li key={data.twitterLinkId}  className="inline m-1"><a href={data.twitterLink} className="btn btn-icon btn-sm border border-gray-200 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="twitter" className="h-5 w-5 text-gray-600 hover:text-white" /></a></li>
                    <li key={data.linkedinLinkId}  className="inline m-1"><a href={data.linkedinLink} className="btn btn-icon btn-sm border border-gray-200 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="linkedin" className="h-5 w-5 text-gray-600 hover:text-white" /></a></li>
                  </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CardPartners