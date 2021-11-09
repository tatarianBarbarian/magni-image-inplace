var M=Object.defineProperty;var g=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var h=(n,e,t)=>e in n?M(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,d=(n,e)=>{for(var t in e||(e={}))N.call(e,t)&&h(n,t,e[t]);if(g)for(var t of g(e))X.call(e,t)&&h(n,t,e[t]);return n};const Y=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}};Y();const p=document.createElement("template");p.innerHTML=`
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
</div>`;const w=(n,e)=>{Object.keys(e).forEach(t=>n.style[t]=e[t])},j=(n,e)=>{Object.keys(e).forEach(t=>n.style[t]="unset")},T={tagname:"magni-image-inplace",media:"(min-width: 1280px)"},y=(n={})=>d(d({},T),n),q=n=>{const e=n.dataset.magni;try{return y(JSON.parse(e))}catch(t){throw t}},v=(n={})=>{const e=y(n);class t extends HTMLElement{connectedCallback(){const o=this.attachShadow({mode:"closed"});o.appendChild(p.content.cloneNode(!0));const i=this.querySelector("img"),s=o.querySelector(".magni-viewer"),a={maxWidth:"100%",maxHeight:"100%",transform:"translate(0, 0)",objectFit:"contain"};w(i,a);const b=this.getAttribute("media")||e.media;window.matchMedia(b).matches&&(s.addEventListener("mousemove",u=>{j(i,a);const f=this.getBoundingClientRect();s.classList.remove("preview");const c=s.offsetWidth,l=s.offsetHeight,x=u.clientX-f.x-c/2,L=u.clientY-f.y-l/2,S=i.width/c-1,E=i.height/l-1,C=-i.width/2+c/2,O=-i.height/2+l/2;let k=C+x*-S,H=O+L*-E;i.style.transform=`translate(${k}px, ${H}px)`}),s.addEventListener("mouseleave",()=>{s.classList.add("preview"),w(i,a)}))}}window.customElements.get(e.tagname)||window.customElements.define(e.tagname,t)},m=document.currentScript;if(m&&m.getAttribute("data-standalone")!==null){const n=q(m);v(n)}v();
