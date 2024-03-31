import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import cesium from 'vite-plugin-cesium'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), cesium()],
  optimizeDeps: {
    include: ['cesium'],
  },
  server: {
    open: true,
    proxy: {
      '/api': {   // '/api'是代理标识，用于告诉node，url前面是/api的就是使用代理的
        target: 'http://weibao.lingbtech.com/weibao',//这里填入你要请求的接口的前缀   后端地址
        ws: false,//代理websocked
        changeOrigin: true,  //是否跨域
        // secure: true,  //是否https接口
        rewrite: (path) => path.replace(/^\/api/, ""),
      }
    }
  }
})


