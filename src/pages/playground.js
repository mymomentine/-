import React from 'react';
import pachimariGif from '../images/pachi-clip.gif';
import napkinPng from '../images/napkin.png';
import { FaFileCode, FaRobot, FaGlasses } from "react-icons/fa";
import { Helmet } from 'react-helmet';

const Playground = () => {
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
        paddingBottom: '90px',
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

          .robotics-link {
            line-height: 0.5;
          }

          .tooltip {
            position: relative;
            cursor: pointer;
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
        `}
      </style>

      {/* Project container for Napkin */}
      <div className="project-container" style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: '20px',
      }}>
        <img src={napkinPng} alt="Napkin" style={{
          width: '40%',
          height: 'auto',
          marginRight: '20px',
        }} />

        <div style={{ width: '55%' }}>
          <div style={{
            fontSize: '16px',
            fontWeight: '300',
            color: '#7C7C7C',
            lineHeight: '1.4',
            marginTop: '1vh',
            marginLeft: '10px',
            textAlign: 'left',
          }}>
            <div style={{ marginBottom: '10px', marginTop: '0px' }}>
              <strong>Napkin</strong>
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

          </div>
        </div>
      </div>

      {/* Project container for Pachikatamari */}
      <div className="project-container" style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: '20px',
      }}>
        <img src={pachimariGif} alt="Pachimari" style={{
          width: '40%',
          height: 'auto',
          marginRight: '20px',
        }} />

        <div style={{ width: '55%' }}>
          <div style={{
            fontSize: '16px',
            fontWeight: '300',
            color: '#7C7C7C',
            lineHeight: '1.4',
            marginTop: '1vh',
            marginLeft: '10px',
            textAlign: 'left',
          }}>
            <div style={{ marginBottom: '10px', marginTop: '20px' }}>
              <strong>Pachikatamari (パチ塊)</strong>
            </div>
            <div style={{ paddingTop: '0px' }}>
              A 3D game inspired by Overwatch's Pachimari (パチマリ) and Katamari Damacy's katamari (塊). Control a Pachimari and roll around to gather more Pachimari friends. Made with Unity Engine.
            </div>
            <div style={{ marginLeft: '-5px', marginTop: '10px', marginBottom: '10px' }}>
              <a href="https://github.com/momentine/pachikatamari"
                target="_self"
                rel="noopener noreferrer"
                className="coral-link bubble-link">
                code <FaFileCode size={10} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
        paddingLeft: '20px',
        marginBottom: '30px'
      }}>
        <div style={{
          textAlign: 'left',
          fontSize: '16px',
          fontWeight: '300',
          color: '#7C7C7C',
          lineHeight: '1.4',
          marginTop: '1vh',
        }}>
          <span style={{ fontWeight: 'bold' }}> Unpublished Shower Thoughts</span>
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
        </div>
      </div>


            <div
                style={{
                    position: 'absolute',
                    bottom: '30px',
                    left: '20px',
                    fontSize: '12px',
                    color: '#7C7C7C',
                    textAlign: 'left',
                    marginTop: '30px',
                    marginBottom: '30px'
                }}
            >
              not all creations need publishing ★
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

export default Playground;
