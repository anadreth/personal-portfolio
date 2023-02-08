import React from 'react'
import { images } from '../../constants'
import './Skills.scss'
import {motion, useScroll, useTransform} from 'framer-motion'

const Skills = () => {
  let amount: number;
  if (screen.width < 1000) {
    amount = 100;
  } else {
    amount = 600;
  }
  let {scrollYProgress} = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", amount + "%"])

  return (
    <div className='app__skills' id="skills">
      <motion.div
        style={{y}}
      >
        <img src={images.html} alt="html" />
        <img src={images.css} alt="css" />
        <img src={images.javascript} alt="js" />

        <img src={images.redux} alt="redux" />
        <img src={images.typescript} alt="ts" />
        <img src={images.react} alt="react" />

        <img src={images.sass} alt="sass" />
        <img src={images.node} alt="node" />
        <img src={images.figma} alt="figma" />

        <img src={images.git} alt="git" />
        <img src={images.ps} alt="AdobePS" />
        <img src={images.mdb} alt="mongoDB" />
      </motion.div>
    </div>
  )
}

export default Skills
