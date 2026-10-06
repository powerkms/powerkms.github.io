import {
  EVENT_DATE,
  EVENT_TITLE,
  LOCATION,
  PROFESSOR_NAME,
} from "../../const"
import ktalkIcon from "../../icons/ktalk-icon.png"
import { LazyDiv } from "../lazyDiv"
import { useKakao } from "../store"

const baseUrl = import.meta.env.BASE_URL

/** 은퇴 기념식 초청장을 카카오톡으로 공유합니다. */
export const ShareButton = () => {
  const kakao = useKakao()

  return (
    <LazyDiv className="footer share-button">
      <button
        className="ktalk-share"
        onClick={() => {
          if (!kakao) return

          const text = [
            PROFESSOR_NAME && `${PROFESSOR_NAME} 교수님`,
            EVENT_TITLE,
            EVENT_DATE?.isValid()
              ? EVENT_DATE.format("YYYY년 M월 D일 dddd A h시")
              : "",
            LOCATION,
          ]
            .filter(Boolean)
            .join("\n")
          const pageUrl = `${window.location.origin}${baseUrl}`

          kakao.Share.sendDefault({
            objectType: "text",
            text,
            link: {
              mobileWebUrl: pageUrl,
              webUrl: pageUrl,
            },
            buttonTitle: "초청장 보기",
          })
        }}
      >
        <img src={ktalkIcon} alt="" /> 카카오톡으로 공유하기
      </button>
    </LazyDiv>
  )
}
