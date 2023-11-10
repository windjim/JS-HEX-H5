(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(e){if(e.ep)return;e.ep=!0;const i=r(e);fetch(e.href,i)}})();let o=[{id:0,name:"肥宅心碎賞櫻3日",imgUrl:"https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",area:"高雄市",description:"賞櫻花最佳去處。肥宅不得不去的超讚景點！",group:87,price:1400,rate:10},{id:1,name:"貓空纜車雙程票",imgUrl:"https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",area:"臺北市",description:"乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",group:99,price:240,rate:2},{id:2,name:"台中谷關溫泉會1日",imgUrl:"https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",area:"臺中市",description:"全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",group:20,price:1765,rate:7}];const y=["臺北市","新北市","桃園市","臺中市","臺南市","高雄市","新竹縣","苗栗縣","彰化縣","南投縣","雲林縣","嘉義縣","屏東縣","宜蘭縣","花蓮縣","臺東縣","澎湖縣","金門縣","連江縣","基隆市","新竹市","嘉義市"],g=document.querySelector(".ticketCard-area"),k=document.querySelector(".regionSearch"),s=document.querySelector("#searchResult-text"),u=document.querySelector("#ticketName"),p=document.querySelector("#ticketImgUrl"),d=document.querySelector("#ticketRegion"),f=document.querySelector("#ticketPrice"),m=document.querySelector("#ticketNum"),h=document.querySelector("#ticketRate"),v=document.querySelector("#ticketDescription"),C=document.querySelector("#addBtn");function $(){let c='<option value="全部">全部地區</option>',t='<option value="" disabled selected hidden>請選擇景點地區</option>';y.forEach(r=>{c+=`
    <option value="${r}">${r}</option>`,t+=`
    <option value="${r}">${r}</option>`}),k.innerHTML=c,d.innerHTML=t}$();function l(){let c="",t=0;o.forEach(r=>{c+=` <li class="ticketCard">
    <div class="ticketCard-img">
      <a href="#">
        <img
          src="${r.imgUrl}"
          alt=""
        />
      </a>
      <div class="ticketCard-region">${r.area}</div>
      <div class="ticketCard-rank">${r.rate}</div>
    </div>
    <div class="ticketCard-content">
      <div>
        <h3>
          <a href="#" class="ticketCard-name">${r.name}</a>
        </h3>
        <p class="ticketCard-description">
          ${r.description}
        </p>
      </div>
      <div class="ticketCard-info">
        <p class="ticketCard-num">
          <span><i class="fas fa-exclamation-circle"></i></span>
          剩下最後 <span id="ticketCard-num"> ${r.group}</span> 組
        </p>
        <p class="ticketCard-price">
          TWD <span id="ticketCard-price">${r.price}</span>
        </p>
      </div>
    </div>
  </li>`,t+=1}),g.innerHTML=c,s.innerHTML=`本次搜尋共 ${t} 筆資料`}l();k.addEventListener("change",c=>{const t=c.target.value;t==="全部"?l():r(t);function r(a){let e="",i=0;o.forEach(n=>{n.area===a&&(e+=` <li class="ticketCard">
        <div class="ticketCard-img">
          <a href="#">
            <img
              src="${n.imgUrl}"
              alt=""
            />
          </a>
          <div class="ticketCard-region">${n.area}</div>
          <div class="ticketCard-rank">${n.rate}</div>
        </div>
        <div class="ticketCard-content">
          <div>
            <h3>
              <a href="#" class="ticketCard-name">${n.name}</a>
            </h3>
            <p class="ticketCard-description">
              ${n.description}
            </p>
          </div>
          <div class="ticketCard-info">
            <p class="ticketCard-num">
              <span><i class="fas fa-exclamation-circle"></i></span>
              剩下最後 <span id="ticketCard-num"> ${n.group}</span> 組
            </p>
            <p class="ticketCard-price">
              TWD <span id="ticketCard-price">${n.price}</span>
            </p>
          </div>
        </div>
      </li>`,i+=1)}),g.innerHTML=e,e=`本次搜尋共 ${i} 筆資料`,i===0?s.innerHTML=e+",找不到相關頁面":s.innerHTML=e}});function b(c){let t=0;return c.forEach(r=>{r.value.trim()===""&&(t+=1)}),t}function x(c){c.forEach(t=>{t.value=""})}C.addEventListener("click",c=>{const t=[u,p,d,v,m,f,h];if(b(t)>0){alert("每個選項都要填寫");return}const r=o.length;let a={};a.id=r,a.name=u.value,a.imgUrl=p.value,a.area=d.value,a.description=v.value,a.group=Number(m.value),a.price=Number(f.value),a.rate=Number(h.value),o.push(a),l(),x(t)});
