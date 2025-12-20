import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import dumb from "../comics/67.png";
import bunny from "../comics/bunny.png";
import car from "../comics/car.png";
import docs from "../comics/docs.png";
import hat from "../comics/hat.png";
import kitty from "../comics/kitty.png";
import crow from "../comics/crow.png";
import grocery from "../comics/grocery.png";
import hairtie from "../comics/hairtie.png";
import nightgown from "../comics/nightgown.png";
import piano from "../comics/piano.png";
import picnic from "../comics/picnic.png";
import pumpkin from "../comics/pumpkin.png";
import slap from "../comics/slap.png";
import starbag from "../comics/starbag.png";
import traffic from "../comics/traffic.png";
import urname from "../comics/urname.png";
import vivienne from "../comics/vivienne.png";
import wart from "../comics/wart.png";

const comics = [
//   { src: bunny, alt: "Bunny comic", title: "my terminator bunny keychain" },
//   { src: car, alt: "Car comic", title: "unreliable blueprint" },
//   { src: docs, alt: "Docs comic", title: "cute things shouldn't hurt this much" },
//   { src: hat, alt: "Hat comic", title: "don't know what to wear when it rains" },
//   { src: kitty, alt: "Kitty comic", title: "a gift from u while i was gone" },
//   { src: dumb, alt: "Comic 67", title: "knew u were thinking something dumb" },
//   { src: crow, alt: "Crow comic", title: "are they friends or seed dealing?" },
//   { src: grocery, alt: "Grocery comic", title: "on the way back from groceries" },
//   { src: hairtie, alt: "Hairtie comic", title: "ur curls in pigtails & clippies" },
//   { src: nightgown, alt: "Nightgown comic", title: "welcome to our party. please come in!" },
//   { src: piano, alt: "Piano comic", title: "things we didn't pay for" },
//   { src: picnic, alt: "Picnic comic", title: "swear u always nap more than me" },
//   { src: pumpkin, alt: "Pumpkin comic", title: "why i love october so much" },
//   { src: slap, alt: "Slap comic", title: "complimentary upstairs percussion" },
//   { src: starbag, alt: "Starbag comic", title: "thought i would look cuter thru a star" },
//   { src: traffic, alt: "Traffic cone comic", title: "is this considered human-trafficking?" },
//   { src: urname, alt: "Urname comic", title: "wrong person same name" },
//   { src: vivienne, alt: "Vivienne comic", title: "vee-vienne westwood fantasy" },
//   { src: wart, alt: "Wart comic", title: "i knew u liked picking at it" },
];

const Comics = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const isOpen = activeIndex !== null;
  const active = isOpen ? comics[activeIndex] : null;

  const close = () => {
    setActiveIndex(null);
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  const prev = () =>
    setActiveIndex((i) => (i === 0 ? comics.length - 1 : i - 1));
  const next = () =>
    setActiveIndex((i) => (i === comics.length - 1 ? 0 : i + 1));

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <div
      style={{
        position: "relative",
        margin: "0 auto",
        maxWidth: "980px",
        padding: "30px 20px 120px",
        fontFamily: "Nunito Sans, sans-serif",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        backgroundColor: "white",
        minHeight: "80vh",
      }}
    >
      <Helmet>
        <meta name="robots" content="nosnippet" />
      </Helmet>

      <style>
        {`
          .comic-grid {
            column-count: 1;
            column-gap: 14px;
            width: 100%;
          }

          @media (min-width: 520px) {
            .comic-grid { column-count: 2; }
          }

          @media (min-width: 900px) {
            .comic-grid { column-count: 3; }
          }

          .comic-card {
            break-inside: avoid;
            margin: 0 0 22px;
          }

          .comic-button {
            width: 100%;
            padding: 0;
            margin: 0;
            border: 0;
            background: transparent;
            cursor: pointer;
            outline: none;
          }

          .comic-button:focus { outline: none; }

          .comic-img {
            width: 100%;
            height: auto;
            display: block;
          }

          .comic-caption {
            margin-top: 6px;
            font-size: 12px;
            color: #7C7C7C;
            line-height: 1.4;
          }

          .comic-header { margin-bottom: 18px; }

          .comic-title {
            font-size: 14px;
            color: #7C7C7C;
            letter-spacing: 0.2px;
          }

          /* lightbox */
          .lightbox {
            position: fixed;
            inset: 0;
            background: rgba(255,255,255,0.92);
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 24px 16px 56px;
          }

          .lightbox-inner {
            width: min(980px, 92vw);
            max-height: 88vh;
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          .lightbox-img-wrap {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
          }

          .lightbox-img {
            max-width: 100%;
            max-height: 78vh;
            display: block;
          }

          .lightbox-bar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 12px;
            color: #7C7C7C;
          }

          .lightbox-actions {
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .lb-btn,
          .lb-x {
            border: 0;
            background: transparent;
            color: #B5B5B5;
            padding: 0;
            cursor: pointer;
            outline: none;
          }

          .lb-btn { font-size: 22px; line-height: 1; }
          .lb-x { font-size: 18px; line-height: 1; }

          .lb-btn:hover,
          .lb-x:hover {
            color: #000;
          }

          .lb-btn:focus,
          .lb-x:focus {
            outline: none;
          }
        `}
      </style>

      {/* Header */}


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
       Comics drawn by me
      </div>

      {/* Grid */}
      <div className="comic-grid">
        {comics.map((c, idx) => (
          <figure className="comic-card" key={`${c.title}-${idx}`}>
            <button
              type="button"
              className="comic-button"
              onClick={() => setActiveIndex(idx)}
              aria-label={`Open ${c.title}`}
            >
              <img className="comic-img" src={c.src} alt={c.alt} loading="lazy" />
            </button>
            <figcaption className="comic-caption">{c.title}</figcaption>
          </figure>
        ))}
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={close}>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-bar">
              <div>{active?.title}</div>
              <div className="lightbox-actions">
                <button className="lb-btn" onClick={prev} aria-label="Previous">
                  ‹
                </button>
                <button className="lb-btn" onClick={next} aria-label="Next">
                  ›
                </button>
                <button className="lb-x" onClick={close} aria-label="Close">
                  ×
                </button>
              </div>
            </div>

            <div className="lightbox-img-wrap">
              <img className="lightbox-img" src={active?.src} alt={active?.alt} />
            </div>
          </div>
        </div>
      )}

      {/* Note */}
      <div
        style={{
          position: "absolute",
          bottom: "60px",
          left: "20px",
          fontSize: "12px",
          color: "#7C7C7C",
        }}
      >
        small archive of real life moments
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "18px",
          width: "100%",
          textAlign: "center",
          fontSize: "12px",
          color: "#7C7C7C",
        }}
      >
        Potayto Workshop by Yumeng Ma
      </div>
    </div>
  );
};

export default Comics;
