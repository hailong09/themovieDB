(this["webpackJsonpthemovie-db"]=this["webpackJsonpthemovie-db"]||[]).push([[10],{103:function(e,t,n){"use strict";t.a=n.p+"static/media/home-background.a0c4bdd9.png"},106:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0);function o(e){var t=e.controlled,n=e.default,o=(e.name,e.state,a.useRef(void 0!==t).current),i=a.useState(n),r=i[0],c=i[1];return[o?t:r,a.useCallback((function(e){o||c(e)}),[])]}},132:function(e,t,n){"use strict";var a=n(1),o=n(211),i=n(104);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(o.a)(e,Object(a.a)({defaultTheme:i.a},t))}},177:function(e,t,n){"use strict";var a=n(1),o=n(83),i=n(0),r=(n(19),n(85)),c=n(86),d=n(96),s=n(107),l=n(106);var p=n(125),b=n(115),u=n(216),m=n(108),g=Object(m.a)(i.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),h=Object(m.a)(i.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),x=Object(m.a)(i.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),f=Object(m.a)(i.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),v=n(92),j=i.forwardRef((function(e,t){var n=e.classes,c=e.className,d=e.color,s=void 0===d?"standard":d,l=e.component,p=e.disabled,m=void 0!==p&&p,j=e.page,O=e.selected,y=void 0!==O&&O,C=e.shape,k=void 0===C?"round":C,w=e.size,z=void 0===w?"medium":w,N=e.type,$=void 0===N?"page":N,B=e.variant,M=void 0===B?"text":B,P=Object(o.a)(e,["classes","className","color","component","disabled","page","selected","shape","size","type","variant"]),F=("rtl"===Object(b.a)().direction?{previous:f,next:x,last:g,first:h}:{previous:x,next:f,first:g,last:h})[$];return"start-ellipsis"===$||"end-ellipsis"===$?i.createElement("div",{ref:t,className:Object(r.a)(n.root,n.ellipsis,m&&n.disabled,"medium"!==z&&n["size".concat(Object(v.a)(z))])},"\u2026"):i.createElement(u.a,Object(a.a)({ref:t,component:l,disabled:m,focusVisibleClassName:n.focusVisible,className:Object(r.a)(n.root,n.page,n[M],n[k],c,"standard"!==s&&n["".concat(M).concat(Object(v.a)(s))],m&&n.disabled,y&&n.selected,"medium"!==z&&n["size".concat(Object(v.a)(z))])},P),"page"===$&&j,F?i.createElement(F,{className:n.icon}):null)})),O=Object(c.a)((function(e){return{root:Object(a.a)({},e.typography.body2,{borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:e.palette.text.primary}),page:{transition:e.transitions.create(["color","background-color"],{duration:e.transitions.duration.short}),"&:hover":{backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},"&$focusVisible":{backgroundColor:e.palette.action.focus},"&$selected":{backgroundColor:e.palette.action.selected,"&:hover, &$focusVisible":{backgroundColor:Object(p.b)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.palette.action.selected}},"&$disabled":{opacity:1,color:e.palette.action.disabled,backgroundColor:e.palette.action.selected}},"&$disabled":{opacity:e.palette.action.disabledOpacity}},sizeSmall:{minWidth:26,height:26,borderRadius:13,margin:"0 1px",padding:"0 4px","& $icon":{fontSize:e.typography.pxToRem(18)}},sizeLarge:{minWidth:40,height:40,borderRadius:20,padding:"0 10px",fontSize:e.typography.pxToRem(15),"& $icon":{fontSize:e.typography.pxToRem(22)}},textPrimary:{"&$selected":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover, &$focusVisible":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}},"&$disabled":{color:e.palette.action.disabled}}},textSecondary:{"&$selected":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover, &$focusVisible":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}},"&$disabled":{color:e.palette.action.disabled}}},outlined:{border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$selected":{"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}}},outlinedPrimary:{"&$selected":{color:e.palette.primary.main,border:"1px solid ".concat(Object(p.b)(e.palette.primary.main,.5)),backgroundColor:Object(p.b)(e.palette.primary.main,e.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:Object(p.b)(e.palette.primary.main,e.palette.action.activatedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}},outlinedSecondary:{"&$selected":{color:e.palette.secondary.main,border:"1px solid ".concat(Object(p.b)(e.palette.secondary.main,.5)),backgroundColor:Object(p.b)(e.palette.secondary.main,e.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:Object(p.b)(e.palette.secondary.main,e.palette.action.activatedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}},rounded:{borderRadius:e.shape.borderRadius},ellipsis:{height:"auto","&$disabled":{opacity:e.palette.action.disabledOpacity}},focusVisible:{},disabled:{},selected:{},icon:{fontSize:e.typography.pxToRem(20),margin:"0 -8px"}}}),{name:"MuiPaginationItem"})(j);function y(e,t,n){return"page"===e?"".concat(n?"":"Go to ","page ").concat(t):"Go to ".concat(e," page")}var C=i.forwardRef((function(e,t){e.boundaryCount;var n=e.classes,c=e.className,p=e.color,b=void 0===p?"standard":p,u=(e.count,e.defaultPage,e.disabled,e.getItemAriaLabel),m=void 0===u?y:u,g=(e.hideNextButton,e.hidePrevButton,e.onChange,e.page,e.renderItem),h=void 0===g?function(e){return i.createElement(O,e)}:g,x=e.shape,f=void 0===x?"round":x,v=(e.showFirstButton,e.showLastButton,e.siblingCount,e.size),j=void 0===v?"medium":v,C=e.variant,k=void 0===C?"text":C,w=Object(o.a)(e,["boundaryCount","classes","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"]),z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.boundaryCount,n=void 0===t?1:t,i=e.componentName,r=void 0===i?"usePagination":i,c=e.count,p=void 0===c?1:c,b=e.defaultPage,u=void 0===b?1:b,m=e.disabled,g=void 0!==m&&m,h=e.hideNextButton,x=void 0!==h&&h,f=e.hidePrevButton,v=void 0!==f&&f,j=e.onChange,O=e.page,y=e.showFirstButton,C=void 0!==y&&y,k=e.showLastButton,w=void 0!==k&&k,z=e.siblingCount,N=void 0===z?1:z,$=Object(o.a)(e,["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"]),B=Object(l.a)({controlled:O,default:u,name:r,state:"page"}),M=Object(s.a)(B,2),P=M[0],F=M[1],L=function(e,t){O||F(t),j&&j(e,t)},R=function(e,t){var n=t-e+1;return Array.from({length:n},(function(t,n){return e+n}))},S=R(1,Math.min(n,p)),T=R(Math.max(p-n+1,n+1),p),E=Math.max(Math.min(P-N,p-n-2*N-1),n+2),V=Math.min(Math.max(P+N,n+2*N+2),T[0]-2),I=[].concat(Object(d.a)(C?["first"]:[]),Object(d.a)(v?[]:["previous"]),Object(d.a)(S),Object(d.a)(E>n+2?["start-ellipsis"]:n+1<p-n?[n+1]:[]),Object(d.a)(R(E,V)),Object(d.a)(V<p-n-1?["end-ellipsis"]:p-n>n?[p-n]:[]),Object(d.a)(T),Object(d.a)(x?[]:["next"]),Object(d.a)(w?["last"]:[])),W=function(e){switch(e){case"first":return 1;case"previous":return P-1;case"next":return P+1;case"last":return p;default:return null}},A=I.map((function(e){return"number"===typeof e?{onClick:function(t){L(t,e)},type:"page",page:e,selected:e===P,disabled:g,"aria-current":e===P?"true":void 0}:{onClick:function(t){L(t,W(e))},type:e,page:W(e),selected:!1,disabled:g||-1===e.indexOf("ellipsis")&&("next"===e||"last"===e?P>=p:P<=1)}}));return Object(a.a)({items:A},$)}(Object(a.a)({},e,{componentName:"Pagination"})).items;return i.createElement("nav",Object(a.a)({"aria-label":"pagination navigation",className:Object(r.a)(n.root,c),ref:t},w),i.createElement("ul",{className:n.ul},z.map((function(e,t){return i.createElement("li",{key:t},h(Object(a.a)({},e,{color:b,"aria-label":m(e.type,e.page,e.selected),shape:f,size:j,variant:k})))}))))}));t.a=Object(c.a)({root:{},ul:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}},{name:"MuiPagination"})(C)},209:function(e,t,n){"use strict";n.r(t);var a,o=n(28),i=n(15),r=n(0),c=n(91),d=n(29),s=n(3),l=n(33),p=n(45),b=n(93),u=n(31),m=n(177),g=n(132),h=n(103),x=n(2),f=Object(g.a)((function(){return{ul:{"& .MuiPaginationItem-root":{color:"#fff"}}}}));t.default=function(){var e=Object(s.i)(),t=e.genreName,n=e.page,a=Object(l.b)(),o=Object(l.c)(p.a),d=Object(l.c)(p.d),g=f(),j=Object(s.g)(),O=Object(r.useState)(1),y=Object(i.a)(O,2),C=y[0],k=y[1];Object(r.useEffect)((function(){a(Object(p.c)({genreName:t,page:n}))}),[a,t,n]);return Object(x.jsx)(v,{bg:h.a,children:d?Object(x.jsx)(u.a,{}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h1",{children:t}),Object(x.jsx)("div",{children:Object(x.jsx)(m.a,{count:o.pageNumbers,page:C,onChange:function(e,n){k(n),j.replace("/discover/".concat(t,"/").concat(n))},color:"secondary",classes:{ul:g.ul}})}),Object(x.jsx)(c.e,{children:Object(x.jsx)("h2",{children:"Movies"})}),Object(x.jsx)(c.b,{children:Object(x.jsx)(b.a,{movieType:"Movies",trend:o.movies})}),Object(x.jsx)(c.e,{children:Object(x.jsx)("h2",{children:"TV Series"})}),Object(x.jsx)(c.b,{children:Object(x.jsx)(b.a,{movieType:"TV Series",trend:o.tvSeries})})]})})};var v=d.a.div(a||(a=Object(o.a)(["\n    padding-bottom: 30px;\n    h1{\n        text-align: center;\n    }\n\n    h2{\n        border-left : 4px solid #FF9505;\n        padding-left: 15px;\n        letter-spacing: 1.5px;      \n    }\n    min-height: calc(100vh - 100px);\n    padding: 0 calc(3.5vw + 5px);\n    position: relative;\n    overflow: hidden;\n    &:before{\n        background: ",' ;\n        content: "";\n        position: absolute;\n        top:0;\n        left:0;\n        right:0;\n        bottom:0;\n        z-index: -1\n    }\n\n'])),(function(e){return" url(".concat(e.bg,") center center / cover no-repeat fixed")}))},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"e",(function(){return m})),n.d(t,"b",(function(){return g})),n.d(t,"d",(function(){return h})),n.d(t,"c",(function(){return x}));var a,o,i,r=n(13),c=n(28),d=n(29),s=n(86),l=n(213),p=n(206),b=n(2),u=d.a.div(a||(a=Object(c.a)(["\n    \n    h2{\n        border-left : 4px solid #FF9505;\n        padding-left: 15px;\n        letter-spacing: 1.5px;      \n    }\n   \n"]))),m=d.a.div(o||(o=Object(c.a)(["\n    display: flex;\n    align-items: center;\n    margin: 10px 0px;\n  \n"]))),g=d.a.div(i||(i=Object(c.a)(["\n    display: grid;\n    grid-gap: 25px;\n    grid-template-columns: repeat(5, minmax(0, 1fr));\n\n\n   \n    @media (max-width: 930px){\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n\n   }\n\n\n   @media (max-width: 500px){\n     grid-template-columns: repeat(2, minmax(0, 1fr));\n   }\n\n   @media (max-width: 300px){\n     grid-template-columns: repeat(1, minmax(0, 1fr));\n   }\n   \n \n"]))),h=Object(s.a)({indicator:{display:"flex",justifyContent:"center",backgroundColor:"transparent","& > span":{maxWidth:50,width:"100%",backgroundColor:"#FF9505"}}})((function(e){return Object(b.jsx)(l.a,Object(r.a)(Object(r.a)({},e),{},{TabIndicatorProps:{children:Object(b.jsx)("span",{})}}))})),x=Object(s.a)((function(e){return{root:{textTransform:"none",color:"#fff",fontWeight:e.typography.fontWeightRegular,fontSize:e.typography.pxToRem(15),marginRight:e.spacing(1),"&:focus":{opacity:1}}}}))((function(e){return Object(b.jsx)(p.a,Object(r.a)({disableRipple:!0},e))}))},93:function(e,t,n){"use strict";n(0);var a,o,i=n(3),r=n(28),c=n(29),d=c.a.div(a||(a=Object(r.a)(["\n    border-radius: 10px;\n    position: relative;\n    overflow: hidden;\n    border: 3px solid rgba(249, 249, 249, 0.1);\n    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n\n    img{\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n        opacity: 1;\n    }\n\n\n    &:hover {\n        transform: scale(1.05);\n        border-color: rgba(249,249,249, 0.8);\n        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n       img{\n        opacity: 0.3;\n       }\n\n        div{\n            opacity: 1;\n        }\n    }\n"]))),s=c.a.div(o||(o=Object(r.a)(["\n    opacity: 0;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    transition: .5s ease;\n   \n    div{\n        border: 1px solid #FF9505;\n        padding: 8px 16px ;\n        border-radius: 4px;\n        cursor: pointer;\n        color: #FF9505;\n        text-transform: uppercase;\n        letter-spacing: 1.5px;\n    }\n\n    p {\n        \n        color: white;\n        position: absolute;\n        bottom: 5%;\n        font-size: 14px;\n        text-align: center;\n        font-weight: 800;\n        margin: 0px 10px;\n\n    }\n\n    a{\n        text-decoration: none;\n    }\n\n    @media (max-width: 1000px){\n\n        div{\n            font-size: 12px;\n        }\n        p{\n            font-size: 12px;\n        }\n\n    }\n\n    @media (max-width: 550px){\n\n        div{\n            font-size: 10px;\n        }\n        p{\n            font-size: 10px;\n        }\n   \n\n   }\n\n"]))),l=n(2);t.a=function(e){var t=e.trend,n=e.movieType,a=Object(i.g)(),o=function(e){t[0].media_type?a.replace("/".concat(t[0].media_type,"/").concat(e)):a.push("/".concat("Movies"===n?"movie":"tv","/").concat(e))};return Object(l.jsx)(l.Fragment,{children:null===t||void 0===t?void 0:t.map((function(e){return Object(l.jsxs)(d,{children:[Object(l.jsx)("img",{src:e.poster_path,alt:""}),Object(l.jsxs)(s,{children:[Object(l.jsx)("div",{onClick:o.bind(undefined,e.id),children:"Detail"}),Object(l.jsx)("p",{children:e.title?e.title:e.name})]})]},e.id)}))})}}}]);
//# sourceMappingURL=10.6c9fd9de.chunk.js.map