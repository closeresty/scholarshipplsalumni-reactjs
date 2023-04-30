import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from './utils/date-utils';

const ArticleSummary = (props) => {
  const propsData = props.ArticleSummaryData;

  return (
    <div className="lg:col-span-4 md:col-span-6">
      <div className="sticky top-20">
        <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-600 shadow dark:shadow-gray-800 rounded-md p-2 text-center">Other Articles</h5>
        {propsData.sort(() => Math.random() - 0.5).map((data) => (
          <Link
          id={data.id}
          key={data.id}
          to={data.link + data.id}
          target="_blank"
        >
          <div key={data.id} className="flex items-center mt-6 rounded-lg shadow-md p-2">
            <img src={data.imgSrc} className="h-16 rounded-md shadow dark:shadow-gray-800" alt="" />
            <div className="ml-3">
              <p className="font-semibold hover:text-indigo-600">{data.title}</p>
              <p className="text-sm text-slate-400 mb-2">{data.date_posted ? formatDate(data.date_posted) : ''}</p>
              <p className="text-sm text-slate-400">{data.highlights}</p>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ArticleSummary