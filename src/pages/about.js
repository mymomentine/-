import React from 'react';
import { FaGraduationCap, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Helmet } from 'react-helmet';
import profileImage from '../images/me.png';
import cat from '../images/cat.gif';

const About = () => {
  return (
    <div style={styles.container}>
      <Helmet>
        <meta name="robots" content="nosnippet" />
      </Helmet>

      <style>
        {`
          /* CSS for smaller screens */
          .tooltip:hover .tooltiptext {
            visibility: visible;
          }
          @media (max-width: 767px) {
            .container {
              flex-direction: column;
              align-items: flex-start;
              text-align: left;
            }

            .container img {
              width: 100%;
              margin-bottom: 20px;
              margin-right: 0;
            }

            .container h1 {
              margin-top: 0;
              font-size: 14px;
            }

            .icon-wrapper {
              justify-content: flex-start;
              margin-top: 2em;
            }

            .copy-right {
              margin-top: 20px;
              margin-bottom: 2em;
              position: static;
            }

            .tooltip a {
              font-size: 16px;
            }
          }

          /* CSS for larger screens */
          @media (min-width: 768px) {
            .container h1 {
              margin-top: -5em;
            }

            .tooltip a {
              font-size: 16px;
            }
          }

          .icon-wrapper a {
            color: #787878;
            margin: 5px;
            transition: color 0.3s ease-in-out;
          }

          .icon-wrapper a:hover {
            color: #e85d4e;
          }

          .coral-link {
            color: #e85d4e;
            transition: color 0.3s ease-in-out;
          }

          .coral-link:hover,
          .coral-link:active {
            color: #7C7C7C;
          }

          .tooltip {
            position: relative;
            display: inline-block;
            cursor: pointer;
          }

          .tooltip .tooltiptext {
            visibility: hidden;
            width: 200px;
            background-color: white;
            color: #7C7C7C;
            text-align: center;
            border-radius: 6px;
            padding: 5px 10px;
            position: absolute;
            z-index: 1;
            bottom: 125%;
            left: 50%;
            margin-left: -100px;
            box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.2);
            font-size: 10px;
          }

          .tooltip .tooltiptext::after {
            content: "";
            position: absolute;
            top: 100%;
            left: 50%;
            margin-left: -5px;
            border-width: 5px;
            border-style: solid;
            border-color: white transparent transparent transparent;
          }
        `}
      </style>

      <div style={styles.profileSection}>
        <div style={styles.profileImageWrapper}>
          <img
            src={profileImage}
            alt="雨萌, wearing a blue bucket hat beanie and tilting her head slightly to the side"
            style={styles.profileImage}
          />
        </div>
        <div>
          <h1 style={styles.heading}>
            <div style={styles.name}>
              <span>yumeng ma</span> <span style={styles.chineseName}>马雨萌</span> 🌱
            </div>
            <div style={styles.subHeading}>incoming CSE PhD</div>
            <div style={styles.subHeading}>University of Washington</div>
          </h1>
          <div className="icon-wrapper" style={styles.iconWrapper}>
            <a href="mailto:yumeng_ma1@brown.edu">
              <MdEmail size={18} />
            </a>
            <a href="https://github.com/momentine" target="_self" rel="noopener noreferrer">
              <FaGithub size={18} />
            </a>
            <a href="https://scholar.google.com/citations?hl=en&user=qTFjaQoAAAAJ" target="_self" rel="noopener noreferrer">
              <FaGraduationCap size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="container" style={styles.textContainer}>
        <div>
          <h1 style={styles.text}>
            I will be starting my PhD in Computer Science & Engineering at the{' '}
            <a href="https://www.washington.edu/" target="_self" rel="noopener noreferrer" style={styles.link} className="coral-link">
              University of Washington{' '}
            </a>
            this fall supported by a Paul G. Allen School Fellowship and NSF Graduate Research Fellowship.
            <br /><br />
            I recently graduated with a master of science degree in computer science from{' '}
            <a href="https://www.brown.edu/" target="_self" rel="noopener noreferrer" style={styles.link} className="coral-link">
              Brown University
            </a>{' '}
            where I worked with{' '}
            <span className="tooltip">
              <a href="https://jeffhuang.com/" target="_self" rel="noopener noreferrer" style={styles.link} className="coral-link">
                Prof. Jeff Huang
              </a>
              <span className="tooltiptext">Associate Professor and Associate Chair of Computer Science at Brown University</span>
            </span>{' '}
            at the Brown HCI Lab, and{' '}
            <span className="tooltip">
              <a href="https://vivo.brown.edu/display/mparadis" target="_self" rel="noopener noreferrer" style={styles.link} className="coral-link">
                Prof. Michael Paradiso
              </a>
              <span className="tooltiptext">Neuroscientist and Founding Director of the Center for Vision Research at Brown University</span>
            </span>{' '}
            in the neuroscience department.
            <br /><br />
            Before that, I received concurrent bachelor of science degrees in computer science and psychology from{' '}
            <a href="https://www.asu.edu/" target="_self" rel="noopener noreferrer" style={styles.link} className="coral-link">
              Arizona State University
            </a>{' '}
            where I discovered the world of human-computer interaction.
            <br /><br />
            My passion lies in crafting and researching interactive social and visual systems that enhance user experience, accessibility, and mental health. On the side, I enjoy playing and making video games, skateboarding, watching anime, and dabbling in the{' '}
            <span className="tooltip">
              <a target="_self" rel="noopener noreferrer" style={styles.artLink} className="coral-link">
                arts
              </a>
              <span className="tooltiptext">Lately it's been doodling on napkins</span>
            </span>
            .

            <div style={{ marginBottom: '20px' }}></div>
            
             {/* <div style={{
               backgroundColor: '#F3F3F3',
              padding: '10px',
             borderRadius: '5px',
            margin: '10px 0',
            }}>
              <span style={{ fontWeight: 'bold' }}>🍓 Brainstorming ~ </span>
              Visual Prosthesis: A real-time assistance system to help low vision individuals easily locate everyday objects (advised by {' '}
              <div className="tooltip">
                <a
                  href="https://vivo.brown.edu/display/mparadis"
                  target="_self"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', fontSize: '16px' }}
                  className="coral-link"
                >
                  Prof. Michael Paradiso
                </a>).
                <span className="tooltiptext">
                  Neuroscientist and Founding Director of the Center for Vision Research at Brown University
                </span>
              </div>
            </div>
            <div style={{ marginBottom: '20px' }}></div> */}

            <div style={{ marginBottom: '20px' }}>
              <span style={{ fontWeight: 'bold' }}> Updates </span>
            </div>
            <div style={styles.update}>
              <span style={styles.updateDate}>Nov 19 2023</span>
              Built&nbsp;<a href="https://pcpartpicker.com/b/Bgy48d" target="_self" rel="noopener noreferrer" style={styles.link} className="coral-link">
                my first pc
              </a>&nbsp;(now I can run heavy vision-language models)
              <img
                src={cat}
                alt="A yellow cartoon cat sitting on a green bean bag, typing furiously on a red laptop positioned on its lap."
                style={styles.catImage}
              />
            </div>
            <div style={styles.update}>
              <span style={styles.updateDate}>Oct 29 2023</span>
              <span>Attended UIST 2023 as a student volunteer and demoed ProactiveAgent for SIC</span>
            </div>
          </h1>
        </div>
      </div>

      <div style={styles.footer}>
        {/* hi */}
      </div>
      <div className="copy-right" style={styles.copyRight}>
        Potayto Workshop by Yumeng Ma
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: '0 auto',
    maxWidth: '800px',
    padding: '0 20px',
    fontFamily: 'Nunito Sans, sans-serif',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    backgroundColor: 'white',
    minHeight: '80vh',
    marginTop: '30px',
  },
  profileSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    marginBottom: '20px',
  },
  profileImageWrapper: {
    width: '150px',
    height: '150px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: '50%',
    marginRight: '20px',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '50%',
  },
  heading: {
    fontSize: '20px',
    fontWeight: '300',
    color: '#7C7C7C',
    lineHeight: '1.4',
    marginTop: '1vh',
    marginBottom: '0',
  },
  name: {
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  chineseName: {
    fontWeight: 'normal',
  },
  subHeading: {
    fontSize: '16px',
    marginBottom: '10px',
  },
  iconWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px',
  },
  textContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: '10px',
    marginBottom: '60px',
  },
  text: {
    fontSize: '16px',
    fontWeight: '300',
    color: '#7C7C7C',
    lineHeight: '1.4',
    marginTop: '1vh',
  },
  link: {
    textDecoration: 'none',
  },
  artLink: {
    textDecoration: 'none',
    fontSize: '16px',
    color: '#7C7C7C',
  },
  update: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  updateDate: {
    backgroundColor: 'rgba(236, 193, 124, 0.3)',
    fontWeight: 'bold',
    color: '#ECC17C',
    padding: '5px 10px',
    borderRadius: '5px',
    marginRight: '10px',
    whiteSpace: 'nowrap',
  },
  catImage: {
    width: '40px',
    marginRight: '20px',
  },
  footer: {
    position: 'absolute',
    bottom: '10px',
    left: '20px',
    fontSize: '6px',
    color: '#7C7C7C',
    textAlign: 'left',
  },
  copyRight: {
    fontSize: '12px',
    color: '#7C7C7C',
    textAlign: 'center',
    marginTop: '20px',
    position: 'absolute',
    bottom: '10px',
    width: '100%',
    borderTop: '1px solid white',
    marginBottom: '10px',
    zIndex: '20',
  },
};

export default About;
