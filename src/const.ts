import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import "dayjs/locale/ko"

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.locale("ko")

export { dayjs }

/** 은퇴 기념식 초청장에 표시할 정보를 이 파일에서 수정하세요. */
export const EVENT_TITLE = "퇴임 기념식에 초대합니다"
export const PROFESSOR_NAME = "문일경"
export const DEPARTMENT = ""

/** Asia/Seoul 기준, 예: 2026-12-18 14:00. 미정이면 빈 문자열로 둡니다. */
export const EVENT_DATE_INPUT = "2027-03-20 17:30"
export const EVENT_DATE = EVENT_DATE_INPUT
  ? dayjs.tz(EVENT_DATE_INPUT, "YYYY-MM-DD HH:mm", "Asia/Seoul")
  : null

/** 행사 장소와 상세 주소를 입력하세요. */
export const LOCATION = "JW메리어트 서울"
export const LOCATION_ADDRESS = "3층 살롱4&5"
export const TRANSPORTATION_INFO = ""

/** 장소에 대한 길찾기용 검색어. 비우면 장소 링크를 숨깁니다. */
export const MAP_SEARCH_QUERY = ""

/** 행사 순서와 식사·다과 안내는 필요한 항목만 추가하세요. */
export const EVENT_PROGRAM: { time: string; title: string }[] = []
export const RECEPTION_INFO = ""

/** 초청 문구의 서명. 비워 두면 서명 영역을 표시하지 않습니다. */
export const ORGANIZER = ""
