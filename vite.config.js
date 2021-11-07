const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    emptyOutDir: false,
    outDir: 'dist/lib',
    lib: {
      entry: path.resolve(__dirname, 'src/lib/MagniImageInplace.js'),
      name: 'magni-preview-inplace',
      fileName: (format) => `magni-preview-inplace.${format}.js`,
    },
  }
})
