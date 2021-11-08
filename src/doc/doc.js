import MagniImageInplace from '../lib/MagniImageInplace';

let tagName = 'magni-image-inplace';

if (!window.customElements.get(tagName)) {
    window.customElements.define(tagName, MagniImageInplace);
}