import React from 'react'
import './Experiences.scss'
import { images } from '../../constants'
import {motion} from 'framer-motion'

const Experiences = () => {
  return (
    <div className='app__experiences' id="background">
        <motion.img src={images.boyStanding} alt="" className='img__absolute'
            whileInView={{opacity: [0, 1]}}
            transition={{delay: 0.2, duration: 0.5}}
        />
        <section className='exp__container'>
            <div className='h__div'>
                <motion.h2
                    whileInView={{opacity: [0, 1]}}
                    transition={{delay: 0.3, duration: 0.5}}
                >My<br/>Background</motion.h2>
            </div>
            <div className='app__experiences-table'>
                <div>
                    <motion.a href="https://grandbeats.com/" className='work__header'
                        whileInView={{opacity: [0, 1]}}
                        transition={{delay: 0.4, duration: 0.5}}
                    >
                        Grand
                    </motion.a>
                </div>
                
                <motion.ul
                    whileInView={{opacity: [0, 1]}}
                    transition={{delay: 0.5, duration: 0.5}}
                >
                    <motion.li><p>Music Composer</p></motion.li>
                    <motion.li><p>Sound Designer</p></motion.li>
                </motion.ul>
            </div>   

            <div className='app__experiences-school'>  
                <div>
                    <motion.a href="https://www.jfmed.uniba.sk/en" className='work__header'
                        whileInView={{opacity: [0, 1]}}
                        transition={{delay: 0.6, duration: 0.5}}
                    >School</motion.a>
                </div>
                
                <motion.ul
                    whileInView={{opacity: [0, 1]}}
                    transition={{delay: 0.7, duration: 0.5}}
                >
                    <motion.li><p>Jessenius Faculty</p></motion.li>
                    <motion.li><p>General Medicine</p></motion.li>
                    <motion.li><p>Graduated<br/> with honors</p></motion.li>
                </motion.ul>
            </div>
        </section>
    </div>
  )
}

export default Experiences
