import React, { useEffect } from 'react';
import { NavLink as Link } from 'react-router-dom';

import styled from 'styled-components';

import { FaCalendarAlt } from "react-icons/fa";
import { Helmet } from 'react-helmet';

export const BlogLink = styled(Link)`
  color: #e85d4e;
  display: flex;
  text-decoration: none;
  font-weight: bold; /* Make the font weight heavier */

  &:hover {
    color: #787878;
  }

  &.active {
    color: #e85d4e;
  }

  @media screen and (max-width: 320px) {
    padding: 0 0.5rem; /* Adjust the padding as needed for smaller screens */
    font-size: 0.9rem; /* Adjust the font size as needed for smaller screens */
  }
`;

const Blog = () => {
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

            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px' }}>
                <div>
                    <h1
                        style={{
                            fontSize: '14px',
                            fontWeight: '300',
                            color: '#7C7C7C',
                            lineHeight: '1.4',
                            marginTop: '1vh',
                        }}
                    >
                        <BlogLink to="/blog/overwatch">My Thoughts on Overwatch: From a Design and Accessibility Standpoint</BlogLink>
                        <div style={{ marginBottom: '5px' }}></div>
                        <div >
                            <div style={{ display: 'flex', alignItems: 'center', fontSize: '12px' }}>
                                <FaCalendarAlt size={12} color="#7C7C7C" />
                                <span style={{ marginLeft: '8px' }}>Mar 20 2024</span>
                            </div>
                        </div>
                        <div style={{ marginBottom: '5px' }}></div>
                        Placeholder
                    </h1>
                </div>
            </div>

            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px' }}>
                <div>
                    <h1
                        style={{
                            fontSize: '14px',
                            fontWeight: '300',
                            color: '#7C7C7C',
                            lineHeight: '1.4',
                            marginTop: '1vh',
                        }}
                    >
                        <BlogLink to="/blog/hello">Hello World: What Really Guided My Academic Trajectory</BlogLink>
                        <div style={{ marginBottom: '5px' }}></div>
                        <div >
                            <div style={{ display: 'flex', alignItems: 'center', fontSize: '12px' }}>
                                <FaCalendarAlt size={12} color="#7C7C7C" />
                                <span style={{ marginLeft: '8px' }}>Feb 03 2024</span>
                            </div>
                        </div>
                        <div style={{ marginBottom: '5px' }}></div>
                        A little more insight on what guided me to computer science
                    </h1>
                </div>
            </div>

            <div
                style={{
                    position: 'absolute',
                    bottom: '30px',
                    // left: '20px',
                    fontSize: '12px',
                    color: '#7C7C7C',
                    textAlign: 'left',
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

export default Blog;
