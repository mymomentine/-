// import React, { useState } from 'react';
// import ProactiveAgent from '../images/proactiveagent.png';
// import liveTyping from '../images/livetyping.png';
// import mrpwImage from '../images/mrpw.png';
// import { FaFilePdf, FaPaperclip, FaFileCode, FaCarrot } from "react-icons/fa";
// import { Helmet } from 'react-helmet';

// const Publications = () => {
//   const [isMerged, setIsMerged] = useState(false);
//   const handleVennClick = () => setIsMerged(!isMerged);

//   // Keyboard toggle for Venn (no visual change)
//   const handleVennKeyDown = (e) => {
//     if (e.key === 'Enter' || e.key === ' ') {
//       e.preventDefault();
//       setIsMerged((v) => !v);
//     }
//   };

//   return (
//     <div
//       role="main"
//       aria-labelledby="pubs-title"
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
//           .sr-only {
//             position: absolute;
//             width: 1px;
//             height: 1px;
//             padding: 0;
//             margin: -1px;
//             overflow: hidden;
//             clip: rect(0, 0, 0, 0);
//             white-space: nowrap;
//             border: 0;
//             /* prevent selection/highlight overlay on iOS */
//             user-select: none;
//             -webkit-user-select: none;
//             pointer-events: none;
//             -webkit-touch-callout: none;
//           }

//           .links-visual{list-style:none;padding-left:0;margin:6px 0}
//           .links-visual li{display:inline-block;margin-right:6px;margin-bottom:6px}

//           /* Reader-only lines: keep your exact hiding strategy
//              + add no-select/no-pointer so Speak Screen won't highlight */
//           .reader-inline{
//             height:0;overflow:hidden;margin:0;font-size:0;line-height:0;
//             user-select:none;-webkit-user-select:none;pointer-events:none;-webkit-touch-callout:none;
//             /* containment helps WebKit avoid stray paint/highlight boxes */
//             contain: content;
//           }

//           .footnote-ui::before{
//             content:"* Equal Contribution";
//             color:#7C7C7C;
//           }

//           @media (min-width:768px){
//             div.container{display:flex;align-items:flex-start;justify-content:flex-start;text-align:left}
//             div.container img{height:150px;margin-right:10px;border-radius:16px}
//           }

//           .coral-link{color:#e85d4e;text-decoration:none;transition:color .3s}
//           .coral-link:hover,.coral-link:active{color:#7C7C7C}
//           .author-link{color:#7C7C7C;text-decoration:none;transition:color .3s}
//           .author-link:hover,.author-link:active{color:#e85d4e}
//           .name{color:#a3b759}
//           .bubble-link{background:#F3F3F3;border-radius:8px;padding:8px 10px;margin:0 5px;display:inline-block;line-height:.5}

//           .tooltip{position:relative;display:inline-block;cursor:pointer}
//           .tooltip .tooltiptext{
//             /* change only this: visibility:hidden -> display:none (no visual diff) */
//             display:none;width:200px;background:#fff;color:#7C7C7C;text-align:center;border-radius:6px;
//             padding:5px 10px;position:absolute;z-index:1;bottom:125%;left:50%;margin-left:-100px;
//             box-shadow:0 0 6px rgba(0,0,0,.2);font-size:10px
//           }
//           .tooltip:hover .tooltiptext,
//           .tooltip:focus-within .tooltiptext{display:block}

//           .venn-container{position:relative;width:300px;height:300px;margin:auto;cursor:pointer}
//           .circle{position:absolute;width:180px;height:180px;border-radius:50%;transition:transform 1s}
//           .circle-top{background:rgba(117,122,98,.2);top:5%;left:20%;transform:translateX(5%) translateY(0%);border:1px solid #757A62}
//           .circle-left{background:rgba(225,192,197,.2);bottom:0;left:20%;transform:translateX(-25%) translateY(0%);border:1px solid #E1C0C5}
//           .circle-right{background:rgba(236,193,124,.2);bottom:0;right:15%;transform:translateX(25%) translateY(0%);border:1px solid #ECC17C}
//           .venn-container:hover .circle-top{transform:translateX(5%) translateY(25%)}
//           .venn-container:hover .circle-left{transform:translateX(0%) translateY(-25%)}
//           .venn-container:hover .circle-right{transform:translateX(0%) translateY(-25%)}

//           .venn-label{position:absolute;color:inherit;text-align:center;line-height:1.1}
//           .venn-label::after{content:attr(data-label)}
//           .text-left::after{content:"social & visual\\A computing";white-space:pre-line}
//           .text-left{bottom:20px;left:50px;color:#E1C0C5}
//           .text-right{bottom:35px;right:50px;color:#ECC17C}
//           .text-top{top:45px;left:50%;transform:translateX(-38%);color:#757A62}

//           .research-interests{position:absolute;top:0;right:0;padding-left:20px;width:calc(100% - 300px);height:100%;display:flex;align-items:center;font-size:11px;color:#7C7C7C}

//           @media (orientation:landscape){.tooltip .author-link{font-size:16px}}
//         `}
//       </style>

//       <div id="pubs-title" role="heading" aria-level="1" className="sr-only" inert>
//         Publications Section
//       </div>
      
//       <div
//         role="heading"
//         aria-level="2"
//         style={{
//           fontSize: '16px',
//           color: '#7C7C7C',
//           lineHeight: '1.4',
//           marginTop: '1vh',
//           marginBottom: '30px',
//           fontWeight: 'bold'
//         }}
//       >
//         Conference Proceedings
//       </div>

//       {/* Paper 1 */}
//       <div className="container" role="article" aria-labelledby="paper1-title" style={{ marginBottom: '30px', display: 'flex', alignItems: 'flex-start' }}>
//         <img src={liveTyping} alt="Chat UI mockups showing live typing indicators" style={{ height: '150px', borderRadius: '16px' }} />
//         <div style={{ fontSize: '16px', color: '#7C7C7C', lineHeight: '1.4', marginTop: '1vh', marginLeft: '10px', textAlign: 'left' }}>
//           <div id="paper1-title" role="heading" aria-level="3" style={{ marginBottom: '5px', fontWeight: 'inherit' }}>
//             <strong>“Together but not together”: Evaluating Typing Indicators for Interaction-Rich Communication</strong>
//           </div>

//           <div style={{ marginBottom: '5px' }}>
//             <span className="tooltip">
//               <a href="https://zainabiftikhar.com/" target="_self" rel="noopener noreferrer" style={{ textDecoration: 'none', fontSize: '16px' }} className="author-link">Zainab Iftikhar</a>
//               <span className="tooltiptext" aria-hidden="true"> Ph.D. Candidate at Brown University</span>
//             </span>, <span className="name">Yumeng Ma</span>, and{' '}
//             <span className="tooltip">
//               <a href="https://jeffhuang.com/" target="_self" rel="noopener noreferrer" style={{ textDecoration: 'none' }} className="author-link">Jeff Huang</a>
//               <span className="tooltiptext" aria-hidden="true"> Associate Professor and Associate Chair of Computer Science at Brown University</span>
//             </span>
//           </div>

//           <div style={{ marginBottom: '5px' }}>
//             <span style={{ fontWeight: '500', color: '#676767' }}>CHI 2023</span>
//           </div>

//           <ul className="links-visual" role="list" aria-label="Resources">
//             <li>
//               <a
//                 href="../documents/live_typing.pdf"
//                 className="coral-link bubble-link"
//                 aria-label="PDF for live typing paper"
//               >
//                 PDF <FaFilePdf size={10} aria-hidden="true" />
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://doi.org/10.1145/3544548.3581248"
//                 className="coral-link bubble-link"
//                 aria-label="webpage for live typing paper"
//               >
//                 Paper <FaPaperclip size={10} aria-hidden="true" />
//               </a>
//             </li>
//             <li>
//               <span className="sr-only" inert>Code repository for this work</span>
//               <a
//                 href="https://github.com/brownhci/live-typing"
//                 className="coral-link bubble-link"
//                 aria-label="Code repository for live typing paper"
//               >
//                 Code <FaFileCode size={10} aria-hidden="true" />
//               </a>
//             </li>
//           </ul>

//           <p className="reader-inline" aria-hidden="true" inert>
//             Resources: <a href="../documents/live_typing.pdf">PDF</a> · <a href="https://doi.org/10.1145/3544548.3581248">Paper</a> · <a href="https://github.com/brownhci/live-typing">Code</a>
//           </p>
//         </div>
//       </div>

//       {/* Paper 2 */}
//       <div className="container" role="article" aria-labelledby="paper2-title" style={{ marginBottom: '30px', display: 'flex', alignItems: 'flex-start' }}>
//         <img src={mrpwImage} alt="Illustration of a laptop-based videoconferencing setup showing how users appear during a call." style={{ height: '150px', borderRadius: '16px' }} />
//         <div style={{ fontSize: '16px', color: '#7C7C7C', lineHeight: '1.4', marginTop: '1vh', marginLeft: '10px', textAlign: 'left' }}>
//           <div id="paper2-title" role="heading" aria-level="3" style={{ marginBottom: '5px', fontWeight: 'inherit' }}>
//             <strong>The Mixed Reality Passthrough Window: Rethinking the Laptop Videoconferencing Experience</strong>
//           </div>

//           <div style={{ marginBottom: '5px' }}>
//             <span className="tooltip">
//               <a href="https://www.gonsherdesign.com/" target="_self" rel="noopener noreferrer" style={{ textDecoration: 'none' }} className="author-link">Ian Gonsher</a>
//               <span className="tooltiptext" aria-hidden="true"> Assistant Professor in the School of Engineering and Department of Computer Science at Brown University</span>
//             </span>, <span className="name">Yumeng Ma</span>, Ivan Pineda-Dominguez, Matthew Lee, and{' '}
//             <span className="tooltip">
//               <a href="https://www.linkedin.com/in/horatiohan/" target="_self" rel="noopener noreferrer" style={{ textDecoration: 'none' }} className="author-link">Yuxin Han</a>
//               <span className="tooltiptext" aria-hidden="true"> Senior Industrial Designer at Superpedestrian</span>
//             </span>
//           </div>

//           <div style={{ marginBottom: '5px' }}>
//             <span style={{ fontWeight: '500', color: '#676767' }}>IHIET-AI 2023</span>
//           </div>

//           <ul className="links-visual" role="list" aria-label="Resources">
//             <li>
//               <a
//                 href="../documents/mrpw.pdf"
//                 className="coral-link bubble-link"
//                 aria-label="PDF for mixed reality window paper"
//               >
//                 PDF <FaFilePdf size={10} aria-hidden="true" />
//               </a>
//             </li>
//             <li>
//               <a
//                 href="http://doi.org/10.54941/ahfe1002954"
//                 className="coral-link bubble-link"
//                 aria-label="webpage for mixed reality window paper"
//               >
//                 Paper <FaPaperclip size={10} aria-hidden="true" />
//               </a>
//             </li>
//           </ul>

//           <p className="reader-inline" aria-hidden="true" inert>
//             Resources: <a href="../documents/mrpw.pdf">PDF</a> · <a href="http://doi.org/10.54941/ahfe1002954">Paper</a>
//           </p>
//         </div>
//       </div>

//       <div style={{ marginBottom: '10px' }} />

//       <div
//         role="heading"
//         aria-level="2"
//         style={{
//           fontSize: '16px',
//           color: '#7C7C7C',
//           lineHeight: '1.4',
//           marginTop: '1vh',
//           marginBottom: '30px',
//           fontWeight: 'bold'
//         }}
//       >
//         Extended Abstracts
//       </div>

//       {/* Paper 3 */}
//       <div className="container" role="article" aria-labelledby="paper3-title" style={{ marginBottom: '60px', display: 'flex', alignItems: 'flex-start' }}>
//         <img src={ProactiveAgent} alt="Diagram of a proactive reminder system using spoken input, visual context, long- and short-term memory, and generated output" style={{ height: '150px', borderRadius: '16px' }} />
//         <div style={{ fontSize: '16px', color: '#7C7C7C', lineHeight: '1.4', marginTop: '1vh', marginLeft: '10px', textAlign: 'left' }}>
//           <div id="paper3-title" role="heading" aria-level="3" style={{ marginBottom: '5px', fontWeight: 'inherit' }}>
//             <strong>ProactiveAgent: Personalized Context-Aware Reminder System</strong>
//           </div>

//           <div style={{ marginBottom: '5px' }}>
//             <span className="name">Yumeng Ma</span><sup aria-label="equal contribution">*</sup> and{' '}
//             <span className="tooltip">
//               <a href="https://www.linkedin.com/in/jiahao-ren-b912b2b3/" target="_self" rel="noopener noreferrer" style={{ textDecoration: 'none' }} className="author-link">Jiahao Ren</a>
//               <span className="tooltiptext" aria-hidden="true"> Software Engineer at Magic Leap</span>
//             </span><sup aria-label="equal contribution">*</sup>
//           </div>

//           <div style={{ marginBottom: '5px' }}>
//             <span style={{ fontWeight: '500', color: '#676767' }}>UIST 2023 Adjunct</span>
//           </div>

//           <ul className="links-visual" role="list" aria-label="Resources">
//             <li>
//               <a
//                 href="../documents/ProactiveAgent.pdf"
//                 className="coral-link bubble-link"
//                 aria-label="PDF for ProactiveAgent paper"
//               >
//                 PDF <FaFilePdf size={10} aria-hidden="true" />
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://dl.acm.org/doi/10.1145/3586182.3625115"
//                 className="coral-link bubble-link"
//                 aria-label="webpage for ProactiveAgent paper"
//               >
//                 Paper <FaPaperclip size={10} aria-hidden="true" />
//               </a>
//             </li>
//           </ul>

//           <p className="reader-inline" aria-hidden="true" inert>
//             Resources: <a href="../documents/ProactiveAgent.pdf">PDF</a> · <a href="https://dl.acm.org/doi/10.1145/3586182.3625115">Paper</a>
//           </p>

//           <p className="reader-inline" aria-hidden="true" inert>
//             * denotes Equal Contribution
//           </p>
//         </div>
//       </div>

//       {/* UI-only footnote via CSS; hidden from SRs */}
//       <div
//         className="footnote-ui"
//         aria-hidden="true"
//         style={{
//           position: 'relative',
//           bottom: '50px',
//           left: '20px',
//           fontSize: '12px',
//           color: '#7C7C7C',
//           textAlign: 'left',
//           marginTop: '30px',
//           marginBottom: '30px'
//         }}
//       />

//       {/* Curiosity / Venn */}
//       <div
//         style={{
//           position: 'relative',
//           bottom: '50px',
//           fontSize: '12px',
//           textAlign: 'center',
//           marginTop: '0px',
//           marginBottom: '30px'
//         }}
//       >
//         <div
//           className="venn-container"
//           onClick={handleVennClick}
//           onKeyDown={handleVennKeyDown}
//           role="button"
//           tabIndex={0}
//           aria-pressed={isMerged}
//           aria-label="Venn diagram representing the overlap between social & visual computing, accessibility, and human-AI interaction. Click to toggle overlap animation."
//         >
//           <div className={`circle circle-left ${isMerged ? 'merge' : ''}`} aria-hidden="true"></div>
//           <span className="venn-label text-left" data-label="social &amp; visual computing" aria-hidden="true"></span>

//           <div className={`circle circle-right ${isMerged ? 'merge' : ''}`} aria-hidden="true"></div>
//           <span className="venn-label text-right" data-label="accessibility" aria-hidden="true"></span>

//           <div className={`circle circle-top ${isMerged ? 'merge' : ''}`} aria-hidden="true"></div>
//           <span className="venn-label text-top" data-label="human-ai interaction" aria-hidden="true"></span>
//         </div>

//         {/* Speak Screen label for carrot */}
//         <span className="sr-only" inert>Carrot icon representing fresh research ideas</span>

//         <p className="reader-inline" aria-hidden="true" inert>
//           What I’m curious about: social &amp; visual computing · accessibility · human–AI interaction
//         </p>

//         <div className="research-interests" aria-hidden="true">
//           <div style={{ display: 'flex', alignItems: 'center', fontSize: '12px' }}>
//             <span style={{ marginLeft: '8px' }}>
//               What I’m curious about <FaCarrot size={12} color="#7C7C7C" aria-hidden="true" />
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Watermark */}
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

// export default Publications;

import React, { useState } from 'react';
import ProactiveAgent from '../images/proactiveagent.png';
import liveTyping from '../images/livetyping.png';
import mrpwImage from '../images/mrpw.png';
import { FaFilePdf, FaPaperclip, FaFileCode, FaCarrot } from "react-icons/fa";
import { Helmet } from 'react-helmet';

const Publications = () => {
  const [isMerged, setIsMerged] = useState(false);
  const handleVennClick = () => setIsMerged(!isMerged);

  const handleVennKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsMerged((v) => !v);
    }
  };

  return (
    <div
      role="main"
      aria-label="Publications"
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
          .links-visual{list-style:none;padding-left:0;margin:6px 0}
          .links-visual li{display:inline-block;margin-right:6px;margin-bottom:6px}

          @media (min-width:768px){
            div.container{display:flex;align-items:flex-start;justify-content:flex-start;text-align:left}
            div.container img{height:150px;margin-right:10px;border-radius:16px}
          }

          .coral-link{color:#e85d4e;text-decoration:none;transition:color .3s}
          .coral-link:hover,.coral-link:active{color:#7C7C7C}
          .author-link{color:#7C7C7C;text-decoration:none;transition:color .3s}
          .author-link:hover,.author-link:active{color:#e85d4e}
          .name{color:#a3b759}
          .bubble-link{background:#F3F3F3;border-radius:8px;padding:8px 10px;margin:0 5px;display:inline-block;line-height:.5}

          .tooltip{position:relative;display:inline-block;cursor:pointer}
          .tooltip .tooltiptext{
            display:none;width:200px;background:#fff;color:#7C7C7C;text-align:center;border-radius:6px;
            padding:5px 10px;position:absolute;z-index:1;bottom:125%;left:50%;margin-left:-100px;
            box-shadow:0 0 6px rgba(0,0,0,.2);font-size:10px
          }
          .tooltip:hover .tooltiptext,
          .tooltip:focus-within .tooltiptext{display:block}

          /* Make non-text boxes unselectable so Speak Screen doesn't try to highlight them */
          img, .venn-container, .circle, .venn-label, .research-interests {
            user-select: none;
            -webkit-user-select: none;
          }

          .venn-container{position:relative;width:300px;height:300px;margin:auto;cursor:pointer}
          .circle{position:absolute;width:180px;height:180px;border-radius:50%;transition:transform 1s}
          .circle-top{background:rgba(117,122,98,.2);top:5%;left:20%;transform:translateX(5%) translateY(0%);border:1px solid #757A62}
          .circle-left{background:rgba(225,192,197,.2);bottom:0;left:20%;transform:translateX(-25%) translateY(0%);border:1px solid #E1C0C5}
          .circle-right{background:rgba(236,193,124,.2);bottom:0;right:15%;transform:translateX(25%) translateY(0%);border:1px solid #ECC17C}
          .venn-container:hover .circle-top{transform:translateX(5%) translateY(25%)}
          .venn-container:hover .circle-left{transform:translateX(0%) translateY(-25%)}
          .venn-container:hover .circle-right{transform:translateX(0%) translateY(-25%)}

          .venn-label{position:absolute;color:inherit;text-align:center;line-height:1.1}
          .venn-label::after{content:attr(data-label)}
          .text-left::after{content:"social & visual\\A computing";white-space:pre-line}
          .text-left{bottom:20px;left:50px;color:#E1C0C5}
          .text-right{bottom:35px;right:50px;color:#ECC17C}
          .text-top{top:45px;left:50%;transform:translateX(-38%);color:#757A62}

          .research-interests{position:absolute;top:0;right:0;padding-left:20px;width:calc(100% - 300px);height:100%;display:flex;align-items:center;font-size:11px;color:#7C7C7C}

          @media (orientation:landscape){.tooltip .author-link{font-size:16px}}
        `}
      </style>

      {/* Section heading */}
      <div
        role="heading"
        aria-level="2"
        style={{
          fontSize: '16px',
          color: '#7C7C7C',
          lineHeight: '1.4',
          marginTop: '1vh',
          marginBottom: '30px',
          fontWeight: 'bold'
        }}
      >
        Conference Proceedings
      </div>

      {/* Paper 1 */}
      <div className="container" role="article" aria-labelledby="paper1-title" style={{ marginBottom: '30px', display: 'flex', alignItems: 'flex-start' }}>
        {/* Decorative image: stop Speak Screen from reading/overlaying on it */}
        <img
          src={liveTyping}
          alt=""                 /* empty alt = decorative, no speech target */
          aria-hidden="true"     /* don't expose as a node to AT */
          draggable="false"
          style={{ height: '150px', borderRadius: '16px', pointerEvents: 'none' }}
        />
        <div style={{ fontSize: '16px', color: '#7C7C7C', lineHeight: '1.4', marginTop: '1vh', marginLeft: '10px', textAlign: 'left' }}>
          <div id="paper1-title" role="heading" aria-level="3" style={{ marginBottom: '5px', fontWeight: 'inherit' }}>
            <strong>“Together but not together”: Evaluating Typing Indicators for Interaction-Rich Communication</strong>
          </div>

          <div style={{ marginBottom: '5px' }}>
            <span className="tooltip">
              <a
                href="https://zainabiftikhar.com/"
                target="_self"
                rel="noopener noreferrer"
                className="author-link"
                style={{ textDecoration: 'none', fontSize: '16px' }}
              >
                Zainab Iftikhar
              </a>
              <span className="tooltiptext" aria-hidden="true"> Ph.D. Candidate at Brown University</span>
            </span>, <span className="name">Yumeng Ma</span>, and{' '}
            <span className="tooltip">
              <a
                href="https://jeffhuang.com/"
                target="_self"
                rel="noopener noreferrer"
                className="author-link"
                style={{ textDecoration: 'none' }}
              >
                Jeff Huang
              </a>
              <span className="tooltiptext" aria-hidden="true"> Associate Professor and Associate Chair of Computer Science at Brown University</span>
            </span>
          </div>

          <div style={{ marginBottom: '5px' }}>
            <span style={{ fontWeight: '500', color: '#676767' }}>CHI 2023</span>
          </div>

          <ul className="links-visual" role="list">
            <li>
              <a
                href="../documents/live_typing.pdf"
                className="coral-link bubble-link"
              >
                PDF <FaFilePdf size={10} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href="https://doi.org/10.1145/3544548.3581248"
                className="coral-link bubble-link"
              >
                Paper <FaPaperclip size={10} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/brownhci/live-typing"
                className="coral-link bubble-link"
              >
                Code <FaFileCode size={10} aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Paper 2 */}
      <div className="container" role="article" aria-labelledby="paper2-title" style={{ marginBottom: '30px', display: 'flex', alignItems: 'flex-start' }}>
        <img
          src={mrpwImage}
          alt=""
          aria-hidden="true"
          draggable="false"
          style={{ height: '150px', borderRadius: '16px', pointerEvents: 'none' }}
        />
        <div style={{ fontSize: '16px', color: '#7C7C7C', lineHeight: '1.4', marginTop: '1vh', marginLeft: '10px', textAlign: 'left' }}>
          <div id="paper2-title" role="heading" aria-level="3" style={{ marginBottom: '5px', fontWeight: 'inherit' }}>
            <strong>The Mixed Reality Passthrough Window: Rethinking the Laptop Videoconferencing Experience</strong>
          </div>

          <div style={{ marginBottom: '5px' }}>
            <span className="tooltip">
              <a
                href="https://www.gonsherdesign.com/"
                target="_self"
                rel="noopener noreferrer"
                className="author-link"
                style={{ textDecoration: 'none' }}
              >
                Ian Gonsher
              </a>
              <span className="tooltiptext" aria-hidden="true"> Assistant Professor in the School of Engineering and Department of Computer Science at Brown University</span>
            </span>, <span className="name">Yumeng Ma</span>, Ivan Pineda-Dominguez, Matthew Lee, and{' '}
            <span className="tooltip">
              <a
                href="https://www.linkedin.com/in/horatiohan/"
                target="_self"
                rel="noopener noreferrer"
                className="author-link"
                style={{ textDecoration: 'none' }}
              >
                Yuxin Han
              </a>
              <span className="tooltiptext" aria-hidden="true"> Senior Industrial Designer at Superpedestrian</span>
            </span>
          </div>

          <div style={{ marginBottom: '5px' }}>
            <span style={{ fontWeight: '500', color: '#676767' }}>IHIET-AI 2023</span>
          </div>

          <ul className="links-visual" role="list">
            <li>
              <a
                href="../documents/mrpw.pdf"
                className="coral-link bubble-link"
              >
                PDF <FaFilePdf size={10} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href="http://doi.org/10.54941/ahfe1002954"
                className="coral-link bubble-link"
              >
                Paper <FaPaperclip size={10} aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div style={{ marginBottom: '10px' }} />

      <div
        role="heading"
        aria-level="2"
        style={{
          fontSize: '16px',
          color: '#7C7C7C',
          lineHeight: '1.4',
          marginTop: '1vh',
          marginBottom: '30px',
          fontWeight: 'bold'
        }}
      >
        Extended Abstracts
      </div>

      {/* Paper 3 */}
      <div className="container" role="article" aria-labelledby="paper3-title" style={{ marginBottom: '60px', display: 'flex', alignItems: 'flex-start' }}>
        <img
          src={ProactiveAgent}
          alt=""
          aria-hidden="true"
          draggable="false"
          style={{ height: '150px', borderRadius: '16px', pointerEvents: 'none' }}
        />
        <div style={{ fontSize: '16px', color: '#7C7C7C', lineHeight: '1.4', marginTop: '1vh', marginLeft: '10px', textAlign: 'left' }}>
          <div id="paper3-title" role="heading" aria-level="3" style={{ marginBottom: '5px', fontWeight: 'inherit' }}>
            <strong>ProactiveAgent: Personalized Context-Aware Reminder System</strong>
          </div>

          <div style={{ marginBottom: '5px' }}>
            <span className="name">Yumeng Ma</span>
            <sup aria-label="equal contribution" role="note">*</sup> and{' '}
            <span className="tooltip">
              <a
                href="https://www.linkedin.com/in/jiahao-ren-b912b2b3/"
                target="_self"
                rel="noopener noreferrer"
                className="author-link"
                style={{ textDecoration: 'none' }}
              >
                Jiahao Ren
              </a>
              <span className="tooltiptext" aria-hidden="true"> Software Engineer at Magic Leap</span>
            </span>
            <sup aria-label="equal contribution" role="note">*</sup>
          </div>

          <div style={{ marginBottom: '5px' }}>
            <span style={{ fontWeight: '500', color: '#676767' }}>UIST 2023 Adjunct</span>
          </div>

          <ul className="links-visual" role="list">
            <li>
              <a
                href="../documents/ProactiveAgent.pdf"
                className="coral-link bubble-link"
              >
                PDF <FaFilePdf size={10} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href="https://dl.acm.org/doi/10.1145/3586182.3625115"
                className="coral-link bubble-link"
              >
                Paper <FaPaperclip size={10} aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Curiosity / Venn */}
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
        <div
          className="venn-container"
          onClick={handleVennClick}
          onKeyDown={handleVennKeyDown}
          role="button"
          tabIndex={0}
          aria-pressed={isMerged}
          aria-label="Venn diagram of social and visual computing, accessibility, and human–AI interaction"
        >
          <div className={`circle circle-left ${isMerged ? 'merge' : ''}`} aria-hidden="true"></div>
          <span className="venn-label text-left" data-label="social &amp; visual computing" aria-hidden="true"></span>

          <div className={`circle circle-right ${isMerged ? 'merge' : ''}`} aria-hidden="true"></div>
          <span className="venn-label text-right" data-label="accessibility" aria-hidden="true"></span>

          <div className={`circle circle-top ${isMerged ? 'merge' : ''}`} aria-hidden="true"></div>
          <span className="venn-label text-top" data-label="human-ai interaction" aria-hidden="true"></span>
        </div>

        <div
          className="research-interests"
          aria-label="Curiosity areas: social and visual computing; accessibility; human–AI interaction"
        >
          <div style={{ display: 'flex', alignItems: 'center', fontSize: '12px' }}>
            <span style={{ marginLeft: '8px' }}>
              What I’m curious about <FaCarrot size={12} aria-hidden="true" />
            </span>
          </div>
        </div>
      </div>

      {/* Watermark */}
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
