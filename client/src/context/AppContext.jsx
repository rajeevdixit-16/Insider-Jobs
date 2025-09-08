import { createContext, useEffect } from "react";
import { useState } from "react";
import { jobsData } from "../assets/assets";

export const AppContext = createContext();

export const AppContextProvider = (props)=>{

    const [searchFilter,setSearchFilter] = useState({
        title:'',
        location:''
    })

    const [isSearched,setIsSearched] = useState(false);

    const [jobs,setJobs] = useState([]) 

    // Function to set jobs data

    const fetchJobs = async()=>{

    }

    useEffect(()=>{
        setJobs(jobsData)
    },[])

    const value = {
        setSearchFilter,searchFilter,
        isSearched,setIsSearched,
        jobs,setJobs
    }
    return (<AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>)
}