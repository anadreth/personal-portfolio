import React from 'react'
import './Experiences.scss'
import { images } from '../../constants'

const Experiences = () => {
  return (
    <div className='app__experiences' id="background">
        <img src={images.boyStanding} alt="" className='img__absolute'/>
        <section className='exp__container'>
            <div className='h__div'>
                <h2>My<br/>Background</h2>
            </div>
            <div className='app__experiences-table'>
                <div>
                    <a href="https://grandbeats.com/" className='work__header'>
                        Grand<br/>Beats<br/>Production
                    </a>
                </div>
                
                <ul>
                    <li><p>Music Composer</p></li>
                    <li><p>Sound Designer</p></li>
                </ul>
            </div>   

            <div className='app__experiences-school'>  
                <div>
                    <a href="https://www.jfmed.uniba.sk/en" className='work__header'>School</a>
                </div>
                
                <ul>
                    <li><p>Jessenius Faculty</p></li>
                    <li><p>General Medicine</p></li>
                    <li><p>Graduated<br/> with honors</p></li>
                </ul>
            </div>
        </section>
    </div>
  )
}

export default Experiences
