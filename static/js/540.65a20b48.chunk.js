"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[540],{540:function(n,t,e){e.r(t),e.d(t,{default:function(){return y}});var r,a,u,o=e(861),c=e(439),i=e(757),s=e.n(i),f=e(689),p=e(449),l=e(218),h=e(791),d=e(168),v=e(924),m=v.ZP.li(r||(r=(0,d.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 20px;\n  }\n  background-color: #7cb7b7f2;\n  border-radius: 8px;\n  padding: 20px;\n"]))),g=v.ZP.p(a||(a=(0,d.Z)(["\n  color: #fff;\n  font-family: 'Ubuntu', sans-serif;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 300;\n  line-height: 1.55;\n"]))),x=v.ZP.h2(u||(u=(0,d.Z)(["\n  margin-bottom: 10px;\n  color: #2c5f63;\n  font-family: 'Ubuntu', sans-serif;\n  font-size: 30px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 1.2;\n"]))),b=e(214),w=e(662),Z=e(184),y=function(){var n=(0,f.UO)().movieId,t=(0,h.useState)([]),e=(0,c.Z)(t,2),r=e[0],a=e[1],u=(0,h.useState)(!1),i=(0,c.Z)(u,2),d=i[0],v=i[1],y=(0,h.useState)(!1),k=(0,c.Z)(y,2),S=k[0],U=k[1];return(0,h.useEffect)((function(){var t=function(){var t=(0,o.Z)(s().mark((function t(){var e,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,v(!0),U(!1),t.next=5,(0,p.wH)(n);case 5:e=t.sent,r=e.results,a(r),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),U(!0);case 13:return t.prev=13,v(!1),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,10,13,16]])})));return function(){return t.apply(this,arguments)}}();t()}),[n]),(0,Z.jsxs)(Z.Fragment,{children:[d&&(0,Z.jsx)(w.a,{}),S&&!d&&l.ZP.error("Something went wrong, please try reloading the page",{duration:5e3}),r.length>0?(0,Z.jsx)("ul",{children:r.map((function(n){var t=n.author,e=n.content,r=n.id;return(0,Z.jsxs)(m,{children:[(0,Z.jsxs)(x,{children:["Author: ",t]}),(0,Z.jsx)(g,{children:e})]},r)}))}):(0,Z.jsx)(b.a,{children:"We don't have any reviews for this movie"}),(0,Z.jsx)(l.x7,{position:"top-right"})]})}},449:function(n,t,e){e.d(t,{IV:function(){return f},LI:function(){return l},Sg:function(){return s},wH:function(){return p},wr:function(){return i}});var r=e(861),a=e(757),u=e.n(a),o=e(294);o.Z.defaults.baseURL="https://api.themoviedb.org/3";var c="0cb95811155cbfd6f5d763048644bd55",i=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/trending/movie/day?api_key=".concat(c,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(Number(t),"?api_key=").concat(c,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(Number(t),"/credits?api_key=").concat(c,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(Number(t),"/reviews?api_key=").concat(c,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/search/movie?api_key=".concat(c,"&query=").concat(t,"&include_adult=true&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},214:function(n,t,e){e.d(t,{a:function(){return i},e:function(){return c}});var r,a,u=e(168),o=e(924),c=o.ZP.h2(r||(r=(0,u.Z)(["\n  margin-bottom: 74px;\n  color: #3a415c;\n  font-family: 'Ubuntu', sans-serif;\n  font-size: 50px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 1.2;\n"]))),i=(0,o.ZP)(c)(a||(a=(0,u.Z)(["\n  margin-bottom: 0;\n  font-size: 32px;\n"])))}}]);
//# sourceMappingURL=540.65a20b48.chunk.js.map