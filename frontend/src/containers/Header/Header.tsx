import React from 'react'
import './Header.scss'
import { images } from '../../constants'
import { useScroll, motion, useTransform } from 'framer-motion'


const Header = () => {
  let amount: number;
  if (screen.width < 1000) {
    amount = 400;
  } else {
    amount = 800;
  }
  let {scrollYProgress} = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", amount + "%"])

  return (
    <div className='app__header' id="home"> 
      <div className="glowing-circle"></div>
      <motion.div className='app__header-title'
        style={{y}}
      >
        <div className="glowing-circle-big"></div>
        <p className='p__small light'>Hi, my name is</p>
        <h1>Miroslav <span>Vaňo</span></h1>
        <p>Software Developer,<br /> Music Composer <br/>and Doctor</p>
      </motion.div>
      
    </div>
  )
}

export default Header
