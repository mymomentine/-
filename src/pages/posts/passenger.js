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

const Passenger = () => {
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
          <span style={{ fontWeight: 'bold', fontSize: '20px' }}>realities of a forced passenger princess</span>
          <div style={{ marginBottom: '5px' }}></div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', fontSize: '12px' }}>
              <FaCalendarAlt size={12} color="#7C7C7C" />
              <span style={{ marginLeft: '8px', marginRight: '20px' }}>Nov 12 2025</span>
              <FaPenAlt size={12} color="#7C7C7C" />
              <span style={{ marginLeft: '8px' }}>By Yumeng Ma</span>
            </div>
          </div>
          <div style={{ marginBottom: '20px' }}></div>

          This might be the most unprofessional post I make as a <i>“scholar”</i>, but it’s something I’ve needed to get off my chest for a long time.
          <br /><br />
          I see a lot of PhD students sharing their research, but rarely about their personal lives (probably for good reason). Still, I think it matters, especially when your work and lived experiences quietly intersect.
          <br /><br />
          Hi, I’m Yumeng. I’m an HCI PhD student in CSE at UW. My research is on AI and accessibility. I hate disclosing my disability in almost every circumstance, but I think it’s essential to this story. And maybe, just maybe, it’ll help someone else feel less alone.
          <br /><br />
          I was born with scars behind both my eyes, a condition doctors call <i>congenital macular scarring</i> (don’t bother googling it; half the internet thinks it’s caused by infections or genetic conditions I never had). It means I have no central vision and only peripheral vision. So, I’m considered “low vision” or “visually impaired” (both terms I’ve never been comfortable saying out loud). It’s an invisible disability in that you wouldn’t notice it right away unless one of three things happens:
          <ul style={{ marginTop: '10px', marginBottom: '10px' }}>
            <li>You try making eye contact and notice my eyes don’t quite focus straight.</li>
            <li>We’re reading a menu high up on a wall, tiny print, slides in a classroom, or watching subbed anime haha.</li>
            <li>You ask about my driving experience—I don’t have one. It’s illegal for me to drive.</li>
          </ul>
          That last point inspired this post’s title.
          <br /><br />
          I’ve probably “called shotgun” more times than anyone I know. And I’ve heard more than once, <i>“don’t worry, you can just sit there and look pretty.”</i>
          <br /><br />
          But being unable to drive isn’t cute. It’s a constant reminder of lost autonomy. I can’t read road signs, can’t see the GPS unless it’s right in front of my face, and can’t find the right car buttons without a tutorial. It seeps into everything in my daily life—moments where I just feel dumb, dependent, useless, and full of guilt for needing help.
          <br /><br />
          There are things most people never think twice about that still terrify me:
          <ul style={{ marginTop: '10px', marginBottom: '10px' }}>
            <li>Grocery shopping alone</li>
            <li>Tap-to-pay (yes, seriously)</li>
            <li>Going down stairs</li>
            <li>Crowded places</li>
            <li>Feeling awkward for doing something “wrong” because of my vision</li>
          </ul>
          I’ve learned to accept my disability and draw strength from it. My PhD gives me space to explore these barriers through research and work that could make everyday experiences more accessible for others. I love the altruistic side of research. But acceptance isn’t linear. The frustration I feel comes in waves.
          <br /><br />
          What I don’t see people talk about enough is how disability shapes autonomy within relationships. Maybe a good paper for next year’s CHI (lol): <i>How do people with disabilities navigate autonomy in relationships? How do partners support those needs?</i> (Do we even feel supported, and are there moments where they snap?)
          <br /><br />
          Because this is the truth: when your partner is the one driving and you can’t, you become a <i>“passenger princess”</i> without any of the <i>“pampering”</i> benefits. Of course, it goes far beyond driving. It also colors how you navigate the relationship itself.
          <br /><br />
          I’ve heard things said to me like:
          <ul style={{ marginTop: '10px', marginBottom: '10px' }}>
            <li><i>“I’m tired of always being the one driving so far to come see you.”</i></li>
            <li><i>“We always have to spend time getting your groceries — when do we ever do something for me?”</i></li>
            <li><i>“Why can’t you just use tap to pay? Just do it.”</i></li>
            <li><i>“I wish you were less awkward in social situations.”</i></li>
            <li><i>“My friend asked if you’re autistic — not in a bad way, but, you know, the eye contact thing.”</i></li>
            <li><i>“I’m tired of explaining your actions to other people.”</i></li>
            <li><i>“You never let me rest. It’s always about you.”</i></li>
            <li><i>“You never plan for us — and when you do, you forget things like parking.”</i></li>
            <li><i>“Is your work more important than me?”</i></li>
            <li><i>“I feel like I do more for you than you ever do for me.”</i></li>
            <li><i>“Why is it always me coming to see you and never you coming to me?”</i></li>
          </ul>
          Hearing these things hurts. I try. I always do. But sometimes what’s “normal” for others is harder for me. I wish more people understood that love and empathy can coexist with frustration. That supporting someone with a disability means accepting limits that aren’t their fault.
          <br /><br />
          As a researcher, I can’t help but analyze my own life. I question what’s “normal,” what’s “empathetic,” and where those boundaries meet.
          <br /><br />
          Maybe this post is oversharing, but I think honesty deserves a little more space in academia too.
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

export default Passenger;
