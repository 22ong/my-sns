import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig(({ command, isPreview }) => {
  // GitHub Pages 는 https://22ong.github.io/my-sns/ 아래에서 열리므로 빌드할 때와 빌드 결과를 미리 볼 때만 경로를 붙임
  const base = command === 'build' || isPreview ? '/my-sns/' : '/'

  return {
    plugins: [
      react(),
      VitePWA({
        // 새로 배포하면 서비스 워커가 저절로 새 버전으로 바뀜
        registerType: 'autoUpdate',
        manifest: {
          name: '하루조각',
          short_name: '하루조각',
          description: '사진 한 장으로 남기는 오늘의 조각',
          lang: 'ko',
          display: 'standalone',
          start_url: base,
          scope: base,
          theme_color: '#faf6ef',
          background_color: '#faf6ef',
          icons: [
            { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
            { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
          ],
        },
        workbox: {
          // 빌드된 앱 파일만 저장함. runtimeCaching 을 두지 않아서 Supabase 요청과 게시물 사진은 저장하지 않음
          // 아이콘 PNG 는 플러그인이 매니페스트 아이콘으로 따로 넣어 주므로 여기서는 뺌
          globPatterns: ['**/*.{js,css,html,svg}'],
        },
      }),
    ],
    base,
  }
})
