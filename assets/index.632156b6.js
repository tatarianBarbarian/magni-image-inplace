var j=Object.defineProperty;var g=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var h=(i,e,n)=>e in i?j(i,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[e]=n,d=(i,e)=>{for(var n in e||(e={}))H.call(e,n)&&h(i,n,e[n]);if(g)for(var n of g(e))X.call(e,n)&&h(i,n,e[n]);return i};const Y=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerpolicy&&(t.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?t.credentials="include":o.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(o){if(o.ep)return;o.ep=!0;const t=n(o);fetch(o.href,t)}};Y();const p=document.createElement("template");p.innerHTML=`
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
</div>`;const w=(i,e)=>{Object.keys(e).forEach(n=>i.style[n]=e[n])},A=(i,e)=>{Object.keys(e).forEach(n=>i.style[n]="unset")},N={tagname:"magni-image-inplace",media:"(min-width: 1280px)"},y=(i={})=>d(d({},N),i),T=i=>{const e={tagname:"tagname",media:"media"},n={};return Object.entries(e).forEach(([r,o])=>{const t=i.dataset[r];t&&(n[o]=t)}),y(n)},v=(i={})=>{const e=y(i);class n extends HTMLElement{connectedCallback(){const o=this.attachShadow({mode:"closed"});o.appendChild(p.content.cloneNode(!0));const t=this.querySelector("img"),s=o.querySelector(".magni-viewer"),a={maxWidth:"100%",maxHeight:"100%",transform:"translate(0, 0)",objectFit:"contain"};w(t,a);const b=this.getAttribute("media")||e.media;window.matchMedia(b).matches&&(s.addEventListener("mousemove",u=>{A(t,a);const f=this.getBoundingClientRect();s.classList.remove("preview");const c=s.offsetWidth,l=s.offsetHeight,x=u.clientX-f.x-c/2,L=u.clientY-f.y-l/2,E=t.width/c-1,S=t.height/l-1,C=-t.width/2+c/2,O=-t.height/2+l/2;let k=C+x*-E,M=O+L*-S;t.style.transform=`translate(${k}px, ${M}px)`}),s.addEventListener("mouseleave",()=>{s.classList.add("preview"),w(t,a)}))}}window.customElements.get(e.tagname)||window.customElements.define(e.tagname,n)},m=document.currentScript;if(m&&m.getAttribute("data-standalone")!==null){const i=T(m);v(i)}v();
