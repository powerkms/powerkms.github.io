/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext } from "react"

/** 카카오 SDK 객체를 전역으로 공유합니다. */
export const StoreContext = createContext({
  kakao: null as any,
  setKakao: (() => {}) as (kakao: any) => void,
})
