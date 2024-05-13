import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Search from "./search/search";
const  SearchPage= ()=>{
   
   const handleOnSearchChange=(SearchData)=>{
       console.log(SearchData);
   }
    return (
        <div className='container'>
            <Search onSearchChange={handleOnSearchChange} /> 
        </div>
    ) 
}

export default SearchPage; 