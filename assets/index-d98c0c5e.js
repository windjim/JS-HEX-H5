(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))u(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function u(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}})();let a=[{id:0,name:"肥宅心碎賞櫻3日",imgUrl:"https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",area:"高雄市",description:"賞櫻花最佳去處。肥宅不得不去的超讚景點！",group:87,price:1400,rate:10},{id:1,name:"貓空纜車雙程票",imgUrl:"https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",area:"臺北市",description:"乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",group:99,price:240,rate:2},{id:2,name:"台中谷關溫泉會1日",imgUrl:"https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",area:"臺中市",description:"全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",group:20,price:1765,rate:7}];const v=["臺北市","新北市","桃園市","臺中市","臺南市","高雄市","新竹縣","苗栗縣","彰化縣","南投縣","雲林縣","嘉義縣","屏東縣","宜蘭縣","花蓮縣","臺東縣","澎湖縣","金門縣","連江縣","基隆市","新竹市","嘉義市"],y=document.querySelector(".ticketCard-area"),d=document.querySelector(".regionSearch"),k=document.querySelector("#searchResult-text"),f=document.querySelector("#ticketName"),p=document.querySelector("#ticketImgUrl"),o=document.querySelector("#ticketRegion"),m=document.querySelector("#ticketPrice"),g=document.querySelector("#ticketNum"),l=document.querySelector("#ticketRate"),h=document.querySelector("#ticketDescription"),b=document.querySelector("#addBtn");function x(){let r='<option value="全部">全部地區</option>',e='<option value="" disabled selected hidden>請選擇景點地區</option>';v.forEach(t=>{r+=`
    <option value="${t}">${t}</option>`,e+=`
    <option value="${t}">${t}</option>`}),d.innerHTML=r,o.innerHTML=e}x();function s(r){let e="";r.forEach(t=>{e+=` <li class="ticketCard">
    <div class="ticketCard-img">
      <a href="#">
        <img
          src="${t.imgUrl}"
          alt=""
        />
      </a>
      <div class="ticketCard-region">${t.area}</div>
      <div class="ticketCard-rank">${t.rate}</div>
    </div>
    <div class="ticketCard-content">
      <div>
        <h3>
          <a href="#" class="ticketCard-name">${t.name}</a>
        </h3>
        <p class="ticketCard-description">
          ${t.description}
        </p>
      </div>
      <div class="ticketCard-info">
        <p class="ticketCard-num">
          <span><i class="fas fa-exclamation-circle"></i></span>
          剩下最後 <span id="ticketCard-num"> ${t.group}</span> 組
        </p>
        <p class="ticketCard-price">
          TWD <span id="ticketCard-price">${t.price}</span>
        </p>
      </div>
    </div>
  </li>`}),y.innerHTML=e,k.innerHTML=`本次搜尋共 ${r.length} 筆資料`}s(a);function S(r){return r==="全部"?a:a.filter(t=>t.area===r)}d.addEventListener("change",r=>{const e=r.target.value;s(S(e))});function q(r){let e=!0;return r.forEach(t=>{e=!0,t.value.trim()===""&&(t.parentElement.nextElementSibling.style.display="flex",e=!1),t===l&&(Number(t.value.trim())>10||Number(t.value.trim())<1)&&(t.parentElement.nextElementSibling.style.display="flex",e=!1),e&&(t.parentElement.nextElementSibling.style.display="none")}),e}function w(){const r=a.length;let e={};return e.id=r,e.name=f.value,e.imgUrl=p.value,e.area=o.value,e.description=h.value,e.group=Number(g.value),e.price=Number(m.value),e.rate=Number(l.value),e}function D(){document.querySelector(".addTicket-form").reset()}b.addEventListener("click",r=>{q([f,p,o,h,g,m,l])&&(a.push(w()),s(a),D())});
