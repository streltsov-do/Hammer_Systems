(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[8],{255:function(e,t,c){"use strict";var a=c(3),n=c(4),r=c(21),o=c(0),s=c(6),i=c.n(s),l=c(448),b=c(67),j=function(e,t){var c={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(c[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(c[a[n]]=e[a[n]])}return c};var u=["xs","sm","md","lg","xl","xxl"],f=o.forwardRef((function(e,t){var c,s=o.useContext(b.b),f=s.getPrefixCls,d=s.direction,p=o.useContext(l.a),m=p.gutter,O=p.wrap,h=e.prefixCls,x=e.span,g=e.order,y=e.offset,v=e.push,w=e.pull,N=e.className,C=e.children,P=e.flex,E=e.style,k=j(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),A=f("col",h),R={};u.forEach((function(t){var c,o={},s=e[t];"number"===typeof s?o.span=s:"object"===Object(r.a)(s)&&(o=s||{}),delete k[t],R=Object(n.a)(Object(n.a)({},R),(c={},Object(a.a)(c,"".concat(A,"-").concat(t,"-").concat(o.span),void 0!==o.span),Object(a.a)(c,"".concat(A,"-").concat(t,"-order-").concat(o.order),o.order||0===o.order),Object(a.a)(c,"".concat(A,"-").concat(t,"-offset-").concat(o.offset),o.offset||0===o.offset),Object(a.a)(c,"".concat(A,"-").concat(t,"-push-").concat(o.push),o.push||0===o.push),Object(a.a)(c,"".concat(A,"-").concat(t,"-pull-").concat(o.pull),o.pull||0===o.pull),Object(a.a)(c,"".concat(A,"-rtl"),"rtl"===d),c))}));var S=i()(A,(c={},Object(a.a)(c,"".concat(A,"-").concat(x),void 0!==x),Object(a.a)(c,"".concat(A,"-order-").concat(g),g),Object(a.a)(c,"".concat(A,"-offset-").concat(y),y),Object(a.a)(c,"".concat(A,"-push-").concat(v),v),Object(a.a)(c,"".concat(A,"-pull-").concat(w),w),c),N,R),T=Object(n.a)({},E);return m&&(T=Object(n.a)(Object(n.a)(Object(n.a)({},m[0]>0?{paddingLeft:m[0]/2,paddingRight:m[0]/2}:{}),m[1]>0?{paddingTop:m[1]/2,paddingBottom:m[1]/2}:{}),T)),P&&(T.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(P),"auto"!==P||!1!==O||T.minWidth||(T.minWidth=0)),o.createElement("div",Object(n.a)({},k,{style:T,className:S,ref:t}),C)}));f.displayName="Col",t.a=f},256:function(e,t,c){"use strict";var a=c(4),n=c(3),r=c(21),o=c(8),s=c(0),i=c(6),l=c.n(i),b=c(67),j=c(448),u=c(53),f=c(151),d=function(e,t){var c={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(c[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(c[a[n]]=e[a[n]])}return c},p=(Object(u.a)("top","middle","bottom","stretch"),Object(u.a)("start","end","center","space-around","space-between"),s.forwardRef((function(e,t){var c,i=e.prefixCls,u=e.justify,p=e.align,m=e.className,O=e.style,h=e.children,x=e.gutter,g=void 0===x?0:x,y=e.wrap,v=d(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),w=s.useContext(b.b),N=w.getPrefixCls,C=w.direction,P=s.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),E=Object(o.a)(P,2),k=E[0],A=E[1],R=s.useRef(g);s.useEffect((function(){var e=f.a.subscribe((function(e){var t=R.current||0;(!Array.isArray(t)&&"object"===Object(r.a)(t)||Array.isArray(t)&&("object"===Object(r.a)(t[0])||"object"===Object(r.a)(t[1])))&&A(e)}));return function(){return f.a.unsubscribe(e)}}),[]);var S=N("row",i),T=function(){var e=[0,0];return(Array.isArray(g)?g:[g,0]).forEach((function(t,c){if("object"===Object(r.a)(t))for(var a=0;a<f.b.length;a++){var n=f.b[a];if(k[n]&&void 0!==t[n]){e[c]=t[n];break}}else e[c]=t||0})),e}(),D=l()(S,(c={},Object(n.a)(c,"".concat(S,"-no-wrap"),!1===y),Object(n.a)(c,"".concat(S,"-").concat(u),u),Object(n.a)(c,"".concat(S,"-").concat(p),p),Object(n.a)(c,"".concat(S,"-rtl"),"rtl"===C),c),m),W=Object(a.a)(Object(a.a)(Object(a.a)({},T[0]>0?{marginLeft:T[0]/-2,marginRight:T[0]/-2}:{}),T[1]>0?{marginTop:T[1]/-2,marginBottom:T[1]/2}:{}),O);return s.createElement(j.a.Provider,{value:{gutter:T,wrap:y}},s.createElement("div",Object(a.a)({},v,{className:D,style:W,ref:t}),h))})));p.displayName="Row",t.a=p},448:function(e,t,c){"use strict";var a=c(0),n=Object(a.createContext)({});t.a=n},459:function(e,t,c){"use strict";var a=c(256);t.a=a.a},460:function(e,t,c){"use strict";var a=c(255);t.a=a.a},521:function(e,t,c){"use strict";c.r(t);c(0);var a=c(459),n=c(460),r=c(97),o=c(425),s=c(17),i=c(46),l=c(153),b=c(36),j=c(2);t.default=()=>{const e=Object(b.c)((e=>e.theme.currentTheme));return Object(j.jsx)("div",{className:"h-100 ".concat("light"===e?"bg-white":""),children:Object(j.jsxs)("div",{className:"container-fluid d-flex flex-column justify-content-between h-100 px-md-4 pb-md-4 pt-md-1",children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{className:"img-fluid",src:"/img/".concat("light"===e?"logo.png":"logo-white.png"),alt:""})}),Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)(a.a,{align:"middle",children:[Object(j.jsxs)(n.a,{xs:24,sm:24,md:8,children:[Object(j.jsx)("h1",{className:"font-weight-bold mb-4 display-4",children:"Page not found"}),Object(j.jsx)("p",{className:"font-size-md mb-4",children:"We've noticed you lost your way, no worries, we will help you to found the correct path."}),Object(j.jsx)(i.b,{to:"/app",children:Object(j.jsx)(r.a,{type:"primary",icon:Object(j.jsx)(o.a,{}),children:"Go back"})})]}),Object(j.jsx)(n.a,{xs:24,sm:24,md:{span:14,offset:2},children:Object(j.jsx)("img",{className:"img-fluid mt-md-0 mt-4",src:"/img/others/img-20.png",alt:""})})]})}),Object(j.jsxs)(l.a,{mobileFlex:!1,justifyContent:"between",children:[Object(j.jsxs)("span",{children:["Copyright  \xa9  ","".concat((new Date).getFullYear())," ",Object(j.jsx)("span",{className:"font-weight-semibold",children:"".concat(s.b)})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("a",{className:"text-gray",href:"/#",onClick:e=>e.preventDefault(),children:"Term & Conditions"}),Object(j.jsx)("span",{className:"mx-2 text-muted",children:" | "}),Object(j.jsx)("a",{className:"text-gray",href:"/#",onClick:e=>e.preventDefault(),children:"Privacy & Policy"})]})]})]})})}}}]);
//# sourceMappingURL=8.24eae5d8.chunk.js.map