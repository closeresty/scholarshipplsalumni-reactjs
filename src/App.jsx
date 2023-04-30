import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const BlogsAndNews = lazy(() => import('./pages/BlogsAndNews'));
const Scholars = lazy(() => import('./pages/Scholars'));
const BlogsAndNewsDetails = lazy(() => import('./pages/BlogsAndNewsDetails'));
const AboutPLS = lazy(() => import('./pages/AboutPLS'));
const Projects = lazy(() => import('./pages/Projects'));
const HumanitarianAid = lazy(() => import('./pages/HumanitarianAid'));

import { navLinks2 } from './constants';

const App = () => {
  return (
    <>
    <Suspense fallback={<h1>Loading . . .</h1>}>
      <Routes>
        <Route path={navLinks2[0].link} element={<Home />} />
        <Route path={navLinks2[1].link} element={<AboutUs />} />
        <Route path={navLinks2[2].link} element={<BlogsAndNews />} />
        <Route path={navLinks2[3].link} element={<Scholars />} />
        <Route path={navLinks2[4].link} element={<BlogsAndNewsDetails />} />
        <Route path={navLinks2[5].link} element={<AboutPLS />} />
        <Route path={navLinks2[6].link} element={<Projects />} />
        <Route path={navLinks2[7].link} element={<HumanitarianAid />} />
      </Routes>
       </Suspense>
    </>
  )
}

export default App;