import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import svgr from "vite-plugin-svgr"
import fs from "fs"

import pkg from "./package.json"
import { createHtmlPlugin } from "vite-plugin-html"
import {
  EVENT_DATE,
  EVENT_TITLE,
  LOCATION,
  PROFESSOR_NAME,
} from "./src/const"

const PAGE_TITLE = [
  PROFESSOR_NAME && `${PROFESSOR_NAME} 교수님`,
  EVENT_TITLE,
]
  .filter(Boolean)
  .join(" | ")
const DESCRIPTION = [
  EVENT_DATE?.isValid()
    ? EVENT_DATE.format("YYYY년 M월 D일 dddd A h시")
    : "",
  LOCATION,
]
  .filter(Boolean)
  .join(" · ") || "감사와 존경을 나누는 퇴임 기념식에 초대합니다."

const distFolder = "build"

let base = "/"

try {
  const url = new URL(pkg.homepage)
  base = url.pathname
} catch (e) {
  base = pkg.homepage || "/"
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    createHtmlPlugin({
      inject: {
        data: {
          PAGE_TITLE,
          DESCRIPTION,
        },
      },
    }),
    {
      name: "manifest-inject",
      writeBundle() {
        const content = fs.readFileSync("public/manifest.json", "utf-8")
        const processed = content.replace(/<%= PAGE_TITLE %>/g, PAGE_TITLE)
        fs.writeFileSync(`${distFolder}/manifest.json`, processed)
      },
    },
  ],
  server: { port: 3000 },
  build: { outDir: distFolder },
  base,
})
