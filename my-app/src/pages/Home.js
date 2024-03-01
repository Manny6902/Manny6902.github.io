import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home'>
      <div className='about'> 
        <h2> Hey, I'm Manish </h2>
        <div className='prompt'> 
          <p>
            I'm a software engineer and game developer   
          </p> 
          <LinkedInIcon />
          <EmailIcon />
          <GitHubIcon />
        </div>
      </div>
      
      <div className='skills'> 
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
              <h2>Section 1</h2>
              <span></span>
          </li>
          <li className='item'>
              <h2>Section 2</h2>
              <span></span>
          </li>  
        </ol>  
      </div>
    </div>
  )
}

export default Home