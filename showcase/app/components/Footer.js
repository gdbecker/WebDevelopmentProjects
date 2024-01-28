import React from 'react';

function Footer() {

  return (
    <div className="h-fit p-5 font-spaceGroteskRegular text-center text-white text-sm border-offWhite border-t-2 bg-darkGreen 2xl:px-36">
      Coded by <a href="https://github.com/gdbecker/WebDevelopmentProjects" target="_blank" className="font-spaceGroteskRegular hover:text-lightGreen">Garrett Becker</a>. &copy; 2023-{new Date().getFullYear()} All rights reserved.
    </div>
  )
}

export default Footer;