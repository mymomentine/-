import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { TfiGithub } from 'react-icons/tfi';
import { MdEmail } from 'react-icons/md';
import { FaDiscord } from "react-icons/fa";

import profileImage from '../images/me.png'; 

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
        marginTop: '100px',
      }}
    >
      {/* CSS media query for smaller screens */}
      <style>
        {`
          /* CSS code for smaller screens */

          @media (max-width: 767px) {
            div.container {
              flex-direction: column;
              align-items: flex-start;
              text-align: left;
            }

            div.container img {
              width: 100%;
              margin-bottom: 20px;
              margin-right: 0; /* Remove margin-right on smaller screens */
            }

            div.container h1 {
              margin-top: 0;
              font-size: 14px;
            }

            div.container div.icon-wrapper {
              justify-content: flex-start;
              margin-top: 2em; /* Increased spacing between icons and "yumeng ma" text */
            }

            .copy-right {
              margin-top: 20px; /* Decreased margin-top to create smaller spacing */
              margin-bottom: 2em; /* Decreased margin-bottom for closer positioning */
              position: static; /* Change to static position */
            }
          }

          /* CSS code for larger screens */

          @media (min-width: 768px) {
            div.container h1 {
              margin-top: -5em;
            }
          }

          /* CSS code for icon wrapper */

          .icon-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 1em;
            margin-bottom: 2em; /* Added more spacing below the icons */
          }

          /* CSS code for icon links */

          .icon-wrapper a {
            color: #787878;
            margin: 0 10px;
            transition: color 0.3s ease-in-out;
          }

          /* CSS code for icon links on hover */

          .icon-wrapper a:hover {
            color: #b4be89;
          }

          /* CSS code for coral links */

          .coral-link {
            color: #b4be89;
            transition: color 0.3s ease-in-out;
          }

          /* CSS code for coral links on hover and active */

          .coral-link:hover,
          .coral-link:active {
            color: gray;
          }
        `}
      </style>

      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '60px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img
            src={profileImage}
            alt="Profile"
            style={{ width: '250px', marginRight: '20px', marginTop: '20px',  borderRadius: '20px' }}
          />
        </div>
        <div>
          <h1
            style={{
              fontSize: '16px',
              fontWeight: '300',
              color: 'gray',
              lineHeight: '1.4',
              marginTop: '1vh',
            }}
          >
            <span style={{ fontSize: '20px', color: 'black' }}>yumeng ma | 马雨萌 🌱</span>
            <br />
            <br />
            I am a computer science master's student at{' '}
            <a href="https://www.brown.edu/" target="_self" rel="noopener noreferrer" style={{ textDecoration: 'none' }} className="coral-link">
              Brown University
            </a>{' '}
            (former intern at the {' '}
            <a href="https://hci.brown.edu/" target="_self" rel="noopener noreferrer" style={{ textDecoration: 'none' }} className="coral-link">
            Brown HCI Lab
            </a>{''}
            ). My interest is in creating and researching interactive social and visual systems that improve user experience, accessibility, and mental health.
            <br />
            <br />
            During my undergraduate studies, I double majored in computer science and psychology at{' '}
            <a href="https://www.asu.edu/" target="_self" rel="noopener noreferrer" style={{ textDecoration: 'none' }} className="coral-link">
              Arizona State University
            </a>
            , where I discovered the world of human-computer interaction.
            <br />
            <br />
            On the side, I enjoy playing/making video games, skateboarding, watching anime, and dabbling in the arts.
            <br />
            <br />
            <span style={{ color: 'black' }}>💭 Current Project</span>
            <br />
            <br />
            Visual Prosthesis: A real-time assistance system to help visually impaired individuals easily locate everyday objects
            (advised by {' '}
            <a href="https://vivo.brown.edu/display/mparadis" target="_self" rel="noopener noreferrer" style={{ textDecoration: 'none' }} className="coral-link">
            Prof. Michael Paradiso
            </a>
            ).
          </h1>
        </div>
      </div>
      {/* <div className="icon-wrapper">
            <a href="https://scholar.google.com/citations?hl=en&user=qTFjaQoAAAAJ" target="_self" rel="noopener noreferrer">
              <FaGraduationCap size={20} />
            </a>
            <a href="https://github.com/momentine" target="_self" rel="noopener noreferrer">
              <TfiGithub size={20} />
            </a>
            <a href="" target="_self" rel="noopener noreferrer">
              <FaDiscord size={20} />
            </a>
            <a href="mailto:yumeng_ma1@brown.edu">
              <MdEmail size={20} />
            </a>
          </div> */}
      <div
        className="copy-right"
        style={{
          fontSize: '12px',
          color: 'gray',
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
        Made with 🧸 by Yumeng Ma
      </div>
    </div>
  );
};

export default About;
