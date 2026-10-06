import { EVENT_PROGRAM, RECEPTION_INFO } from "../../const"
import { LazyDiv } from "../lazyDiv"

/** 행사 순서와 다과 안내를 표시합니다. 정보가 입력되지 않은 항목은 숨깁니다. */
export const Information = () => {
  const program = EVENT_PROGRAM.filter((item) => item.time || item.title)
  if (program.length === 0 && !RECEPTION_INFO) return null

  return (
    <LazyDiv className="card information">
      <h2>행사 안내</h2>
      {program.length > 0 && (
        <div className="info-card">
          <div className="label">기념식 순서</div>
          <ol className="event-program">
            {program.map(({ time, title }, index) => (
              <li key={`${time}-${title}-${index}`}>
                {time && <span className="program-time">{time}</span>}
                <span>{title}</span>
              </li>
            ))}
          </ol>
        </div>
      )}
      {RECEPTION_INFO && (
        <div className="info-card">
          <div className="label">다과 및 모임 안내</div>
          <div className="content">{RECEPTION_INFO}</div>
        </div>
      )}
    </LazyDiv>
  )
}
