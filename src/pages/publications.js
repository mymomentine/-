import React, { useState } from 'react';
import ProactiveAgent from '../images/proactiveagent.png';
import liveTyping from '../images/livetyping.png';
import mrpwImage from '../images/mrpw.png';
import { FaFilePdf, FaPaperclip, FaFileCode, FaCarrot } from "react-icons/fa";
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
      <style>
        {`
          @media (min-width: 768px) {
            div.container {
              display: flex;
              align-items: flex-start;
              justify-content: flex-start;
              text-align: left;
            }

            div.container img {
              height: 150px;
              margin-right: 10px;
              border-radius: 16px;
            }
          }

          .coral-link {
            color: #e85d4e;
            text-decoration: none;
            transition: color 0.3s ease-in-out;
          }

          .coral-link:hover,
          .coral-link:active {
            color: #7C7C7C;
          }

          .author-link {
            color: #7C7C7C;
            text-decoration: none;
            transition: color 0.3s ease-in-out;
          }

          .author-link:hover,
          .author-link:active {
            color: #e85d4e;
          }

          .name {
            color: #a3b759;
          }

          .bubble-link {
            background-color: #F3F3F3;
            border-radius: 8px;
            padding: 8px 10px;
            margin: 0 5px;
            display: inline-block;
            line-height: 0.5;
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
            box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.2);
            font-size: 10px;
          }
          
          .tooltip:hover .tooltiptext {
            visibility: visible;
          }

          .venn-container {
            position: relative;
            width: 300px;
            height: 300px;
            margin: auto;
            cursor: pointer;
          }
          
          .circle {
            position: absolute;
            width: 180px;
            height: 180px;
            border-radius: 50%;
            transition: transform 1s;
          }
          
          .circle-top {
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
            bottom: 20px;
            left: 50px;
            color: #E1C0C5;
            text-align: center;
          }
          
          .text-right {
            position: absolute;
            bottom: 35px;
            right: 50px;
            color: #ECC17C;
            text-align: center;
          }
          
          .text-top {
            position: absolute;
            top: 45px;
            left: 50%;
            transform: translateX(-38%);
            color: #757A62;
            text-align: center;
          }

          .research-interests {
            position: absolute;
            top: 0;
            right: 0;
            padding-left: 20px;
            width: calc(100% - 300px);
            height: 100%;
            display: flex;
            align-items: center;
            font-size: 11px;
            color: #7C7C7C;
          }    

          @media (orientation: landscape) {
            .tooltip .author-link {
              font-size: 16px;
            }
          }
        `}
      </style>

      <div>
        <div
          style={{
            fontSize: '16px',
            fontWeight: '300',
            color: '#7C7C7C',
            lineHeight: '1.4',
            marginTop: '1vh',
            marginBottom: '30px',
            fontWeight: 'bold'
          }}
        >
          Conference Proceedings
        </div>
      </div>

      <div className="container" style={{ marginBottom: '30px', display: 'flex', alignItems: 'flex-start' }}>
        <img src={liveTyping} alt="Publication Image" style={{ height: '150px', borderRadius: '16px' }} />
        <div
          style={{
            fontSize: '16px',
            fontWeight: '300',
            color: '#7C7C7C',
            lineHeight: '1.4',
            marginTop: '1vh',
            marginLeft: '10px',
            textAlign: 'left',
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
          <a href="../documents/live_typing.pdf"
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
        </div>
      </div>

      <div className="container" style={{ marginBottom: '30px', display: 'flex', alignItems: 'flex-start' }}>
        <img src={mrpwImage} alt="Publication Image" style={{ height: '150px', borderRadius: '16px' }} />
        <div
          style={{
            fontSize: '16px',
            fontWeight: '300',
            color: '#7C7C7C',
            lineHeight: '1.4',
            marginTop: '1vh',
            marginLeft: '10px',
            textAlign: 'left',
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
        </div>
      </div>

      <div style={{ marginBottom: '10px' }}></div>

      <div>
        <div
          style={{
            fontSize: '16px',
            fontWeight: '300',
            color: '#7C7C7C',
            lineHeight: '1.4',
            marginTop: '1vh',
            marginBottom: '30px',
            fontWeight: 'bold'
          }}
        >
          Extended Abstracts
        </div>
      </div>

      <div className="container" style={{ marginBottom: '60px', display: 'flex', alignItems: 'flex-start' }}>
        <img src={ProactiveAgent} alt="Publication Image" style={{ height: '150px', borderRadius: '16px' }} />
        <div
          style={{
            fontSize: '16px',
            fontWeight: '300',
            color: '#7C7C7C',
            lineHeight: '1.4',
            marginTop: '1vh',
            marginLeft: '10px',
            textAlign: 'left',
          }}
        >
          <div style={{ marginBottom: '5px' }}>
            <strong>ProactiveAgent: Personalized Context-Aware Reminder System
            </strong>
          </div>

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
            <span style={{ fontWeight: '500', color: '#676767' }}>UIST 2023 Adjunct</span>
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
        </div>
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
          <span className="text-right">accessibility</span>
          <div className={`circle circle-top ${isMerged ? 'merge' : ''}`}></div>
          <span className="text-top">human-ai interaction</span>
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
