

let header__burger = document.querySelector('.icon-menu');
let header_menu = document.querySelector('.menu__body');
let back = document.querySelector('body');
let header__list = document.querySelector('.menu__list');

header__burger.onclick = function(){
    header__burger.classList.toggle('_active');
    header_menu.classList.toggle('_active');
    back.classList.toggle('_lock');
}

header__list.onclick = function () {
    header__list.classList.remove('_active');
    back.classList.toggle('_lock');
}

let myList = document.querySelector('table');

fetch('https://api.coincap.io/v2/assets/?limit=10')
  .then( function (response) { return response.json()} )
  
  .then(function(data) {
  

    for (let i = 0; i < data.data.length; i++) {
      let tr = document.createElement('tr');
      let td = document.createElement('td');
      td.innerHTML = data.data[i].id;
      let td1 = document.createElement('td');
      td1.innerHTML = data.data[i].name;
      let td2 = document.createElement('td');
      td2.innerHTML = data.data[i].symbol;
      let td3 = document.createElement('td');
      td3.innerHTML = data.data[i].priceUsd.slice(0,10);

      console.log(tr,td1)
      tr.appendChild(td);
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      myList.appendChild(tr);
    };
  });
  
  var today = new Date();
  var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000); -

  function setCookie(name, value)
  {
    document.cookie=name + "=" + escape(value) + "; path=/; expires=" + expiry.toGMTString();
  }
function putCookie(form)
  {
   setCookie("userName", form[0].usrname.value);

    return true;
  }  
