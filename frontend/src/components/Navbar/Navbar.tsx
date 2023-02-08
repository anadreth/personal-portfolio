import React, {useState} from 'react'
import { HiMenu, HiX } from 'react-icons/hi';
import {motion, AnimatePresence} from 'framer-motion'
import './Navbar.scss'


const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);
    const [color, setColor] = useState("purple");
    
    window.onscroll = function () {
        setScrollTop(document.documentElement.scrollTop);
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
    };

  return (
    <nav className='app__navbar'>
        <ul className={`app__navbar-list`}>
            {["home", "about", 'skills', "work", "background", "contact"].map( (item) => (
                <li key={`link-${item}`}>
                    <a href={`#${item}`} className={color}>{item}</a>
                </li>
            ))}
        </ul>

        <div className="app__navbar-menu">
        <HiMenu onClick={() => setToggle(true)} />
            <AnimatePresence>           
                {toggle && (
                <motion.div
                    initial={{ x: 300 }}
                    animate={{ x: 0 }}
                    exit={{ x: 350 }}
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
                    </ul>
                </motion.div>
                )}
            </AnimatePresence>
        </div>
    </nav>
  )
}

export default Navbar
