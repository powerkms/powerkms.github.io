import { DEPARTMENT, ORGANIZER, PROFESSOR_NAME } from "../../const"
import { LazyDiv } from "../lazyDiv"

/** 감사의 마음을 전하고 기념식에 모시는 글입니다. */
export const Invitation = () => (
  <LazyDiv className="card invitation">
    <h2>모시는 글</h2>
    <div className="break" />
    <div className="content">
      오랜 시간 학문과 교육에 헌신해 오신
    </div>
    <div className="content">
     문일경 교수님의 퇴임을 맞아,
    </div>
    <div className="content">
      감사와 존경의 마음을 나누는 자리를  
    </div>
    <div className="content">
       마련했습니다.
    </div>
    <div className="content">
      함께해 주시어 뜻깊은 순간을 
    </div>
    <div className="content">
      같이 빛내 주시면 감사하겠습니다.
    </div>
    <div className="break" />

  </LazyDiv>
)
