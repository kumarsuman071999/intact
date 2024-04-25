import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PolicyIcon from '@mui/icons-material/Policy';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ApiIcon from '@mui/icons-material/Api';

 
export const SidebarData = [
    {
        title: "Home",
        link:"/",
        icon: <HomeIcon/>,
        
 
        
    },
    {
        title: "Services Now",
        link: "/service",
        icon: <ApiIcon/>,
        
        
    },
    {
        title: "Work Items",
        link: "/work",
        icon: <ListAltIcon />,
    },
    {
        title: "Automation",
        link: "/automation",
        icon: <PrecisionManufacturingIcon/>,
 
        
 
       
    },
    {
        title: "Reporting",
        link: "/reporting",
        icon: <AssessmentIcon />,
    },
    {
        title: "Policies",
        link: "/policies",
        icon: <PolicyIcon />,
    },

    {
        title: "Catalog",
        link: "/catalog",
        icon: <LibraryBooksIcon />,
    },
    {
        title: "Administration",
        link: "/administration",
        icon: <AdminPanelSettingsIcon />,
    },
];