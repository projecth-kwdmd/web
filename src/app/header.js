"use client";
import { useEffect, useRef, useState } from "react";
import "./header.css";
import "./home.css";

export default function Header() {
  const [isHidden, setIsHidden] = useState(false);
  const [isTeamOpen, setIsTeamOpen] = useState(false);
  const lastScrollY = useRef(0);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  /* 헤더 스크롤 업/다운 감춤 */
  useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => {
      const y = window.scrollY;
      if (y > 100) {
        setIsHidden(y > lastScrollY.current);
      } else {
        setIsHidden(false);
      }
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* 바깥 클릭 + ESC 닫기 */
  useEffect(() => {
    if (!isTeamOpen) return;
    const onDoc = (e) => {
      const dd = dropdownRef.current;
      const btn = buttonRef.current;
      if (!dd || !btn) return;
      if (!dd.contains(e.target) && !btn.contains(e.target)) {
        setIsTeamOpen(false);
      }
    };
    const onKey = (e) => e.key === "Escape" && setIsTeamOpen(false);
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [isTeamOpen]);

  const teamMembers = [
    { name: "박다빈", url: "https://planner-dabinpark.notion.site" },
    { name: "노권후", url: "https://stile.im" },
    { name: "심정빈", url: "https://www.instagram.com/oneul_is_day/" },
    { name: "오정은", url: "https://www.behance.net/caf4d781/" },
    { name: "배준일", url: "https://ji009868.github.io/react-portfolio/" },
    { name: "김지현", url: "https://dmdhyunk.github.io/react-portfolio/" },
  ];

  return (
    <header className={`page-header ${isHidden ? "is-hidden" : ""}`}>
      {/* 로고 */}
      <div className="logo-wrapper glass-box">
        <a href="#main" id="logo-wrapper-mainlink" aria-label="Go to Main">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="30"
            viewBox="0 0 40 30"
            fill="none"
          >
            <path
              d="M40 19.7432C40 25.4079 35.3288 30 29.5667 30C23.8045 30 19.1333 25.4079 19.1333 19.7432C19.1333 14.0786 23.8045 9.48648 29.5667 9.48648C35.3288 9.48648 40 14.0786 40 19.7432Z"
              fill="#EBF0F4"
            />
            <path
              d="M34.7833 13.7746C34.7833 19.4392 30.1122 24.0313 24.35 24.0313C18.5878 24.0313 13.9166 19.4392 13.9166 13.7746C13.9166 8.10994 18.5878 3.51783 24.35 3.51783C30.1122 3.51783 34.7833 8.10994 34.7833 13.7746Z"
              fill="#EBF0F4"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.55453 0.616116C9.66774 -0.205309 11.199 -0.205385 12.3123 0.615965L30.0488 13.7017C30.8365 14.2829 31.3 15.1946 31.3 16.1628V26.923C31.3 28.6224 29.8987 30 28.17 30H3.13C1.40135 30 2.04369e-06 28.6224 0 26.923V8.46614C6.05649e-06 7.49804 0.463446 6.58637 1.25103 6.00522L8.55453 0.616116ZM9.735 21.3112C8.00635 21.3112 6.605 22.6888 6.605 24.3882V30H13.0417V24.3882C13.0417 22.6888 11.6403 21.3112 9.91168 21.3112H9.735Z"
              fill="#1FA2E8"
            />
          </svg>
        </a>
      </div>

      {/* GNB */}
      <nav className="gnb-wrapper glass-box" aria-label="Primary">
        <a href="#main" className="nav-link">
          Main
        </a>
        <a href="#background" className="nav-link">
          Background
        </a>
        <a href="#value" className="nav-link">
          Value
        </a>
        <a href="#service" className="nav-link">
          Service
        </a>
        <a href="#video" className="nav-link">
          Video
        </a>
        <a href="#display" className="nav-link">
          Display
        </a>
      </nav>

      {/* 햄버거 + 드롭다운 */}
      <div className="hamburger-wrapper glass-box">
        <button
          ref={buttonRef}
          className="hamburger-btn"
          aria-label="Team Menu"
          aria-haspopup="true"
          aria-expanded={isTeamOpen}
          aria-controls="team-dropdown"
          onClick={() => setIsTeamOpen((v) => !v)}
        >
          <span className={`bar ${isTeamOpen ? "open" : ""}`} />
          <span className={`bar ${isTeamOpen ? "open" : ""}`} />
          <span className={`bar ${isTeamOpen ? "open" : ""}`} />
        </button>

        <div
          id="team-dropdown"
          ref={dropdownRef}
          className={`team-dropdown ${isTeamOpen ? "open" : ""}`}
          role="menu"
        >
          <ul className="team-list">
            {teamMembers.map((m) => (
              <li key={m.name}>
                <button
                  type="button"
                  className="member-item"
                  role="menuitem"
                  onClick={() =>
                    window.open(m.url, "_blank", "noopener,noreferrer")
                  }
                >
                  {m.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
