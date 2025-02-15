import{S as l,a as c,i as u}from"./assets/vendor-tnUJPedx.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();const f=new l(".gallery a",{captionsData:"alt",captionDelay:250});function d(e){const t=document.querySelector(".gallery");t.innerHTML="";const i=e.map(s=>`
      <a class="gallery-link" href="${s.largeImageURL}">
        <img class="gallery-image" src="${s.webformatURL}" alt="${s.tags}"/>
  <div class="image-info">
      <div class="info-item">
        <p class="info-title">Likes</p>
        <p class="info-value">${s.likes}</p>
      </div>
      <div class="info-item">
        <p class="info-title">Views</p>
        <p class="info-value">${s.views}</p>
      </div>
      <div class="info-item">
        <p class="info-title">Comments</p>
        <p class="info-value">${s.comments}</p>
      </div>
      <div class="info-item">
        <p class="info-title">Downloads</p>
        <p class="info-value">${s.downloads}</p>
      </div>
    </div>
      </a>
    `).join("");t.innerHTML=i,f.refresh()}function n(){const e=document.querySelector(".gallery");e&&(e.innerHTML="")}function p(){iziToast.error({title:"Oops!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}function m(e){iziToast.error({title:"Error!",message:e,position:"topRight"})}function h(){const e=document.querySelector(".loader");e&&e.classList.remove("hidden")}function g(){const e=document.querySelector(".loader");e&&e.classList.add("hidden")}function y(e){return h(),c.get("https://pixabay.com/api/",{params:{key:"48827585-ba4cf8d41bbd413a9ae07e3ba",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>{const i=t.data;return i.hits.length===0?(iziToast.error({title:"Oops!",message:"Sorry, there are no images matching your search query. Please try again!"}),[]):i.hits}).catch(t=>(console.error("Error fetching images:",t),iziToast.error({title:"Error!",message:"There was an error while fetching images. Please try again later."}),[])).finally(()=>{g()})}document.querySelector(".search-form").addEventListener("submit",function(e){e.preventDefault();let t=document.querySelector(".search-input").value.trim();if(t===""){u.error({title:"Error",message:"Please enter a search query!",position:"topRight"});return}n(),y(t).then(i=>{i.length===0?p():d(i)}).catch(i=>{n(),m("There was an error while fetching images. Please try again later.")})});
//# sourceMappingURL=index.js.map
