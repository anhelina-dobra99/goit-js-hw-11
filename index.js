import{S as l,a as c,i as n}from"./assets/vendor-D0cagnvz.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();function u(r){const t=document.querySelector(".gallery");t.innerHTML="";const i=r.map(e=>`
      <a class="gallery-link" href="${e.largeImageURL}">
        <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}"/>
  <div class="image-info">
      <div class="info-item">
        <p class="info-title">Likes</p>
        <p class="info-value">${e.likes}</p>
      </div>
      <div class="info-item">
        <p class="info-title">Views</p>
        <p class="info-value">${e.views}</p>
      </div>
      <div class="info-item">
        <p class="info-title">Comments</p>
        <p class="info-value">${e.comments}</p>
      </div>
      <div class="info-item">
        <p class="info-title">Downloads</p>
        <p class="info-value">${e.downloads}</p>
      </div>
    </div>
      </a>
    `).join("");t.innerHTML=i,new l(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function f(){iziToast.error({title:"Oops!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}function d(r){iziToast.error({title:"Error!",message:r,position:"topRight"})}function p(){const r=document.querySelector(".loader");r&&r.classList.remove("hidden")}function h(){const r=document.querySelector(".loader");r&&r.classList.add("hidden")}function m(r){return p(),c.get("https://pixabay.com/api/",{params:{key:"48827585-ba4cf8d41bbd413a9ae07e3ba",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>{const i=t.data;return i.hits.length===0?(n.error({title:"Oops!",message:"Sorry, there are no images matching your search query. Please try again!"}),[]):i.hits}).catch(t=>(console.error("Error fetching images:",t),n.error({title:"Error!",message:"There was an error while fetching images. Please try again later."}),[])).finally(()=>{h()})}document.querySelector(".search-form").addEventListener("submit",function(r){r.preventDefault();let t=document.querySelector(".search-input").value.trim();if(t===""){n.error({title:"Error",message:"Please enter a search query!",position:"topRight"});return}m(t).then(function(i){i.length===0?f():u(i)}).catch(function(i){d("There was an error while fetching images. Please try again later.")})});
//# sourceMappingURL=index.js.map
