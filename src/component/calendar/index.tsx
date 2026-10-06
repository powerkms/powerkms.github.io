import { useEffect, useState } from "react"
import { dayjs, EVENT_DATE } from "../../const"
import { LazyDiv } from "../lazyDiv"

const formatDate = () =>
  EVENT_DATE?.isValid()
    ? EVENT_DATE.format(
        `YYYY년 M월 D일 dddd A h시${EVENT_DATE.minute() ? " m분" : ""}`,
      )
    : null

/** 행사 일시와 행사까지 남은 날짜를 안내합니다. */
export const Calendar = () => {
  const [now, setNow] = useState(() => dayjs())

  useEffect(() => {
    if (!EVENT_DATE?.isValid()) return
    const timer = window.setInterval(() => setNow(dayjs()), 60_000)
    return () => window.clearInterval(timer)
  }, [])

  const dateText = formatDate()
  const daysUntil = EVENT_DATE?.isValid()
    ? Math.ceil(EVENT_DATE.startOf("day").diff(now.startOf("day"), "day", true))
    : null
  const calendarDays = EVENT_DATE?.isValid()
    ? Array.from(
        {
          length:
            Math.ceil(
              (EVENT_DATE.startOf("month").day() +
                EVENT_DATE.daysInMonth()) /
                7,
            ) * 7,
        },
        (_, index) => {
          const day = index - EVENT_DATE.startOf("month").day() + 1
          return day > 0 && day <= EVENT_DATE.daysInMonth() ? day : null
        },
      )
    : []

  return (
    <LazyDiv className="card calendar">
      <h2>행사 일시</h2>
      <div className="break" />
      {dateText ? (
        <>
          <div className="event-date">{dateText}</div>
          <div className="month-calendar" aria-label={EVENT_DATE.format("YYYY년 M월 달력")}>
            <div className="calendar-month">{EVENT_DATE.format("YYYY년 M월")}</div>
            <div className="calendar-grid calendar-weekdays" aria-hidden="true">
              {["일", "월", "화", "수", "목", "금", "토"].map((weekday) => (
                <span key={weekday}>{weekday}</span>
              ))}
            </div>
            <div className="calendar-grid calendar-dates">
              {calendarDays.map((day, index) => (
                <span
                  key={`${day ?? "empty"}-${index}`}
                  className={day === EVENT_DATE.date() ? "event-day" : undefined}
                  aria-current={day === EVENT_DATE.date() ? "date" : undefined}
                >
                  {day}
                </span>
              ))}
            </div>
          </div>
          {daysUntil !== null && (
            <div className="event-countdown">
              {daysUntil > 0
                ? `기념식까지 ${daysUntil}일 남았습니다.`
                : daysUntil === 0
                  ? "오늘 기념식이 열립니다."
                  : `기념식이 ${Math.abs(daysUntil)}일 지났습니다.`}
            </div>
          )}
        </>
      ) : (
        <div className="event-date">행사 일시를 준비 중입니다</div>
      )}
    </LazyDiv>
  )
}
