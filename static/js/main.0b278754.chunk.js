(this["webpackJsonpsearch-address-by-zipcode"]=this["webpackJsonpsearch-address-by-zipcode"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),l=a.n(c),s=(a(12),a(13),a(1)),o=a.n(s),u=a(2),m=a(3),i=a(6),d=a.n(i),E=function(){var e=Object(u.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d()(t);case 3:if((a=e.sent).ok){e.next=6;break}throw new Error(a.json());case 6:return console.log(a),e.next=9,a.json();case 9:if(200!==(n=e.sent).status){e.next=15;break}return console.log(n),e.abrupt("return",n.results);case 15:if(400!==n.status&&500!==n.status){e.next=18;break}return console.error(n),e.abrupt("return",n.result);case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(0),console.error(e.t0);case 23:case"end":return e.stop()}}),e,null,[[0,20]])})));return function(t){return e.apply(this,arguments)}}();function f(e){return r.a.createElement("th",{className:"table-cell border px-4 py-2 font-normal"},e.address)}var h=function(e){return r.a.createElement("tbody",{id:"address_data"},e.data.map((function(e){var t=e.address1,a=e.address2,n=e.address3;return r.a.createElement("tr",null,r.a.createElement(f,{address:t+a+n}),r.a.createElement(f,{address:t}),r.a.createElement(f,{address:a}),r.a.createElement(f,{address:n}))})))};function p(e){return r.a.createElement("th",{className:"table-cell border px-4 py-2"},e.name)}var b=function(){return r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement(p,{name:"\u4f4f\u6240"}),r.a.createElement(p,{name:"\u90fd\u9053\u5e9c\u770c\u540d"}),r.a.createElement(p,{name:"\u5e02\u533a\u753a\u6751\u540d"}),r.a.createElement(p,{name:"\u753a\u57df\u540d"})))};var x=function(e){return r.a.createElement("div",{id:"addressData"},r.a.createElement("table",{className:"table-auto border border-black"},r.a.createElement(b,null),r.a.createElement(h,{data:e.data})))};var v=function(){return r.a.createElement("div",{id:"nodata"},"\u8a72\u5f53\u3059\u308b\u4f4f\u6240\u306f\u3042\u308a\u307e\u305b\u3093\u3002")};var g=function(e){return r.a.createElement("div",{className:"mt-10"},void 0===e.data?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"\u901a\u4fe1\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002"),r.a.createElement("h4",{className:"text-3xl"},"\u4f4f\u6240\u304c\u53d6\u5f97\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002\u901a\u4fe1\u72b6\u614b\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002")):null===e.data?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"text-3xl font-bold"},"\u691c\u7d22\u7d50\u679c"),r.a.createElement(v,null)):0!==e.data.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"text-3xl font-bold"},"\u691c\u7d22\u7d50\u679c\uff1a",e.data.length,"\u4ef6"),r.a.createElement(x,{data:e.data})):r.a.createElement(r.a.Fragment,null))};var w=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),s=Object(m.a)(l,2),i=s[0],d=s[1],f=Object(n.useState)([]),h=Object(m.a)(f,2),p=h[0],b=h[1];return Object(n.useEffect)((function(){7===a.length&&function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(i);case 2:t=e.sent,b(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a]),r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"text-5xl"},"\u3012",r.a.createElement("input",{id:"zipcode",className:"text-5xl text-gray-700",itemType:"text",autoFocus:!0,maxLength:"7",minLength:"7",size:"8",onChange:function(e){var t=e.target.value;if(t!==a&&7===t.length){c(t);var n,r=(n=t,"".concat("https://zipcloud.ibsnet.co.jp/api/search","?zipcode=").concat(n,"&limit=100"));d(r)}}})),r.a.createElement("br",null),r.a.createElement(g,{data:p}))};var j=function(){return r.a.createElement("div",{className:"bg-black min-h-screen flex flex-col items-center text-center justify text-white text-6xl"},r.a.createElement("header",null,r.a.createElement("h1",{className:"text-9xl text-red-300"},"\u3012 \u90f5\u4fbf\u756a\u53f7\u691c\u7d22"),r.a.createElement("br",null),r.a.createElement("p",{className:"text-2xl"},"\u90f5\u4fbf\u756a\u53f7\u3092\u30cf\u30a4\u30d5\u30f3\u7121\u3057\u3067\u5165\u529b\u3057\u3066\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),r.a.createElement("section",null,r.a.createElement(w,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.0b278754.chunk.js.map