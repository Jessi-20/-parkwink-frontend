import React from 'react'
import Header from './Header.js';
import Footer from './Footer.js';

const Layout = ({ children }) => ( 
    <> 
    <Header /> 
    <main>{children}</main> 
    <Footer /> 
    </> 
    ); 
    export default Layout;
    