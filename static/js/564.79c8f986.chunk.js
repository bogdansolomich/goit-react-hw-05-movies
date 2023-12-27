"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[564],{335:function(n,t,e){e.d(t,{O:function(){return h}});var r,a,u,o=e(689),c=e(168),i=e(924),s=e(87),f=i.ZP.ul(r||(r=(0,c.Z)(["\n  width: 700px;\n  background-color: #7cb7b7f2;\n  border-radius: 8px;\n  padding: 20px;\n"]))),p=(0,i.ZP)(s.rU)(a||(a=(0,c.Z)(["\n  display: block;\n  color: #ffffff;\n  font-family: 'Ubuntu', sans-serif;\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.2;\n  max-width: 500px;\n  transition: 350ms color, font-weight, ease-in;\n\n  &:is(:hover, :focus) {\n    color: #2c5f63;\n    font-weight: 600;\n  }\n"]))),d=i.ZP.li(u||(u=(0,c.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 25px;\n  }\n"]))),l=e(184),h=function(n){var t=n.movies,e=(0,o.TH)();return(0,l.jsx)(f,{children:t.map((function(n){var t=n.id,r=n.title;return(0,l.jsx)(d,{children:(0,l.jsx)(p,{to:"/movies/".concat(t),state:{from:e},children:r})},t)}))})}},449:function(n,t,e){e.d(t,{IV:function(){return f},LI:function(){return d},Sg:function(){return s},wH:function(){return p},wr:function(){return i}});var r=e(861),a=e(757),u=e.n(a),o=e(294);o.Z.defaults.baseURL="https://api.themoviedb.org/3";var c="0cb95811155cbfd6f5d763048644bd55",i=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/trending/movie/day?api_key=".concat(c,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(Number(t),"?api_key=").concat(c,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(Number(t),"/credits?api_key=").concat(c,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(Number(t),"/reviews?api_key=").concat(c,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/search/movie?api_key=".concat(c,"&query=").concat(t,"&include_adult=true&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},941:function(n,t,e){e.d(t,{P:function(){return c},r:function(){return i}});var r,a,u=e(168),o=e(924),c=o.ZP.section(r||(r=(0,u.Z)(["\n  padding-top: 40px;\n  padding-bottom: 40px;\n"]))),i=(0,o.ZP)(c)(a||(a=(0,u.Z)(["\n  background-color: #deecec;\n"])))},806:function(n,t,e){e.r(t);var r=e(861),a=e(439),u=e(757),o=e.n(u),c=e(60),i=e(662),s=e(335),f=e(941),p=e(791),d=e(449),l=e(214),h=e(218),v=e(184);t.default=function(){var n=(0,p.useState)([]),t=(0,a.Z)(n,2),e=t[0],u=t[1],g=(0,p.useState)(!1),m=(0,a.Z)(g,2),x=m[0],Z=m[1],b=(0,p.useState)(!1),w=(0,a.Z)(b,2),k=w[0],y=w[1];return(0,p.useEffect)((function(){var n=function(){var n=(0,r.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,Z(!0),y(!1),n.next=5,(0,d.wr)();case 5:t=n.sent,u(t.results),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),y(!0);case 12:return n.prev=12,Z(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,v.jsxs)(v.Fragment,{children:[x&&(0,v.jsx)(i.a,{}),k&&!x&&h.ZP.error("Something went wrong, please try reloading the page",{duration:5e3}),(0,v.jsx)(f.P,{children:(0,v.jsxs)(c.W,{children:[(0,v.jsx)(l.e,{children:"Trending today"}),e.length>0&&(0,v.jsx)(s.O,{movies:e})]})}),(0,v.jsx)(h.x7,{position:"top-right"})]})}},214:function(n,t,e){e.d(t,{a:function(){return i},e:function(){return c}});var r,a,u=e(168),o=e(924),c=o.ZP.h2(r||(r=(0,u.Z)(["\n  margin-bottom: 74px;\n  color: #3a415c;\n  font-family: 'Ubuntu', sans-serif;\n  font-size: 50px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 1.2;\n"]))),i=(0,o.ZP)(c)(a||(a=(0,u.Z)(["\n  margin-bottom: 0;\n  font-size: 32px;\n"])))}}]);
//# sourceMappingURL=564.79c8f986.chunk.js.map