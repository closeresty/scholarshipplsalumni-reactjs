import React from 'react'
import { Link } from 'react-router-dom';
import { hostname } from './utils/hostname-utils';

const CardBlogs = (props) => {
  const card_data = props.cardData;

  return (
    <section className="relative md:py-24 py-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
          {card_data.map((data) => (
            <Link
              id={data.id}
              key={data.id}
              to={data.link + data.id}
              className=""
              target="_blank"
            >
              <div key={data.id} className="blog relative rounded-lg shadow-md dark:shadow-gray-800 overflow-hidden transition-all duration-500 hover:scale-105 ease-in-out">
                <img src={data.imgSrc} alt={data.imgAlt} />
                <div className="content p-6">
                  {data.title}
                  <p className="text-slate-400 mt-3">
                    {data.highlights}
                  </p>
                  <div className="mt-4">
                    Read More <i className="uil uil-arrow-right" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CardBlogs