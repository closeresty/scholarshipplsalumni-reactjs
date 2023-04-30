import React from 'react';
import { useEffect } from 'react';

const CardScholars = (props) => {
  const { txt_1, txt_2 } = props.teamTextData[0];
  const team = props.teamData;

  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <section className="relative md:py-24 py-16 md:pb-0 pb-0 bg-gray-0">
      <div className="container md:mt-24 mt-16 ">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Our Professional Team</h3>
          <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
        </div>
        <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-8 gap-[30px]">
          {team.map((data) => (
            <div key={data.id} className="lg:col-span-3 md:col-span-6">
              <div className="team p-6 rounded-md shadow-md dark:shadow-gray-800 dark:border-gray-700 bg-white dark:bg-slate-900 relative">
                <div className="absolute inset-0 bg-indigo-600/10 dark:bg-indigo-600/30 rounded-md -mt-[10px] -ml-[10px] h-[98%] w-[98%] -z-1" />
                <img src="assets/images/client/01.jpg" className="h-24 w-24 rounded-full shadow-md dark:shadow-gray-800" alt="" />
                <div className="content mt-4">
                  <a href className="text-lg font-medium hover:text-indigo-600 block">Ronny Jofra</a>
                  <span className="text-slate-400 block">C.E.O.</span>
                  <p className="text-slate-400 mt-4">If the distribution of letters and 'words' is random</p>
                  <ul className="list-none mt-4">
                    <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="facebook" className="h-4 w-4" /></a></li>
                    <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="instagram" className="h-4 w-4" /></a></li>
                    <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="twitter" className="h-4 w-4" /></a></li>
                    <li className="inline"><a href className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="linkedin" className="h-4 w-4" /></a></li>
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

export default CardScholars