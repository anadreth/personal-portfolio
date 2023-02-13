import React, {useState} from 'react'
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion'
import './Navbar.scss'
import { images } from '../../constants';
import ProgressBar from '../ProgressBar/ProgressBar';



const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);
    const [color, setColor] = useState("purple");
    const [highlight, setHighlight] = useState(false);

    
    window.onscroll = function () {
        setScrollTop(document.documentElement.scrollTop);

        if (window.screen.height < 860) {
            if (scrollTop < 2150) {
                setColor("purple");
            } else if (scrollTop > 2150 && scrollTop < 4100) {
              setColor("red");
            }
            else if (scrollTop > 4100 && scrollTop < 4650) {
                setColor("light");
            } else if (scrollTop > 4650) {
                setColor("purple");
            }

        } else {
            if (scrollTop < 2350) {
                setColor("purple");
            } else if (scrollTop > 2350 && scrollTop < 4200) {
              setColor("red");
            }
            else if (scrollTop > 4200 && scrollTop < 4800) {
                setColor("light");
            } else if (scrollTop > 4800) {
                setColor("purple");
            }
        }

        
    };


  return (
    <nav className='app__navbar'>
        
        <motion.ul className={`app__navbar-list`}
            animate={{y: [-100, 0], opacity: [0, 1]}}
            transition={{duration: 1, delay: 1, ease: "easeInOut"}}
        >
            {["home", "about", 'skills', "work", "background", "contact"].map( (item, index) => (
                <motion.li key={`link-${item}`}>
                    <div id={`link-${item}`}  className={`dot ${color}dot`}></div>
                    <a href={`#${item}`} className={color}>{item}</a>
                </motion.li>
            ))}
                <motion.li >
                    <div id={"cv"}  className={`dot ${color}dot`}></div>
                    <a href={images.cv} className={color} target="_blank" >resume</a> 
                </motion.li>
        </motion.ul>

        <div className="app__navbar-menu">
        <HiMenu onClick={() => setToggle(true)} />
            <AnimatePresence>           
                {toggle && (
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    <HiX onClick={() => setToggle(false)} />
                    <ul>
                    {["home", "about", 'skills', "work", "background", "contact"].map((item) => (
                        <li key={item}>
                        <a href={`#${item}`} onClick={() => setToggle(false)}>
                            {item}
                        </a>
                        </li>
                    ))}
                        <li>
                            <a href={images.cv} onClick={() => setToggle(false)} target="_blank" >resume</a> 
                        </li>
                    </ul>
                </motion.div>
                )}
            </AnimatePresence>
        </div>
        <ProgressBar color={color} setHighlight={setHighlight} />

        <a href={images.cv} target="_blank">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`${highlight ? "highlight" : "nohighlight"} click`}
            transition={{
              ease: "linear",
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 3,
              delay: 2,
            }}
            animate={{
              y: [0, 10, 0, 10, 0, 10, 0],
            }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
          </motion.svg>

        </a>
    </nav>
  )
}

export default Navbar
