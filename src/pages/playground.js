import React from 'react';
import pachimariGif from '../images/pachi-clip.gif';
import napkinPng from '../images/napkin.png';
import { FaFileCode } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";
import { Helmet } from 'react-helmet';
import { FaGlasses } from "react-icons/fa";

const Playground = () => {
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Align items in the center for the main axis
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
          /* CSS code for larger screens */
          @media (min-width: 768px) {
            div.container {
              display: flex;
              align-items: flex-start;
              justify-content: flex-start;
              text-align: left;
            }

            div.container h1 {
              margin-top: 0;
            }

            div.container img {
              height: 150px; /* Increased the height of the image to 150px */
              margin-right: 10px; /* Added margin-right for spacing between image and text */
              border-radius: 16px; /* Rounded image corners */
            }
          }

          /* CSS code for coral links */
          .coral-link {
            color: #e85d4e;
            text-decoration: none;
            transition: color 0.3s ease-in-out;
          }

          /* CSS code for coral links on hover and active */
          .coral-link:hover,
          .coral-link:active {
            color: #7C7C7C;
          }

          /* CSS code for author links */
          .author-link {
            color: #7C7C7C;
            text-decoration: none;
            transition: color 0.3s ease-in-out;
          }

          /* CSS code for author links on hover and active */
          .author-link:hover,
          .author-link:active {
            color: #e85d4e;
          }

          /* CSS code for name style */
          .name {
            // font-style: italic;
            color: #a3b759;
          }

          /* CSS code for robotics links */
          .robotics-link {
            line-height: 0.5; /* Adjust line height to center text vertically */
          }

          /* CSS for Hover robotics */
          .tooltip {
            position: relative;
            cursor: pointer;
          }

          /* CSS code for bubble links */
          .bubble-link {
            background-color: #F3F3F3; /* Bubble background color */
            border-radius: 8px; /* Slightly rounded corners for the bubble */
            padding: 8px 10px; /* Vertical padding increased for taller bubble */
            margin: 0 5px; /* Space between bubbles */
            display: inline-block; /* Display as inline-block for proper alignment */
            line-height: 0.5; /* Adjust line height to center text vertically */
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
            color: #7C7C7C;
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

          .venn-container {
            position: relative;
            width: 300px; /* Adjust as needed */
            height: 300px; /* Adjust as needed */
            margin: auto;
            cursor: pointer;
          }
          
          .circle {
            position: absolute;
            width: 180px; /* Adjust as needed */
            height: 180px; /* Adjust as needed */
            border-radius: 50%;
            transition: transform 1s;
          }
          
          .circle-top {
            // background-color: #757A62;
            background-color: rgba(117, 122, 98, 0.2); 
            top: 5%;
            left: 20%;
            transform: translateX(5%) translateY(0%);
            border: 1px solid #757A62;
          }
          
          .circle-left {
            background-color: rgba(225, 192, 197, 0.2);
            bottom: 0;
            left: 20%; 
            transform: translateX(-25%) translateY(0%);
            border: 1px solid #E1C0C5;
          }
          
          .circle-right {
            background-color: rgba(236, 193, 124, 0.2); 
            bottom: 0;
            right: 15%; 
            transform: translateX(25%) translateY(0%);
            border: 1px solid #ECC17C;
          }
          
          /* Hover adjustments for merging effect */
          .venn-container:hover .circle-top {
            transform: translateX(5%) translateY(25%);
          }
          
          .venn-container:hover .circle-left {
            transform: translateX(0%) translateY(-25%);
          }
          
          .venn-container:hover .circle-right {
            transform: translateX(0%) translateY(-25%);
          }

          .text-left {
            position: absolute;
            bottom: 20px; /* Adjust as needed */
            left: 50px; /* Adjust as needed */
            color: #E1C0C5;
            text-align: center;
          }
          
          .text-right {
            position: absolute;
            bottom: 35px; /* Adjust as needed */
            right: 50px; /* Adjust as needed */
            color: #ECC17C;
            text-align: center;
          }
          
          .text-top {
            position: absolute;
            top: 45px; /* Adjust as needed */
            left: 50%; /* Center horizontally */
            transform: translateX(-38%);
            color: #757A62;
            text-align: center;
          }
 
        `}
      </style>

      {/* Project container for Napkin */}
      <div className="project-container" style={{
        display: 'flex',
        flexDirection: 'row', // Change direction to row
        alignItems: 'center', // Center items vertically
        justifyContent: 'space-between', // Space between image and text
        width: '100%',
        marginBottom: '20px',
      }}>
        {/* Image on the left */}
        <img src={napkinPng} alt="Napkin" style={{
          width: '40%', // Adjust width as needed
          height: 'auto',
          marginRight: '20px', // Add some space between image and text
        }} />

        {/* Text on the right */}
        <div style={{ width: '55%' }}> {/* Adjust width as needed */}
          <h1 style={{
            fontSize: '16px',
            fontWeight: '300',
            color: '#7C7C7C',
            lineHeight: '1.4',
            marginTop: '1vh',
            marginLeft: '10px', // Add margin to create spacing between the image and text
            textAlign: 'left', // Align text to the left
          }}>
            <div style={{ marginBottom: '10px', marginTop: '0px' }}>
              {/* <span style={{ fontSize: '20px', fontWeight: 'bold', fontFamily: 'Nunito Sans, sans-serif', color: 'black' }}> */}
              <strong>Napkin
              </strong>
              {/* </span> */}
              {/* <a href="https://github.com/momentine/napkin" target="_self" rel="noopener noreferrer" className="github-link" style={{ marginLeft: '5px' }}>
                <FaCode className="github-icon" />
              </a> */}
            </div>
            <div style={{ paddingTop: '0px' }}>
              A sticky notes cross-platform desktop application developed using Electron, Vite 2, Vue 3, TypeScript, and Electron Builder. Napkin incorporates components from traditional todo and reminder apps and allows customizable transparent backgrounds.
            </div>

            <div style={{ marginLeft: '-5px', marginTop: '10px', marginBottom: '10px' }}>
              <a href="https://github.com/momentine/napkin"
                target="_self"
                rel="noopener noreferrer"
                className="coral-link bubble-link">
                code <FaFileCode size={10} />
              </a>
            </div>

          </h1>
        </div>
      </div>

      {/* Project container for Pachikatamari */}
      <div className="project-container" style={{
        display: 'flex',
        flexDirection: 'row', // Change direction to row
        alignItems: 'center', // Center items vertically
        justifyContent: 'space-between', // Space between image and text
        width: '100%',
        marginBottom: '20px',
      }}>
        {/* Image on the left */}
        <img src={pachimariGif} alt="Pachimari" style={{
          width: '40%', // Adjust width as needed
          height: 'auto',
          marginRight: '20px', // Add some space between image and text
        }} />

        {/* Text on the right */}
        <div style={{ width: '55%' }}> {/* Adjust width as needed */}
          <h1 style={{
            fontSize: '16px',
            fontWeight: '300',
            color: ' #7C7C7C',
            lineHeight: '1.4',
            marginTop: '1vh',
            marginLeft: '10px', // Add margin to create spacing between the image and text
            textAlign: 'left', // Align text to the left
          }}>
            <div style={{ marginBottom: '10px', marginTop: '20px' }}>
              <strong>Pachikatamari (パチ塊)
              </strong>
            </div>
            <div style={{ paddingTop: '0px' }}>
              {/* <span style={{ fontSize: '14px', fontFamily: 'Nunito Sans, sans-serif', color: 'black' }}> */}
              A 3D game inspired by Overwatch's Pachimari (パチマリ) and Katamari Damacy's katamari (塊). Control a Pachimari and roll around to gather more Pachimari friends. Made with Unity Engine.
              {/* </span> */}
            </div>
            <div style={{ marginLeft: '-5px', marginTop: '10px', marginBottom: '10px' }}>
              <a href="https://github.com/momentine/pachikatamari"
                target="_self"
                rel="noopener noreferrer"
                className="coral-link bubble-link">
                code <FaFileCode size={10} />
              </a>
            </div>
          </h1>
        </div>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start', // Align items to the start
        width: '100%',
        paddingLeft: '20px', // Assuming this matches the padding/margin used for the images
        marginBottom: '30px'
      }}>
        <h1 style={{
          textAlign: 'left',
          fontSize: '16px',
          fontWeight: '300',
          color: '#7C7C7C',
          lineHeight: '1.4',
          marginTop: '1vh',
        }}>
          <span style={{ fontWeight: 'bold' }}> Miscellaneous
          </span>
          <div >
            <div style={{ marginBottom: '20px' }}></div>
            Guiding robots in performing grasp tasks under text-based instructions
            <a href="../documents/robotics.pdf"
              target="_self"
              rel="noopener noreferrer"
              className="coral-link robotics-link"> {' '} <FaRobot size={16} />
            </a>
          </div>
          <div >
            <div style={{ marginBottom: '20px' }}></div>
            Visual prosthesis system to enhance daily experiences for people with visual impairments
            <a href="../documents/visual_prosthesis.pdf"
              target="_self"
              rel="noopener noreferrer"
              className="coral-link robotics-link"> {' '} <FaGlasses size={16} />
            </a>
          </div>
          <div style={{ marginBottom: '30px' }}></div>
        </h1>
      </div>


      {/* Footer */}
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

export default Playground;
