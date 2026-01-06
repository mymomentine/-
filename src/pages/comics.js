import React, { useEffect, useMemo, useRef, useState } from "react";
import { Helmet } from "react-helmet";

import dumb from "../comics/67.png";
import bunny from "../comics/bunny.png";
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
import peircing from "../comics/piercing.png";
import plushie from "../comics/plushie.png";
import teddybear from "../comics/teddybear.png";
import demonhunter from "../comics/demonhunter.png";
import starstar from "../comics/starstar.svg";

const comics = [
  { src: bunny, alt: "Bunny comic", title: "terminator bunny" },
  { src: docs, alt: "Docs comic", title: "second wear" },
  { src: kitty, alt: "Kitty comic", title: "pocket size" },
  { src: dumb, alt: "Comic 67", title: "something dumb" },
  { src: wart, alt: "Wart comic", title: "fingie blemish" },
  { src: demonhunter, alt: "Demon hunters comic", title: "demon hunters" },
  { src: crow, alt: "Crow comic", title: "negotiations" },
  { src: grocery, alt: "Grocery comic", title: "windowsill" },
  { src: hairtie, alt: "Hairtie comic", title: "hair tie" },
  { src: nightgown, alt: "Nightgown comic", title: "nightgown" },
  { src: piano, alt: "Piano comic", title: "scavenger" },
  { src: picnic, alt: "Picnic comic", title: "picnic" },
  { src: pumpkin, alt: "Pumpkin comic", title: "pumpkin" },
  { src: slap, alt: "Slap comic", title: "stomp stomp" },
  { src: starbag, alt: "Starbag comic", title: "fisheye" },
  { src: traffic, alt: "Traffic cone comic", title: "diversion" },
  { src: hat, alt: "Hat comic", title: "bad hat day" },
  { src: urname, alt: "Same name comic", title: "same name" },
  { src: vivienne, alt: "Vivienne comic", title: "saturn rings" },
  { src: peircing, alt: "Piercing comic", title: "open wound" },
  { src: plushie, alt: "Plushie comic", title: "plushie" },
  { src: teddybear, alt: "Teddybear comic", title: "ambassador" },
];

// --- layout knobs ---
const TARGET_ROW_H = 260;
const GAP = 8;
const JUSTIFY_TOL = 0.15;

function clamp(n, lo, hi) {
  return Math.max(lo, Math.min(hi, n));
}

function computeJustifiedRows(items, containerW, targetH, gap) {
  if (!containerW || containerW < 50) return [];

  const rows = [];
  let row = [];
  let sumRatios = 0;

  const flushRow = (isLastRow) => {
    if (row.length === 0) return;

    const gapsTotal = gap * (row.length - 1);
    const availableW = containerW - gapsTotal;

    let rowH = targetH;
    if (!isLastRow) {
      rowH = availableW / sumRatios;
      rowH = clamp(rowH, targetH * 0.85, targetH * 1.15);
    }

    rows.push({
      height: rowH,
      items: row.map((it) => ({
        ...it,
        height: rowH,
        width: it.ratio * rowH,
      })),
    });

    row = [];
    sumRatios = 0;
  };

  for (const it of items) {
    row.push(it);
    sumRatios += it.ratio;

    const predictedW = sumRatios * targetH + gap * (row.length - 1);
    if (predictedW >= containerW * (1 - JUSTIFY_TOL)) {
      flushRow(false);
    }
  }

  flushRow(true);
  return rows;
}

const Comics = () => {
  const wrapRef = useRef(null);
  const [wrapW, setWrapW] = useState(0);

  const [ratios, setRatios] = useState(() => Array(comics.length).fill(null));
  const allReady = ratios.every((r) => typeof r === "number" && r > 0);

  const [activeIndex, setActiveIndex] = useState(null);
  const isOpen = activeIndex !== null;
  const active = isOpen ? comics[activeIndex] : null;

  // measure container width
 useEffect(() => {
  if (!wrapRef.current) return;
  const el = wrapRef.current;

  let rafId = 0;
  let lastW = 0;

  const ro = new ResizeObserver((entries) => {
    const w = entries[0]?.contentRect?.width;
    if (!w) return;

    // ignore sub-pixel jitter
    const rounded = Math.round(w);

    if (rounded === lastW) return;
    lastW = rounded;

    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      setWrapW(rounded);
    });
  });

  ro.observe(el);

  return () => {
    cancelAnimationFrame(rafId);
    ro.disconnect();
  };
}, []);

  // preload ratios WITHOUT rendering any <img> tags
  useEffect(() => {
    let cancelled = false;

    const loadAll = async () => {
      const promises = comics.map(
        (c, idx) =>
          new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
              const nw = img.naturalWidth || 1;
              const nh = img.naturalHeight || 1;
              resolve({ idx, ratio: nw / nh });
            };
            img.onerror = () => resolve({ idx, ratio: 1 });
            img.src = c.src;
          })
      );

      const results = await Promise.all(promises);
      if (cancelled) return;

      setRatios((prev) => {
        const next = [...prev];
        for (const r of results) next[r.idx] = r.ratio;
        return next;
      });
    };

    loadAll();
    return () => {
      cancelled = true;
    };
  }, []);

  const close = () => {
    setActiveIndex(null);
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
  };

  // ESC to close
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const itemsWithRatios = useMemo(
    () =>
      comics.map((c, idx) => ({
        ...c,
        idx,
        ratio: ratios[idx] ?? 1,
      })),
    [ratios]
  );

  const rows = useMemo(() => {
    if (!allReady) return [];
    return computeJustifiedRows(itemsWithRatios, wrapW, TARGET_ROW_H, GAP);
  }, [allReady, itemsWithRatios, wrapW]);

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

      <style>{`
        .comic-header {
          font-size: 16px;
          color: #7C7C7C;
          line-height: 1.4;
          margin-top: 1vh;
          margin-bottom: 18px;
          font-weight: bold;
        }

        .justified-wrap { width: 100%; }

        .row {
          display: flex;
          flex-direction: row;
          gap: ${GAP}px;
          margin-bottom: ${GAP}px;
          align-items: flex-start;
          flex-wrap: nowrap;
        }

        .tile {
          margin: 0;
          padding: 0;
          display: inline-flex;
          flex-direction: column;
          align-items: flex-start;
          flex: 0 0 auto;
        }

        .tile-btn {
          border: 0;
          padding: 0;
          margin: 0;
          background: transparent;
          cursor: pointer;
          display: block;
        }

        .thumb {
          display: block;
          overflow: hidden;
          background: transparent;
        }

        .thumb img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: left top;
        }

        .comic-caption {
          margin-top: 6px;
          font-size: 12px;
          color: #7C7C7C;
          line-height: 1.25;
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

        .lightbox-bar {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          margin-bottom: 6px;
          font-size: 12px;
          color: #7C7C7C;
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
          width: auto;
          height: auto;
          display: block;
        }
      `}</style>

      <div className="comic-header" role="heading" aria-level="2">
        Comics hand-drawn by me
      </div>

      <div className="justified-wrap" ref={wrapRef}>
        {/* If you want: render nothing until ratios are ready (no jump). */}
        {allReady &&
          rows.map((r, ridx) => (
            <div className="row" key={`row-${ridx}`}>
              {r.items.map((it) => (
                <figure className="tile" key={`${it.title}-${it.idx}`}>
                  <button
                    type="button"
                    className="tile-btn"
                    onClick={() => setActiveIndex(it.idx)}
                    aria-label={`Open ${it.title}`}
                    style={{ width: `${it.width}px` }}
                  >
                    <span
                      className="thumb"
                      style={{ width: `${it.width}px`, height: `${it.height}px` }}
                    >
                      <img src={it.src} alt={it.alt} loading="lazy" />
                    </span>
                  </button>
                  <figcaption className="comic-caption" style={{ width: `${it.width}px` }}>
                    {it.title}
                  </figcaption>
                </figure>
              ))}
            </div>
          ))}
      </div>

      {isOpen && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={close}>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-bar">{active?.title}</div>
            <div className="lightbox-img-wrap">
              <img className="lightbox-img" src={active?.src} alt={active?.alt} />
            </div>
          </div>
        </div>
      )}

      <div
        style={{
          position: "absolute",
          bottom: "60px",
          left: "20px",
          fontSize: "12px",
          color: "#7C7C7C",
        }}
      >
        small archive of real moments
      </div>

      <img
        src={starstar}
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "52px",
          right: "20px",
      width: "64px",
    height: "64px",
          display: "block",
        }}
      />

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
