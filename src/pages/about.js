import React from 'react';

import { FaGraduationCap } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import profileImage from '../images/me.png';
import cat from '../images/cat.gif';
import { Helmet } from 'react-helmet';

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

      {/* CSS media query for smaller screens */}
      <style>
        {`
          /* CSS code for smaller screens */
        
          .tooltip:hover .tooltiptext {
            visibility: visible;
          }
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

          /* CSS code for icon links */

          .icon-wrapper a {
            color: #787878;
            margin: 5px;
            transition: color 0.3s ease-in-out;
          }

          /* CSS code for icon links on hover */

          .icon-wrapper a:hover {
            color: #e85d4e;
          }

          /* CSS code for coral links */

          .coral-link {
            color: #e85d4e;
            transition: color 0.3s ease-in-out;
          }

          /* CSS code for coral links on hover and active */

          .coral-link:hover,
          .coral-link:active {
            color: #7C7C7C;
          }

          /* CSS for Hover bubble */
          .tooltip {
            position: relative;
            display: inline-block;
            cursor: pointer;
          }
          
          .tooltip .tooltiptext {
            visibility: hidden;
            width: 200px;
            background-color: white;
            color:  #7C7C7C;
            text-align: center;
            border-radius: 6px;
            padding: 5px 10px;
            position: absolute;
            z-index: 1;
            bottom: 125%;
            left: 50%;
            margin-left: -100px;
            box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.2);
            font-size: 10px;
          
            /* Create tail for the tooltip */
            &::after {
              content: "";
              position: absolute;
              top: 100%; 
              left: 50%;
              margin-left: -5px;
              border-width: 5px;
              border-style: solid;
              border-color: white transparent transparent transparent;
            }
          }
          
          .tooltip:hover .tooltiptext {
            visibility: visible;
          }

        `}
      </style>

      <div style={{
        display: 'flex',
        flexDirection: 'row', // Horizontal orientation
        alignItems: 'flex-start', // Aligns items to the start of the flex container
        justifyContent: 'center',
        width: '100%',
        marginBottom: '20px'
      }}>

<div style={{
  display: 'flex',
  flexDirection: 'row', // Use 'column' for smaller screens if manually adjusting or via external CSS
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexWrap: 'wrap', // Allows items to wrap to the next line on narrow screens
}}>
  <div style={{
    width: '150px',
    height: '150px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: '50%', 
    marginRight: '20px', // Provides spacing between the image and text
  }}>
    <img
      src={profileImage}
      alt="Profile"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '50%',
      }}
    />
  </div>

  {/* Text content here */}
</div>

        

        <div>
          <h1 style={{
            fontSize: '20px',
            fontWeight: '300', // Normal font weight for the text
            color: '#7C7C7C', // Gray color for all text
            lineHeight: '1.4',
            marginTop: '1vh',
            marginBottom: '0', // No bottom margin here
          }}>

            <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>
              <span style={{ fontWeight: 'bold', marginRight: '10px' }}>yumeng ma</span> {/* Added right margin */}
              <span style={{ fontWeight: 'normal' }}>马雨萌</span> 🌱
            </div>

            <div style={{ fontSize: '16px', marginBottom: '10px' }}> MS CS </div> {/* Consistent marginBottom */}

            <div style={{ fontSize: '16px' }}> Brown University</div>

          </h1>

          <div className="icon-wrapper" style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
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

      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginTop: '10px', marginBottom: '60px' }}>
        <div>
          <h1
            style={{
              fontSize: '16px',
              fontWeight: '300',
              color: '#7C7C7C',
              lineHeight: '1.4',
              marginTop: '1vh',
            }}
          >
            I am a computer science master's student at{' '}
            <a href="https://www.brown.edu/" target="_self" rel="noopener noreferrer" style={{ textDecoration: 'none' }} className="coral-link">
              Brown University
            </a>{' '}
            (former intern at the {' '}
            <a href="https://hci.brown.edu/" target="_self" rel="noopener noreferrer" style={{ textDecoration: 'none' }} className="coral-link">
              Brown HCI Lab
            </a>
            )
            {''} advised by {''}
            <div className="tooltip">
              <a
                href="https://jeffhuang.com/"
                target="_self"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', fontSize: '16px' }}
                className="coral-link"
              >
                Prof. Jeff Huang
              </a>
              <span className="tooltiptext">
                Associate Professor and Associate Chair of Computer Science at Brown University
              </span>
            </div>
            . My interest is in creating and researching interactive social and visual systems that improve user experience, accessibility, and mental health. 
            <br />
            <br />
            I will be starting my PhD in Computer Science & Engineering at the{' '}
            <a href="https://www.washington.edu/" target="_self" rel="noopener noreferrer" style={{ textDecoration: 'none' }} className="coral-link">
              University of Washington {' '}
            </a>
            this fall supported by a Paul G. Allen School Fellowship and NSF Graduate Research Fellowship.
            <br />
            <br />
            Previously, I received concurrent bachelor of science degrees in computer science and psychology from{' '}
            <a href="https://www.asu.edu/" target="_self" rel="noopener noreferrer" style={{ textDecoration: 'none' }} className="coral-link">
              Arizona State University
            </a>
            , where I discovered the world of human-computer interaction.
            <br />
            <br />
            On the side, I enjoy playing/making video games, skateboarding, watching anime, and dabbling in the arts.

            <div style={{ marginBottom: '20px' }}></div> {/* Increased div space before the bubble */}

            <div style={{
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
            <div style={{ marginBottom: '20px' }}></div>
            <div style={{ marginBottom: '20px' }}> {/* Additional spacing for "Updates" */}
              <span style={{ fontWeight: 'bold' }}> Updates </span>
            </div>

            {/* <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <span style={{
                backgroundColor: 'rgba(117, 122, 98, 0.3)',
                fontWeight: 'bold',
                color: '#757A62',
                padding: '5px 10px', // Padding inside the bubble
                borderRadius: '5px', // Slightly rounded corners
                marginRight: '10px',
                whiteSpace: 'nowrap' // Prevent date from wrapping
              }}>
                Apr 04 2024
              </span>
              <span>Received the 2024 NSF Graduate Research Fellowship</span>
            </div> */}

            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <span style={{
                backgroundColor: 'rgba(236, 193, 124, 0.3)', // #ECC17C with 30% transparency
                fontWeight: 'bold',
                color: '#ECC17C',
                padding: '5px 10px', // Padding inside the bubble
                borderRadius: '5px', // Slightly rounded corners
                marginRight: '10px',
                whiteSpace: 'nowrap' // Prevent date from wrapping
              }}>
                Nov 19 2023
              </span>
              <span>Built <a href="https://pcpartpicker.com/b/Bgy48d" target="_self" rel="noopener noreferrer" style={{ textDecoration: 'none', fontSize: '16px' }} className="coral-link">
                my first pc
              </a> (now I can run heavy vision-language models) </span>
              <img
                src={cat}
                alt="Profile"
                style={{
                  width: '40px',
                  marginRight: '20px'
                }}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <span style={{
                backgroundColor: 'rgba(225, 192, 197, 0.3)', // #E1C0C5 with 30% transparency
                fontWeight: 'bold',
                color: '#E1C0C5',
                padding: '5px 10px', // Padding inside the bubble
                borderRadius: '5px', // Slightly rounded corners
                marginRight: '10px',
                whiteSpace: 'nowrap' // Prevent date from wrapping
              }}>
                Oct 29 2023
              </span>
              <span>Attended UIST 2023 as a student volunteer and demoed ProactiveAgent for SIC</span>
            </div>

          </h1>
        </div>
      </div>
      { }

      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          left: '20px',
          fontSize: '6px',
          color: '#7C7C7C',
          textAlign: 'left',
        }}
      >
        {/* hi */}
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
