const m=document.querySelector(".js_in_search_desc"),u=document.querySelector(".js_button_search"),g=document.querySelector(".js-list"),i=document.querySelector(".js-list-fav");let n=[],c=[];function o(e){fetch(`//api.disneyapi.dev/character?pageSize=50&name=${e}`).then(t=>t.json()).then(t=>{n=t.data,a(n,g),document.querySelectorAll(".card").forEach(r=>{r.addEventListener("click",l=>{const d=l.target.closest(".card");let h=n.find(f=>f._id==d.id);c.push(h),a(c,i),_()})}),a(c,i)})}function a(e,t){t.innerHTML="",e.forEach(s=>{const r=v(s);t.insertAdjacentHTML("beforeend",r)})}function v(e){const t=e.imageUrl?e.imageUrl:"https://via.placeholder.com/210x295/ffffff/555555/?text=Disney";return`
    <li class="card" id="${e._id}">
      <img class="card_img" src="${t}" alt="${e.name}" />
      <h3 class="card_title">${e.name}</h3>
    </li>
  `}o("");function S(e){e.preventDefault();const t=m.value.trim();o(t)}u.addEventListener("click",S);function _(){localStorage.setItem("ListFavorite",JSON.stringify(c)),console.log(c)}
//# sourceMappingURL=main.js.map
