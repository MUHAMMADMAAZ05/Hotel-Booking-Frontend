import React from "react";
import './home.css'
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertylist/PropertyList";
import Featuredproperties from "../../components/featuredproperties/Featuredproperties";
import MailList from "../../components/MailList/MailList";
import Footer from "../../components/footer/Footer";

const Home=()=>{
    return(
        <div>
            <Navbar/>
            <Header/>
            <div className="homeContainer">
                <Featured/>
                <h1 className="homeTitle">Browse by Property Type</h1>
                <PropertyList/>
                <h1 className="homeTitle">Homes guests love</h1>
                <Featuredproperties/>
                <MailList/>
                <Footer/>
            </div>   
        </div>
    )
}

export default Home