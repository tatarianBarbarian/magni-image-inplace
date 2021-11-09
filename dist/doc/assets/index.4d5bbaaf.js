var M=Object.defineProperty;var h=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var p=(n,e,t)=>e in n?M(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,d=(n,e)=>{for(var t in e||(e={}))N.call(e,t)&&p(n,t,e[t]);if(h)for(var t of h(e))X.call(e,t)&&p(n,t,e[t]);return n};const Y=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}};Y();const w=document.createElement("template");w.innerHTML=`
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
</div>`;const y=(n,e)=>{Object.keys(e).forEach(t=>n.style[t]=e[t])},j=(n,e)=>{Object.keys(e).forEach(t=>n.style[t]="unset")},T={tagname:"magni-image-inplace",media:"(min-width: 1280px)"},m=(n={})=>d(d({},T),n),q=n=>{const e=n.dataset.magni;if(!e)return m();try{return m(JSON.parse(e))}catch(t){throw t}},v=(n={})=>{const e=m(n);class t extends HTMLElement{connectedCallback(){const o=this.attachShadow({mode:"closed"});o.appendChild(w.content.cloneNode(!0));const i=this.querySelector("img"),s=o.querySelector(".magni-viewer"),a={maxWidth:"100%",maxHeight:"100%",transform:"translate(0, 0)",objectFit:"contain"};y(i,a);const b=this.getAttribute("media")||e.media;window.matchMedia(b).matches&&(s.addEventListener("mousemove",f=>{j(i,a);const g=this.getBoundingClientRect();s.classList.remove("preview");const c=s.offsetWidth,l=s.offsetHeight,x=f.clientX-g.x-c/2,L=f.clientY-g.y-l/2,S=i.width/c-1,E=i.height/l-1,C=-i.width/2+c/2,O=-i.height/2+l/2;let k=C+x*-S,H=O+L*-E;i.style.transform=`translate(${k}px, ${H}px)`}),s.addEventListener("mouseleave",()=>{s.classList.add("preview"),y(i,a)}))}}window.customElements.get(e.tagname)||window.customElements.define(e.tagname,t)},u=document.currentScript;if(u&&u.getAttribute("data-standalone")!==null){const n=q(u);v(n)}v();
