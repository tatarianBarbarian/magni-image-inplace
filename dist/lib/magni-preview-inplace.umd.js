(function(t,s){typeof exports=="object"&&typeof module!="undefined"?s(exports):typeof define=="function"&&define.amd?define(["exports"],s):(t=typeof globalThis!="undefined"?globalThis:t||self,s(t["magni-preview-inplace"]={}))})(this,function(t){"use strict";const s=document.createElement("template");s.innerHTML=`
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
</div>`;const m=(i,n)=>{Object.keys(n).forEach(e=>i.style[e]=n[e])},f=(i,n)=>{Object.keys(n).forEach(e=>i.style[e]="unset")},g={media:"(min-width: 1280px)"},p=i=>Object.assign(g,i);class c extends HTMLElement{connectedCallback(){const n=this.attachShadow({mode:"closed"});n.appendChild(s.content.cloneNode(!0));const e=this.querySelector("img"),a=n.querySelector(".magni-viewer"),l={maxWidth:"100%",maxHeight:"100%",transform:"translate(0, 0)",objectFit:"contain"};m(e,l);const w=this.getAttribute("media")||g.media;window.matchMedia(w).matches&&(a.addEventListener("mousemove",h=>{f(e,l);const u=this.getBoundingClientRect();a.classList.remove("preview");const d=a.offsetWidth,r=a.offsetHeight,v=h.clientX-u.x-d/2,y=h.clientY-u.y-r/2,b=e.width/d-1,x=e.height/r-1,S=-e.width/2+d/2,E=-e.height/2+r/2;let j=S+v*-b,M=E+y*-x;e.style.transform=`translate(${j}px, ${M}px)`}),a.addEventListener("mouseleave",()=>{a.classList.add("preview"),m(e,l)}))}}const o=document.currentScript;if(o&&o.getAttribute("data-standalone")!==null){let i=o.dataset.tagName?o.dataset.tagName:"magni-image-inplace";window.customElements.get(i)||window.customElements.define(i,c)}t.MagniImageInplace=c,t.config=p,t.default=c,Object.defineProperty(t,"__esModule",{value:!0}),t[Symbol.toStringTag]="Module"});
