# magni-image-inplace

That simple inplace image magnifier.

[![MIT license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

## Features

### Web-component based
Works with modern front-end frameworks.
Demos:
- [React](https://codesandbox.io/s/magni-image-inplace-react-example-8cox6)
- [Vue](https://codesandbox.io/s/magni-image-inplace-vue-example-gvehq)

## Contents
  - [Installation](#installation)
    - [As standalone script](#as-standalone-script)
    - [As NPM-package](#as-npm-package)
  - [Configuration](#configuration)
    - [Tag name](#tag-name)
    - [Media rule](#media-rule)
  - [Usage](#usage)

## Installation 

### As standalone script 

[Example](https://codesandbox.io/s/magni-image-inplace-standalone-script-example-s3z7y)

```html
<script 
    src="https://unpkg.com/magni-image-inplace@latest/dist/lib/magni-preview-inplace.umd.js"
    data-standalone
    data-magni='{"tagname": "magni-image-inplace", "media": "(min-width: 1280px)"}'
    defer
></script>
```

### As NPM-package 

Install package:

```
npm install magni-image-inplace
```

Import and init component in your JS-file:

```js
import init from 'magni-image-inplace';

init({
    tagname: 'magni-image-inplace',
    media: '(min-width: 1280px)'
});
```

## Configuration

Please note that this component by design is for **dekstop users experience**. 

On mobiles and tablets it's better using something like [pinchzoom library](https://manuelstofer.github.io/pinchzoom/).

As component has two flows of initialization, it has two flows of configuration.

The standalone script configured by attribute `data-magni`, which accpeps config in JSON-form. 
The module flow exports function `init` which accepts config in JS-object form.

| Property | Type                                 | Default             |
|----------|--------------------------------------|---------------------|
| media    | string with media query              | (min-width: 1280px) |
| tagname  | string with min two hyphenated words | magni-image-inplace |


### Tag name

Default: `magni-image-inplace`.

Please note that Custom Elements specification allow only names with hyphen like: `my-component` or `my-awesome-custom-element`.

### Media rule

Default component's media rule is `(min-width: 1280px)`. 
It means that it will be active only on devices with screen width of 1280px and larger.

There is three ways to set on which screen sizes the component will be active:

1. In standalone script flow it needs to add `media` field to config in `data-magni`.
It will affect every component instance.

2. In module flow it is needed to import `config` function from module. It accepts object with field `media` as an argument.
Example of configuring this way:

```js
import init from 'magni-image-inplace';

init({
    media: '(min-width: 1600px)'
});
```

3. Specify `media` attribute on component itself in HTML:

```html
<magni-image-inplace media="(min-width: 1600px)">
    ...
</magni-image-inplace>
```

This method is compatible with previous two and override configuration for concrete instance.

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
