import React from 'react';
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa';
import details from '../styles/dynamicDetails';

function ProjectCard({ id, img, title, group, code_url, demo_url, tools }) {

  // Get specific Tailwind class based on CSS and project tools
  function getDetails(category, tool) {
    return details[category][tool];
  }

  function getLabel(tool) {
    return (
      <p className={`px-2 h-full ${getDetails('toolText', tool)} w-fit my-1 font-spaceGroteskRegular text-lg overflow-hidden lg:text-[1.7rem]`}>{getDetails('toolLabel', tool)}</p>
    );
  }

  function getLevelName(level) {
    return (
      <div className={`flex flex-row items-center justify-center min-w-max ml-2 ${getDetails('levelRing', level)} ring-1 rounded-md font-heeboBold text-sm overflow-hidden lg:text-[0.75rem]`}>
        <p className={`px-2 pt-[2px] h-full ${getDetails('levelBg', level)} text-white text-center`}>{level}</p>
        <p className={`px-2 pt-[2px] h-full ${getDetails('levelText', level)}`}>{getDetails('levelLabel', level)}</p>
      </div>
    );
  }

  return (
    <div className="flex w-full max-h-fit flex-col rounded-md overflow-hidden shadow-lightGreen shadow-[0_0px_3px]" x-intersect="$el.classList.add('fade-in-bottom')">
      <div 
        className={"flex flex-row h-44 bg-top bg-no-repeat bg-cover"}
        style={{
          backgroundImage: `url(${ img }.jpg)`
        }}
      >
      </div>
      <div className="flex-auto grid grid-cols-1 px-5 py-3 pb-1 text-darkBlue bg-white">
        <div className="flex flex-row items-center justify-between">
          <a href={demo_url} target="_blank" className="py-2 text-xl font-spaceGroteskRegular hover:underline lg:text-md">{title}</a>
          
        </div>
        <div className="grid grid-cols-2 items-end justify-between py-3 text-md lg:text-sm">
          <div className="flex flex-row items-end justify-left w-full">
            <Link href={code_url} target="_blank" className={`flex flex-row text-darkBlue text-lg ${getDetails('hover', tools[0])}`}><FaGithub /> <p className="text-sm pl-2">Learn More</p></Link>
          </div>
           
           <div className="flex flex-col items-end justify-end w-full">
            <div className="flex flex-wrap items-end justify-end">
              {tools.map((t) => getLabel(t))}
            </div>
          </div>
         </div>
      </div>
    </div>
  )
}

export default ProjectCard;
