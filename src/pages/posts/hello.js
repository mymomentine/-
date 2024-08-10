import React, { useEffect } from 'react';

import styled from 'styled-components';

import { FaCalendarAlt } from "react-icons/fa";
import { FaPenAlt } from "react-icons/fa";

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

const Hello = () => {
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
          <span style={{ fontWeight: 'bold', fontSize: '20px' }}> Hello World: I am Bad at Coding</span>
          <div style={{ marginBottom: '5px' }}></div>
          <div >
            <div style={{ display: 'flex', alignItems: 'center', fontSize: '12px' }}>
              <FaCalendarAlt size={12} color="#7C7C7C" />
              <span style={{ marginLeft: '8px', marginRight: '20px' }}>Feb 03 2024</span>
              <FaPenAlt size={12} color="#7C7C7C" />
              <span style={{ marginLeft: '8px' }}>By Yumeng Ma</span>
            </div>
          </div>
          
          <div style={{ marginBottom: '20px' }}></div>
Before I even knew what computer science was, I loved two things: math and chess. These were my gateways to understanding complexity, strategy, and the beauty in logical thought.
<br />
<br />
Let’s rewind to my high school days. It was halfway through my first semester of junior year. My favorite math teacher had just warned me about my grade—a 91. The verge of a B was enough of a wake-up call to strive for better. He put a lot of belief in me for some reason. Sadly and unexpectedly, he passed away that mid-semester.
<br />
<br />
Programming formulas on ti-84 calculators in his class was my first step into structuring commands to solve problems—a precursor to why I even thought about computer science as a career. It started as little classroom activities that turned into thinking about what more could be achieved through software and what it could do to help others.
<br />
<br />
Back then, I also played a lot of chess. After freshman year, I made it onto the varsity team and quickly advanced to the first board position by my junior and senior years. My playing style was what my coach would refer to as <i>“unconventional”</i> and <i>“outside of the books”</i>. My opponents frequently misjudged my capabilities and perceived my seemingly oblivious style as a weakness. It's funny because I never learned how to set up those chess clocks and always had my opponents do it. The strategy of that "seemingly clueless girl" actually served me well in tournaments and has even worked well today outside of chess.
<br />
<br />
When I got to university, I didn't like computer science as much as I thought I would. The coding seemed difficult and mundane, and all I could think about was how to map my course schedule to graduate in three years instead of four.
That's when I added psychology as my second major, the major I had in mind to pursue in the first place since the beginning of high school. That's when my interest took on an interdisciplinary approach. I saw coding as more of a tool. Psychology fulfilled my curiosity about human thought and behavior. The combination of the two led me to HCI. The cognitive strategies of chess and the logical reasoning of mathematics from my past also found their application in designing human-centric systems.
<br />
<br />
In case you were wondering, I did manage to graduate with double majors in three years at the cost of taking 20+ credits a semester, but none of the coursework kept me busy or focused. I like HCI because it's trend-following and keeps me looking at the big picture.
As I dive deeper into HCI today, I carry with me the lessons learned from those early passions. The drive to improve, the courage to explore unfamiliar territories, and the power of interdisciplinarity guide my way forward.
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

export default Hello;
