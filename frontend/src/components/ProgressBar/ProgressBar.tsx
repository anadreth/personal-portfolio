import React, { useState, useEffect } from "react";
import './ProgressBar.scss'

type ProgressBarProps = {
  color: string;
  setHighlight: Function;
}

const ProgressBar = ({color, setHighlight}: ProgressBarProps) => {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;
    let amount = 15;

    if (scrolled < 16) {
      setHighlight(false);
      amount = 15;
    } else if (scrolled < 25 ) {
      setHighlight(false);
      amount = 30;
    } else if (scrolled < 30) {
      setHighlight(false);
      amount = 45;
    } else if (scrolled < 80) {
      setHighlight(false);
      amount = 60;
    } else if (scrolled < 84) {
      setHighlight(false);
      amount = 75;
    } else {
      setHighlight(true);
      amount = 100;
      
    }
    setScrollTop(amount);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="container">
      <div className="bar" style={{ width: `${scrollTop}%`, backgroundColor: `var(--${color}-color)`, }}></div>
    </div>
  );
};

export default ProgressBar;
