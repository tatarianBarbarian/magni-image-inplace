const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    outDir: 'dist',
    lib: {
      entry: path.resolve(__dirname, 'src/MagniPreviewInplace.js'),
      name: 'magni-preview-inplace',
      fileName: (format) => `magni-preview-inplace.${format}.js`,
    },
    rollupOptions: {
        input: 'index.html'
    }
  }
})
