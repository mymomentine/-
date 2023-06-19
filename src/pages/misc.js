import React from 'react';

const Misc = () => {
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
        marginTop: '100px',
      }}
    >
      {/* CSS media query for smaller screens */}
      <style>
        {`
          /* CSS code for smaller screens */

          @media (max-width: 767px) {
            div.container {
              flex-direction: column;
              align-items: flex-start;
              text-align: left;
            }

            div.container h1 {
              margin-top: 0;
              font-size: 14px;
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

          /* CSS code for coral links */

          .coral-link {
            color: #f88379;
            transition: color 0.3s ease-in-out;
          }

          /* CSS code for coral links on hover and active */

          .coral-link:hover,
          .coral-link:active {
            color: gray;
          }
        `}
      </style>

      <div className="container" style={{ marginBottom: '60px' }}>
        <div>
          <h1
            style={{
              fontSize: '16px',
              fontWeight: '300',
              color: 'black',
              lineHeight: '1.4',
              marginTop: '1vh',
              textAlign: 'left', // Align the text to the left
            }}
          >
            ✧ some personal projects coming soon ✧
            <br />
            <br />
            In the meantime, here is what I have been up to in the field of{' '}
            <a href="../documents/robotics.pdf" target="_self" rel="noopener noreferrer" style={{ textDecoration: 'none' }} className="coral-link">
              robotics
            </a>.
          </h1>
        </div>
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

export default Misc;
