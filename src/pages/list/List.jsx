import React, { useState } from "react";
import './list.css'
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchitem/SearchItem";

const List=()=>{
    const location=useLocation()
    console.log(location)
    const[destination,setDestination]=useState(location.state.destination)
    const[date,setDate]=useState(location.state.date)
    const[openDate,setOpenDate]=useState(false)
    const[options,setOptions]=useState(location.state.options)
  return(
        <div>
            <Navbar/>
            <Header type="list" />
            <div className="listContainer">
                  <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="lsTitle">Search</h1>
                         <div className="lsItem">
                            <label htmlFor="">Destination</label>
                            <input type="text" placeholder={destination}/>
                        </div>
                        <div className="lsItem">
                            <label htmlFor="">Check-In Date</label>
                            <span onClick={()=>{setOpenDate(!openDate)}}>
                                {`${format(date[0].startDate,'MM/dd/yyyy')} to ${format(date[0].endDate,'MM/dd/yyyy')}`}
                                </span>
                                {openDate && (<DateRange onChange={(item)=>setDate([item.selection])}
                                    minDate={new Date()} ranges={date}/>)} 
                        </div>
                        <div className="lsItem">
                            <label htmlFor="">Options</label>
                            <div className="lsOptions">
                            <div className="lsOptionItem">
                                <span className="lsOptionText">Min Price <small>per night</small></span>
                                <input type="number" className="lsOptionInput" />
                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">Max Price <small>per night</small></span>
                                <input type="number" className="lsOptionInput" />
                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">Adult</span>
                                <input type="number" min={1} placeholder={options.adult}
                                className="lsOptionInput" />
                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">Children</span>
                                <input type="number" min={0} placeholder={options.children}
                                className="lsOptionInput" />
                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">Room</span>
                                <input type="number"  min={1} placeholder={options.room}
                                className="lsOptionInput" />
                            </div>
                            </div>
                          </div>
                          <button>Search</button>
                    </div>
                    <div className="listResult">
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                    </div>
                  </div>
            </div>
        </div>
    )
}

export default List