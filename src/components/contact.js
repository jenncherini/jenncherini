import React from "react";

/* STYLING */
import styles from "@/styles/Contact.module.scss";
/* ICONS */
import { FaBehance } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

/*  */

import { Element } from "react-scroll";

const ContactLink = ({ Icon, link, delay }) => {
  return (
    <div
      className={styles.contactLinkContainer}
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        aria-label="My social links to contact me"
      >
        <Icon className={styles.icon} />
      </a>
    </div>
  );
};

const ContactSection = () => {
  return (
    <Element name="contact">
      <div className={styles.contactContainer}>
        <div className={styles.contactIntro}>
          <h1 data-aos="fade-up">Keep in touch</h1>
          <p data-aos="fade-up" data-aos-delay="200">
            Thanks for stopping by, I’m currently looking to join a new team. If you think we might be a good
            fit for one another, feel free to contact me
          </p>
        </div>
        <div className={styles.contactLinks} id="contact">
          <ContactLink
            Icon={FaLinkedinIn}
            link="https://www.linkedin.com/in/jennifercherini/"
            delay="400"
          />
          <ContactLink
            Icon={FaBehance}
            link="https://www.behance.net/jennifercherini"
            delay="600"
          />
          <ContactLink
            Icon={FaGithub}
            link="https://github.com/jenncherini"
            delay="1000"
          />
          <ContactLink
            Icon={FaTwitter}
            link=""
            delay="1200"
          />
        </div>
      </div>
    </Element>
  );
};

export default ContactSection;
