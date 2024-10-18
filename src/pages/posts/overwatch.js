// import React from 'react';
// import styled from 'styled-components';
// import { FaCalendarAlt, FaPenAlt } from "react-icons/fa";
// import kiriko from '../../images/kiriko.gif';
// import { Helmet } from 'react-helmet';

// const CVLink = styled.a`
//   color: #e85d4e;
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   padding: 0.8rem;
//   height: 30px;
//   cursor: pointer;
//   font-size: 1rem;
//   background-color: #F3F3F3;
//   border-radius: 8px;
//   margin: 0 5px;
//   box-sizing: border-box;

//   &:hover {
//     color: #787878;
//   }

//   &.active {
//     color: #e85d4e;
//   }

//   @media screen and (max-width: 320px) {
//     padding: 0 0.5rem;
//     font-size: 0.9rem;
//   }
// `;

// const Overwatch = () => {
//   return (
//     <div
//       style={{
//         position: 'relative',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'flex-start',
//         justifyContent: 'flex-start',
//         margin: '0 auto',
//         maxWidth: '800px',
//         padding: '0 20px',
//         fontFamily: 'Nunito Sans, sans-serif',
//         WebkitFontSmoothing: 'antialiased',
//         MozOsxFontSmoothing: 'grayscale',
//         backgroundColor: 'white',
//         minHeight: '80vh',
//         marginTop: '30px',
//       }}
//     >
//       <Helmet>
//         <meta name="robots" content="nosnippet" />
//       </Helmet>

//       <style>
//         {`
//           .tooltip:hover .tooltiptext {
//             visibility: visible;
//           }
//           @media (max-width: 767px) {
//             div.container {
//               flex-direction: column;
//               align-items: flex-start;
//               text-align: left;
//             }

//             div.container img {
//               width: 100%;
//               margin-bottom: 20px;
//               margin-right: 0;
//             }

//             .copy-right {
//               margin-top: 20px;
//               margin-bottom: 2em;
//               position: static;
//             }
//           }

//           @media (min-width: 768px) {
//             div.container h1 {
//               margin-top: -5em;
//             }
//           }

//           .icon-wrapper a {
//             color: #787878;
//             margin: 5px;
//             transition: color 0.3s ease-in-out;
//           }

//           .icon-wrapper a:hover {
//             color: #e85d4e;
//           }

//           .coral-link {
//             color: #e85d4e;
//             transition: color 0.3s ease-in-out;
//           }

//           .coral-link:hover,
//           .coral-link:active {
//             color: #7C7C7C;
//           }

//           .tooltip {
//             position: relative;
//             display: inline-block;
//             cursor: pointer;
//           }
          
//           .tooltip .tooltiptext {
//             visibility: hidden;
//             width: 200px;
//             background-color: white;
//             color: #7C7C7C;
//             text-align: center;
//             border-radius: 6px;
//             padding: 5px 10px;
//             position: absolute;
//             z-index: 1;
//             bottom: 125%;
//             left: 50%;
//             margin-left: -100px;
//             box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.2);
//             font-size: 10px;
          
//             &::after {
//               content: "";
//               position: absolute;
//               top: 100%; 
//               left: 50%;
//               margin-left: -5px;
//               border-width: 5px;
//               border-style: solid;
//               border-color: white transparent transparent transparent;
//             }
//           }
          
//           .tooltip:hover .tooltiptext {
//             visibility: visible;
//           }
//         `}
//       </style>

//       <div style={{ marginBottom: '30px' }}>
//         <div
//           style={{
//             fontSize: '16px',
//             fontWeight: '300',
//             color: '#7C7C7C',
//             lineHeight: '1.4',
//             marginTop: '1vh',
//             marginBottom: '30px'
//           }}
//         >
//           <span style={{ fontWeight: 'bold', fontSize: '20px' }}>My Thoughts on Overwatch: From a Design and Accessibility Standpoint</span>
//           <div style={{ marginBottom: '5px' }}></div>
//           <div>
//             <div style={{ display: 'flex', alignItems: 'center', fontSize: '12px' }}>
//               <FaCalendarAlt size={12} color="#7C7C7C" />
//               <span style={{ marginLeft: '8px', marginRight: '20px' }}>Mar 20 2024</span>
//               <FaPenAlt size={12} color="#7C7C7C" />
//               <span style={{ marginLeft: '8px' }}>By Yumeng Ma</span>
//             </div>
//           </div>
//           <div style={{ marginBottom: '8px' }}>
//             <img
//               src={kiriko}
//               alt="kiriko"
//               style={{
//                 width: '100%',
//                 maxWidth: '800px',
//                 float: 'right',
//                 display: 'block',
//               }}
//             />
//           </div>
//           <div style={{ marginBottom: '20px' }}></div>
//           From the moment I first launched Overwatch, its vibrant colors and richly detailed world were unlike anything I had seen in an FPS game. Each hero had a unique customizable appearance and backstory, some even brought to life through animated shorts. The blend of art and narrative drew me in, marking the beginning of a long-standing appreciation for the game, regardless of the fluctuating ratings and the controversies it has received.
//           <br />
//           <br />
//           As someone who does HCI research, my relationship with video games has always been double-edged. On one hand, I'm fascinated by the chaotic complexity and the immersive experiences they offer. On the other hand, I'm aware of their design flaws, especially when it comes to UI/UX. Video games often present a steep learning curve: Overwatch challenges conventional design principles, demanding that players adjust to its chaotic mess rather than simplifying the experience. This “chaotic mess", however, is part of what makes Overwatch so compelling and adrenaline inducing for me. Each match feels like a complicated rock-paper-scissors game. The interplay between characters, their abilities, and the strategic mindfulness required for team coordination is what makes playing it so fulfilling.
//           <br />
//           <br />
//           I find myself at a crossroads between admiration and frustration for Overwatch. Being low vision has shaped my gaming experience in ....strange ways. It has made me question if my perception of Overwatch would change if I could see it in full clarity. Would my aim be more precise? Would my game sense improve to the point where I could ascend from my rank as Diamond to Masters? These questions highlight a crucial aspect of game design that often goes unaddressed: the need for real-time contextual and spatial awareness that is accessible to all players.
//           <br />
//           <br />
//           Despite these challenges, I've <i>somewhat</i> found ways to adapt and enjoy Overwatch. Controllers with haptic feedback over mouse and keyboard offers more intuition. Characters like Kiriko and Zenyatta, who allow for a degree of aim that can be felt rather than seen, have become my go-tos. I often find myself selecting heroes like D.Va, Zarya, Tracer, Mei, and Moira—characters whose abilities forgive a lack of pinpoint accuracy and offer protective strategies. Yet, the question of accessibility remains. The constraints on the heroes I can play and do well/improve at and the consistent reminder of my lower damage and kill counts compared to my teammates and opponents gnaw at me. Is this compromise truly satisfying?
//           <br />
//           <br />
//           So....how can games like Overwatch become inclusive without diluting their complexity? It's a dilemma that doesn't have an easy answer, especially in a game where so much is happening at once. As I continue to play, I'm left wondering about the experiences of other blind or low vision gamers. Do they feel the same thrill that their fully sighted counterparts do? And what steps can we take to ensure that this excitement is universally conveyed? The quest for inclusivity in gaming is about reimagining the very fabric of game design to accommodate a broader spectrum of experiences. It challenges us to envision a gaming world that's as diverse and welcoming as the stories and chaos it seeks to show.
//         </div>
//       </div>

//       <div
//         style={{
//           position: 'relative',
//           bottom: '30px',
//           fontSize: '12px',
//           color: '#7C7C7C',
//           marginTop: '30px',
//           marginBottom: '30px'
//         }}
//       >
//         Slice of life 🍰
//       </div>

//       <div
//         className="copy-right"
//         style={{
//           fontSize: '12px',
//           color: '#7C7C7C',
//           textAlign: 'center',
//           marginTop: '20px',
//           position: 'absolute',
//           bottom: '10px',
//           width: '100%',
//           borderTop: '1px solid white',
//           marginBottom: '10px',
//           zIndex: '20',
//         }}
//       >
//         Potayto Workshop by Yumeng Ma
//       </div>
//     </div>
//   );
// };

// export default Overwatch;
