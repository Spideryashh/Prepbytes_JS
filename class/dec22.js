// var mybtn = document.createElement('')
// mybtn.innerHTML = "SEARCH";
// var Search = document.querySelectorA

// document.querySelector('[title="Search for products, brands and more"]')
// <input type=​"text" value class=​"_3704LK" title=​"Search for products, brands and more" name=​"q" autocomplete=​"off" placeholder=​"Search for products, brands and more">​
// document.querySelector('[title="Search for products, brands and more"]').style.border = "solid 10px red"
// 'solid 10px red'
// document.querySelector('[class="eFQ30H"]')
// <div class=​"eFQ30H">​…​</div>​<a href=​"https:​/​/​www.flipkart.com/​offers-store?otracker=nmenu_offer-zone&fm=neo%…ndising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L0_view-all&cid=G6ZC4RAJ9OHU">​…​</a>​</div>​
// document.querySelectorAll('[class="eFQ30H"]')
// NodeList(9) [div.eFQ30H, div.eFQ30H, div.eFQ30H, div.eFQ30H, div.eFQ30H, div.eFQ30H, div.eFQ30H, div.eFQ30H, div.eFQ30H]
// document.querySelectorAll('[class="eFQ30H"]')[1]
// <div class=​"eFQ30H">​…​</div>​<a href=​"https:​/​/​www.flipkart.com/​grocery-supermart-store?marketplace=GROCERY&fm…ndising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L0_view-all&cid=CBUR1Q46W5F1">​…​</a>​</div>​
// document.querySelectorAll('[class="eFQ30H"]')[1].innerText
// 'Grocery'
// document.querySelectorAll('[class="eFQ30H"]')[1].innerText = "MY Grocery"
// 'MY Grocery'
// document.querySelectorAll('[class="eFQ30H"]')[1].style.color = "green"
// 'green'
// document.querySelector('[class="_1cmsER"]')

// Create button
var mybtn = document.createElement('button');
mybtn.setAttribute('id','mybutton');
mybtn.innerHTML = "Click"
var mybtn = document.createElement('div')
mybtn.setAttribute('id','myDiv');
mybtn.innerHTML = "DIV!"
mybtn.style.border = "solid 8px green";
var searchbutton = document.querySelector('[type="submit"]');
searchbutton.parentElement.appendChild(mybtn)