/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect } from "react"
import { StoreContext } from "./context"
import { KAKAO_SDK_JS_KEY } from "../../env"

const baseUrl = import.meta.env.BASE_URL
const KAKAO_SDK_URL = `${baseUrl}kakao_js_sdk/2.7.1/kakao.min.js`

/** 카카오 SDK를 불러와 공유 기능에서 사용할 수 있게 합니다. */
export const useKakao = () => {
  const { kakao, setKakao } = useContext(StoreContext)

  useEffect(() => {
    if (
      !KAKAO_SDK_JS_KEY ||
      document.querySelector(`script[src="${KAKAO_SDK_URL}"]`)
    ) {
      return
    }

    const script = document.createElement("script")
    script.addEventListener("load", () => {
      const sdk = (window as any).Kakao
      if (!sdk.isInitialized()) sdk.init(KAKAO_SDK_JS_KEY)
      setKakao(sdk)
    })
    script.src = KAKAO_SDK_URL
    document.head.appendChild(script)
  }, [setKakao])

  return kakao
}
