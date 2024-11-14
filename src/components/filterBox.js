import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import {
  setCareerArea,
  setJobFamily,
  setJob,
  setSpecializedJob,
  setJobLevel,
  setSkillCategory,
  setSkillSubCategory,
  setSkill
} from '../store/filterSlice.js';
import { useDispatch, useSelector } from 'react-redux';

export default function FilterBox(props) {
  // Initialize options with `props.filterName` included
  const dispatch = useDispatch();
  const [options, setOptions] = useState([
    'Data Specialist',
    'Resources Team',
    'option3'
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [boxName, setBoxName] = useState(props.filterName);

  const handleDispatch = (name, value) => {
    switch (name) {
      case 'Career Area':
        dispatch(setCareerArea(value));
        break;
      case 'Job Family':
        dispatch(setJobFamily(value));
        break;
      case 'Job':
        dispatch(setJob(value));
        break;
      case 'Specialized Job':
        dispatch(setSpecializedJob(value));
        break;
      case 'Job Level':
        dispatch(setJobLevel(value));
        break;
      case 'Skill Category':
        dispatch(setSkillCategory(value));
        break;
      case 'Skill Sub-Category':
        dispatch(setSkillSubCategory(value));
        break;
      case 'Skill':
        dispatch(setSkill(value));
        break;
      default:
        break;
    }
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mr-8 flex justify-between w-48 px-4 py-4 text-sm font-medium text-gray-700 bg-white shadow-lg border border-gray-300 rounded-md focus:outline-none"
      >
        {boxName}
        <IoIosArrowDown className="mt-1" />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-48 mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
          <ul className="py-1">
            {options.map(option => (
              <li
                key={option}
                onClick={() => {
                  setBoxName(option);
                  setIsOpen(false);
                  if (boxName !== props.filterName) {
                    handleDispatch(props.filterName, boxName);
                  }
                }}
                className="cursor-pointer px-4 py-2 hover:bg-gray-100"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
