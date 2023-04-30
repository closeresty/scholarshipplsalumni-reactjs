import React from 'react';
import { Link } from 'react-router-dom';

const Image = ({ src, alt }) => (
  <img src={src} alt={alt} />
);

const Title = ({ text }) => (
  <p className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">
    {text}
  </p>
);

const Highlights = ({ text }) => (
  <p className="text-slate-400 mt-3 text-justify">{text}</p>
);

const Button = ({ text }) => (
  <p className="btn btn-link flex items-center text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">
    <span className="mr-2">{text}</span>
    <i
      data-feather="arrow-right"
      className="h-5 w-5 text-purple-600 align-inline"
    />
  </p>
);

const AboutSummaryPresentation = ({ as }) => (
  <Link
    id={as.id}
    key={as.id}
    to={as.link + as.id}
    target="_blank"
  >
    <div
      key={as.id}
      className="blog relative rounded-lg shadow-md dark:shadow-gray-800 overflow-hidden bg-white transition-all duration-500 hover:scale-105 ease-in-out"
    >
      <Image src={as.imgSrc} alt={as.imgAlt} />
      <div className="content p-6">
        <Title text={as.title} />
        <Highlights text={as.highlights} />
        <div className="mt-4">
          <Button text="Read More" />
        </div>
      </div>
    </div>
  </Link>
);

export default AboutSummaryPresentation;
