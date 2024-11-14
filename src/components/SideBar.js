import React, { useState } from 'react';
import SidebarIcon from './SidebarIcon.js';
import { MdOutlineWidgets } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";
import { VscGraph } from "react-icons/vsc";
import { ImBooks } from "react-icons/im";
import { CiSettings } from "react-icons/ci";

export default function Sidebar() {
  const [index, setIndex] = useState(0); // Track the selected icon index

  return (
    <div className="h-screen w-24 side-bar-bg flex flex-col justify-center space-y-8 rounded-r-[50px] shadow-2xl">
      <SidebarIcon icon={<MdOutlineWidgets size={22} />} value={1} index={index} setIndex={setIndex}/>
      <SidebarIcon icon={<RiContactsLine size={22} />} value={2} index={index} setIndex={setIndex}/>
      <SidebarIcon icon={<VscGraph size={22} />} value={3} index={index} setIndex={setIndex}/>
      <SidebarIcon icon={<ImBooks size={22} />} value={4} index={index} setIndex={setIndex}/>
      <SidebarIcon icon={<CiSettings size={22} />} value={5} index={index} setIndex={setIndex}/>
    </div>
  );
}
