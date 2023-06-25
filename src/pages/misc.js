import React from 'react';
import pachimariGif from '../images/pachi-clip.gif';
import { TfiGithub } from 'react-icons/tfi';

const Misc = () => {
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start', // Align the text to the left
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

            div.container h1 {
              margin-top: 0;
              font-size: 14px;
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

          /* CSS code for coral links */

          .coral-link {
            color: #f88379;
            transition: color 0.3s ease-in-out;
          }

          /* CSS code for coral links on hover and active */

          .coral-link:hover,
          .coral-link:active {
            color: gray;
          }

          /* CSS code for GitHub icon */

          .github-icon {
            color: #f88379;
            transition: color 0.3s ease-in-out;
          }

          .github-link:hover .github-icon {
            color: #f88379;
            transition: color 0.3s ease-in-out;
          }

          .github-link:hover .github-icon,
          .github-link:active .github-icon {
            color: gray;
          }
        `}
      </style>

      <div className="container" style={{ marginBottom: '20px' }}>
        <div>
          <h1
            style={{
              fontSize: '16px',
              fontWeight: '300',
              color: 'black',
              lineHeight: '1.4',
              marginTop: '1vh',
              textAlign: 'left',
            }}
          >
            ✧ some personal projects (more coming soon) ✧
            <br />
            I also like{' '}
            <a href="../documents/robotics.pdf" target="_self" rel="noopener noreferrer" style={{ textDecoration: 'none' }} className="coral-link">
              robotics
            </a>
            .
            <div style={{ marginBottom: '10px', marginTop: '20px' }}>
              <span style={{ fontSize: '25px', fontWeight: 'bold', fontFamily: 'Nunito Sans, sans-serif', color: 'black' }}>
                Pachikatamari パチカタマリ
              </span>
              <a href="https://github.com/momentine/pachikatamari" target="_self" rel="noopener noreferrer" className="github-link" style={{ marginLeft: '5px' }}>
                <TfiGithub className="github-icon" />
              </a>
            </div>
            <div style={{ paddingTop: '10px' }}>
              <span style={{ fontSize: '14px', fontFamily: 'Nunito Sans, sans-serif', color: 'black' }}>
                A 3D game inspired by Katamari Damacy and Overwatch's Pachimari. Control a Pachimari and roll around to gather more Pachimari friends. Made with Unity Engine.
              </span>
            </div>
          </h1>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center', // Center the content horizontally
          width: '100%',
          maxWidth: '400px',
          margin: '0 auto', // Center the image
          borderRadius: '10px', // Rounded corners
          overflow: 'hidden', // Hide overflowing content
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)', // Shadow effect
          marginTop: '10px', // Adjusted margin-top to shift the GIF up
          marginBottom: '80px', // Keep the same margin-bottom
        }}
      >
        <img src={pachimariGif} alt="Pachimari" style={{ width: '100%', height: 'auto' }} /> {/* Adjusted size */}
      </div>

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

export default Misc;
