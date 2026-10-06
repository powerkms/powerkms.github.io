import { Cover } from "./component/cover"
import { Location } from "./component/location"
import "./App.scss"
import { Invitation } from "./component/invitation"
import { Calendar } from "./component/calendar"
import { Gallery } from "./component/gallery"
import { Information } from "./component/information"
import { LazyDiv } from "./component/lazyDiv"
import { ShareButton } from "./component/shareButton"
import { EVENT_PROGRAM, RECEPTION_INFO } from "./const"
import { GALLERY_IMAGES } from "./images"

/**
 * 메인 애플리케이션 컴포넌트입니다.
 * 초대장의 각 섹션을 조합하여 화면을 구성합니다.
 *
 * @returns {JSX.Element} 애플리케이션 화면
 */
function App() {
  return (
    <div className="background">
      <div className="card-view">
        <LazyDiv className="card-group">
          {/* 메인 커버 섹션 */}
          <Cover />

          {/* 모시는 글 섹션 */}
          <Invitation />
        </LazyDiv>

        <LazyDiv className="card-group">
          {/* 행사 일시 및 카운트다운 */}
          <Calendar />

          {(EVENT_PROGRAM.length > 0 || RECEPTION_INFO) && <Information />}
        </LazyDiv>

        {GALLERY_IMAGES.length > 0 && (
          <LazyDiv className="card-group">
            <Gallery />
          </LazyDiv>
        )}

        <LazyDiv className="card-group">
          {/* 오시는 길 및 지도 섹션 */}
          <Location />
        </LazyDiv>

        {/* 카카오톡/링크 공유 버튼 */}
        <ShareButton />
      </div>
    </div>
  )
}

export default App
