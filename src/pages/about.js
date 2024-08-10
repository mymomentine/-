import React from 'react';
import { FaGraduationCap, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Helmet } from 'react-helmet';

import profileImage from '../images/me.png';
import cat from '../images/cat.gif';
import bear from '../images/bear.png';

const About = () => {
  return (
    <div
      style={{
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
      }}
    >
      <Helmet>
        <meta name="robots" content="nosnippet" />
      </Helmet>

      <style>
        {`
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

            .icon-wrapper {
              justify-content: flex-start;
              margin-top: 2em;
            }

            .copy-right {
              margin-top: 20px;
              margin-bottom: 2em;
              position: static;
            }
          }

          @media (min-width: 768px) {
            .container h1 {
              margin-top: -5em;
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

          .tooltip:hover .tooltiptext {
            visibility: visible;
          }
        `}
      </style>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'center',
          width: '100%',
          marginBottom: '20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            flexWrap: 'wrap',
          }}
        >
          <div
            style={{
              width: '150px',
              height: '150px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
              borderRadius: '50%',
              marginRight: '20px',
            }}
          >
            <img
              src={profileImage}
              alt="Profile picture of Yumeng Ma, wearing a blue bucket hat and tilting her head slightly."
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '50%',
              }}
            />
          </div>
        </div>

        <div>
          <div
            style={{
              fontSize: '20px',
              fontWeight: '300',
              color: '#7C7C7C',
              lineHeight: '1.4',
              marginTop: '1vh',
              marginBottom: '0',
            }}
          >
            <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>
              <span style={{ fontWeight: 'bold', marginRight: '10px' }}>Yumeng Ma</span>
              <span style={{ fontWeight: 'normal' }}>马雨萌</span> 🌱
            </div>
            <div style={{ fontSize: '16px', marginBottom: '10px' }}>PhD Student in CSE</div>
            <div style={{ fontSize: '16px' }}>University of Washington</div>
          </div>

          <div className="icon-wrapper" style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
            <a href="mailto:yumengma@uw.edu" aria-label="Send an email to Yumeng">
              <MdEmail size={18} />
            </a>
            <a href="https://github.com/momentine" target="_self" rel="noopener noreferrer" aria-label="Visit Yumeng's GitHub profile">
              <FaGithub size={18} />
            </a>
            <a href="https://scholar.google.com/citations?hl=en&user=qTFjaQoAAAAJ" target="_self" rel="noopener noreferrer" aria-label="Visit Yumeng's Google Scholar profile">
              <FaGraduationCap size={18} />
            </a>
          </div>

        </div>
      </div>

      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginTop: '10px', marginBottom: '60px' }}>
        <div>
          <div style={{ fontSize: '16px', fontWeight: '300', color: '#7C7C7C', lineHeight: '1.4', marginTop: '1vh' }}>
            I will be starting my PhD in Computer Science & Engineering at the{' '}
            <a href="https://www.washington.edu/" target="_self" rel="noopener noreferrer" style={{ textDecoration: 'none' }} className="coral-link">
              University of Washington
            </a>{' '}
            this fall supported by a Paul G. Allen School Fellowship and NSF Graduate Research Fellowship. I recently joined the{' '}
            <a href="https://depts.washington.edu/acelab/" target="_self" rel="noopener noreferrer" style={{ textDecoration: 'none' }} className="coral-link">
              ACE Lab
            </a>,{' '}advised by{' '}
            <span className="tooltip">
              <a href="https://faculty.washington.edu/wobbrock/" target="_self" rel="noopener noreferrer" style={{ textDecoration: 'none', fontSize: '16px' }} className="coral-link">
                Prof. Jacob Wobbrock
              </a>
              <span className="tooltiptext">Professor of Information and, by courtesy, Computer Science & Engineering at the University of Washington</span>
            </span>.

            <br />
            <br />
            I obtained my master of science degree in computer science from{' '}
            <a href="https://www.brown.edu/" target="_self" rel="noopener noreferrer" style={{ textDecoration: 'none' }} className="coral-link">
              Brown University
            </a>{' '}where I worked with{' '}
            <span className="tooltip">
              <a href="https://jeffhuang.com/" target="_self" rel="noopener noreferrer" style={{ textDecoration: 'none', fontSize: '16px' }} className="coral-link">
                Prof. Jeff Huang
              </a>
              <span className="tooltiptext">Associate Professor and Associate Chair of Computer Science at Brown University</span>
            </span>{' '}
            at the Brown HCI Lab, and{' '}
            <span className="tooltip">
              <a href="https://vivo.brown.edu/display/mparadis" target="_self" rel="noopener noreferrer" style={{ textDecoration: 'none', fontSize: '16px' }} className="coral-link">
                Prof. Michael Paradiso
              </a>
              <span className="tooltiptext">Neuroscientist and Founding Director of the Center for Vision Research at Brown University</span>
            </span>{' '}
            in the neuroscience department. Before that, I received concurrent bachelor of science degrees in computer science and psychology from{' '}
            <a href="https://www.asu.edu/" target="_self" rel="noopener noreferrer" style={{ textDecoration: 'none' }} className="coral-link">
              Arizona State University
            </a>{' '}
            where I discovered the world of human-computer interaction.
            <br />
            <br />
            My passion lies in crafting and researching interactive social and visual systems that enhance user experience, accessibility, and mental health. On the side, I enjoy playing and making video games, skateboarding, watching anime, and dabbling in the arts.

            {/* Brainstorming section */}
            <div style={{ marginBottom: '20px' }}></div>
            {/* <div
              style={{
                backgroundColor: '#F3F3F3',
                padding: '10px',
                borderRadius: '5px',
                margin: '10px 0',
              }}
            >
              <span style={{ fontWeight: 'bold' }}>🍓 Brainstorming ~ </span>
              blah blah
            </div> */}

            {/* Updates section */}
            <div style={{ marginBottom: '20px' }}>
              <span style={{ fontWeight: 'bold' }}> Updates </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap' }}>
              <span
                style={{
                  backgroundColor: 'rgba(236, 193, 124, 0.3)',
                  fontWeight: 'bold',
                  color: '#ECC17C',
                  padding: '5px 10px',
                  borderRadius: '5px',
                  marginRight: '10px',
                  whiteSpace: 'nowrap', // Keeps the date on one line
                  flexShrink: 0, // Ensures the date doesn't shrink
                }}
              >
                Jun 2024
              </span>
              <span
                style={{
                  display: 'inline', // Allows the text to wrap naturally
                  whiteSpace: 'normal', // Ensures the text wraps normally
                  flex: 1, // Allows this section to take up available space
                }}
              >
                Moved to Seattle + pc in repair after transit ˙◠˙
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap' }}>
              <span
                style={{
                  backgroundColor: 'rgba(117, 122, 98, 0.3)',
                  fontWeight: 'bold',
                  color: '#757A62',
                  padding: '5px 10px',
                  borderRadius: '5px',
                  marginRight: '10px',
                  whiteSpace: 'nowrap', // Keeps the date on one line
                  flexShrink: 0, // Ensures the date doesn't shrink
                }}
              >
                May 2024
              </span>
              <span
                style={{
                  display: 'inline', // Allows the text to wrap naturally
                  whiteSpace: 'normal', // Ensures the text wraps normally
                  flex: 1, // Allows this section to take up available space
                }}
              >
                Graduated from Brown University
              </span>
              <img
                src={bear}
                alt="A pencil sketch of a bear wearing a graduation hat."
                style={{
                  width: '40px',
                  marginLeft: '20px', // Adjusted for consistency
                  marginTop: '10px', // Adds margin to avoid overlap on smaller screens
                }}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap' }}>
              <span
                style={{
                  backgroundColor: 'rgba(225, 192, 197, 0.3)',
                  fontWeight: 'bold',
                  color: '#E1C0C5',
                  padding: '5px 10px',
                  borderRadius: '5px',
                  marginRight: '10px',
                  whiteSpace: 'nowrap', // Keeps the date on one line
                  flexShrink: 0, // Ensures the date doesn't shrink
                }}
              >
                Apr 2024
              </span>
              <span
                style={{
                  display: 'inline', // Allows the text to wrap naturally
                  whiteSpace: 'normal', // Ensures the text wraps normally
                  flex: 1, // Allows this section to take up available space
                }}
              >
                Attended the CRA-WP Grad Cohort for Women
              </span>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '20px',
                flexWrap: 'wrap', // Allows wrapping on smaller screens
              }}
            >
              <span
                style={{
                  backgroundColor: 'rgba(236, 193, 124, 0.3)',
                  fontWeight: 'bold',
                  color: '#ECC17C',
                  padding: '5px 10px',
                  borderRadius: '5px',
                  marginRight: '10px',
                  whiteSpace: 'nowrap', // Keeps the date on one line
                  flexShrink: 0, // Ensures the date doesn't shrink
                }}
              >
                Nov 2023
              </span>
              <span
                style={{
                  display: 'inline', // Allows the text to wrap naturally
                  whiteSpace: 'normal', // Ensures the text wraps normally
                  flex: 1, // Allows this section to take up available space
                }}
              >
                Built&nbsp;
                <a
                  href="https://pcpartpicker.com/b/Bgy48d"
                  target="_self"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: 'none',
                    fontSize: '16px',
                    color: 'red',
                  }}
                  className="coral-link"
                >
                  my first pc
                </a>
                &nbsp;(now I can run heavy vision-language models)
              </span>
              <img
                src={cat}
                alt="A yellow cartoon cat sitting on a green bean bag, typing furiously on a red laptop positioned on its lap."
                style={{
                  width: '40px',
                  marginLeft: '20px',
                  marginTop: '10px', // Adds margin to avoid overlap on smaller screens
                }}
              />
            </div>



            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <span
                style={{
                  backgroundColor: 'rgba(225, 192, 197, 0.3)',
                  fontWeight: 'bold',
                  color: '#E1C0C5',
                  padding: '5px 10px',
                  borderRadius: '5px',
                  marginRight: '10px',
                  whiteSpace: 'nowrap',
                }}
              >
                Oct 2023
              </span>
              Attended UIST 2023 as a student volunteer and demoed ProactiveAgent for SIC
            </div>
          </div>
        </div>
      </div>

      <div
        className="copy-right"
        style={{
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
        }}
      >
        Potayto Workshop by Yumeng Ma
      </div>
    </div>
  );
};

export default About;
