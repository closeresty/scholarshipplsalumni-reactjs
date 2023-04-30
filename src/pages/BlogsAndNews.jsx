import React from 'react';
import { Navbar, HeroTwo, CardBlogs, Footer, BackToTop, Switcher } from '../components';
import { blogsText, blogsAndNews } from '../data/blogs';

const BlogsAndNews = () => {
  const heroTwoData = blogsText;
  const cardData = blogsAndNews;
  return (
    <>
     <div>
      <Navbar />
      <HeroTwo heroTwoData={heroTwoData} />
      <CardBlogs cardData={cardData} />
      <Footer />
      <BackToTop /> 
      <Switcher />
    </div>
    </>
  )
}

export default BlogsAndNews