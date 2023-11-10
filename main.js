let data = [
  {
    id: 0,
    name: "肥宅心碎賞櫻3日",
    imgUrl:
      "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
    area: "高雄市",
    description: "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
    group: 87,
    price: 1400,
    rate: 10,
  },
  {
    id: 1,
    name: "貓空纜車雙程票",
    imgUrl:
      "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    area: "臺北市",
    description:
      "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
    group: 99,
    price: 240,
    rate: 2,
  },
  {
    id: 2,
    name: "台中谷關溫泉會1日",
    imgUrl:
      "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    area: "臺中市",
    description:
      "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
    group: 20,
    price: 1765,
    rate: 7,
  },
];
const areaData = [
  "臺北市",
  "新北市",
  "桃園市",
  "臺中市",
  "臺南市",
  "高雄市",
  "新竹縣",
  "苗栗縣",
  "彰化縣",
  "南投縣",
  "雲林縣",
  "嘉義縣",
  "屏東縣",
  "宜蘭縣",
  "花蓮縣",
  "臺東縣",
  "澎湖縣",
  "金門縣",
  "連江縣",
  "基隆市",
  "新竹市",
  "嘉義市",
];

const list = document.querySelector(".ticketCard-area");
const regionSearch = document.querySelector(".regionSearch");
const searchResult = document.querySelector("#searchResult-text");
// 新增套票變數
const ticketName = document.querySelector("#ticketName");
const ticketImgUrl = document.querySelector("#ticketImgUrl");
const ticketRegion = document.querySelector("#ticketRegion");
const ticketPrice = document.querySelector("#ticketPrice");
const ticketNum = document.querySelector("#ticketNum");
const ticketRate = document.querySelector("#ticketRate");
const ticketDescription = document.querySelector("#ticketDescription");
const addBtn = document.querySelector("#addBtn");

// 放入所有縣市
function areaOption() {
  let str = `<option value="全部">全部地區</option>`;
  let addStr = `<option value="" disabled selected hidden>請選擇景點地區</option>`;
  areaData.forEach((item) => {
    str += `
    <option value="${item}">${item}</option>`;
    addStr += `
    <option value="${item}">${item}</option>`;
  });
  regionSearch.innerHTML = str;
  ticketRegion.innerHTML = addStr;
}
areaOption();
// 初始化
function init() {
  let str = "";
  let searchLength = 0;
  data.forEach((item) => {
    str += ` <li class="ticketCard">
    <div class="ticketCard-img">
      <a href="#">
        <img
          src="${item.imgUrl}"
          alt=""
        />
      </a>
      <div class="ticketCard-region">${item.area}</div>
      <div class="ticketCard-rank">${item.rate}</div>
    </div>
    <div class="ticketCard-content">
      <div>
        <h3>
          <a href="#" class="ticketCard-name">${item.name}</a>
        </h3>
        <p class="ticketCard-description">
          ${item.description}
        </p>
      </div>
      <div class="ticketCard-info">
        <p class="ticketCard-num">
          <span><i class="fas fa-exclamation-circle"></i></span>
          剩下最後 <span id="ticketCard-num"> ${item.group}</span> 組
        </p>
        <p class="ticketCard-price">
          TWD <span id="ticketCard-price">${item.price}</span>
        </p>
      </div>
    </div>
  </li>`;
    searchLength += 1;
  });
  list.innerHTML = str;
  searchResult.innerHTML = `本次搜尋共 ${searchLength} 筆資料`;
}
init();

// 搜尋相對縣市條件
regionSearch.addEventListener("change", (e) => {
  const hostCity = e.target.value;
  hostCity === "全部" ? init() : filterArea(hostCity);
  function filterArea(hostCity) {
    let str = "";
    let searchLength = 0;
    data.forEach((item) => {
      if (item.area === hostCity) {
        str += ` <li class="ticketCard">
        <div class="ticketCard-img">
          <a href="#">
            <img
              src="${item.imgUrl}"
              alt=""
            />
          </a>
          <div class="ticketCard-region">${item.area}</div>
          <div class="ticketCard-rank">${item.rate}</div>
        </div>
        <div class="ticketCard-content">
          <div>
            <h3>
              <a href="#" class="ticketCard-name">${item.name}</a>
            </h3>
            <p class="ticketCard-description">
              ${item.description}
            </p>
          </div>
          <div class="ticketCard-info">
            <p class="ticketCard-num">
              <span><i class="fas fa-exclamation-circle"></i></span>
              剩下最後 <span id="ticketCard-num"> ${item.group}</span> 組
            </p>
            <p class="ticketCard-price">
              TWD <span id="ticketCard-price">${item.price}</span>
            </p>
          </div>
        </div>
      </li>`;
        searchLength += 1;
      }
    });
    list.innerHTML = str;
    str = `本次搜尋共 ${searchLength} 筆資料`;
    searchLength === 0
      ? (searchResult.innerHTML = str + `,找不到相關頁面`)
      : (searchResult.innerHTML = str);
  }
});

// 判斷有沒有選項沒填寫
function alertStation(valueArr) {
  let alertLength = 0;
  valueArr.forEach((item) => {
    if (item.value.trim() === "") {
      alertLength += 1;
    }
  });
  return alertLength;
}
//套票資訊清除
function cleanData(valueArr) {
  valueArr.forEach((item) => {
    item.value = "";
  });
}
// 增加套票監聽
addBtn.addEventListener("click", (e) => {
  const valueArr = [
    ticketName,
    ticketImgUrl,
    ticketRegion,
    ticketDescription,
    ticketNum,
    ticketPrice,
    ticketRate,
  ];
  if (alertStation(valueArr) > 0) {
    alert("每個選項都要填寫");
    return;
  }
  const idLength = data.length;
  let obj = {};
  obj.id = idLength;
  obj.name = ticketName.value;
  obj.imgUrl = ticketImgUrl.value;
  obj.area = ticketRegion.value;
  obj.description = ticketDescription.value;
  obj.group = Number(ticketNum.value);
  obj.price = Number(ticketPrice.value);
  obj.rate = Number(ticketRate.value);
  data.push(obj);
  init();
  cleanData(valueArr);
});
