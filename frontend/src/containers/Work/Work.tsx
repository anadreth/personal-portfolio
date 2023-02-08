import React from 'react'
import './Work.scss'
import {images} from './../../constants/index'


const Work = () => {
  return (
    <div className='app__work' id="work">
      <div className='app__work-creatoroll' > 
        <h2 className='purple' >My projects...</h2>
        <br/>
        <img className='work__brand' src={images.brand} alt="creatoroll" />
        <ul>
          <li><a href="https://www.creatoroll.online/" className='link'>link</a></li>
          <li><a href="https://github.com/anadreth/fullstack-creatoroll" className='code'>code</a></li>
        </ul>
        <p>
          <br/>
          Interactive platform for DnD players and people who like to create <span className='red'>stories</span> and <span className='red'>adventures</span>.
          <br/><br/>
        </p>
        <div className='work__sidebyside'>
          <img className="work__mobile" src={images.tablet} alt="mobile" />
          
          <p>
            <br/>
            It is a <span className='red'>fullstack</span> application build with MERN stack.
            Its current functionality is creation of <span className='red'>unique characters</span> by usage of custom made assets.
            <br/> <br/>
            These assets are made by users and then <span className='red'>shared</span> with community for others to use or get inspired by.
            <br/><br/>
            Characters are made in just a few clicks and are ready for immediate play.
            Currently in development are <span className='red'>adventure</span> and <span className='red'>map</span> creation features.
          </p>
        </div>
        
        <p></p>
      </div>
    </div>
  )
}

export default Work
