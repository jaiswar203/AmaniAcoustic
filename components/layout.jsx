import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import Router from "next/dist/server/router";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>
                
                {children} 
                
            </main>
            <Footer />
        </>
    );
};

export default Layout;
