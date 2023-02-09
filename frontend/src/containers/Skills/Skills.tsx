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
        {
          [images.html, images.css, images.javascript, images.redux, images.tailwind, images.react, images.sass, images.node, images.figma, images.git, images.ps, images.mdb].map((item, index)=> (
            <motion.img key={item} src={item} alt={item} whileInView={{ opacity: [0, 1], scale: [0, 1]}} transition={{duration: 0.5, delay: index/20 }} />
          ))
        }
      </motion.div>
    </div>
  )
}

export default Skills
