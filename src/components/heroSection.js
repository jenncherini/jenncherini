import React from "react";

import styles from "@/styles/HeroSection.module.scss";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <div className={styles.heroSection} id="hero-section">
      <div className={styles.heroContainer}>
        <div className={styles.heroIntro}>
          <p data-aos="fade-down">Hi! my name is Jennifer, I love</p>
          <h1 data-aos="fade-down" data-aos-delay="200">
            designing <span className={styles.heroColor}>products</span> and{" "}
            <span className={styles.heroColor2}>experiences</span>.
          </h1>
          <div className={styles.heroShortIntro}>
            <p
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-anchor=".heroIntro"
            >
              Media & entertainment manager and UX designer
            </p>
            <p
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-anchor=".heroIntro"
            >
              I seek to deliver tailored experiences through emotional design
            </p>
          </div>
        </div>
        <div
          className={styles.heroCta}
          data-aos="fade-down"
          data-aos-delay="600"
          data-aos-anchor=".heroShortIntro"
        >
          <Link to="uiux" smooth={true} className={styles.heroCtaButtonLink}>
            <button>Check out my works</button>
          </Link>
          <a
            href="https://drive.google.com/file/d/13PplUNt0WIKY1I5v8-q48ks3xfSjalxc/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resume}
          >
            View my Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
