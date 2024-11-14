// filtersSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  careerArea: '',
  jobFamily: '',
  job: '',
  specializedJob: 'abc',
  jobLevel: '',
  skillCategory: '',
  skillSubCategory: '',
  skill: ''
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCareerArea: (state, action) => {
      state.careerArea = action.payload;
      console.log(action)
    },
    setJobFamily: (state, action) => {
      state.jobFamily = action.payload;
      console.log(action)
    },
    setJob: (state, action) => {
      state.job = action.payload;
      console.log(action)
    },
    setSpecializedJob: (state, action) => {
      state.specializedJob = action.payload;
      console.log(action)
    },
    setJobLevel: (state, action) => {
      state.jobLevel = action.payload;
      console.log(action)
    },
    setSkillCategory: (state, action) => {
      state.skillCategory = action.payload;
      console.log(action)
    },
    setSkillSubCategory: (state, action) => {
      state.skillSubCategory = action.payload;
      console.log(action)
    },
    setSkill: (state, action) => {
      state.skill = action.payload;
      console.log(action)
    },
  },
});


export const {
  setCareerArea,
  setJobFamily,
  setJob,
  setSpecializedJob,
  setJobLevel,
  setSkillCategory,
  setSkillSubCategory,
  setSkill,
} = filtersSlice.actions;

export default filtersSlice.reducer;
