const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  base: '/magni-image-inplace/',
  root: 'src/doc/',
  build: {
    emptyOutDir: false,
    outDir: '../../dist/doc',
    rollupOptions: {
        input: 'src/doc/index.html'
    }
  },
})
