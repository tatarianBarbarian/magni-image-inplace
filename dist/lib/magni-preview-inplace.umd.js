(function(s,o){typeof exports=="object"&&typeof module!="undefined"?module.exports=o():typeof define=="function"&&define.amd?define(o):(s=typeof globalThis!="undefined"?globalThis:s||self,s["magni-preview-inplace"]=o())})(this,function(){"use strict";const s=document.createElement("template");s.innerHTML=`
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
</div>`;const o=(i,n)=>{Object.keys(n).forEach(e=>i.style[e]=n[e])},g=(i,n)=>{Object.keys(n).forEach(e=>i.style[e]="unset")};class d extends HTMLElement{connectedCallback(){const n=this.attachShadow({mode:"closed"});n.appendChild(s.content.cloneNode(!0));const e=this.querySelector("img"),t=n.querySelector(".magni-viewer"),w=1024,l={maxWidth:"100%",maxHeight:"100%",transform:"translate(0, 0)",objectFit:"contain"};o(e,l),window.innerWidth<w?(t.classList.add("mobile"),t.addEventListener("click",()=>{t.classList.toggle("preview"),t.scroll(e.width/2,e.height/2)})):(t.addEventListener("mousemove",m=>{g(e,l);const h=this.getBoundingClientRect();t.classList.remove("preview");const c=t.offsetWidth,r=t.offsetHeight,u=m.clientX-h.x-c/2,p=m.clientY-h.y-r/2,f=e.width/c-1,v=e.height/r-1,y=-e.width/2+c/2,b=-e.height/2+r/2;let x=y+u*-f,E=b+p*-v;e.style.transform=`translate(${x}px, ${E}px)`}),t.addEventListener("mouseleave",()=>{t.classList.add("preview"),o(e,l)}))}}const a=document.currentScript;if(a&&a.getAttribute("data-standalone")!==null){let i=a.dataset.tagName?a.dataset.tagName:"magni-image-inplace";window.customElements.get(i)||window.customElements.define(i,d)}return d});
