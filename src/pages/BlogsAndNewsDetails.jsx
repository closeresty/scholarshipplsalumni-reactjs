import React from 'react';
import { useParams } from 'react-router-dom'
import { Navbar, DisplayDetailsOne, HeroTwo, Footer, BackToTop, Switcher } from '../components';
import { blogsText, blogsAndNews } from '../data/blogs';

const BlogsAndNewsDetails = () => {
  const { postId } = useParams();
  const heroTwoData = blogsText;

  return (
    <>
    <div>
      <Navbar />
      <HeroTwo heroTwoData={heroTwoData} />
      <DisplayDetailsOne id={postId} />
      <Footer />
      <BackToTop />
      <Switcher />
    </div>
    </>
  )
}

export default BlogsAndNewsDetails