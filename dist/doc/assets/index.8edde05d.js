const L=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function t(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerpolicy&&(i.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?i.credentials="include":e.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(e){if(e.ep)return;e.ep=!0;const i=t(e);fetch(e.href,i)}};L();const m=document.createElement("template");m.innerHTML=`
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
</div>`;const u=(s,n)=>{Object.keys(n).forEach(t=>s.style[t]=n[t])},S=(s,n)=>{Object.keys(n).forEach(t=>s.style[t]="unset")},N={media:"(min-width: 1280px)"};class f extends HTMLElement{connectedCallback(){const n=this.attachShadow({mode:"closed"});n.appendChild(m.content.cloneNode(!0));const t=this.querySelector("img"),o=n.querySelector(".magni-viewer"),e={maxWidth:"100%",maxHeight:"100%",transform:"translate(0, 0)",objectFit:"contain"};u(t,e);const i=this.getAttribute("media")||N.media;window.matchMedia(i).matches&&(o.addEventListener("mousemove",r=>{S(t,e);const d=this.getBoundingClientRect();o.classList.remove("preview");const l=o.offsetWidth,c=o.offsetHeight,h=r.clientX-d.x-l/2,p=r.clientY-d.y-c/2,w=t.width/l-1,y=t.height/c-1,v=-t.width/2+l/2,b=-t.height/2+c/2;let x=v+h*-w,E=b+p*-y;t.style.transform=`translate(${x}px, ${E}px)`}),o.addEventListener("mouseleave",()=>{o.classList.add("preview"),u(t,e)}))}}const a=document.currentScript;if(a&&a.getAttribute("data-standalone")!==null){let s=a.dataset.tagName?a.dataset.tagName:"magni-image-inplace";window.customElements.get(s)||window.customElements.define(s,f)}let g="magni-image-inplace";window.customElements.get(g)||window.customElements.define(g,f);
