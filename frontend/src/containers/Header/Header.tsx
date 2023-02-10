import React from "react";
import "./Header.scss";
import { useScroll, motion, useTransform } from "framer-motion";

const bounceTransition = {
  y: {
    duration: Infinity,
    yoyo: Infinity,
    ease: "easeOut",
  },
  backgroundColor: {
    duration: 0,
    yoyo: Infinity,
    ease: "easeOut",
    repeatDelay: 0.8,
  },
};

const Header = () => {
  const miroslav = "Miroslav";
  const vano = " Vaňo";
  let amount: number;

  if (screen.width < 1000 && screen.height > 601) {
    amount = 400;
  } else if (screen.width > 1000 && screen.height > 601) {
    amount = 1000;
  } else if (screen.height < 601) {
    amount = 600;
  }

  let { scrollYProgress } = useScroll();
  let opacity = useTransform(scrollYProgress, [0, 0.15], ["1", "0"]);
  let y = useTransform(scrollYProgress, [0, 1], ["0%", amount + "%"]);

  return (
    <div className="app__header" id="home">
      <div className="glowing-circle"></div>
      <motion.div className="app__header-title" style={{ y, opacity }}>
        <div className="glowing-circle-big"></div>
        <motion.p
          className="p__small light"
          animate={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, delay: 0 }}
        >
          Hi, my name is
        </motion.p>
        <div className="mask">
          <h1>
            {miroslav.split("").map((letter, index) => (
              <motion.span
                key={letter}
                animate={{ y: [200, 0], opacity: [0, 1] }}
                transition={{ duration: 1, delay: index / 10 }}
              >
                {letter}
              </motion.span>
            ))}
            {vano.split("").map((letter, index) => (
              <motion.span
                key={letter}
                className="vano"
                animate={{ y: [200, 0], opacity: [0, 1] }}
                transition={{ duration: 1, delay: index / 10 }}
              >
                {letter}
              </motion.span>
            ))}
          </h1>
        </div>
        <p>
          <motion.span
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Software Developer,
          </motion.span>
          <br />
          <motion.span
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Music Composer{" "}
          </motion.span>
          <br />
          <motion.span
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            and Doctor
          </motion.span>
        </p>
      </motion.div>

      <motion.div
        className="scrolldiv"
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delay: 2 }}
      >
        <a href="#about">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="scroll"
            style={{opacity}}
            transition={{
              ease: "linear",
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 3,
              delay: 2,
            }}
            animate={{
              y: [0, -10, 0, -10, 0, -10, 0],
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
            />
          </motion.svg>
        </a>
      </motion.div>
    </div>
  );
};

export default Header;
