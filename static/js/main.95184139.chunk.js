(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{16:function(n,e,t){n.exports=t(24)},21:function(n,e,t){},24:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(11),c=t.n(o),u=(t(21),t(3)),i=t(1),l=t(2);function d(){var n=Object(i.a)(["\n  padding: 10px;\n  background-color: hsl(180, 100%, 25%);\n  color: white;\n  border: none;\n  transition: background 0.5s, transform 0.5s;\n\n  &:hover {\n    background-color: hsl(180, 100%, 30%);\n    transform: scale(1.03);\n  }\n  &:active {\n    background-color: hsl(180, 100%, 35%);\n  }\n"]);return d=function(){return n},n}function s(){var n=Object(i.a)(["\n  padding: 10px;\n  border: 1px solid #ddd;\n"]);return s=function(){return n},n}function f(){var n=Object(i.a)(["\n  display: grid;\n  grid-template-columns: 1fr auto;\n  grid-gap: 20px;\n\n  @media (max-width: 767px) {\n    grid-template-columns: 1fr;\n  }\n"]);return f=function(){return n},n}var b=l.b.form(f()),m=l.b.input(s()),g=l.b.button(d()),p=function(n){var e=n.addNewTask,t=Object(r.useRef)(null),o=Object(r.useState)(""),c=Object(u.a)(o,2),i=c[0],l=c[1];return a.a.createElement(b,{onSubmit:function(n){n.preventDefault(),""!==i.trim()&&(e(i.trim()),l(""))}},a.a.createElement(m,{ref:t,value:i,placeholder:"Co jest do zrobienia?",onChange:function(n){var e=n.target;return l(e.value)}}),a.a.createElement(g,{onClick:function(){t.current.focus()}},"Dodaj zadanie"))};function v(){var n=Object(i.a)(["\n      background-color: hsl(348, 83%, 47%);\n\n      &:hover {\n        background-color: hsl(348, 83%, 70%);\n      }\n    "]);return v=function(){return n},n}function k(){var n=Object(i.a)(["\n      background-color: hsl(120, 61%, 34%);\n\n      &:hover {\n        background-color: hsl(120, 61%, 70%);\n      }\n    "]);return k=function(){return n},n}function h(){var n=Object(i.a)(["\n  border: none;\n  color: white;\n  width: 30px;\n  height: 30px;\n  padding: 0;\n  transition: background 1s;\n\n  ","\n\n  ","\n"]);return h=function(){return n},n}function j(){var n=Object(i.a)(["\n      text-decoration: line-through;\n    "]);return j=function(){return n},n}function O(){var n=Object(i.a)(["\n  ","\n"]);return O=function(){return n},n}function x(){var n=Object(i.a)(["\n      display: none;\n    "]);return x=function(){return n},n}function E(){var n=Object(i.a)(["\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  grid-gap: 10px;\n  align-items: center;\n  padding: 10px;\n  border-bottom: 1px solid #ddd;\n\n  ","\n"]);return E=function(){return n},n}function w(){var n=Object(i.a)(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n"]);return w=function(){return n},n}var y=l.b.ul(w()),D=l.b.li(E(),(function(n){return n.hidden&&Object(l.a)(x())})),T=l.b.span(O(),(function(n){return n.done&&Object(l.a)(j())})),z=l.b.button(h(),(function(n){return n.toogleDone&&Object(l.a)(k())}),(function(n){return n.remove&&Object(l.a)(v())})),C=function(n){var e=n.tasks,t=n.hideDone,r=n.removeTask,o=n.toogleTaskDone;return a.a.createElement(y,null,e.map((function(n){var e=n.id,c=n.content,u=n.done;return a.a.createElement(D,{key:e,hidden:u&&t},a.a.createElement(z,{toogleDone:!0,onClick:function(){return o(e)}},u?"\u2714":""),a.a.createElement(T,{done:u},c),a.a.createElement(z,{remove:!0,onClick:function(){return r(e)}},"\ud83d\uddd1"))})))};function S(){var n=Object(i.a)(["\n  background-color: transparent;\n  color: teal;\n  border: none;\n  margin: 0 0 0 20px;\n  transition: color 0.3s;\n\n  @media (max-width: 767px) {\n    flex-basis: 100%;\n    margin: 10px;\n  }\n\n  &:hover {\n    color: hsl(180, 100%, 35%);\n  }\n\n  &:disabled {\n    color: #ccc;\n  }\n"]);return S=function(){return n},n}function N(){var n=Object(i.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]);return N=function(){return n},n}var A=l.b.div(N()),H=l.b.button(S()),J=function(n){var e=n.tasks,t=n.hideDone,r=n.toogleHideDone,o=n.setAlldone;return a.a.createElement(A,null,e.length>0&&a.a.createElement(a.a.Fragment,null,a.a.createElement(H,{onClick:r},t?"Poka\u017c":"Ukryj"," uko\u0144czone"),a.a.createElement(H,{onClick:o,disabled:e.every((function(n){return n.done}))},"Uko\u0144cz wszystkie")))};function I(){var n=Object(i.a)(["\n  padding: 20px;\n"]);return I=function(){return n},n}function L(){var n=Object(i.a)(["\n  font-size: 20px;\n  margin: 0;\n"]);return L=function(){return n},n}function U(){var n=Object(i.a)(["\n  border-bottom: 1px solid #ddd;\n  display: grid;\n  grid-template-columns: auto auto;\n  grid-gap: 20px;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n\n  @media (max-width: 767px) {\n    grid-template-columns: 1fr;\n  }\n"]);return U=function(){return n},n}function B(){var n=Object(i.a)(["\n  margin: 10px 0;\n  background: white;\n  box-shadow: 0 0 5px #ddd;\n"]);return B=function(){return n},n}var F=l.b.section(B()),M=l.b.div(U()),P=l.b.div(L()),R=l.b.div(I()),q=function(n){var e=n.title,t=n.body,r=n.extraHeaderContent;return a.a.createElement(F,null,a.a.createElement(M,null,a.a.createElement(P,null,e),r),a.a.createElement(R,null,t))},G=function(n){var e=n.title;return a.a.createElement("header",null,a.a.createElement("h1",null,e))};function K(){var n=Object(i.a)(["\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 20px;\n"]);return K=function(){return n},n}var Q=l.b.main(K()),V=function(n){var e=n.children;return a.a.createElement(Q,null,e)},W=t(15),X=t(5),Y=function(){var n=localStorage.getItem("tasks");return n?JSON.parse(n):[]},Z=function(){var n=Object(r.useState)(Y),e=Object(u.a)(n,2),t=e[0],a=e[1];Object(r.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(t))}),[t]);return{tasks:t,removeTask:function(n){a((function(e){return e.filter((function(e){return e.id!==n}))}))},toogleTaskDone:function(n){a((function(e){return e.map((function(e){return e.id===n?Object(X.a)(Object(X.a)({},e),{},{done:!e.done}):e}))}))},setAlldone:function(){a((function(n){return n.map((function(n){return Object(X.a)(Object(X.a)({},n),{},{done:!0})}))}))},addNewTask:function(n){a((function(e){return[].concat(Object(W.a)(e),[{content:n,done:!1,id:e.length?e[e.length-1].id+1:1}])}))}}};var $=function(){var n=Object(r.useState)(!1),e=Object(u.a)(n,2),t=e[0],o=e[1],c=Z(),i=c.tasks,l=c.removeTask,d=c.toogleTaskDone,s=c.setAlldone,f=c.addNewTask;return a.a.createElement(V,null,a.a.createElement(G,{title:"Lista zada\u0144"}),a.a.createElement(q,{title:"Dodaj nowe zadanie",body:a.a.createElement(p,{addNewTask:f})}),a.a.createElement(q,{title:"Lista zada\u0144",body:a.a.createElement(C,{tasks:i,hideDone:t,removeTask:l,toogleTaskDone:d}),extraHeaderContent:a.a.createElement(J,{tasks:i,hideDone:t,toogleHideDone:function(){o((function(n){return!n}))},setAlldone:s})}))};c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement($,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.95184139.chunk.js.map