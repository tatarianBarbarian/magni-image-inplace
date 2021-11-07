const E=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(t){if(t.ep)return;t.ep=!0;const i=e(t);fetch(t.href,i)}};E();const m=document.createElement("template");m.innerHTML=`
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
</div>`;const u=(s,o)=>{Object.keys(o).forEach(e=>s.style[e]=o[e])},S=(s,o)=>{Object.keys(o).forEach(e=>s.style[e]="unset")};class g extends HTMLElement{connectedCallback(){const o=this.attachShadow({mode:"closed"});o.appendChild(m.content.cloneNode(!0));const e=this.querySelector("img"),n=o.querySelector(".magni-viewer"),t=1024,i={maxWidth:"100%",maxHeight:"100%",transform:"translate(0, 0)",objectFit:"contain"};u(e,i),window.innerWidth<t?(n.classList.add("mobile"),n.addEventListener("click",()=>{n.classList.toggle("preview"),n.scroll(e.width/2,e.height/2)})):(n.addEventListener("mousemove",r=>{S(e,i);const d=this.getBoundingClientRect();n.classList.remove("preview");const a=n.offsetWidth,c=n.offsetHeight,h=r.clientX-d.x-a/2,p=r.clientY-d.y-c/2,w=e.width/a-1,v=e.height/c-1,y=-e.width/2+a/2,b=-e.height/2+c/2;let L=y+h*-w,x=b+p*-v;e.style.transform=`translate(${L}px, ${x}px)`}),n.addEventListener("mouseleave",()=>{n.classList.add("preview"),u(e,i)}))}}const l=document.currentScript;if(l&&l.getAttribute("data-standalone")!==null){let s=l.dataset.tagName?l.dataset.tagName:"magni-image-inplace";window.customElements.get(s)||window.customElements.define(s,g)}let f="magni-image-inplace";window.customElements.get(f)||window.customElements.define(f,g);
