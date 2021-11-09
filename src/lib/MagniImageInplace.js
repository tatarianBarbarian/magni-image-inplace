const template = document.createElement("template");
template.innerHTML = `
<style>
    :host {
        display: block;
        width: 250px;
        height: 250px;
    }

    .magni-viewer {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .magni-viewer.preview {
        display: grid;
        grid-template-rows: 100%;
        place-items: center;
    }

    .magni-viewer slot::slotted(*) {
        cursor: pointer;
        max-height: 100%;
    }

    .magni-viewer.preview slot::slotted(*) {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>

<div class="magni-viewer preview">
    <slot class="preview">Place image here?</slot>
</div>`;

const applyStyles = (el, styles) => {
    Object.keys(styles).forEach( prop => el.style[prop] = styles[prop]);
}

const unsetStyles = (el, styles) => {
    Object.keys(styles).forEach( prop => el.style[prop] = 'unset');
}

const defaultConfig = {
    tagname: 'magni-image-inplace',
    media: '(min-width: 1280px)',
};

const getConfig = (overrideConfig = {}) => ({...defaultConfig, ...overrideConfig});
const getStandaloneConfig = (currentScript) => {
    const dataAttrsConfigMap = {
        tagname: 'tagname',
        media: 'media'
    };
    const overrideConfig = {};

    Object.entries(dataAttrsConfigMap).forEach(([dataAttr, configKey]) => {
        const attrValue = currentScript.dataset[dataAttr];
        
        if (attrValue) {
            overrideConfig[configKey] = attrValue;
        }
    });

    return getConfig(overrideConfig);
};

const init = (overrideConfig = {}) => {
    const configuration = getConfig(overrideConfig);

    class MagniImageInplace extends HTMLElement {
        connectedCallback() {
            const shadowRoot = this.attachShadow({mode: 'closed'});
            
            shadowRoot.appendChild(template.content.cloneNode(true));
    
            const image = this.querySelector('img');
            const viewer = shadowRoot.querySelector('.magni-viewer');
    
            const defaultStyles = {
                maxWidth: '100%',
                maxHeight: '100%',
                transform: 'translate(0, 0)',
                objectFit: 'contain',
            };
            
            applyStyles(image, defaultStyles);
    
            const mediaQuery = this.getAttribute('media') || configuration.media;
    
            if (window.matchMedia(mediaQuery).matches) {
                viewer.addEventListener('mousemove', (e) => {
                    unsetStyles(image, defaultStyles);
                    const br = this.getBoundingClientRect();
    
                    viewer.classList.remove("preview");
        
                    const viewerW = viewer.offsetWidth;
                    const viewerH = viewer.offsetHeight;
                    
                    const mouseX = e.clientX - br.x - viewerW / 2;
                    const mouseY = e.clientY - br.y - viewerH / 2;
                    
                    const kX = image.width / viewerW - 1;
                    const kY = image.height / viewerH - 1;
                    
                    const defaultTranslationX = -image.width / 2 + viewerW / 2;
                    const defaultTranslationY = -image.height / 2 + viewerH / 2;
                    
                    let translateX = defaultTranslationX + mouseX * -kX;
                    let translateY = defaultTranslationY + mouseY * -kY;
                    
                    image.style.transform = `translate(${translateX}px, ${translateY}px)`;
                });
        
                viewer.addEventListener('mouseleave', () => {
                    viewer.classList.add("preview");
                    applyStyles(image, defaultStyles);
                });
            }
        }
    }

    if (!window.customElements.get(configuration.tagname)) {
        window.customElements.define(configuration.tagname, MagniImageInplace);
    }
}

const currentScript = document.currentScript;

if (currentScript) {
    if (currentScript.getAttribute('data-standalone') !== null) {
        const overrideConfig = getStandaloneConfig(currentScript);
            
        init(overrideConfig);
    }
}

export default init;
