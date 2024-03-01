import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'> 
            <LinkedInIcon></LinkedInIcon>
        </div>
        <p> &copy; 2024 manny6902.github.io</p>
    </div>
  )
}

export default Footer