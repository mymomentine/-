import React from 'react';
import styled from 'styled-components';
import { FaCalendarAlt, FaPenAlt } from "react-icons/fa";
import { Helmet } from 'react-helmet';

const CVLink = styled.a`
  color: #e85d4e;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.8rem;
  height: 30px;
  cursor: pointer;
  font-size: 1rem;
  background-color: #F3F3F3;
  border-radius: 8px;
  margin: 0 5px;
  box-sizing: border-box;

  &:hover {
    color: #787878;
  }

  &.active {
    color: #e85d4e;
  }

  @media screen and (max-width: 320px) {
    padding: 0 0.5rem;
    font-size: 0.9rem;
  }
`;

const Citations = () => {
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
              margin-right: 0;
            }

            .copy-right {
              margin-top: 20px;
              margin-bottom: 2em;
              position: static;
            }
          }

          @media (min-width: 768px) {
            div.container h1 {
              margin-top: -5em;
            }
          }

          .icon-wrapper a {
            color: #787878;
            margin: 5px;
            transition: color 0.3s ease-in-out;
          }

          .icon-wrapper a:hover {
            color: #e85d4e;
          }

          .coral-link {
            color: #e85d4e;
            transition: color 0.3s ease-in-out;
          }

          .coral-link:hover,
          .coral-link:active {
            color: #7C7C7C;
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

      <div style={{ marginBottom: '30px' }}>
        <div
          style={{
            fontSize: '16px',
            fontWeight: '300',
            color: '#7C7C7C',
            lineHeight: '1.4',
            marginTop: '1vh',
            marginBottom: '30px'
          }}
        >
          <span style={{ fontWeight: 'bold', fontSize: '20px' }}>
            please cite me
          </span>

          <div style={{ marginBottom: '5px' }}></div>

          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '12px'
              }}
            >
              <FaCalendarAlt size={12} color="#7C7C7C" />
              <span style={{ marginLeft: '8px', marginRight: '20px' }}>
                Aug 02 2026
              </span>

              <FaPenAlt size={12} color="#7C7C7C" />
              <span style={{ marginLeft: '8px' }}>
                By Yumeng Ma
              </span>
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}></div>

          I think of research as a kind of content creation.
          <br />
          <br />

          My most recent paper has one citation. ONE. And it came from an
          AI-generated reference list so it feels a little like the participation
          ribbon version of being cited lol.
          <br />
          <br />

          Getting published felt huge. Then I opened the paper again a little
          later for the 10th time and started reading my own 20+ pages like...
          wait. Was this good? Did I make a point? Or did I spend months building
          an academic hallucination with references?
          <br />
          <br />

          Meanwhile it&apos;s sitting in 17-view jail. 0 likes, 0 comments, 0
          subscribers.
          <br />
          <br />

          And then I start to spiral a little. Maybe it&apos;s not just the paper.
          Maybe I&apos;m terrible at marketing myself.
          <br />
          <br />

          Is this why I keep getting passed over for jobs and the internships I
          dream about? How did doing research somehow turn into me waving my
          stubby-but-wanting-to-reach-the-stars arms at the world going please
          please notice me ˙◠˙
        </div>
      </div>

      <div
        style={{
          position: 'relative',
          bottom: '30px',
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

export default Citations;