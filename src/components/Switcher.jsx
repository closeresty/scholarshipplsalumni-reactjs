import React, { useState, useEffect } from 'react';

function Switcher() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const htmlTag = document.getElementsByTagName("html")[0]
    if (isDarkMode) {
      htmlTag.classList.add('dark');
    } else {
      htmlTag.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const switcherClasses = `fixed top-1/4 -right-1 z-3 ${isDarkMode ? 'dark' : 'light'}`;

  return (
    <div className={switcherClasses}>
      <span className="relative inline-block rotate-90">
        <input type="checkbox" className="checkbox opacity-0 absolute" id="chk" checked={isDarkMode} onChange={toggleDarkMode} />
        <label className="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8" htmlFor="chk">
          {/* <i className="uil uil-moon text-[20px] text-yellow-500"></i>
          <i className="uil uil-sun text-[20px] text-yellow-500"></i> */}
          <i data-feather="moon" className="text-[20px] text-yellow-500" />
          <i data-feather="sun" className="text-[20px] text-yellow-500" />
          <span className="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] w-7 h-7"></span>
        </label>
      </span>
    </div>
  );
}

export default Switcher;
