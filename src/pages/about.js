import Image from "next/image";
import Head from "next/head";
import styles from "@/styles/About.module.scss";
import Me from "../../public/images/jenny.png";

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
                  learning React JS. I started participating in the 
                  creation of user experiences, long before UX design, 
                  in film and music festivals. Managing interactions
                  around people and their needs has always been the 
                  premise, something that I continue to apply in the 
                  digital products I currently work for.
                </p>
                <p data-aos="fade-up" data-aos-delay="300">
                I have been working as a UX designer for three years, 
                carrying out thorough research, designing solutions 
                throughout every instance of digital product creation 
                and collecting feedback in every project I participated in.
                </p>
                <p data-aos="fade-up" data-aos-delay="400">
                I&#39;m an enthusiast driven by curiosity. It is my goal to 
                optimize work processes to enhance the user experience 
                through emotional design.
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
        </div>
      </main>
    </>
  );
}
