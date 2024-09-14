import React, { useRef, useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import styles from './styles.module.css';
import Button from '@mui/material/Button';
import Logo from './logo'; // Import the Logo component
import Options from './options';

const Page1 = ({ offset, gradient, scroll }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <ParallaxLayer offset={offset} speed={0.2}>
        <div className={`${styles.slopeBegin} ${styles[gradient]}`} />
      </ParallaxLayer>

      <ParallaxLayer offset={offset} speed={0.6}>
        <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
      </ParallaxLayer>

      <ParallaxLayer offset={offset} speed={0.3}>
        <div className={styles.pageTextContainer}>
          <div
            className={`${styles.pageText} ${styles['paragraph-container']} ${hovered ? styles.hovered : ''}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <h1>The Problem..</h1>
            <h2>Peak Demand Variability</h2>
            <p>
              Problem: The power demand in Delhi fluctuates drastically during different seasons and even within a single day. In summer, the demand peaks twice—once in the afternoon and again late at night. This unpredictability makes it difficult for grid operators to balance supply and demand efficiently.
              Impact: Inconsistent supply during peak hours can lead to power cuts or overloading, affecting both residential and commercial areas.
            </p>
            <h2>Expensive Power Purchases During Peak</h2>
            <p>
              Problem: To meet the high demand during peak times, especially in summer, Delhi's utilities are forced to buy electricity from external sources at higher costs.
              Impact: This increases the cost of electricity for consumers and makes the electricity supply more vulnerable to price fluctuations in the short-term power market.
            </p>
          </div>
          <div className={styles.imageContainer}>
            <img
              src='src/images/firstpage.png'
              alt="Pie chart of resources used for electricity production"
              className={`${styles.image} ${hovered ? styles['show-image'] : styles['hidden']}`}
            />
          </div>
          <div className={styles.nextButtonContainer}>
            <Button variant="contained" onClick={() => scroll(1)}>Next</Button>
          </div>
        </div>
      </ParallaxLayer>
    </>
  );
};

const Page2 = ({ offset, gradient, scroll }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <ParallaxLayer offset={offset} speed={0.2}>
        <div className={`${styles.slopeBegin} ${styles[gradient]}`} />
      </ParallaxLayer>

      <ParallaxLayer offset={offset} speed={0.6}>
        <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
      </ParallaxLayer>

      <ParallaxLayer offset={offset} speed={0.3}>
        <div className={styles.pageTextContainer}>
          <div
            className={`${styles.pageText} ${styles['paragraph-container']} ${hovered ? styles.hovered : ''}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <h1>Why use Peak Power?</h1>
            <h2>Reducing Expensive Power Purchases:</h2>
            <p>
              "Peak Power" addresses high electricity costs during peak times by using machine learning to accurately forecast demand and optimize energy procurement. This helps utilities secure electricity at lower rates before peak periods. Additionally, the project integrates energy storage solutions to store power during off-peak times and release it during peaks, reducing reliance on costly external sources.
            </p>
            <h2>Managing Peak Demand Variability:</h2>
            <p>
              The project tackles demand variability with real-time monitoring and dynamic load management. It employs demand response programs to encourage energy use shifts away from peak periods, balancing the grid more effectively. Smart grid technologies are also implemented to stabilize supply during high-demand times, minimizing the risk of power outages and overloading.
              Overall, "Peak Power" aims to lower costs and improve grid reliability, benefiting both consumers and the energy infrastructure in Delhi.
            </p>
          </div>
          <div className={styles.imageContainer}>
            <img
              src='src/images/poowergrid.jpg'
              alt="Power grid"
              className={`${styles.image} ${hovered ? styles['show-image'] : styles['hidden']}`}
            />
          </div>
          <div className={styles.nextButtonContainer}>
            <Button variant="contained" onClick={() => scroll(2)}>Next</Button>
          </div>
        </div>
      </ParallaxLayer>
    </>
  );
};

const Page3 = ({ offset, gradient }) => (
  <>
    <ParallaxLayer offset={offset} speed={0.2}>
      <div className={`${styles.slopeBegin} ${styles[gradient]}`} />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.6}>
      <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.3}>
      <div className={styles.Options}>
        <Options />
      </div>
    </ParallaxLayer>
  </>
);

export default function App() {
  const parallax = useRef(null);

  const scroll = (to) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <Logo /> {/* Add the Logo component */}
      <Parallax ref={parallax} pages={3} horizontal>
        <Page1 offset={0} gradient="pink" scroll={scroll} />
        <Page2 offset={1} gradient="teal" scroll={scroll} />
        <Page3 offset={2} gradient="tomato" />
      </Parallax>
    </div>
  );
}
