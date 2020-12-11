import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { ContactForm } from "../component/contactform";
import { Mobilenav } from "../component/mobileNav";

export default function Home() {
  const [contactForm, setcontactForm] = useState(false);
  const [mobileNav, setmobileNav] = useState(false);
  const toggleForm = () => {
    setcontactForm(!contactForm);
  };
  const toggleNav = () => {
    setmobileNav(!mobileNav);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.homeHeader}>
        <div className={styles.navbar}>
          <div className={styles.navBrand}>S</div>
          
          <div className={styles.mobileNav} onClick={() => toggleNav()}>
            <div className={styles.navLine1}></div>
            <div className={styles.navLine2}></div>
            <div className={styles.navLine3}></div>
          </div>
          <ul className={styles.navList}>
            <li className={styles.navItem}>Home</li>
            <li className={styles.navItem}  onClick={() => toggleForm()}>Contact</li>
          </ul>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.heroSection}>
          <img className={styles.heroSectionbg} src="/star.jpg" />

          <div className={styles.heroChar}>
            <div className={styles.heroCharOne}>
              <img src="/hero-girl.png" />
            </div>
            <div className={styles.heroCharTwo}>
              <img src="/hero-guy-1.png" />
            </div>
            <div className={styles.heroCharThree}>
              <img src="/hero-guy-2.png" />
            </div>
            <div className={styles.heroCharFour}>
              <img src="/hero-guy-3.png" />
            </div>
          </div>
          <div className={styles.heroInfo}>
            <header className={styles.heroHeader}>
              <h1>I am Sagar Giri</h1>
            </header>
           
            <p>A passionate developer from Nepal</p>
            <button
              className={styles.contactButton}
              onClick={() => toggleForm()}
            >
              Lets Talk
            </button>
          </div>
        </div>

        <section className={styles.skillSection}>
          <h1 className={styles.sectionHeader}>
            Skills Set
            <div className={styles.underLine}></div>
          </h1>

          <div className={styles.skillList}>
            <div className={styles.skill}>
              <img className={styles.reactImg} src="/react.png" />
              <h4>React</h4>
            </div>
            <div className={styles.skill}>
              <img className={styles.expressImg} src="/express.png" />
              <h4>Express</h4>
            </div>
            <div className={styles.skill}>
              <img className={styles.mongoImg} src="/mongo.png" />
              <h4>Mongodb</h4>
            </div>
            <div className={styles.skill}>
              <img className={styles.star} />
              <img className={styles.star2} />
              <img className={styles.star3} />
              <img className={styles.star4} />
              <img className={styles.cssImg} src="/css.png" />
              <h4>CSS3</h4>
            </div>
            <div className={styles.skill}>
              <img className={styles.firedot} />
              <img className={styles.firedot2} />
              <img className={styles.firedot3} />
              <img className={styles.firebaseImg} src="/firebase.png" />
              <h4>Firebase</h4>
            </div>

            <div className={styles.skill}>
              <img className={styles.htmlImg} src="/html.png" />
              <h4>HTML5</h4>
            </div>
          </div>
        </section>

        <section className={styles.projectContainer} style={{background:"#e6e6e6"}}>
          <h1 className={styles.sectionHeader}>
            Projects
            <div className={styles.underLine}></div>
          </h1>

          <div className={styles.projectList}>
            <div className={styles.project}>
              <a href="https://github.com/sgc0014/sblog" className={styles.projectDetailLink}>
                <img className={styles.projectImg} src="/project-1.jpg" />
                <button className={styles.projectButton}>
                  Learn More &#x2192;
                </button>
              </a>
            </div>
            <div className={styles.project}>
              <a href="https://github.com/sgc0014/eshop" className={styles.projectDetailLink}>
                <img className={styles.projectImg} src="/project-2.png" />
                <button className={styles.projectButton}>
                  Learn More &#x2192;
                </button>
              </a>
            </div>
            <div className={styles.project}>
              <a href="https://www.icaccm.com/" className={styles.projectDetailLink}>
                <img className={styles.projectImg} src="/project-3.png" />
                <button className={styles.projectButton}>
                  Learn More &#x2192;
                </button>
              </a>
            </div>
            <div className={styles.project}>
              <a href="https://github.com/sgc0014/instaclone" className={styles.projectDetailLink}>
                <img className={styles.projectImg} src="/project-4.png" />
                <button className={styles.projectButton}>
                  Learn More &#x2192;
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Mobilenav toggleForm={toggleForm} toggleNav={toggleNav} mobileNav={mobileNav} />
      <ContactForm toggleForm={toggleForm} contactForm={contactForm} />
      <footer className={styles.footer}>
        <img className={styles.footerMask} src="/footer-white-mask.png"></img>
        <img className={styles.footerbg} src="/footer-pattern-bg.png"></img>
        <div className={styles.footerInfo}>
          <header className={styles.footerHeader}>
            <h1>Interested to work together?</h1>
          </header>
          <div className={styles.footerbtn}   onClick={() => toggleForm()}>Lets Talk</div>
        </div>
      </footer>
    </div>
  );
}
