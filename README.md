# magni-image-inplace

That simple inplace image magnifier.

## Setup

### 1. As standalone script


```html
<script 
    src="https://cdnjs.com/magni-image-inplace"
    data-standalone
    data-tag-name="magnify-image-inplace"
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
