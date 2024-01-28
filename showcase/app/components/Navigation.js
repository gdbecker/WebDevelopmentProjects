import React from 'react';
import Image from 'next/image';
import { TbWorldCode } from "react-icons/tb";
import Avatar from '../../public/GarrettBecker.jpg';

function Navigation() {

  return (
    <div class="flex h-16 p-10 items-center justify-between font-spaceGroteskRegular overflow-hidden border-offWhite border-b-2 bg-darkGreen 2xl:px-36">
      <div className="flex items-center justify-between">
        <a class="flex items-center justify-center" href="/">
          <h1 className="font-spaceGroteskBold tracking-wide text-sm text-white md:text-lg">Web Development</h1>
          <TbWorldCode className="w-10 mr-3 text-white text-lg border-offWhite border-r-2" />
        </a>
        <h1 className="tracking-wider text-sm text-lightGreen md:text-lg">Showcase</h1>
      </div>
      <a class="flex items-center justify-center" href="https://github.com/gdbecker/WebDevelopmentProjects" target="_blank">
        <Image 
          src={Avatar}
          alt="Profile Photo"
          width={75}
          height={75}
          className="w-10 h-10 rounded-full border-offWhite border-2 md:w-12 md:h-12"
        />
      </a>
    </div>
  )
}

export default Navigation;