# magni-image-inplace

That simple inplace image magnifier.

[![MIT license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

## Features

### Web-component based
Works with modern front-end frameworks.
Demos:
- [React](https://codesandbox.io/s/magni-image-inplace-react-example-8cox6)
- [Vue](https://codesandbox.io/s/magni-image-inplace-vue-example-gvehq)


## Setup

### 1. As standalone script


```html
<script 
    src="https://cdn.jsdelivr.net/npm/magni-image-inplace@latest/dist/lib/magni-preview-inplace.umd.js"
    data-standalone
    data-tag-name="magnify-image-inplace"
    defer
></script>
```

### 2. As module

Install module:

```
npm install magni-image-inplace
```

Import and define component in your JS-file:

```js
import MagniImageInplace from 'magni-image-inplace';

if (!window.customElements.get("magni-image-inplace")) {
    window.customElements.define("magni-image-inplace", MagniImageInplace);
}
```

## Usage
See [examples](https://tatarianbarbarian.github.io/magni-image-inplace/)

Component works as a wrapper for `<img>`:

```html
<magni-image-inplace>
    <img src="your-image-url">
</magni-image-inplace>
```

and `<picture>` tags:

```html
<magni-image-inplace>
    <picture>
        <source srcset="your-image-url" media="(min-width: 1920px)">
        <source srcset="your-image-url" media="(min-width: 1280px)">
        <img src="your-image-url">
    </picture>
</magni-image-inplace>
```
