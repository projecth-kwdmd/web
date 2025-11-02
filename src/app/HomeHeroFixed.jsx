import React, { useState, useId } from "react";
import "./home-hero-fixed.css";

// TABS 데이터
const TABS = [
  {
    key: "home",
    label: "홈",
    icon: `/phoneIcon_1.png`,
    gnbIconActive: `/phoneGNB_1.png`,
    gnbIconInactive: `/phoneGNBOff_1.png`,
    screenImg: "/phone_1.png",
    title: "이동과 정착을 잇는 홈",
    body: (
      <>
        사용자의 여정 단계에 따라 필요한 정보를 한눈에 제공합니다.<br />
        고향 찾기, 스테이, 연계 활동 등 모든 흐름의 중심이 되는 공간입니다.<br />
        현재 위치와 상태에 맞춘 맞춤형 홈으로 여정을 이어갑니다.
      </>
    ),
    chips: ["맞춤추천", "내 고향 둘러보기", "함께하기"],
  },
  {
    key: "content",
    label: "콘텐츠",
    icon: `/phoneIcon_2.png`,
    gnbIconActive: `/phoneGNB_2.png`,
    gnbIconInactive: `/phoneGNBOff_2.png`,
    screenImg: "/phone_2.png",
    title: "지역의 이야기를 엮는 콘텐츠",
    body: (
      <>
        ‘인기포스트’, ‘로컬실험중’, ‘공간X사람’, ‘도시밖일기’, ‘커뮤니티워크’ 등<br />
        다양한 주제의 기록이 모여 지역의 삶을 보여주는 공간입니다.<br />
        사람과 장소, 실험과 여정이 교차하며 머무는 경험 속에서<br />
        새로운 연결과 영감을 만들어갑니다.
      </>
    ),
    chips: ["인기포스트", "로컬실험중", "공간X사람", "도시밖일기"],
  },
  {
    key: "activity",
    label: "활동",
    icon: `/phoneIcon_3.png`,
    gnbIconActive: `/phoneGNB_3.png`,
    gnbIconInactive: `/phoneGNBOff_3.png`,
    screenImg: "/phone_3.png",
    title: "지역과 함께 움직이는 활동",
    body: (
      <>
        ‘인기포스트’, ‘로컬 재생’, ‘함께 만드는 마을’, ‘봉사 인증 활동’, ‘보상형 활동’<br />
        등 다양한 참여 방식으로 지역의 변화를 만들어가는 공간입니다.<br />
        활동 정보를 확인하고 직접 신청하며,<br />
        지역 속에서 나의 발자국을 남기는 여정을 이어가세요.
      </>
    ),
    chips: ["로컬재생", "함께만드는마을", "봉사인증활동"],
  },
  {
    key: "social",
    label: "소통",
    icon: `/phoneIcon_4.png`,
    gnbIconActive: `/phoneGNB_4.png`,
    gnbIconInactive: `/phoneGNBOff_4.png`,
    screenImg: "/phone_4.png",
    title: "연결로 이어지는 소통",
    body: (
      <>
        소통 탭은 ‘채팅목록’과 ‘친구목록’을 중심으로<br />
        활동과 스테이를 매개로 한 연결을 이어가는 공간입니다.<br />
        참여한 프로그램이나 머문 공간을 기반으로 자연스럽게 대화를 나누고,<br />
        새로운 인연과 지역의 네트워크를 확장해 나갑니다.
      </>
    ),
    chips: ["채팅목록", "친구목록"],
  },
  {
    key: "mypage",
    label: "마이",
    icon: `/phoneIcon_5.png`,
    gnbIconActive: `/phoneGNB_5.png`,
    gnbIconInactive: `/phoneGNBOff_5.png`,
    screenImg: "/phone_5.png",
    title: "나의 여정을 관리하는 마이페이지",
    body: (
      <>
        마이페이지는 스테이와 일정, 포인트, 계정 등<br />
        나의 모든 이용 정보를 한곳에서 확인하고 관리할 수 있는 공간입니다.<br />
        예약과 일정, 연계된 서비스들을 손쉽게 조정하며<br />
        더 편리하고 유연한 여정을 이어갑니다.
      </>
    ),
    chips: ["나의현재스테이", "초대받은날짜관리", "로컬포인트"],
  },
];

// GNB 슬롯 위치 (중앙 left: 433px 기준)
const GNB_SLOTS = [
  { top: 1024.865, left: 138.24, rotate: -59.997 },
  { top: 900.32, left: 262.82, rotate: -30.003 },
  { top: 873, left: 433, rotate: 0 },
  { top: 900.32, left: 603.18, rotate: 30.003 },
  { top: 1024.865, left: 727.76, rotate: 59.997 },
];

export default function HomeHeroFixed() {
  const [active, setActive] = useState("home");
  const uid = useId();
  const current = TABS.find((t) => t.key === active);

  // 현재 활성화된 탭의 인덱스
  const activeIndex = TABS.findIndex((t) => t.key === active);

  return (
    <section className="hero-fixed">
      {/* LEFT */}
      <div className="hero-fixed__left">
        <div className="left-inner" aria-live="polite" key={current.key}>
          <h2 className="title">{current.title}</h2>

          <div className="desc">{current.body}</div>

          <div className="actions">
            <img
              src={current.icon}
              alt={`${current.label} 아이콘`}
              className="action-icon"
            />
            <div className="chip-group">
              {current.chips.map((chip, i) => (
                <button className="chip" key={`${uid}-chip-${i}`}>
                  {chip}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="hero-fixed__right">
        <div className="phone">
          {/* 스크린 이미지가 스와이프될 뷰포트 (321x712) */}
          <div className="phone__screen_viewport">
            {TABS.map((tab, i) => {
              const position = i - activeIndex;
              return (
                <img
                  key={tab.key}
                  className={`phone__screen ${
                    i === activeIndex ? "is-active" : ""
                  }`}
                  src={tab.screenImg}
                  alt={`${tab.label} 앱 화면`}
                  style={{
                    "--screen-offset": `${position * 100}%`,
                    "--screen-opacity": i === activeIndex ? 1 : 0,
                  }}
                />
              );
            })}
          </div>

          {/* 폰 프레임 (iPhone.png) */}
          <img
            className="phone__overlay"
            src="/iPhone.png"
            alt="아이폰 목업 프레임"
          />
        </div>

        {/* GNB 아이콘들 */}
        {TABS.map((tab, i) => {
          const slotIndex = (i - activeIndex + 2 + TABS.length) % TABS.length;
          const { top, left, rotate } = GNB_SLOTS[slotIndex];
          const selected = active === tab.key;

          return (
            <button
              key={tab.key}
              className={`gnb__item ${selected ? "is-active" : ""}`}
              style={{
                top: `${top}px`,
                left: `${left}px`,
                "--icon-rotate": `${rotate}deg`,
              }}
              onClick={() => setActive(tab.key)}
            >
              <img
                src={selected ? tab.gnbIconActive : tab.gnbIconInactive}
                alt={`${tab.label} 아이콘`}
                className="gnb__img"
              />
            </button>
          );
        })}

        {/* GNB 중앙 점 */}
        <span className="gnb-center-dot" />
      </div>
    </section>
  );
}
