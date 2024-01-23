import React from 'react';
import ProactiveAgent from '../images/proactiveagent.png';
import liveTyping from '../images/livetyping.png';
import mrpwImage from '../images/mrpw.png';

const Publications = () => {
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
        marginTop: '100px',
      }}
    >
      {/* CSS media query for smaller screens */}
      <style>
        {`
          /* CSS code for larger screens */
          @media (min-width: 768px) {
            div.container {
              display: flex;
              align-items: flex-start;
              justify-content: flex-start;
              text-align: left;
            }

            div.container h1 {
              margin-top: 0;
            }

            div.container img {
              height: 150px; /* Increased the height of the image to 150px */
              margin-right: 10px; /* Added margin-right for spacing between image and text */
              border-radius: 16px; /* Rounded image corners */
            }
          }

          /* CSS code for coral links */
          .coral-link {
            color: #b4be89;
            text-decoration: none;
            transition: color 0.3s ease-in-out;
          }

          /* CSS code for coral links on hover and active */
          .coral-link:hover,
          .coral-link:active {
            color: gray;
          }

          /* CSS code for name style */
          .name {
            font-style: italic;
            color: #a3b759;
          }
        `}
      </style>

      <div className="container" style={{ marginBottom: '60px', display: 'flex', alignItems: 'flex-start' }}>
        <img src={ProactiveAgent} alt="Publication Image" style={{ height: '150px', borderRadius: '16px' }} /> {/* Increased the height of the image */}
        <h1
          style={{
            fontSize: '16px',
            fontWeight: '300',
            color: 'rgba(0, 0, 0, 0.8)', // Adjusted the color to a darker shade of black
            lineHeight: '1.4',
            marginTop: '1vh',
            marginLeft: '10px', // Add margin to create spacing between the image and text
            textAlign: 'left', // Align text to the left
          }}
        >
          <strong>ProactiveAgent: Personalized Context-Aware Reminder System
          </strong>
          <br />
          <span className="name">Yumeng Ma</span>* and Jiahao Ren*
          <br />
          <em>UIST '23 Adjunct: Adjunct Proceedings of the 36th Annual ACM Symposium on User Interface Software and Technology</em> <strong>(UIST 2023 SIC)</strong>
          <br />
          <a href="../documents/ProactiveAgent.pdf" target="_self" rel="noopener noreferrer" className="coral-link" style={{ marginRight: '10px' }}>
            [pdf]
          </a>
          <a href="https://dl.acm.org/doi/10.1145/3586182.3625115" target="_self" rel="noopener noreferrer" className="coral-link" style={{ marginLeft: '10px' }}>
            [doi]
          </a>
        </h1>
      </div>

      <div className="container" style={{ marginBottom: '60px', display: 'flex', alignItems: 'flex-start' }}>
        <img src={liveTyping} alt="Publication Image" style={{ height: '150px', borderRadius: '16px' }} /> {/* Increased the height of the image */}
        <h1
          style={{
            fontSize: '16px',
            fontWeight: '300',
            color: 'rgba(0, 0, 0, 0.8)', // Adjusted the color to a darker shade of black
            lineHeight: '1.4',
            marginTop: '1vh',
            marginLeft: '10px', // Add margin to create spacing between the image and text
            textAlign: 'left', // Align text to the left
          }}
        >
          <strong>“Together but not together”: Evaluating Typing Indicators for Interaction-Rich Communication
          </strong>
          <br />
          Zainab Iftikhar, <span className="name">Yumeng Ma</span>, and Jeff Huang
          <br />
          <em>In Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems</em> <strong>(CHI 2023)</strong>
          <br />
          <a href="../documents/LiveTyping_CHI23.pdf" target="_self" rel="noopener noreferrer" className="coral-link" style={{ marginRight: '10px' }}>
            [pdf]
          </a>
          <a href="https://doi.org/10.1145/3544548.3581248" target="_self" rel="noopener noreferrer" className="coral-link" style={{ marginLeft: '10px' }}>
            [doi]
          </a>
          <a href="https://github.com/brownhci/live-typing" target="_self" rel="noopener noreferrer" className="coral-link" style={{ marginLeft: '15px' }}>
            [code]
          </a>
        </h1>
      </div>

      <div className="container" style={{ marginBottom: '60px', display: 'flex', alignItems: 'flex-start' }}>
        <img src={mrpwImage} alt="Publication Image" style={{ height: '150px', borderRadius: '16px' }} /> {/* Increased the height of the image */}
        <h1
          style={{
            fontSize: '16px',
            fontWeight: '300',
            color: 'rgba(0, 0, 0, 0.8)', // Adjusted the color to a darker shade of black
            lineHeight: '1.4',
            marginTop: '1vh',
            marginLeft: '10px', // Add margin to create spacing between the image and text
            textAlign: 'left', // Align text to the left
          }}
        >
          <strong>The Mixed Reality Passthrough Window: Rethinking the Laptop Videoconferencing Experience
          </strong>
          <br />
          Ian Gonsher, <span className="name">Yumeng Ma</span>, Ivan Pineda-Dominguez, Matthew Lee, and Yuxin Han
          <br />
		  <em>Human Interaction and Emerging Technologies </em> <strong> (IHIET-AI 2023)</strong><em>: Artificial Intelligence and Future Applications 70, 70 (2023)  </em>
          <br />
          <a href="../documents/mrpw.pdf" target="_self" rel="noopener noreferrer" className="coral-link" style={{ marginRight: '10px' }}>
            [pdf]
          </a>
          <a href="http://doi.org/10.54941/ahfe1002954" target="_self" rel="noopener noreferrer" className="coral-link" style={{ marginLeft: '10px' }}>
            [doi]
          </a>
        </h1>
      </div>
      <div
        className="copy-right"
        style={{
          fontSize: '12px',
          color: 'gray',
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
        Made with 🧸 by Yumeng Ma
      </div>
    </div>
  );
};

export default Publications;
