(this["webpackJsonpkulina-test"]=this["webpackJsonpkulina-test"]||[]).push([[0],{11:function(n,e,t){n.exports={container:"DatePicker_container__2A_9K",buttonWrapper:"DatePicker_buttonWrapper__ykOme",dateListScrollable:"DatePicker_dateListScrollable__sXtyQ",dateDayItem:"DatePicker_dateDayItem__2bQ9l",daysContainer:"DatePicker_daysContainer__1pBJF",dayLabel:"DatePicker_dayLabel__33pjJ",dateLabel:"DatePicker_dateLabel__1AeZH"}},35:function(n,e,t){n.exports=t(48)},45:function(n,e,t){},46:function(n,e,t){},48:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(17),c=t.n(i),o=t(6),l=t(10),u=t(25),p=t.n(u),d=t(32),f=t(16),s={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM"},m={hidden:!1,cartItems:[]},b=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case s.TOGGLE_CART_HIDDEN:return Object(f.a)(Object(f.a)({},n),{},{hidden:!n.hidden});case s.ADD_ITEM:return Object(f.a)(Object(f.a)({},n),{},{cartItems:[].concat(Object(d.a)(n.cartItems),[e.payload])});default:return n}},x={SET_ACTIVE_DAY:"SET_ACTIVE_DAY"},g={activeDay:""},v=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case x.SET_ACTIVE_DAY:return{activeDay:[e.payload]};default:return n}},h=Object(l.c)({cart:b,date:v}),E=[p.a],O=Object(l.d)(h,l.a.apply(void 0,E)),y=(t(45),t(46),t(1)),j=t(2);function w(){var n=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  /* Needed so the children can sticky */\n  position: fixed;\n  overflow-y: scroll;\n  overflow-x: hidden;\n"]);return w=function(){return n},n}var k=j.a.div(w());function D(){var n=Object(y.a)(['\n  margin-bottom: 4px;\n  margin-top: 8px;\n  color: "#424749";\n']);return D=function(){return n},n}function S(){var n=Object(y.a)(["\n  width: 370px;\n  text-align: left;\n  margin-left: 40px;\n"]);return S=function(){return n},n}var _=j.a.div(S()),C=j.a.h4(D()),A=Object(o.b)((function(n){return{activeDay:n.date.activeDay}}))((function(n){var e=n.activeDay;return r.a.createElement(_,null,r.a.createElement(C,null,e))})),I=t(33),T=t(29),L=t(30),M=t(34),z=t(31);function B(){var n=Object(y.a)(['\n  float: right;\n  border-radius: 6px;\n  margin: 6px 0px 12px 0px;\n  width: 80px;\n  height: 30px;\n  font-size: 12px;\n  text-transform: uppercase;\n  font-family: "Open Sans Condensed";\n  font-weight: bolder;\n  cursor: pointer;\n  background-color: #f9423a;\n  color: white;\n  border: none;\n  text-align: center;\n']);return B=function(){return n},n}function N(){var n=Object(y.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-left: 10px;\n  margin-right: 10px;\n"]);return N=function(){return n},n}function H(){var n=Object(y.a)(["\n  text-align: left;\n  margin-left: 10px;\n"]);return H=function(){return n},n}function J(){var n=Object(y.a)(['\n  font-family: "Open Sans Condensed";\n  text-align: center;\n  color: #424749;\n  font-weight: 500;\n  margin: 6px 0px 12px 0px;\n  font-size: 16px;\n']);return J=function(){return n},n}function R(){var n=Object(y.a)(['\n  font-family: "Open Sans Condensed";\n  font-size: 12px;\n  font-weight: 500;\n  color: #6e7679;\n  margin: -10px 0px 12px 0px;\n']);return R=function(){return n},n}function P(){var n=Object(y.a)(['\n  font-family: "Open Sans Condensed";\n  color: #424749;\n  font-size: 16px;\n  margin: 6px 0px 12px 0px;\n']);return P=function(){return n},n}function G(){var n=Object(y.a)(['\n  font-family: "Open Sans Condensed";\n  color: #6e7679;\n  font-weight: 500;\n  margin: 6px 0px 0px 0px;\n  font-size: 12px;\n']);return G=function(){return n},n}function U(){var n=Object(y.a)(["\n  width: 325px;\n  height: 250px;\n  border-radius: 5px;\n  object-fit: cover;\n"]);return U=function(){return n},n}function W(){var n=Object(y.a)(["\n  display: flex;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  flex-direction: column;\n  border-radius: 5px;\n  margin-bottom: 25px;\n  margin-top: 12px;\n\n  &:last-child {\n    margin-bottom: 75px;\n  }\n"]);return W=function(){return n},n}var K=j.a.div(W()),Q=j.a.img(U()),V=j.a.p(G()),Y=j.a.h2(P()),q=j.a.p(R()),F=j.a.p(J()),X=j.a.div(H()),Z=j.a.div(N()),$=j.a.button(B()),nn=Object(o.b)(null,(function(n){return{addItem:function(e){return n(function(n){return{type:s.ADD_ITEM,payload:n}}(e))}}}))((function(n){var e=n.addItem,t=n.title,a=n.imageUrl,i=n.price,c=n.providedBy,o=n.kitchen,l=n.rating;return r.a.createElement(K,null,r.a.createElement(Q,{src:a}),r.a.createElement(X,null,r.a.createElement(V,null,l," \u2605"),r.a.createElement(Y,null,t),r.a.createElement(q,null,"by ",c," \xb7 ",o)),r.a.createElement(Z,null,r.a.createElement(F,null,"Rp. ",i.toLocaleString("id-ID")),r.a.createElement($,{type:"button",onClick:function(){return e({title:t,providedBy:c,kitchen:o,price:i})}},"ADD +")))})),en=[{id:1,title:"Vegan Salads with Scrambled Egg",imageUrl:"https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",price:17e3,providedBy:"Kulina",kitchen:"Uptown Lunch",rating:4.5},{id:2,title:"Bread with Scrambled Egg",imageUrl:"https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80",price:25e3,providedBy:"Kulina",kitchen:"Uptown Lunch",rating:4.5},{id:3,title:"Pancakes with Scrambled Egg",imageUrl:"https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",price:45e3,providedBy:"Kulina",kitchen:"Uptown Lunch",rating:4.5},{id:4,title:"Salmon with Scrambled Egg",imageUrl:"https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",price:35e3,providedBy:"Kulina",kitchen:"Uptown Lunch",rating:4.5}],tn=function(n){Object(M.a)(t,n);var e=Object(z.a)(t);function t(n){var a;return Object(T.a)(this,t),(a=e.call(this,n)).state={menu:en},a}return Object(L.a)(t,[{key:"render",value:function(){var n=this.state.menu;return r.a.createElement("div",null,n.map((function(n){var e=n.id,t=Object(I.a)(n,["id"]);return r.a.createElement(nn,Object.assign({key:e},t))})))}}]),t}(r.a.Component);function an(){return(an=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n}).apply(this,arguments)}function rn(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var cn=r.a.createElement("g",null,r.a.createElement("g",{id:"shopping-cart"},r.a.createElement("path",{d:"M153,408c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51S181.05,408,153,408z M0,0v51h51l91.8,193.8L107.1,306 c-2.55,7.65-5.1,17.85-5.1,25.5c0,28.05,22.95,51,51,51h306v-51H163.2c-2.55,0-5.1-2.55-5.1-5.1v-2.551l22.95-43.35h188.7 c20.4,0,35.7-10.2,43.35-25.5L504.9,89.25c5.1-5.1,5.1-7.65,5.1-12.75c0-15.3-10.2-25.5-25.5-25.5H107.1L84.15,0H0z M408,408 c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51S436.05,408,408,408z"}))),on=r.a.createElement("g",null),ln=r.a.createElement("g",null),un=r.a.createElement("g",null),pn=r.a.createElement("g",null),dn=r.a.createElement("g",null),fn=r.a.createElement("g",null),sn=r.a.createElement("g",null),mn=r.a.createElement("g",null),bn=r.a.createElement("g",null),xn=r.a.createElement("g",null),gn=r.a.createElement("g",null),vn=r.a.createElement("g",null),hn=r.a.createElement("g",null),En=r.a.createElement("g",null),On=r.a.createElement("g",null),yn=function(n){var e=n.svgRef,t=n.title,a=rn(n,["svgRef","title"]);return r.a.createElement("svg",an({id:"Capa_1",x:"0px",y:"0px",width:"25px",height:"25px",viewBox:"0 0 510 510",style:{enableBackground:"new 0 0 510 510"},xmlSpace:"preserve",ref:e},a),t?r.a.createElement("title",null,t):null,cn,on,ln,un,pn,dn,fn,sn,mn,bn,xn,gn,vn,hn,En,On)},jn=r.a.forwardRef((function(n,e){return r.a.createElement(yn,an({svgRef:e},n))}));t.p;function wn(){var n=Object(y.a)(["\n  margin-left: 8px;\n"]);return wn=function(){return n},n}function kn(){var n=Object(y.a)(["\n  display: flex;\n  justify-content: space-between;\n  color: white;\n  text-align: center;\n  margin: 12px 12px 12px 0px;\n"]);return kn=function(){return n},n}function Dn(){var n=Object(y.a)(['\n  float: right;\n  border-radius: 6px;\n  margin: 6px 0px 12px 0px;\n  width: 80px;\n  height: 30px;\n  font-size: 12px;\n  text-transform: uppercase;\n  font-family: "Open Sans Condensed";\n  font-weight: bolder;\n  cursor: pointer;\n  background-color: #f9423a;\n  color: white;\n  border: none;\n  text-align: center;\n']);return Dn=function(){return n},n}function Sn(){var n=Object(y.a)(['\n  font-family: "Open Sans Condensed";\n  color: #424749;\n  font-size: 16px;\n  margin: 6px 0px 12px 0px;\n']);return Sn=function(){return n},n}function _n(){var n=Object(y.a)(['\n  font-family: "Open Sans Condensed";\n  font-size: 12px;\n  text-align: left;\n  font-weight: 250;\n  color: white;\n  margin: 0px 0px 8px 8px;\n']);return _n=function(){return n},n}function Cn(){var n=Object(y.a)(['\n  font-family: "Open Sans Condensed";\n  font-size: 12px;\n  text-align: left;\n  font-weight: 500;\n  color: white;\n  margin: 8px 0px 0px 8px;\n']);return Cn=function(){return n},n}function An(){var n=Object(y.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return An=function(){return n},n}function In(){var n=Object(y.a)(["\n  width: 350px;\n  height: 50px;\n  text-align: center;\n\n  background-color: #a23530;\n  color: white;\n\n  border-radius: 6px;\n  border: 1px solid #a23530;\n\n  position: fixed;\n  bottom: 0%;\n  margin-bottom: 20px;\n"]);return In=function(){return n},n}var Tn=j.a.div(In()),Ln=j.a.div(An()),Mn=j.a.p(Cn()),zn=j.a.p(_n()),Bn=(j.a.h2(Sn()),j.a.button(Dn()),j.a.div(kn())),Nn=j.a.div(wn()),Hn=Object(o.b)((function(n){return{cartItems:n.cart.cartItems}}),(function(n){return{toggleCartHidden:function(){return n({type:s.TOGGLE_CART_HIDDEN})}}}))((function(n){var e=n.toggleCartHidden,t=n.cartItems,a=t.map((function(n){return n.price})).reduce((function(n,e){return n+e}),0);return r.a.createElement(Tn,{onClick:e},r.a.createElement(Ln,null,r.a.createElement("div",null,r.a.createElement(Mn,null,t.length," Items | Rp. ",a.toLocaleString("id-ID")),r.a.createElement(zn,null,"Termasuk Ongkos Kirim")),r.a.createElement(Bn,null,r.a.createElement(jn,{fill:"white"}),r.a.createElement(Nn,null,">"))))}));function Jn(){var n=Object(y.a)(["\n  text-align: center;\n  color: #424749;\n  margin: 12px;\n  box-shadow: 0px 1px 2px #f1f1f2;\n"]);return Jn=function(){return n},n}function Rn(){var n=Object(y.a)(["\n  width: 370px;\n  position: sticky;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  align-items: center;\n  top: 0;\n  background-color: white;\n  z-index: 1;\n"]);return Rn=function(){return n},n}var Pn=j.a.div(Rn()),Gn=j.a.div(Jn()),Un=t(13);function Wn(){var n=Object(y.a)(["\n  text-align: left;\n  margin-left: 12px;\n  margin-top: -12px;\n"]);return Wn=function(){return n},n}function Kn(){var n=Object(y.a)(["\n  padding: 12px;\n  text-align: right;\n  cursor: pointer;\n"]);return Kn=function(){return n},n}function Qn(){var n=Object(y.a)(["\n  position: fixed;\n  text-align: center;\n  top: 0;\n  bottom: 0;\n  width: 370px;\n  height: 100%;\n  background: #0000003a;\n  transition: opacity 0.2s ease;\n"]);return Qn=function(){return n},n}function Vn(){var n=Object(y.a)(["\n  padding: 0.5em;\n  margin: 0.5em;\n  width: 75%;\n  color: black;\n  background: white;\n  border-radius: 3px;\n"]);return Vn=function(){return n},n}function Yn(){var n=Object(y.a)(["\n  font-size: 12px;\n  font-weight: 250;\n"]);return Yn=function(){return n},n}function qn(){var n=Object(y.a)(["\n  position: fixed;\n  text-align: center;\n  top: 0;\n  bottom: 0;\n  width: 370px;\n  height: 100%;\n  background-color: #fff;\n  border-radius: 8px 8px 0px 0px;\n  font-family: Helvetica, Arial, sans-serif;\n\n  transform: translateY(100%);\n"]);return qn=function(){return n},n}var Fn=j.a.div(qn()),Xn=j.a.p(Yn()),Zn=j.a.input(Vn()),$n=(j.a.div(Qn()),j.a.h3(Kn())),ne=j.a.h3(Wn()),ee=function(n){var e=n.closeModal;return r.a.createElement(Fn,null,r.a.createElement($n,{onClick:e},"X"),r.a.createElement(ne,null,"Cek makanan yang tersedia di lokasi kamu!"),r.a.createElement(Zn,{placeholder:"Search Locations",type:"text"}),r.a.createElement(Xn,null,"Powered by Google"))};function te(){var n=Object(y.a)(["\n  text-align: center;\n  cursor: pointer;\n  margin: -18px 8px 0px 8px;\n  color: #f9423a;\n  font-size: x-large;\n"]);return te=function(){return n},n}function ae(){var n=Object(y.a)(["\n  margin: 0px 8px;\n  font-size: x-large;\n"]);return ae=function(){return n},n}function re(){var n=Object(y.a)(['\n  font-family: "Open Sans Condensed";\n  color: #424749;\n  font-size: 16px;\n  margin: -4px 0px 0px 0px;\n']);return re=function(){return n},n}function ie(){var n=Object(y.a)(["\n  display: flex;\n  width: 100%;\n  text-align: center;\n"]);return ie=function(){return n},n}function ce(){var n=Object(y.a)(['\n  font-family: "Open Sans Condensed";\n  font-size: 8px;\n  font-weight: 500;\n  color: #6e7679;\n  margin: 4px 0px 4px 0px;\n']);return ce=function(){return n},n}function oe(){var n=Object(y.a)(["\n  display: flex;\n  width: 100%;\n  text-align: left;\n  margin-left: 12px;\n"]);return oe=function(){return n},n}var le=j.a.div(oe()),ue=j.a.p(ce()),pe=j.a.div(ie()),de=j.a.h2(re()),fe=j.a.div(ae()),se=j.a.div(te()),me=function(){var n=Object(a.useState)(!1),e=Object(Un.a)(n,2),t=e[0],i=e[1];return r.a.createElement("div",null,r.a.createElement(le,null,r.a.createElement(fe,null,"\u2190"),r.a.createElement("div",null,r.a.createElement(ue,null,"ALAMAT PENGANTARAN"),r.a.createElement(pe,null,r.a.createElement(de,null,"Tokopedia Tower"),r.a.createElement(se,{onClick:function(){return i(!0)}},"\u2304")))),t?r.a.createElement(ee,{closeModal:function(){return i(!1)}}):null)};function be(){var n=Object(y.a)(['\n  width: 50%;\n  font-family: "Open Sans Condensed";\n  color: #6e7679;\n  font-weight: 500;\n  font-size: 12px;\n  padding: 10px 60px;\n  cursor: pointer;\n  opacity: 1;\n  background: white;\n  border: 1px;\n  border-style: solid;\n  border-color: #424749;\n  outline: 0;\n  border-radius: ',";\n\n  ","\n"]);return be=function(){return n},n}function xe(){var n=Object(y.a)(["\n  text-align: center;\n  margin: 0px 25px;\n  display: flex;\n  border-radius: 8px;\n"]);return xe=function(){return n},n}var ge=j.a.div(xe()),ve=j.a.button(be(),(function(n){return"Lunch"===n.type?"8px 0px 0px 8px":"Dinner"===n.type?"0px 8px 8px 0px":void 0}),(function(n){return n.active&&"\n    background: #424749;\n    color: white;\n    opacity: 1;\n    \n  "})),he=["Lunch","Dinner"],Ee=function(){var n=Object(a.useState)(he[0]),e=Object(Un.a)(n,2),t=e[0],i=e[1];return r.a.createElement(ge,null,he.map((function(n){return r.a.createElement(ve,{key:n,type:n,active:t===n,onClick:function(){return i(n)}},n)})))},Oe=t(11),ye=t.n(Oe),je=t(55),we=t(51),ke=t(52),De=t(53),Se=t(54);function _e(n){var e=n.selectDate,t=n.getSelectedDay,i=n.color,c=Object(a.useState)(new Date),o=Object(Un.a)(c,2),l=o[0],u=o[1],p={marginLeft:"0px"},d=new Date,f=i||"rgb(54, 105, 238)",s={width:"45px",height:"45px",borderRadius:"50%",border:"2px solid ".concat(f),color:"rgb(255,255,255)",background:f},m={width:"45px",height:"45px",color:"#dddddd",borderRadius:"50%",background:"rgb(255,255,255)",cursor:"default"},b=function(n){return Object(je.a)(n,l)&&!Object(we.a)(n)?s:Object(we.a)(n)?m:null},x=function(n){if(Object(we.a)(n))return!0};var g=function(n){u(n),t&&t(n)};return Object(a.useEffect)((function(){t&&t(e||d)}),[]),Object(a.useEffect)((function(){e&&(Object(je.a)(l,e)||(u(e),setTimeout((function(){var n=document.getElementById("selected");n&&n.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"})}),20)))}),[e]),r.a.createElement("div",{className:ye.a.container},function(){for(var n=[],e=[],t=0;t<=0;t++){for(var a=function(n){var t;e.push(r.a.createElement("button",{id:"".concat((t=Object(ke.a)(d,n),Object(je.a)(t,l)?"selected":"")),className:ye.a.dateDayItem,style:b(Object(ke.a)(d,n)),key:Object(ke.a)(d,n),onClick:function(){return g(Object(ke.a)(d,n))},disabled:x(Object(ke.a)(d,n))},r.a.createElement("div",{className:ye.a.dayLabel},Object(De.a)(Object(ke.a)(d,n),"E",{locale:Se.a}).toUpperCase()),r.a.createElement("div",{className:ye.a.dateLabel},Object(De.a)(Object(ke.a)(d,n),"d"))))},i=0;i<=14;i++)a(i);n.push(r.a.createElement("div",{className:ye.a.daysContainer,style:0===t?p:null},e)),e=[]}return r.a.createElement("div",{id:"container",className:ye.a.dateListScrollable,disabled:Object(we.a)(e)},n)}())}var Ce=Object(o.b)(null,(function(n){return{setActiveDay:function(e){return n(function(n){return{type:x.SET_ACTIVE_DAY,payload:n}}(e))}}}))((function(n){var e=n.setActiveDay;return r.a.createElement(Pn,null,r.a.createElement(me,null),r.a.createElement(Gn,null,r.a.createElement(_e,{color:"#424749",getSelectedDay:function(n){var t=n.toString(),a=t.substring(8,10),r=t.substring(4,7),i=t.substring(11,15),c=t.substring(0,3);switch(c){case"Sun":c="Minggu";break;case"Mon":c="Senin";break;case"Tue":c="Selasa";break;case"Wed":c="Rabu";break;case"Thu":c="Kamis";break;case"Fri":c="Jum'at";break;case"Sat":c="Sabtu"}switch(r){case"Jan":r="Januari";break;case"Feb":r="Februari";break;case"Mar":r="Maret";break;case"Apr":r="April";break;case"May":r="Mei";break;case"Jun":r="Juni";break;case"Jul":r="Juli";break;case"Aug":r="Agustus";break;case"Sep":r="September";break;case"Oct":r="Oktober";break;case"Nov":r="November";break;case"Dec":r="Desember"}var o=c+", "+a+" "+r+" "+i;e(o),console.log(o)}})),r.a.createElement(Ee,null))})),Ae=Object(o.b)((function(n){return{cartItems:n.cart.cartItems}}))((function(n){var e=n.cartItems;return r.a.createElement(k,null,r.a.createElement(Ce,null),r.a.createElement(A,null),r.a.createElement(tn,null),e.length?r.a.createElement(Hn,null):null)}));var Ie=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Ae,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(o.a,{store:O},r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ie,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.bdf3d226.chunk.js.map