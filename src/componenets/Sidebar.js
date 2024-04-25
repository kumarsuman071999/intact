import React from 'react';

import "../App.css";
import { SidebarData } from './SidebarData';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <ul className='sidebarList'>
        {SidebarData.map((val,key)=>{
            return <li key={key} onClick={()=>{window.location.pathname=val.link}} className='row'>
                {" "}
                <div>{val.icon}</div>{" "}
                <div>
                    {val.title}
                </div>

            </li>
        }

        )}
        </ul>
     </div>
  );
}

export default Sidebar;