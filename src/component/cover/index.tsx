import {
  DEPARTMENT,
  EVENT_DATE,
  LOCATION,
} from "../../const"
import snuLogo from "../../images/snu-logo.svg"
import { COVER_IMAGE } from "../../images"
import { LazyDiv } from "../lazyDiv"

/** 은퇴 기념식의 핵심 정보를 보여주는 표지입니다. */
export const Cover = () => (
  <LazyDiv className="card cover">
    <img
      className="snu-logo"
      src={snuLogo}
      alt="서울대학교"
    />
    {COVER_IMAGE && (
      <div className="image-wrapper">
        <img src={COVER_IMAGE} alt="교수님 사진" />
      </div>
    )}
    <div className="subtitle">A Celebration of a Distinguished Career</div>
    <h1 className="event-title">
      <span className="professor-name">문일경 교수님</span>
      <span>정년 퇴임식에 초대합니다.</span>
    </h1>
    {DEPARTMENT && <div className="info">{DEPARTMENT}</div>}
    <div className="break" />
    {EVENT_DATE?.isValid() ? (
      <div className="info">
        {EVENT_DATE.format(
          `YYYY년 M월 D일 dddd A h시${EVENT_DATE.minute() ? " m분" : ""}`,
        )}
      </div>
    ) : (
      <div className="info">행사 일시를 준비 중입니다</div>
    )}
    <div className="info">{LOCATION || "행사 장소를 확인 중입니다"}</div>
  </LazyDiv>
)
