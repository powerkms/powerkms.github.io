import {
  LOCATION,
  LOCATION_ADDRESS,
  MAP_SEARCH_QUERY,
  TRANSPORTATION_INFO,
} from "../../const"
import { LazyDiv } from "../lazyDiv"

/** 장소와 대중교통 안내를 보여줍니다. */
export const Location = () => {
  const searchQuery = MAP_SEARCH_QUERY || LOCATION
  const encodedQuery = encodeURIComponent(searchQuery)

  return (
    <LazyDiv className="card location">
      <h2>오시는 길</h2>
      <div className="addr">
        <div>{LOCATION || "행사 장소를 확인 중입니다"}</div>
        {LOCATION_ADDRESS && <div className="detail">{LOCATION_ADDRESS}</div>}
      </div>
      {searchQuery && (
        <div className="map-links">
          <a
            href={`https://map.naver.com/p/search/${encodedQuery}`}
            target="_blank"
            rel="noreferrer"
          >
            네이버 지도에서 보기
          </a>
          <a
            href={`https://map.kakao.com/link/search/${encodedQuery}`}
            target="_blank"
            rel="noreferrer"
          >
            카카오맵에서 보기
          </a>
        </div>
      )}
      {TRANSPORTATION_INFO && (
        <div className="transportation-info">{TRANSPORTATION_INFO}</div>
      )}
    </LazyDiv>
  )
}
