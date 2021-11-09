var Y=Object.defineProperty;var y=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var x=(t,e,n)=>e in t?Y(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,h=(t,e)=>{for(var n in e||(e={}))A.call(e,n)&&x(t,n,e[n]);if(y)for(var n of y(e))O.call(e,n)&&x(t,n,e[n]);return t};(function(t,e){typeof exports=="object"&&typeof module!="undefined"?module.exports=e():typeof define=="function"&&define.amd?define(e):(t=typeof globalThis!="undefined"?globalThis:t||self,t["magni-preview-inplace"]=e())})(this,function(){"use strict";const t=document.createElement("template");t.innerHTML=`
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
</div>`;const e=(i,o)=>{Object.keys(o).forEach(a=>i.style[a]=o[a])},n=(i,o)=>{Object.keys(o).forEach(a=>i.style[a]="unset")},b={tagname:"magni-image-inplace",media:"(min-width: 1280px)"},f=(i={})=>h(h({},b),i),C=i=>{const o={tagname:"tagname",media:"media"},a={};return Object.entries(o).forEach(([p,r])=>{const s=i.dataset[p];s&&(a[r]=s)}),f(a)},u=(i={})=>{const o=f(i);class a extends HTMLElement{connectedCallback(){const r=this.attachShadow({mode:"closed"});r.appendChild(t.content.cloneNode(!0));const s=this.querySelector("img"),c=r.querySelector(".magni-viewer"),l={maxWidth:"100%",maxHeight:"100%",transform:"translate(0, 0)",objectFit:"contain"};e(s,l);const E=this.getAttribute("media")||o.media;window.matchMedia(E).matches&&(c.addEventListener("mousemove",w=>{n(s,l);const v=this.getBoundingClientRect();c.classList.remove("preview");const m=c.offsetWidth,g=c.offsetHeight,S=w.clientX-v.x-m/2,j=w.clientY-v.y-g/2,k=s.width/m-1,L=s.height/g-1,T=-s.width/2+m/2,H=-s.height/2+g/2;let M=T+S*-k,X=H+j*-L;s.style.transform=`translate(${M}px, ${X}px)`}),c.addEventListener("mouseleave",()=>{c.classList.add("preview"),e(s,l)}))}}window.customElements.get(o.tagname)||window.customElements.define(o.tagname,a)},d=document.currentScript;if(d&&d.getAttribute("data-standalone")!==null){const i=C(d);u(i)}return u});
