import React, { useEffect } from 'react';

import styled from 'styled-components';

import { FaCalendarAlt } from "react-icons/fa";
import { FaPenAlt } from "react-icons/fa";

import kiriko from '../../images/kiriko.gif';
import { Helmet } from 'react-helmet';

const CVLink = styled.a`
  color: #e85d4e;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.8rem; /* Same padding as NavLink */
  height: 30px; /* Same height as NavLink */
  cursor: pointer;
  font-size: 1rem; /* Same font size as NavLink */
  background-color: #F3F3F3; /* Same bubble background color as NavLink */
  border-radius: 8px; /* Same slightly rounded corners as NavLink */
  margin: 0 5px; /* Same space between tabs as NavLink */
  box-sizing: border-box; /* Same box sizing as NavLink */

  &:hover {
    color: #787878;
  }

  &.active {
    color: #e85d4e;
  }

  @media screen and (max-width: 320px) {
    padding: 0 0.5rem; /* Same padding adjustment for smaller screens as NavLink */
    font-size: 0.9rem; /* Same font size adjustment for smaller screens as NavLink */
  }
`;

const Overwatch = () => {
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
          <span style={{ fontWeight: 'bold', fontSize: '20px' }}>My Thoughts on Overwatch: From a Design and Accessibility Standpoint</span>
          <div style={{ marginBottom: '5px' }}></div>
          <div >
            <div style={{ display: 'flex', alignItems: 'center', fontSize: '12px' }}>
              <FaCalendarAlt size={12} color="#7C7C7C" />
              <span style={{ marginLeft: '8px', marginRight: '20px' }}>Mar 20 2024</span>
              <FaPenAlt size={12} color="#7C7C7C" />
              <span style={{ marginLeft: '8px' }}>By Yumeng Ma</span>
            </div>
          </div>
          <div style={{ marginBottom: '8px' }}>
            <img
              src={kiriko}
              alt="kiriko"
              style={{
                width: '100%', // Makes the image responsive
                maxWidth: '800px', // Ensures the image does not exceed 600px in width
                float: 'right', // Aligns the image to the right
                display: 'block', // Ensures the image is treated as a block-level element for proper spacing
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}></div>
          From the moment I first launched Overwatch, its vibrant colors and richly detailed world were unlike anything I had seen in an FPS game. Each hero had an unique appearance and a backstory, some even brought to life through animated shorts. This blend of art and narrative drew me in, marking the beginning of a long-standing appreciation for the game, regardless of the fluctuating ratings and the controversies it has received.
          <br />
          <br />
          As someone who does HCI research, my relationship with video games has always been double-edged. On one hand, I'm drawn to their chaotic complexity and the immersive experiences they offer. On the other hand, I'm aware of their design flaws, especially when it comes to their user interface (UI) and user experience (UX). Video games, for all their allure, often present a steep learning curve. Overwatch, with its various heroes and roles, is a testament to this. The game challenges conventional UI/UX principles, demanding that players adapt to its complexity rather than simplifying the experience. This complexity, however, is part of what makes Overwatch so compelling to me. The game is a dynamic ecosystem where each match feels like a complicated rock-paper-scissors game. The interplay between characters, their abilities, and the strategic depth required for team coordination is what makes the game exciting.
          <br />
          <br />
          Yet, I find myself at a crossroads between admiration and frustration. Being low vision has shaped my gaming experience in ....strange ways. It has made me question if my perception of Overwatch would change if I could see it in full clarity. Would my aim be more precise? Would my game sense improve to the point where I could ascend from my past rank as Diamond to Masters? These questions highlight a crucial aspect of game design that often goes unaddressed: the need for real-time contextual and spatial awareness that is accessible to all players.
          <br />
          <br />
          Despite these challenges, I've <i>somewhat</i> found ways to adapt and enjoy Overwatch. Controllers with haptic feedback over mouse and keyboard offers more intuition. Characters like Kiriko and Zenyatta, who allow for a degree of aim that can be felt rather than seen, have become my go-tos. I often find myself selecting heroes like D.Va, Zarya, Tracer, Mei, and Moira—characters whose abilities forgive a lack of pinpoint accuracy and offer protective strategies. Yet, the question of accessibility remains. The constraints on the heroes I can play and the consistent reminder of my lower damage and kill counts gnaw at me. Is this compromise truly satisfactory?
          <br />
          <br />
          This brings a pivotal question: how can games like Overwatch become inclusive without diluting their complexity? It's a dilemma that doesn't have an easy answer, especially in a game where so much is happening at once. It has made me reflect on the broader implications of game design, pushing me to think about how we can make gaming a more inclusive space. As I continue to play, I'm left pondering the experiences of other blind or low vision gamers. Do they feel the same thrill that their fully sighted counterparts do? And what steps can we take to ensure that this excitement is universally accessible?
          The quest for inclusivity in gaming is about reimagining the very fabric of game design to accommodate a broader spectrum of experiences. It challenges us to envision a gaming world that's as diverse and welcoming as the stories and chaos it seeks to tell.
        </h1>
      </div>

      <div
        style={{
          position: 'relative',
          bottom: '30px',
          // left: '20px',
          fontSize: '12px',
          color: '#7C7C7C',
          marginTop: '30px',
          marginBottom: '30px'
        }}
      >
        Slice of life 🍰
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

export default Overwatch;
