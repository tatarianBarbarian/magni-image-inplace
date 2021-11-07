(function(a){typeof define=="function"&&define.amd?define(a):a()})(function(){"use strict";const a=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(t){if(t.ep)return;t.ep=!0;const i=e(t);fetch(t.href,i)}};var N="";const m=document.createElement("template");m.innerHTML=`
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
</div>`;const u=(s,o)=>{Object.keys(o).forEach(e=>s.style[e]=o[e])},p=(s,o)=>{Object.keys(o).forEach(e=>s.style[e]="unset")};class f extends HTMLElement{connectedCallback(){const o=this.attachShadow({mode:"closed"});o.appendChild(m.content.cloneNode(!0));const e=this.querySelector("img"),n=o.querySelector(".magni-viewer"),t=1024,i={maxWidth:"100%",maxHeight:"100%",transform:"translate(0, 0)",objectFit:"contain"};u(e,i),window.innerWidth<t?(n.classList.add("mobile"),n.addEventListener("click",()=>{n.classList.toggle("preview"),n.scroll(e.width/2,e.height/2)})):(n.addEventListener("mousemove",r=>{p(e,i);const h=this.getBoundingClientRect();n.classList.remove("preview");const c=n.offsetWidth,d=n.offsetHeight,w=r.clientX-h.x-c/2,v=r.clientY-h.y-d/2,y=e.width/c-1,b=e.height/d-1,L=-e.width/2+c/2,x=-e.height/2+d/2;let E=L+w*-y,S=x+v*-b;e.style.transform=`translate(${E}px, ${S}px)`}),n.addEventListener("mouseleave",()=>{n.classList.add("preview"),u(e,i)}))}}const l=document.currentScript;if(l&&l.getAttribute("data-standalone")!==null){let s=l.dataset.tagName?l.dataset.tagName:"magni-image-inplace";window.customElements.get(s)||window.customElements.define(s,f)}let g="magni-image-inplace";window.customElements.get(g)||window.customElements.define(g,f)});
