import React, { useState, useEffect }  from 'react';
import { ArticleSummary } from './index';
import { blogsText, blogsAndNews } from '../data/blogs';
import { formatDate } from './utils/date-utils';

const DisplayDetailsOne = (props) => {
  const filteredData = blogsAndNews.find((data) => data.id === props.id);
  const { id, title, imgSrc, imgAlt, short_description, description, highlights, link, date_posted } = filteredData;
  const outputDate = date_posted ? formatDate(date_posted) : '';

  const [divDescription, setdivDescription] = useState({
    description
  });

  useEffect(() => {
    const yearsInServiceElement = document.getElementById("divDescription");
    yearsInServiceElement.innerHTML = description;
  }, [divDescription]);

  return (
    <section className="relative md:py-24 py-16">
      <div className="container">
        <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
          <div className="lg:col-span-8 md:col-span-6">
            <h3 className="md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">{title}</h3>
            {/* <p className="text-sm text-slate-400 mb-2">6th May 2022 at 01:25 pm</p> */}
            <p className="text-sm text-slate-400 mb-2">{outputDate}</p>
            <div className="p-6 rounded-md shadow dark:shadow-gray-800">
              <img src={imgSrc} className="rounded-md" alt={imgAlt} />
              <p className="text-slate-400 italic border-x-4 border-indigo-600 rounded-tl-xl rounded-br-xl p-3  text-justify mt-6">{highlights}</p>
              <div className="mt-6 text-justify">
                <div className="text-slate-400 text-justify" id="divDescription" ></div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 md:col-span-6">
            <ArticleSummary ArticleSummaryData={blogsAndNews} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default DisplayDetailsOne