var Y=Object.defineProperty;var v=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var y=(t,e,n)=>e in t?Y(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,h=(t,e)=>{for(var n in e||(e={}))M.call(e,n)&&y(t,n,e[n]);if(v)for(var n of v(e))O.call(e,n)&&y(t,n,e[n]);return t};(function(t,e){typeof exports=="object"&&typeof module!="undefined"?module.exports=e():typeof define=="function"&&define.amd?define(e):(t=typeof globalThis!="undefined"?globalThis:t||self,t["magni-preview-inplace"]=e())})(this,function(){"use strict";const t=document.createElement("template");t.innerHTML=`
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
</div>`;const e=(i,s)=>{Object.keys(s).forEach(o=>i.style[o]=s[o])},n=(i,s)=>{Object.keys(s).forEach(o=>i.style[o]="unset")},x={tagname:"magni-image-inplace",media:"(min-width: 1280px)"},r=(i={})=>h(h({},x),i),b=i=>{const s=i.dataset.magni;if(!s)return r();try{return r(JSON.parse(s))}catch(o){throw o}},u=(i={})=>{const s=r(i);class o extends HTMLElement{connectedCallback(){const f=this.attachShadow({mode:"closed"});f.appendChild(t.content.cloneNode(!0));const a=this.querySelector("img"),c=f.querySelector(".magni-viewer"),d={maxWidth:"100%",maxHeight:"100%",transform:"translate(0, 0)",objectFit:"contain"};e(a,d);const S=this.getAttribute("media")||s.media;window.matchMedia(S).matches&&(c.addEventListener("mousemove",p=>{n(a,d);const w=this.getBoundingClientRect();c.classList.remove("preview");const m=c.offsetWidth,g=c.offsetHeight,E=p.clientX-w.x-m/2,C=p.clientY-w.y-g/2,k=a.width/m-1,L=a.height/g-1,T=-a.width/2+m/2,j=-a.height/2+g/2;let H=T+E*-k,X=j+C*-L;a.style.transform=`translate(${H}px, ${X}px)`}),c.addEventListener("mouseleave",()=>{c.classList.add("preview"),e(a,d)}))}}window.customElements.get(s.tagname)||window.customElements.define(s.tagname,o)},l=document.currentScript;if(l&&l.getAttribute("data-standalone")!==null){const i=b(l);u(i)}return u});
