import React, { useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

const BackToTop = () => {
  useEffect(() => {
    feather.replace();
  }, []);

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    var mybutton = document.getElementById("back-to-top");
    if (mybutton != null) {
      if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        mybutton.classList.add("block");
        mybutton.classList.remove("hidden");
      } else {
        mybutton.classList.add("hidden");
        mybutton.classList.remove("block");
      }
    }
  }

  function topFunction() {
    scroll.scrollToTop({
      duration: 1500,
      smooth: "easeInOutQuint"
    });
  }

  return (
    <a href="#" onClick={topFunction} id="back-to-top" className="back-to-top fixed hidden text-lg rounded-full z-10 bottom-5 right-5 h-9 w-9 text-center bg-indigo-600 text-white leading-9 flex items-center">
      <i data-feather="arrow-up" className="h-5 w-5 text-white mx-auto" />
    </a>
  )
}

export default BackToTop;
