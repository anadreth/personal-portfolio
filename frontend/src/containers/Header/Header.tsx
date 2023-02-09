import React from 'react'
import './Header.scss'
import { images } from '../../constants'
import { useScroll, motion, useTransform } from 'framer-motion'


const Header = () => {
  const miroslav = "Miroslav";
  const vano = " Vaňo"
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
        <motion.p className='p__small light'
          animate={{x: [-100, 0], opacity: [0, 1]}}
          transition={{duration: 0.5, delay: 0}}
        >Hi, my name is</motion.p>
        <div className='mask'>
          <h1>
          {
            miroslav.split("").map((letter, index) => (
              <motion.span
                animate={{y: [200, 0], opacity: [0, 1]}}
                transition={{duration: 1, delay: index/10}}
              >{letter}</motion.span>
            ))
          }
          {
            vano.split("").map((letter, index) => (
              <motion.span
                className='vano'
                animate={{y: [200, 0], opacity: [0, 1]}}
                transition={{duration: 1, delay: index/10}}
              >{letter}</motion.span>
            ))
          }
          </h1>
        </div>
        <p>
          <motion.span
            animate={{ opacity: [0, 1]}}
            transition={{duration: 0.5, delay: 0.2}}
          >Software Developer,</motion.span>
          <br /> 
          <motion.span
            animate={{ opacity: [0, 1]}}
            transition={{duration: 0.5, delay: 0.4}}
          >Music Composer </motion.span>
          <br/>
          <motion.span
            animate={{ opacity: [0, 1]}}
            transition={{duration: 0.5, delay: 0.6}}
          >and Doctor</motion.span>
        </p>
      </motion.div>
      
    </div>
  )
}

export default Header
