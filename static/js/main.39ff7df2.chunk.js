(this["webpackJsonpcurrency-converter"]=this["webpackJsonpcurrency-converter"]||[]).push([[0],{26:function(e,t,n){e.exports=n(36)},31:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),u=n.n(c),o=n(21),l=n(9),i=(n(31),n(64));function s(e){var t=e.currencyOptions,n=e.selectedCurrency,a=e.onChangeCurrency,c=e.onChangeAmount,u=e.amount;return r.a.createElement("div",null,r.a.createElement("input",{type:"number",className:"input",value:u,onChange:c}),r.a.createElement("select",{value:n,onChange:a},t.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))))}var m=n(59),f=n(63),b=n(62),g=n(57),E=n(60),O=n(61),h=n(58);function j(e){var t=e.storage;return r.a.createElement(g.a,{component:h.a},r.a.createElement(m.a,{className:"table",size:"small"},r.a.createElement(E.a,null,r.a.createElement(O.a,null,r.a.createElement(b.a,null,"Time"),r.a.createElement(b.a,{align:"right"},"From"),r.a.createElement(b.a,{align:"right"},"To"))),r.a.createElement(f.a,null,t.map((function(e,t){return r.a.createElement(O.a,{key:t,id:t},r.a.createElement(b.a,null,e.time),r.a.createElement(b.a,{align:"right"},e.fromAmount+" "+e.fromCurrency),r.a.createElement(b.a,{align:"right"},e.toAmount+" "+e.toCurrency))})))))}var v="https://api.exchangeratesapi.io/latest";var y=function(){var e,t,n=Object(a.useState)([]),c=Object(l.a)(n,2),u=c[0],m=c[1],f=Object(a.useState)(),b=Object(l.a)(f,2),g=b[0],E=b[1],O=Object(a.useState)(),h=Object(l.a)(O,2),y=h[0],p=h[1],C=Object(a.useState)(0),d=Object(l.a)(C,2),S=d[0],k=d[1],A=Object(a.useState)(1),N=Object(l.a)(A,2),x=N[0],F=N[1],w=Object(a.useState)(!0),B=Object(l.a)(w,2),M=B[0],D=B[1],J=Object(a.useState)([]),T=Object(l.a)(J,2),q=T[0],z=T[1],G=Object(a.useState)(!0),H=Object(l.a)(G,2),I=H[0],K=H[1];return M?(t=x,e=(x*S).toFixed(2)):(e=x,t=(x/S).toFixed(2)),Object(a.useEffect)((function(){fetch(v).then((function(e){return e.json()})).then((function(e){var t=Object.keys(e.rates).filter((function(e){return"GBP"===e})),n=Object.keys(e.rates).filter((function(e){return"KRW"===e}));m([e.base].concat(Object(o.a)(Object.keys(e.rates)))),E(t),p(n),k(e.rates[n])}))}),[]),Object(a.useEffect)((function(){null!=g&&null!=y&&fetch("".concat(v,"?base=").concat(g,"&symbols=").concat(y)).then((function(e){return e.json()})).then((function(e){return k(e.rates[y])}))}),[g,y]),r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Currency Converter"),r.a.createElement(s,{currencyOptions:u,selectedCurrency:g,onChangeCurrency:function(e){return E(e.target.value)},onChangeAmount:function(e){F(e.target.value),D(!0)},amount:t}),r.a.createElement("div",{className:"equals"},"="),r.a.createElement(s,{currencyOptions:u,selectedCurrency:y,onChangeCurrency:function(e){return p(e.target.value)},onChangeAmount:function(e){F(e.target.value),D(!1)},amount:e}),r.a.createElement("div",{className:"storeButton"},r.a.createElement(i.a,{onClick:function(){K(!1);var n=new Date,a={time:n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate()+" "+(n.getHours()+":"+n.getMinutes()+":"+n.getSeconds()),toCurrency:y,fromCurrency:g,toAmount:e,fromAmount:t};z((function(e){return[].concat(Object(o.a)(e),[a])}))},variant:"contained",disableElevation:!0},"Store")),!I&&r.a.createElement(j,{storage:q}))};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.39ff7df2.chunk.js.map