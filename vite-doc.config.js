const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  base: '/magni-image-inplace/',
  build: {
    emptyOutDir: false,
    outDir: 'dist/doc',
    rollupOptions: {
        input: 'index.html'
    }
  },
})
