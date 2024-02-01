import Image from "next/image";
import Head from "next/head";
import styles from "@/styles/About.module.scss";
import Me from "../../public/images/jenny.png";
import Books from "../../public/images/stack-of-books1.png"

export default function About() {
  return (
    <>
      <main>
        <div className={styles.detailsSection}>
          <div className={styles.about}>
            <h1 data-aos="fade-up">About Me</h1>
            <div className={styles.aboutContainer}>
              <div className={styles.aboutInfo}>
                <p data-aos="fade-up" data-aos-delay="200">
                  I&#39;m a UI/UX and Media Manager who is now
                  learning React JS. 
                </p>
                <p data-aos="fade-up" data-aos-delay="300">
                  Diving into the world of crafting user 
                  experiences in film and music festivals, 
                  long before UX design became a thing, 
                  I honed my ability to collect insightful 
                  information by observing the gap between 
                  what people say and what they do.
                </p>
                <p data-aos="fade-up" data-aos-delay="300">
                Gliding through life like on my roller quads: 
                pulling off tricks and taking unexpected trips, 
                but hey, always rolling with it!
                </p>
                <p data-aos="fade-up" data-aos-delay="400">
                Setting goals is my jam, especially when it 
                comes to reading X number of books each year—
                I set them, crush them, and repeat.
                </p>
                <p data-aos="fade-up" data-aos-delay="400">
                And yes, asking why is a design skill too.
                </p>
              </div>

              <div className={styles.aboutImage}>
                <Image
                  src={Me}
                  alt="Picture of Jennifer Cherini - UX/UI Designer"
                  data-aos="fade-up"
                  data-aos-delay="400"
                />
              </div>
            </div>
          </div>
          <div className={styles.skills}>
            <div className={styles.skillsContainer}>
              <h1 data-aos="fade-up">Skills</h1>
              <div className={styles.skillCards}>
                <div
                  className={styles.skillCard}
                  style={{ backgroundColor: "#B78EA2" }}
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <h2>Expertise</h2>
                  <p>UI/UX Design</p>
                  <p>UX Writing</p>
                  <p>Media Management</p>
                  <p>Front End</p>
                </div>
                <div
                  className={styles.skillCard}
                  style={{ backgroundColor: "#6E60E6" }}
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <h2>Tech Stack & Tools</h2>
                  <p>Figma</p>
                  <p>Illustrator</p>
                  <p>JavaScript</p>
                  <p>React Js</p>
                  <p>HTML5</p>
                  <p>CSS3</p>
                  <p>Jira</p>
                </div>
                <div
                  className={styles.skillCard}
                  style={{ backgroundColor: "#54428E" }}
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <h2>Frameworks</h2>
                  <p>Agile Methodologies</p>
                  <p>Design thinking</p>
                  <p>User-centered Design</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.aboutInspo}> 
          <h1 data-aos="fade-up">Inspo</h1>
          <div className={styles.aboutInspoContainer}>
          <div className={styles.aboutInspoImage}>
                <Image
                  src={Books}
                  alt="Picture of a stack of books I recently read"
                  data-aos="fade-up"
                  data-aos-delay="400"
                />
          </div>
              <div className={styles.aboutInspoInfo}>
                <p data-aos="fade-up" data-aos-delay="200">
                These are some of my recent reads that captured 
                my attention and ignited my imagination. 
                <br />
                <br />
                Whether they uncovered new concepts or offered 
                thought-provoking insights, these books have 
                something extraordinary to offer.
                </p>
              </div>
          
          </div>
        </div>
        </div>
      </main>
    </>
  );
}
