import React, { useState } from 'react';
import SideBar from '../components/SideBar.js';
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoMdContact } from "react-icons/io";
import FilterBox from '../components/filterBox.js';
import JobSkillDetails from '../components/JobSkillDetails.js'

const filterByJob = ['Career Area', 'Job Family', 'Job', 'Specialized Job', 'Job Level'];
const filterBySkill = ['Skill Category', 'Skill Sub-Category', 'Skill'];

function JobTaxonomy() {
  const [jobSearch, setJobSearch] = useState("");

  const handleChange = (e) => {
    setJobSearch(e.target.value);
  }

  return (
    <div className='flex'>
      {/* SideBar */}
      <SideBar />
      <div className='ml-5 px-20 py-10 w-full'>
        <div className='flex justify-between items-center'>
          <div>
            <h1 className='text-4xl font-bold'>Job Taxonomy</h1>
          </div>
          <div className='flex space-x-4'>
            <IoIosNotificationsOutline size={24} />
            <IoMdContact size={24} />
          </div>
        </div>

        {/* Search bar */}

        <div className='flex mt-7 justify-between items-center'>
          <div className="w-1/2">
            <input
              placeholder='Search by job name'
              value={jobSearch}
              onChange={handleChange}
              className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none'
            />
          </div>

          <div className="px-2 py-1 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 cursor-pointer">
            Add New Job
          </div>
        </div>

        {/* Filter by Job buttons*/}

        <div className="mt-5">
          <p className="text-gray-600">Filter By Job</p>
          <div className="space-y-2">
            {filterByJob.map((job) => (
              <FilterBox key={job} filterName={job} />
            ))}
          </div>
        </div>
        <div className="mt-5">
          <p className="text-gray-600">Filter By Skill</p>
          <div className="space-y-2">
            {filterBySkill.map((skill) => (
              <FilterBox key={skill} filterName={skill} />
            ))}
          </div>
        </div>
        <JobSkillDetails />
      </div>
    </div>
  );
}

export default JobTaxonomy;
