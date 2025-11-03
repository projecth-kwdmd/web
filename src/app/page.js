"use client";
import "./home.css";
import Header from "./header.js";
import Service from "./service.js";
import App from "./App.js";
import Kiosk from "./kiosk_ani";
import { useRef } from "react";
import HomeHeroFixed from "./HomeHeroFixed";

export default function Page() {
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    const v = videoRef.current;
    if (!v) return;
    v.paused ? v.play() : v.pause();
  };

  return (
    <main>
      <Header />
      {/* ==================== HERO ==================== */}
      <section id="main">
        <div className="hero-layers">
          {/* 배경 */}
          <img src="/title_sky.svg" className="layer-bg" alt="배경" />

          {/* MARKET RESEARCH — layer_bg 바로 밑 */}
          <section className="market-section">
            <div className="container">
              <h2 className="mr-title">Market Research</h2>
              <p className="mr-sub">
                단순히 빈집을 채우는 것을 넘어, 현대 사회와
                <br />
                개인의 삶이 직면한 복잡한 문제들이 있습니다.
              </p>

              <div className="market-cards">
                {/* 01 */}
                <div className="market-card">
                  <div className="market-card-content">
                    <div className="card-number num-01">01</div>
                    <h3 className="card-title title-01">
                      방치된 공간과 인프라 소멸
                    </h3>
                    <p className="card-desc desc-01">
                      빈집 문제의 악순환, 지역 인프라 소멸
                    </p>
                  </div>
                  <div className="market-card-image img-01">
                    <img src="/market_01.svg" className="img-base" alt="빈집" />
                  </div>
                </div>

                {/* 02 */}
                <div className="market-card reverse">
                  <div className="market-card-content">
                    <div className="card-number num-02">02</div>
                    <h3 className="card-title title-02">
                      삶의 방식에 대한 갈증
                    </h3>
                    <p className="card-desc desc-02">
                      획일화된 삶의 탈출 욕구, '정서적 고향'의 상실
                    </p>
                  </div>
                  <div className="market-card-image img-02">
                    <img src="/market_02.svg" className="img-base" alt="상실" />
                  </div>
                </div>

                {/* 03 */}
                <div className="market-card">
                  <div className="market-card-content">
                    <div className="card-number num-03">03</div>
                    <h3 className="card-title title-03">고립과 단절</h3>
                    <p className="card-desc desc-03">
                      진정한 소속감의 부재, 지역 커뮤니티의 와해
                    </p>
                  </div>
                  <div className="market-card-image img-03">
                    <img src="/market_03.svg" className="img-base" alt="단절" />
                  </div>
                </div>
              </div>

              <div className="summary-banner">
                Project H.는 함께 살아가는 새로운 삶의 방식을 실험하며,
                <br />
                개인과 지역이 함께 성장하는 공동체입니다.
              </div>
            </div>
          </section>

          {/* 전경(폰) */}
          <img src="/title_phone.png" className="layer-phone" alt="폰" />
        </div>
      </section>
      {/* ==================== 원형 그래픽 ==================== */}
      <img src="/circularGra.svg" alt="원형 그래픽" className="circular-gra" />
      {/* ==================== MISSION ==================== */}
      <section id="background" className="mission">
        <div className="mission-bg" />
        <div className="container mission-container">
          <p className="mission-line mission-1">개인의</p>
          <p className="mission-line mission-2">
            <b>유목민적 삶</b>을 보장하면서,
          </p>
          <p className="mission-line mission-3">
            각 지역의 <b>정서적 고향</b>을 구축해
          </p>
          <p className="mission-line mission-4">
            <b>지속 가능한 공동체</b>를 만드는 것
          </p>
        </div>
      </section>
      {/* ==================== VALUE (3개 카드) ==================== */}
      <section className="value-cards value-fixed">
        <div className="value-card">
          <h4 data-label="A.">유목민적 삶</h4>
          <p>
            한곳에 머물지 않고 이동하며 살아가는 현대인의 삶을 존중합니다.
            Project H는 원하는 지역에서 머물고 떠날 수 있는
            <br />
            유연한 거주 방식을 제안합니다.
          </p>
        </div>

        <div className="value-card">
          <h4 data-label="B.">정서적 고향</h4>
          <p>
            자주 이동해도 마음이 쉴 곳은 필요합니다.
            <br />
            Project H는 지역과 사람을 연결해 언제든 <br />
            돌아올 수 있는 정서적 기반을 만듭니다.
          </p>
        </div>

        <div className="value-card">
          <h4 data-label="C.">지속 가능한 공동체</h4>
          <p>
            개인과 지역이 함께 성장하는 순환형 구조를
            <br />
            지향합니다. Project H는 공간의 재활용과 협력을 통해 <br />
            오래 지속될 수 있는 공동체를 구축합니다.
          </p>
        </div>
      </section>
      {/* ==================== BLUE LOGO (배경/텍스트 이미지) ==================== */}
      <section className="blue-logo">
        <img src="/blueLogoBack.png" className="blue-bg" alt="파란배경" />
        <img
          src="/projecth..png"
          className="blue-text"
          alt="Project H 텍스트"
        />
      </section>
      {/* ==================== LOGO 라벨 & 설명 ==================== */}
      <section className="logo-title">
        <p className="logo-label">Logo</p>
      </section>
      <section className="logo-description">
        <p>
          자유로운 삶을 꿈꾸는 당신에게,
          <br />
          Project H.는 <span className="em">‘당신만의 프로젝트’</span>를 위한
          공간이자,
          <br />
          <span className="em">‘진정한 마음의 고향’</span>을 찾아가는
          여정입니다.
        </p>
      </section>
      {/* ==================== GALLERY ==================== */}
      <section className="gallery">
        <div className="gallery-item">
          <img src="/32.svg" className="img-base" alt="scene 32" />
          <img src="/32_2.svg" className="img-alt" alt="scene 32 detail" />
        </div>
        <div className="gallery-item">
          <img src="/28.svg" className="img-base" alt="scene 28" />
          <img src="/28_2.svg" className="img-alt" alt="scene 28 detail" />
        </div>
        <div className="gallery-item">
          <img src="/40.svg" className="img-base" alt="scene 40" />
          <img src="/40_2.svg" className="img-alt" alt="scene 40 detail" />
        </div>
        <div className="gallery-item">
          <img src="/61.svg" className="img-base" alt="scene 61" />
          <img src="/61_2.svg" className="img-alt" alt="scene 61 detail" />
        </div>
      </section>
      {/* ==================== SERVICE + HERO FIXED (묶어서 배치) ==================== */}
      <section className="service-block">
        {/* 네 현재 Service 그대로 */}
        <HomeHeroFixed />
        <Service />
      </section>
      {/* KIOSK IMAGE — Hero Fixed 바로 밑 */}
      <section id="kiosk" className="kiosk-wrapper">
        {/* 좌표 기준 래퍼 */}
        <div className="kiosk-stage">
          {/* ✅ kioskVod.mp4 (섹션 위에 얹힘) */}
          <video
            src="/kioskVod.mp4"
            className="kiosk-video"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onError={(e) => console.error("kioskVod.mp4 load error", e)}
          />

          {/* 기존 kiosk 이미지 */}
          <img src="/kiosk.svg" alt="Project H Kiosk" className="kiosk-img" />
        </div>
      </section>
      {/* BRANDING IMAGE — Kiosk 바로 밑 */}{" "}
      <section id="branding" className="branding-wrapper">
        {" "}
        <img
          src="/branding-2.png"
          alt="Project H Branding"
          className="branding-img"
        />{" "}
      </section>
      {/* ==================== VIDEO ==================== */}
      <section id="video" className="story_vid" onClick={handleVideoClick}>
        <video ref={videoRef} src="/project.h.mp4" playsInline />
      </section>
      {/* ==================== FOOTER ==================== */}
      <section id="display" className="footer">
        <img src="/footer.svg" alt="footer" />
      </section>
      {/* 기타 앱 섹션이 따로 필요하면 여기에 */}
      <App />
    </main>
  );
}
