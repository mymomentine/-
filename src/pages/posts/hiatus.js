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

const Hiatus = () => {
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
          <span style={{ fontWeight: 'bold', fontSize: '20px' }}> a little research hiatus</span>
          <div style={{ marginBottom: '5px' }}></div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', fontSize: '12px' }}>
              <FaCalendarAlt size={12} color="#7C7C7C" />
              <span style={{ marginLeft: '8px', marginRight: '20px' }}>Mar 03 2025</span>
              <FaPenAlt size={12} color="#7C7C7C" />
              <span style={{ marginLeft: '8px' }}>By Yumeng Ma</span>
            </div>
          </div>
          <div style={{ marginBottom: '20px' }}></div>
          Since starting my PhD, I admit that I have grown more skeptical about the HCI field, especially when it comes to accessibility invention research (I am just going to point fingers). You design a novel system, compare it to a baseline (sometimes a questionable one), get the paper accepted to a conference knowing that the reviewers who reviewed your papers may or may not be in the accessibility field, maybe win a best paper award, and then what? Do these prototypes sit there collecting dust or do they get iterated on afterwards? How many of these systems make it beyond the 
          <i>"research lab"</i>? Are they viable as real-world products, or do they have too many flaws—too bulky, impractical, or simply not compelling enough for actual use? And years later, how much of this work is cited or forgotten?
          <br />
          <br />
          People are afraid of researchers. Sure, you can bring participants into a lab, run a couple controlled tests, conduct observational studies, or even carry out long-term empirical ones. But how much of what participants say or do is honest, and how much is just them telling us what they think we want to hear? We need to stop clinging on to the idea that "true scientific" research comes from these experiments and nice statistics.
          <br />
          <br />
          My motivation to pursue a PhD was never for prestige. What I really want is to make and discover things that create lasting impacts in people’s lives...essentially to do <i>real science</i> that feels timeless. How CHI and UIST operate these days is frustrating. I remember reading Landay’s  
          {' '}
            <a href="https://dubfuture.blogspot.com/2009/11/i-give-up-on-chiuist.html" target="_self" rel="noopener noreferrer" style={{ textDecoration: 'none' }} className="coral-link">
            <i>I Give Up on CHI/UIST</i> 
            </a>{' '}
             post, where he advocated for more space to build real systems in 2009. He argued that systems research takes longer to do than other types of work. The opposite seems true to me now. Systems papers are in high demand and often rushed while more scientific research takes longer to complete. Much of today’s systems work feels superficial and easy to build. 
          <br />
          <br />

          There have been months this past year where I felt lost. When I started my PhD, my research interests were at the intersection of human-AI interaction and accessibility. I now find myself questioning what it means to go beyond building systems in these areas. The last thing I want to do is to contribute to the problem. I’ve spent a lot of time thinking about what it means to be a scientist and what kind of HCI researcher I want to be. Seeing how current “research scientist” positions in the industry prioritize “experiences” that align with profit-driven goals has brought back my
           <i>“I have lots of great ideas but nowhere is giving me opportunity to explore them"</i> mentality. 
          <br />
          <br />
          When people ask me what HCI papers inspire me the most, I tell them that it's the ones that challenge norms and force us to rethink how we do research. For example, Greenberg and Buxton’s 
          {' '}
            <a href="https://www.billbuxton.com/usabilityHarmful.pdf" target="_self" rel="noopener noreferrer" style={{ textDecoration: 'none' }} className="coral-link">
            <i>Usability Evaluation Considered Harmful (Some of the Time)</i> 
            </a>{' '}
         questions how we evaluate systems. Or Azenkot’s 
          {' '}
            <a href="https://faculty.washington.edu/wobbrock/pubs/mobacc-13.01.pdf" target="_self" rel="noopener noreferrer" style={{ textDecoration: 'none' }} className="coral-link">
            <i>The Need for Research on Mobile Technologies for People with Low Vision</i> 
            </a>{' '}
          
 argues that blind and low-vision users should be studied separately. Maybe this is the type of work I want to put out into the world. Something...anything....that pushes the HCI community to think differently and meaningfully.
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

export default Hiatus;
