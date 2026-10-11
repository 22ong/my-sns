import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // GitHub Pages 는 https://22ong.github.io/my-sns/ 아래에서 열리므로 빌드할 때만 경로를 붙임
  base: command === 'build' ? '/my-sns/' : '/',
}))
