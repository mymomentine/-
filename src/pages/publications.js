// import React from 'react';
import React, { useState } from 'react';
import ProactiveAgent from '../images/proactiveagent.png';
import liveTyping from '../images/livetyping.png';
import mrpwImage from '../images/mrpw.png';
import { FaFilePdf } from "react-icons/fa";
import { FaPaperclip } from "react-icons/fa";
import { FaFileCode } from "react-icons/fa";
import { FaCarrot } from "react-icons/fa";
import { Helmet } from 'react-helmet';

const Publications = () => {
  const [isMerged, setIsMerged] = useState(false);

  const handleVennClick = () => {
    setIsMerged(!isMerged);
  };

  return (

    <div
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
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

          .research-interests {
            position: absolute;
            top: 0; /* Align with the top of the container */
            right: 0; /* Align with the right of the container */
            padding-left: 20px; /* Add some space between the Venn diagram and the text */
            width: calc(100% - 300px); /* Assuming the venn-container is 300px wide */
            height: 100%;
            display: flex;
            align-items: center; /* This will vertically center the text */
            font-size: 11px;
            color: #7C7C7C;
          }    

          @media (orientation: landscape) {
            .tooltip .author-link {
              font-size: 16px; /* Adjust as needed */
            }
          }

        `}
      </style>

      <div >
        <h1
          style={{
            fontSize: '16px',
            fontWeight: '300',
            color: '#7C7C7C',
            lineHeight: '1.4',
            marginTop: '1vh',
            marginBottom: '30px'
          }}
        >
          <span style={{ fontWeight: 'bold' }}> Conference Proceedings </span>
        </h1>
      </div>

      <div className="container" style={{ marginBottom: '30px', display: 'flex', alignItems: 'flex-start' }}>

        <img src={liveTyping} alt="Publication Image" style={{ height: '150px', borderRadius: '16px' }} /> {/* Increased the height of the image */}
        <h1
          style={{
            fontSize: '16px',
            fontWeight: '300',
            color: '#7C7C7C',
            lineHeight: '1.4',
            marginTop: '1vh',
            marginLeft: '10px', // Add margin to create spacing between the image and text
            textAlign: 'left', // Align text to the left
          }}
        >

          <div style={{ marginBottom: '5px' }}>
            <strong>“Together but not together”: Evaluating Typing Indicators for Interaction-Rich Communication
            </strong>
          </div>

          <div style={{ marginBottom: '5px' }}>
            <div className="tooltip">
              <a
                href="https://zainabiftikhar.com/"
                target="_self"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', fontSize: '16px' }}
                className="author-link"
              >
                Zainab Iftikhar
              </a>
              <span className="tooltiptext"> Ph.D. Candidate at Brown University
              </span>
            </div>
            , <span className="name">Yumeng Ma</span>, and  {''}
            <div className="tooltip">
              <a
                href="https://jeffhuang.com/"
                target="_self"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
                className="author-link"
              >
                Jeff Huang
              </a>
              <span className="tooltiptext"> Associate Professor and Associate Chair of Computer Science at Brown University
              </span>
            </div>
          </div>
          <div style={{ marginBottom: '5px' }}>
            <span style={{ fontWeight: '500', color: '#676767' }}>CHI 2023</span>
          </div>
          <a href="../documents/LiveTyping_CHI23.pdf"
            target="_self"
            rel="noopener noreferrer"
            className="coral-link bubble-link"
            style={{ marginLeft: '0px', marginBottom: '10px' }}>
            pdf <FaFilePdf size={10} />
          </a>
          <a href="https://doi.org/10.1145/3544548.3581248"
            target="_self"
            rel="noopener noreferrer"
            className="coral-link bubble-link"
            style={{ marginLeft: '0px', marginBottom: '10px' }}>
            paper <FaPaperclip size={10} />
          </a>
          <a href="https://github.com/brownhci/live-typing"
            target="_self"
            rel="noopener noreferrer"
            className="coral-link bubble-link"
            style={{ marginLeft: '0px', marginBottom: '0px' }}>
            code <FaFileCode size={10} />
          </a>
        </h1>
      </div>

      <div className="container" style={{ marginBottom: '30px', display: 'flex', alignItems: 'flex-start' }}>
        <img src={mrpwImage} alt="Publication Image" style={{ height: '150px', borderRadius: '16px' }} /> {/* Increased the height of the image */}
        <h1
          style={{
            fontSize: '16px',
            fontWeight: '300',
            color: '#7C7C7C',
            lineHeight: '1.4',
            marginTop: '1vh',
            marginLeft: '10px', // Add margin to create spacing between the image and text
            textAlign: 'left', // Align text to the left
          }}
        >

          <div style={{ marginBottom: '5px' }}>
            <strong>The Mixed Reality Passthrough Window: Rethinking the Laptop Videoconferencing Experience</strong>
          </div>


          <div style={{ marginBottom: '5px' }}>
            <div className="tooltip">
              <a
                href="https://www.gonsherdesign.com/"
                target="_self"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
                className="author-link"
              >
                Ian Gonsher
              </a>
              <span className="tooltiptext"> Assistant Professor in the School of Engineering and Department of Computer Science at Brown University
              </span>
            </div>
            , <span className="name">Yumeng Ma</span>, Ivan Pineda-Dominguez, Matthew Lee, and  {''}
            <div className="tooltip">
              <a
                href="https://www.linkedin.com/in/horatiohan/"
                target="_self"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
                className="author-link"
              >
                Yuxin Han
              </a>
              <span className="tooltiptext"> Senior Industrial Designer at Superpedestrian
              </span>
            </div>
          </div>

          <div style={{ marginBottom: '5px' }}>
            <span style={{ fontWeight: '500', color: '#676767', marginBottom: '5px' }}>IHIET-AI 2023</span>
          </div>
          <a href="../documents/mrpw.pdf"
            target="_self"
            rel="noopener noreferrer"
            className="coral-link bubble-link"
            style={{ marginLeft: '0px', marginBottom: '10px' }}>
            pdf <FaFilePdf size={10} />
          </a>
          <a href="http://doi.org/10.54941/ahfe1002954"
            target="_self"
            rel="noopener noreferrer"
            className="coral-link bubble-link"
            style={{ marginLeft: '0px', marginBottom: '10px' }}>
            paper <FaPaperclip size={10} />
          </a>
        </h1>
      </div>


      <div style={{ marginBottom: '10px' }}></div>

      <div >
        <h1
          style={{
            fontSize: '16px',
            fontWeight: '300',
            color: '#7C7C7C',
            lineHeight: '1.4',
            marginTop: '1vh',
            marginBottom: '30px'
          }}
        >
          <span style={{ fontWeight: 'bold' }}> Extended Abstracts </span>
        </h1>
      </div>
      <div className="container" style={{ marginBottom: '60px', display: 'flex', alignItems: 'flex-start' }}>
        <img src={ProactiveAgent} alt="Publication Image" style={{ height: '150px', borderRadius: '16px' }} /> {/* Increased the height of the image */}
        <h1
          style={{
            fontSize: '16px',
            fontWeight: '300',
            color: '#7C7C7C',
            lineHeight: '1.4',
            marginTop: '1vh',
            marginLeft: '10px', // Add margin to create spacing between the image and text
            textAlign: 'left', // Align text to the left
          }}
        >
          <div style={{ marginBottom: '5px' }}>
            <strong>ProactiveAgent: Personalized Context-Aware Reminder System
            </strong>
            \    </div>

          <div style={{ marginBottom: '5px' }}>
            <span className="name">Yumeng Ma</span>* and  {''}
            <div className="tooltip">
              <a
                href="https://www.linkedin.com/in/jiahao-ren-b912b2b3/"
                target="_self"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
                className="author-link"
              >
                Jiahao Ren
              </a>
              <span className="tooltiptext"> Software Engineer at Magic Leap
              </span>
            </div>
            *
          </div>
          <div style={{ marginBottom: '5px' }}>
            <span style={{ fontWeight: '500', color: '#676767' }}>UIST 2023</span>
          </div>

          <a href="../documents/ProactiveAgent.pdf"
            target="_self"
            rel="noopener noreferrer"
            className="coral-link bubble-link"
            style={{ marginLeft: '0px', marginBottom: '10px' }}>
            pdf <FaFilePdf size={10} />
          </a>
          <a href="https://dl.acm.org/doi/10.1145/3586182.3625115"
            target="_self"
            rel="noopener noreferrer"
            className="coral-link bubble-link"
            style={{ marginLeft: '0px', marginBottom: '10px' }}>
            paper <FaPaperclip size={10} />
          </a>
        </h1>
      </div>

      <div
        style={{
          position: 'relative',
          bottom: '50px',
          left: '20px',
          fontSize: '12px',
          color: '#7C7C7C',
          textAlign: 'left',
          marginTop: '30px',
          marginBottom: '30px'
        }}
      >
        * Equal Contribution
      </div>

      <div
        style={{
          position: 'relative',
          bottom: '50px',
          fontSize: '12px',
          textAlign: 'center',
          marginTop: '0px',
          marginBottom: '30px'
        }}
      >
        <div className="venn-container" onClick={handleVennClick}>
          <div className={`circle circle-left ${isMerged ? 'merge' : ''}`}></div>
          <span className="text-left">social & visual <br /> computing<br /></span>
          <div className={`circle circle-right ${isMerged ? 'merge' : ''}`}></div>
          <span className="text-right">accessibility</span> {/* Text for the right circle */}
          <div className={`circle circle-top ${isMerged ? 'merge' : ''}`}></div>
          <span className="text-top">human-ai interaction</span> {/* Text for the top circle */}
        </div>
        <div className="research-interests">
        <div style={{ display: 'flex', alignItems: 'center', fontSize: '12px' }}>
                                <span style={{ marginLeft: '8px' }}> My research interests  {''} <FaCarrot size={12} color="#7C7C7C" /></span>
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

export default Publications;
