const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
var style = "";
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

    .magni-viewer.mobile slot::slotted(*) {
        max-width: unset;
        max-height: unset;
    }

    .magni-viewer.mobile {
        overflow: scroll;
    }
</style>

<div class="magni-viewer preview">
    <slot class="preview">Place image here?</slot>
</div>`;
const applyStyles = (el, styles) => {
  Object.keys(styles).forEach((prop) => el.style[prop] = styles[prop]);
};
const unsetStyles = (el, styles) => {
  Object.keys(styles).forEach((prop) => el.style[prop] = "unset");
};
class MagniImageInplace extends HTMLElement {
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "closed" });
    shadowRoot.appendChild(template.content.cloneNode(true));
    const image = this.querySelector("img");
    const viewer = shadowRoot.querySelector(".magni-viewer");
    const mobileBp = 1024;
    const defaultStyles = {
      maxWidth: "100%",
      maxHeight: "100%",
      transform: "translate(0, 0)",
      objectFit: "contain"
    };
    applyStyles(image, defaultStyles);
    if (window.innerWidth < mobileBp) {
      viewer.classList.add("mobile");
      viewer.addEventListener("click", () => {
        viewer.classList.toggle("preview");
        viewer.scroll(image.width / 2, image.height / 2);
      });
    } else {
      viewer.addEventListener("mousemove", (e) => {
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
      viewer.addEventListener("mouseleave", () => {
        viewer.classList.add("preview");
        applyStyles(image, defaultStyles);
      });
    }
  }
}
const currentScript = document.currentScript;
if (currentScript) {
  if (currentScript.getAttribute("data-standalone") !== null) {
    let tagName2 = currentScript.dataset.tagName ? currentScript.dataset.tagName : "magni-image-inplace";
    if (!window.customElements.get(tagName2)) {
      window.customElements.define(tagName2, MagniImageInplace);
    }
  }
}
let tagName = "magni-image-inplace";
if (!window.customElements.get(tagName)) {
  window.customElements.define(tagName, MagniImageInplace);
}
