import React from 'react';
import { useEffect } from 'react';

const CardTeam = (props) => {
  const { txt_1, txt_2 } = props.teamTextData[0];
  const team = props.teamData;

  useEffect(() => {
    feather.replace();
  }, []);

  return (
     <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800 md:pb-0 pb-0">
      <div className="container">
        <div className="grid grid-cols-1 pb-8 text-center mb-16">
          <h3 className="mb-6 md:text-4xl text-3xl md:leading-normal leading-normal font-medium">{txt_1}</h3>
          <p className="text-slate-400 max-w-xl mx-auto text-justify">
            {txt_2}
          </p>
        </div>
        <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
          {team.map((data) => (
            <div key={data.id}  className="lg:col-span-3 md:col-span-6 shadow-md rounded-xl -mt-12 mb-12 flex transition-all duration-500 hover:scale-105 ease-in-out">
              <div className="team p-6 rounded-md border border-gray-100 dark:border-gray-700 group bg-white dark:bg-slate-900 shadow-md">
                <img src={data.imgSrc} className="h-25 w-25 rounded-full shadow-md dark:shadow-gray-800" alt={data.imgAlt} />
                <div className="content mt-4" >
                  <a href="#" className="text-lg font-medium hover:text-indigo-600 block dark:text-white text-gray-900">{data.fullname}</a>
                  <span className="text-slate-400 block">{data.position}</span>
                  <p className="text-slate-400 mt-4">{data.short_description}</p>
                  <ul className="list-none mt-4">
                    <li key={data.fbLinkId} className="inline m-1"><a href={data.fbLink} className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i id="facebook" data-feather="facebook" className="h-5 w-5 text-gray-600 hover:text-white" /></a></li>
                    <li key={data.instagramLinkId}  className="inline m-1"><a href={data.instagramLink} className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="instagram" className="h-5 w-5 text-gray-600 hover:text-white" /></a></li>
                    <li key={data.twitterLinkId}  className="inline m-1"><a href={data.twitterLink} className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="twitter" className="h-5 w-5 text-gray-600 hover:text-white" /></a></li>
                    <li key={data.linkedinLinkId}  className="inline m-1"><a href={data.linkedinLink} className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="linkedin" className="h-5 w-5 text-gray-600 hover:text-white" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CardTeam