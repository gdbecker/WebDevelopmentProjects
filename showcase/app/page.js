'use client'
import React, { useState, useEffect } from 'react';
import LoadingPage from './loading';
import ProjectCard from './components/ProjectCard';
import { BiSearch } from 'react-icons/bi'
import { BiChevronDown } from 'react-icons/bi'
import { collection, getDocs, doc } from 'firebase/firestore';
import { db } from './services/firebase.config';

function Home() {

  // Firebase db variables
  const collectionRef = collection(db, "projects");
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  // State variables
  const [isLoading, setIsLoading] = useState(true);
  const [projectSearch, setProjectSearch] = useState('');
  const [groupSelect, setGroupSelect] = useState('Filter by Group');
  const [groups, setGroups] = useState([]);
  const [toolsSelect, setToolsSelect] = useState('Filter by Tools');
  const [tools, setTools] = useState([]);

  // Update project to search
  const onChangeProjectSearch = (e) => {
    setProjectSearch(e.currentTarget.value);

    filterProjects(e.currentTarget.value, groupSelect, toolsSelect);
  }

  // Update group to filter
  const handleGroupChange = (e) => {
    setGroupSelect(e.target.name);

    filterProjects(projectSearch, e.target.name, toolsSelect);
  };

  // Update tools to filter
  const handleToolsChange = (e) => {
    setToolsSelect(e.target.name);

    filterProjects(projectSearch, groupSelect, e.target.name);
  };

  // Filter by project name search, group, and tools
  const filterProjects = (projectName, group, tools) => {
    if (projectName != "" && tools != "Filter by Tools" && group != "Filter by Group") {
      let f =  projects.filter(function(p) {
        return p.tools.includes(tools) && p.group == group && p.title.toLowerCase().includes(projectName.toLowerCase());
      });

      setFilteredProjects(f);
    } else if (tools != "Filter by Tools" && group != "Filter by Group") {
      let f =  projects.filter(function(p) {
        return p.tools.includes(tools) && p.group == group;
      });

      setFilteredProjects(f);
    } else if (tools != "Filter by Tools" && projectName != "") {
      let f =  projects.filter(function(p) {
        return p.tools.includes(tools) && p.title.toLowerCase().includes(projectName.toLowerCase());
      });

      setFilteredProjects(f);
    } else if (group != "Filter by Group" && projectName != "") {
      let f =  projects.filter(function(p) {
        return p.group == group && p.title.toLowerCase().includes(projectName.toLowerCase());
      });

      setFilteredProjects(f);
    } else if (tools != "Filter by Tools") {
      let f =  projects.filter(function(p) {
        return p.tools.includes(tools);
      });

      setFilteredProjects(f);
    } else if (group != "Filter by Group") {
      let f =  projects.filter(function(p) {
        return p.group == group;
      });

      setFilteredProjects(f);
    } else if (projectName != "") {
      let f =  projects.filter(function(p) {
        return p.title.toLowerCase().includes(projectName.toLowerCase());
      });

      setFilteredProjects(f);
    } else {
      setFilteredProjects(projects);
    }
  }

  // Get project tools list
  const grabTools = (projects) => {
    let allTools = projects.map(p => p.tools);
    let allToolsMerge = allTools.flat(1);
    let toolsList = [...new Set(allToolsMerge)].sort();

    toolsList = toolsList.map(p => {
      return({tools: p});
    });

    toolsList.unshift({tools: "Filter by Tools"});
    setTools(toolsList);
  }

  // Get groups list
  const grabGroups = (projects) => {
    let allGroups = projects.map(p => p.group);
    let groupsList = [...new Set(allGroups)].sort();

    groupsList = groupsList.map(p => {
      return({group: p});
    });

    groupsList.unshift({group: "Filter by Group"});
    setGroups(groupsList);
  }

  // Get all projects
  const getProjects = async () => {
    await getDocs(collectionRef).then((project) => {
      let projectData = project.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      projectData = projectData.filter((project) => project.active);
      projectData.sort(function (first, second) {
        return second.group - first.group || first.title.localeCompare(second.title)
      })
      setProjects(projectData);
      setFilteredProjects(projectData);
      grabTools(projectData);
      grabGroups(projectData);
      setIsLoading(false);
    }).catch((err) => {
      console.log(err);
    })
  }

  // Set up app for viewing
  useEffect(() => {
    getProjects();
  }, [])

  if (isLoading) {
    return (
      <LoadingPage />
    )
  }

  if (!isLoading) {
    return (
      <main className="flex flex-col items-center justify-center w-full h-full p-10 bg-darkGreen md:items-center 2xl:px-36">

        <h1 className="pb-9 font-spaceGroteskRegular text-justify text-white leading-7 md:w-[50vw]">
          Over the past few years, I've been exploring a lot about web development and teaching myself different languages, frontend
          and backend frameworks, as well as different database tools. It's been such a fun journey and reinforced my love for 
          life-long learning, and I wanted to have a central place to share what I've worked on from various courses I took (from following
          along to independent work) as well as personal projects I've built from the newly acquired tools and skills. Take a look at
          the various apps and websites I've built, play around with a demo and check out more details on my Github.
        </h1>

        <div className="flex flex-col w-full py-5 justify-between md:flex-row md:min-h-fit">
          <div className="flex flex-row w-full items-center justify-between pl-5 shadow-md rounded-md bg-white md:w-[30%]">
            <h1 className="font-spaceGroteskRegular text-gray"><BiSearch /></h1>
            <input 
              className="flex w-full p-4 bg-white text-darkGreen text-xs font-spaceGroteskRegular rounded-md focus:outline-none"
              placeholder="Search for a project!"
              id="projectSearch" 
              type="text" 
              value={projectSearch}
              onChange={e => onChangeProjectSearch(e)}
            />
          </div>
          <details className="flex dropdown w-[100%] my-2 md:my-0 md:w-[35%] lg:w-[35%] xl:w-[35%]">
            <summary className="flex flex-row items-center justify-between h-full mb-[2px] btn w-full rounded-md border-0 shadow-md no-animation bg-white text-darkGreen hover:bg-white">
              <h1 
                className="flex normal-case text-xs font-spaceGroteskRegular"
              >{groupSelect}</h1>
              <BiChevronDown className="text-sm"/>
            </summary>
            <ul className="flex px-2 py-4 shadow menu dropdown-content z-[1] rounded-md w-full bg-white text-darkGreen">
              {groups.map((g) => (
                <li
                  onClick={(e) => handleGroupChange(e)}
                  className="text-xs font-spaceGroteskRegular"
                >
                  <a 
                    className="px-4 py-1 rounded-none hover:bg-white"
                    name={g.group}
                  >
                    {g.group}
                  </a>
                </li>
              ))}
            </ul>
          </details>
          <details className="flex dropdown w-[100%] my-0 md:my-0 md:w-[28%] lg:w-[20%] xl:w-[15%]">
            <summary className="flex flex-row items-center justify-between h-full mb-[2px] btn w-full rounded-md border-0 shadow-md no-animation bg-white text-darkGreen hover:bg-white">
              <h1 
                className="flex normal-case text-xs font-spaceGroteskRegular"
              >{toolsSelect}</h1>
              <BiChevronDown className="text-sm"/>
            </summary>
            <ul className="flex px-2 py-4 shadow menu dropdown-content z-[1] rounded-md w-full bg-white text-darkGreen">
              {tools.map((t) => (
                <li
                  onClick={(e) => handleToolsChange(e)}
                  className="text-xs font-spaceGroteskRegular"
                >
                  <a 
                    className="px-4 py-1 rounded-none hover:bg-white"
                    name={t.tools}
                  >
                    {t.tools}
                  </a>
                </li>
              ))}
            </ul>
          </details>
        </div>

        <div className="flex flex-col w-full pt-5 pb-10 gap-7 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {filteredProjects.map(({ id, img, title, group, code_url, demo_url, tools  }, index) =>
            <ProjectCard
              key={index} 
              index={index}
              id={id}
              img={img}
              title={title}
              group={group}
              code_url={code_url}
              demo_url={demo_url}
              tools={tools}
            />
          )}
        </div>
      </main>
    )
  }
}

export default Home;
