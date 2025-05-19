import React from 'react';
import './styles/Footer.css';
 
const Footer = () => {
    return (
<footer className="app-footer">
<p>© {new Date().getFullYear()} HR App | Created by Chinedu Ohaegbulam</p>
</footer>
    );
};
 
export default Footer;