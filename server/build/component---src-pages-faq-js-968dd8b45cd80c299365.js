"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[329],{4320:function(t,e,n){n.d(e,{ZP:function(){return S}});var r=n(3433),o=n(4942),i=n(3366),a=n(7462),s=n(7294),c=n(5505),l=n(2692),u=n(8297),p=n(9236),d=n(3656),f=n(184),_=n(6449);var w=s.createContext(),v=n(1351);function m(t){return(0,v.Z)("MuiGrid",t)}var y=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],g=(0,n(9508).Z)("MuiGrid",["root","container","item","zeroMinWidth"].concat((0,r.Z)([0,1,2,3,4,5,6,7,8,9,10].map((function(t){return"spacing-xs-".concat(t)}))),(0,r.Z)(["column-reverse","column","row-reverse","row"].map((function(t){return"direction-xs-".concat(t)}))),(0,r.Z)(["nowrap","wrap-reverse","wrap"].map((function(t){return"wrap-xs-".concat(t)}))),(0,r.Z)(y.map((function(t){return"grid-xs-".concat(t)}))),(0,r.Z)(y.map((function(t){return"grid-sm-".concat(t)}))),(0,r.Z)(y.map((function(t){return"grid-md-".concat(t)}))),(0,r.Z)(y.map((function(t){return"grid-lg-".concat(t)}))),(0,r.Z)(y.map((function(t){return"grid-xl-".concat(t)}))))),h=n(5893),b=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function x(t){var e=parseFloat(t);return"".concat(e).concat(String(t).replace(String(e),"")||"px")}function k(t){var e=t.breakpoints,n=t.values,r="";Object.keys(n).forEach((function(t){""===r&&0!==n[t]&&(r=t)}));var o=Object.keys(e).sort((function(t,n){return e[t]-e[n]}));return o.slice(0,o.indexOf(r))}var O=(0,d.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(t,e){var n=t.ownerState,o=n.container,i=n.direction,a=n.item,s=n.spacing,c=n.wrap,l=n.zeroMinWidth,u=n.breakpoints,p=[];o&&(p=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t||t<=0)return[];if("string"==typeof t&&!Number.isNaN(Number(t))||"number"==typeof t)return[n["spacing-xs-".concat(String(t))]];var r=[];return e.forEach((function(e){var o=t[e];Number(o)>0&&r.push(n["spacing-".concat(e,"-").concat(String(o))])})),r}(s,u,e));var d=[];return u.forEach((function(t){var r=n[t];r&&d.push(e["grid-".concat(t,"-").concat(String(r))])})),[e.root,o&&e.container,a&&e.item,l&&e.zeroMinWidth].concat((0,r.Z)(p),["row"!==i&&e["direction-xs-".concat(String(i))],"wrap"!==c&&e["wrap-xs-".concat(String(c))]],d)}})((function(t){var e=t.ownerState;return(0,a.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap})}),(function(t){var e=t.theme,n=t.ownerState,r=(0,l.P$)({values:n.direction,breakpoints:e.breakpoints.values});return(0,l.k9)({theme:e},r,(function(t){var e={flexDirection:t};return 0===t.indexOf("column")&&(e["& > .".concat(g.item)]={maxWidth:"none"}),e}))}),(function(t){var e=t.theme,n=t.ownerState,r=n.container,i=n.rowSpacing,a={};if(r&&0!==i){var s,c=(0,l.P$)({values:i,breakpoints:e.breakpoints.values});"object"==typeof c&&(s=k({breakpoints:e.breakpoints.values,values:c})),a=(0,l.k9)({theme:e},c,(function(t,n){var r=e.spacing(t);return"0px"!==r?(0,o.Z)({marginTop:"-".concat(x(r))},"& > .".concat(g.item),{paddingTop:x(r)}):s.includes(n)?{}:(0,o.Z)({marginTop:0},"& > .".concat(g.item),{paddingTop:0})}))}return a}),(function(t){var e=t.theme,n=t.ownerState,r=n.container,i=n.columnSpacing,a={};if(r&&0!==i){var s,c=(0,l.P$)({values:i,breakpoints:e.breakpoints.values});"object"==typeof c&&(s=k({breakpoints:e.breakpoints.values,values:c})),a=(0,l.k9)({theme:e},c,(function(t,n){var r=e.spacing(t);return"0px"!==r?(0,o.Z)({width:"calc(100% + ".concat(x(r),")"),marginLeft:"-".concat(x(r))},"& > .".concat(g.item),{paddingLeft:x(r)}):s.includes(n)?{}:(0,o.Z)({width:"100%",marginLeft:0},"& > .".concat(g.item),{paddingLeft:0})}))}return a}),(function(t){var e,n=t.theme,r=t.ownerState;return n.breakpoints.keys.reduce((function(t,o){var i={};if(r[o]&&(e=r[o]),!e)return t;if(!0===e)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===e)i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var s=(0,l.P$)({values:r.columns,breakpoints:n.breakpoints.values}),c="object"==typeof s?s[o]:s;if(null==c)return t;var u="".concat(Math.round(e/c*1e8)/1e6,"%"),p={};if(r.container&&r.item&&0!==r.columnSpacing){var d=n.spacing(r.columnSpacing);if("0px"!==d){var f="calc(".concat(u," + ").concat(x(d),")");p={flexBasis:f,maxWidth:f}}}i=(0,a.Z)({flexBasis:u,flexGrow:0,maxWidth:u},p)}return 0===n.breakpoints.values[o]?Object.assign(t,i):t[n.breakpoints.up(o)]=i,t}),{})}));var q=function(t){var e=t.classes,n=t.container,o=t.direction,i=t.item,a=t.spacing,s=t.wrap,c=t.zeroMinWidth,l=t.breakpoints,u=[];n&&(u=function(t,e){if(!t||t<=0)return[];if("string"==typeof t&&!Number.isNaN(Number(t))||"number"==typeof t)return["spacing-xs-".concat(String(t))];var n=[];return e.forEach((function(e){var r=t[e];if(Number(r)>0){var o="spacing-".concat(e,"-").concat(String(r));n.push(o)}})),n}(a,l));var d=[];l.forEach((function(e){var n=t[e];n&&d.push("grid-".concat(e,"-").concat(String(n)))}));var f={root:["root",n&&"container",i&&"item",c&&"zeroMinWidth"].concat((0,r.Z)(u),["row"!==o&&"direction-xs-".concat(String(o)),"wrap"!==s&&"wrap-xs-".concat(String(s))],d)};return(0,p.Z)(f,m,e)},N=s.forwardRef((function(t,e){var n=(0,f.Z)({props:t,name:"MuiGrid"}),r=(0,_.Z)().breakpoints,o=(0,u.Z)(n),l=o.className,p=o.columns,d=o.columnSpacing,v=o.component,m=void 0===v?"div":v,y=o.container,g=void 0!==y&&y,x=o.direction,k=void 0===x?"row":x,N=o.item,S=void 0!==N&&N,E=o.rowSpacing,Y=o.spacing,Z=void 0===Y?0:Y,P=o.wrap,C=void 0===P?"wrap":P,j=o.zeroMinWidth,A=void 0!==j&&j,D=(0,i.Z)(o,b),F=E||Z,z=d||Z,W=s.useContext(w),M=g?p||12:W,T={},R=(0,a.Z)({},D);r.keys.forEach((function(t){null!=D[t]&&(T[t]=D[t],delete R[t])}));var U=(0,a.Z)({},o,{columns:M,container:g,direction:k,item:S,rowSpacing:F,columnSpacing:z,wrap:C,zeroMinWidth:A,spacing:Z},T,{breakpoints:r.keys}),I=q(U);return(0,h.jsx)(w.Provider,{value:M,children:(0,h.jsx)(O,(0,a.Z)({ownerState:U,className:(0,c.Z)(I.root,l),as:m,ref:e},R))})})),S=N},86:function(t,e,n){n.d(e,{Z:function(){return a}});var r=n(7294),o=n(8953),i=(0,n(3656).ZP)(o.Z)((function(t){var e=t.theme;return Object.assign({backgroundColor:"dark"===e.palette.mode?"#1A2027":"#fff"},e.typography.body2,{padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary})}));function a(t){var e=t.title;return r.createElement(i,null,r.createElement("h1",null,e))}},84:function(t,e,n){n.r(e),n.d(e,{default:function(){return P}});var r=n(7294),o=n(6569),i=n(5697),a=n.n(i);function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(){return(p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&w(t,e)}function _(t){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function w(t,e){return(w=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function v(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function m(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?v(t):e}function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=_(t);if(e){var o=_(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}var g={return:13,arrowLeft:37,arrowUp:38,arrowRight:39,arrowDown:40,space:32};g.keyCodes=Object.keys(g).reduce((function(t,e){return t[g[e]]=e,t}),{});var h={"faq-row-wrapper":"styles_faq-row-wrapper__3vA1D","faq-row":"styles_faq-row__2YF3c","row-body":"styles_row-body__1NvUo","row-title":"styles_row-title__1YiiY","no-tabfocus":"styles_no-tabfocus__1HmyD","row-title-text":"styles_row-title-text__1MuhU","icon-wrapper":"styles_icon-wrapper__2cftw",closed:"styles_closed__39w54","row-content":"styles_row-content__QOGZd",animate:"styles_animate__3ecdr",static:"styles_static__3chYW",expanded:"styles_expanded__3elPy",expanding:"styles_expanding__2OAFB","row-content-text":"styles_row-content-text__2sgAB"};!function(t,e){void 0===e&&(e={});var n=e.insertAt;if("undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=t:o.appendChild(document.createTextNode(t))}}(".styles_faq-row-wrapper__3vA1D {\n  background-color: var(--faq-bg-color, white); }\n  .styles_faq-row-wrapper__3vA1D h2 {\n    margin: 0;\n    color: var(--title-text-color, black);\n    font-size: var(--title-text-size, 30px); }\n  .styles_faq-row-wrapper__3vA1D .styles_faq-row__2YF3c {\n    display: flex;\n    justify-content: space-between;\n    padding: 5px 0;\n    border-bottom: 1px solid #ccc; }\n  .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c {\n    flex-direction: column;\n    position: relative; }\n    .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY {\n      padding: 10px 0;\n      display: flex;\n      justify-content: space-between;\n      color: var(--row-title-color, black);\n      font-size: var(--row-title-text-size, large);\n      cursor: pointer;\n      align-items: center; }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_no-tabfocus__1HmyD {\n        outline: none; }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY .styles_row-title-text__1MuhU {\n        padding-right: 3em; }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY .styles_icon-wrapper__2cftw {\n        max-width: 25px;\n        max-height: 25px;\n        margin: 0;\n        padding: 0;\n        color: var(--arrow-color, black);\n        transform: rotate(0deg);\n        transition: transform var(--transition-duration, 0.3s);\n        position: absolute;\n        top: 13px;\n        right: 12px; }\n        .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY .styles_icon-wrapper__2cftw svg {\n          width: 100%;\n          height: 100%; }\n        .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY .styles_icon-wrapper__2cftw svg {\n          fill: var(--arrow-color, black); }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_closed__39w54 + .styles_row-content__QOGZd {\n        visibility: hidden; }\n        .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_closed__39w54 + .styles_row-content__QOGZd.styles_animate__3ecdr {\n          opacity: 0;\n          transition: height var(--transition-duration, 0.3s); }\n        .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_closed__39w54 + .styles_row-content__QOGZd.styles_static__3chYW {\n          display: none; }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_expanded__3elPy + .styles_row-content__QOGZd {\n        visibility: visible; }\n        .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_expanded__3elPy + .styles_row-content__QOGZd.styles_static__3chYW {\n          display: block; }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_expanded__3elPy .styles_icon-wrapper__2cftw {\n        transform: rotate(180deg); }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_expanding__2OAFB .styles_icon-wrapper__2cftw {\n        transform: rotate(180deg); }\n    .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-content__QOGZd {\n      overflow: hidden;\n      transition: height var(--transition-duration, 0.3s);\n      transition-timing-function: var(--timing-function, ease); }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-content__QOGZd .styles_row-content-text__2sgAB {\n        color: var(--row-content-color, black);\n        font-size: var(--row-content-text-size, medium);\n        padding: var(--row-content-padding-top, 0) var(--row-content-padding-right, 0) var(--row-content-padding-bottom, 0) var(--row-content-padding-left, 0); }\n");var b=function(t){f(n,r.PureComponent);var e=y(n);function n(){var t;s(this,n);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return u(v(t=e.call.apply(e,[this].concat(i))),"state",{isExpanded:!1,ref:r.createRef(),rowRef:r.createRef(),height:0,rowClassName:"closed"}),u(v(t),"finishTransition",(function(){var e=t.state.isExpanded;t.setState({rowClassName:e?"expanded":"closed"})})),u(v(t),"toggle",(function(e){t.setState((function(){return{isExpanded:e}}))})),u(v(t),"expand",(function(){t.setState((function(t){return{isExpanded:!t.isExpanded}}))})),u(v(t),"keyPress",(function(e){var n=e.keyCode?e.keyCode:e.which;switch(g.keyCodes[n]){case"space":case"return":e.preventDefault(),e.stopPropagation(),t.expand()}})),u(v(t),"setHeight",(function(){var e=t.state,n=e.ref,r=e.isExpanded,o=n.current.scrollHeight;t.setState({height:r?o:0})})),t}return l(n,[{key:"getSnapshotBeforeUpdate",value:function(t,e){var n=e.isExpanded,r=this.state.isExpanded,o=this.props.config,i=(o=void 0===o?{}:o).animate,a=void 0===i||i;return r!==n?{rowClassName:r?a?"expanding":"expanded":a?"closing":"closed"}:null}},{key:"componentDidUpdate",value:function(t,e,n){var r=this.props.config,o=(r=void 0===r?{}:r).animate,i=void 0===o||o;null!==n&&this.setState(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},n),i?this.setHeight:void 0)}},{key:"componentDidMount",value:function(){var t=this,e=this.state.rowRef;if(this.props.openOnload&&this.expand(),this.props.getRowOptions){var n={expand:function(){t.toggle(!0)},close:function(){t.toggle(!1)},scrollIntoView:function(t){t?e.current.scrollIntoView(t):e.current.scrollIntoView()}};this.props.getRowOptions(n)}}},{key:"render",value:function(){var t=this.props,e=t.data,n=e.title,o=e.content,i=t.config,a=(i=void 0===i?{}:i).animate,s=void 0===a||a,c=i.arrowIcon,l=i.expandIcon,u=i.collapseIcon,d=i.tabFocus,f=void 0!==d&&d,_=this.state,w=_.isExpanded,v=_.ref,m=_.height,y=_.rowClassName,g=_.rowRef,b={onClick:this.expand,role:"button","aria-expanded":w,"aria-controls":"react-faq-rowcontent-".concat(this.props.rowid),onKeyPress:this.keyPress,onKeyDown:this.keyPress};f&&(b.tabIndex=0);var x={role:"region",id:"react-faq-rowcontent-".concat(this.props.rowid),"aria-expanded":w,"aria-hidden":!w,onTransitionEnd:this.finishTransition};s&&(x.style={height:m});var k,O=["row-title",y,h["row-title"],h[y],f?"":h["no-tabfocus"]].filter(Boolean).join(" ");k=l&&u?w?u:l:c||r.createElement("div",{dangerouslySetInnerHTML:{__html:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="36px" height="36px"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/><path d="M0 0h24v24H0V0z" fill="none"/></svg>'},className:"arrow-image ".concat(h["arrow-image"]),alt:"Expand arrow"});var q=[h["row-content"],"row-content",s?h.animate:h.static].join(" "),N=[h["row-content-text"],"row-content-text"].join(" "),S=o&&"string"==typeof o?r.createElement("div",{className:N,dangerouslySetInnerHTML:{__html:o}}):r.createElement("div",{className:N},o);return r.createElement("section",{className:"faq-row ".concat(h["faq-row"]),role:"listitem",ref:g},r.createElement("div",p({className:O},b),r.createElement("div",{className:"row-title-text ".concat(h["row-title-text"]),id:"react-faq-rowtitle-".concat(this.props.rowid)},n),r.createElement("span",{className:"icon-wrapper ".concat(h["icon-wrapper"]),"aria-hidden":"true"},k)),r.createElement("div",p({className:q},x,{ref:v}),S))}}]),n}();u(b,"propTypes",{config:a().object,data:a().object,rowid:a().number,getRowOptions:a().func,openOnload:a().bool});var x=function(t){f(n,r.PureComponent);var e=y(n);function n(){var t;s(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return u(v(t=e.call.apply(e,[this].concat(o))),"state",{rowsOption:[]}),t}return l(n,[{key:"componentDidMount",value:function(){this.props.getRowOptions&&this.props.getRowOptions(this.state.rowsOption)}},{key:"render",value:function(){var t=this,e=this.props.data||{},n=e.title,o=e.rows,i=void 0===o?[]:o,a=this.props,s=a.styles,c=void 0===s?{}:s,l=a.config,u=((l=void 0===l?{}:l).animate,l.openOnload),p={"--faq-bg-color":c.bgColor,"--title-text-color":c.titleTextColor,"--title-text-size":c.titleTextSize,"--row-title-color":c.rowTitleColor,"--row-title-text-size":c.rowTitleTextSize,"--row-content-color":c.rowContentColor,"--row-content-text-size":c.rowContentTextSize,"--row-content-padding-top":c.rowContentPaddingTop,"--row-content-padding-bottom":c.rowContentPaddingBottom,"--row-content-padding-right":c.rowContentPaddingRight,"--row-content-padding-left":c.rowContentPaddingLeft,"--arrow-color":c.arrowColor,"--transition-duration":c.transitionDuration,"--timing-function":c.timingFunc},d="faq-row-wrapper ".concat(h["faq-row-wrapper"]),f="faq-title ".concat(h["faq-row"]),_="faq-body ".concat(h["row-body"]);return r.createElement("div",{className:d,style:p},n?r.createElement("section",{className:f},r.createElement("h2",null,n)):null,i.length?r.createElement("section",{className:_,role:"list"},i.map((function(e,n){return r.createElement(b,{openOnload:u===n,data:e,key:n,rowid:n+1,config:t.props.config,getRowOptions:function(e){return t.state.rowsOption[n]=e}})}))):null)}}]),n}();u(x,"propTypes",{data:a().object,styles:a().object,config:a().object,getRowOptions:a().func});var k=x,O=n(5930),q=n(86),N=n(4320),S=n(9211),E=new o.Z({en:{pagetitle:"Help",more:"Still have questions?",data:{title:"FAQ",rows:[{title:"Where can I find the presentation?",content:"From the calendar you can click on a particular event which will show you further information about that event, \n                including the presentation."},{title:"Do I need to register?",content:"Yes, you need to register for the Zoom Webinar for each part of army week, regardless if you are participating virtually \n                    or in-person. You would have received an Outlook calendar invite for each part of Army Week that included a link to \n                    register for the Zoom Webinar."},{title:"Where can I see the event's location?",content:"From the calendar you can click on a particular event which will show you further information about that event, \n                including the location."},{title:"How can I contact the event's organizer?",content:"If you have questions not answered by this FAQ you can contact the organizers at (email address)."},{title:"What Covid protocols are in place?",content:" Non-Medical Masks are required indoors throughout Army Week, except by speakers and panelists, and when eating or drinking."},{title:"Do in-person events have limited capacity?",content:"Yes. Participation in-person is limited to those invited to participate in person as per the Army Week 2022 Operation Order."},{title:"Are all events open to anyone?",content:"No. Participation is limited to those invited as per the Army Week 2022 Operation Order. "}]}},fr:{pagetitle:"Aide",more:"Encore des questions?",data:{title:"FAQ",rows:[{title:"Ou est-ce-que je peux trouver le présentation?",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,\n                  ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.\n                  In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.\n                  Fusce sed commodo purus, at tempus turpis."},{title:"Est-ce que j'ai besion de m'inscrire?",content:"Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor."},{title:"How can I contact the event organizer",content:"Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.\n                Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.\n                Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.\n                Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. "},{title:"Are COVID Protocols in place?",content:"Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.\n                Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.\n                Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.\n                Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. "},{title:"Do events have limited capacity?",content:"Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.\n                Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.\n                Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.\n                Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. "}]}}}),Y={titleTextColor:"green",rowTitleColor:"black",rowContentTextSize:"16px"},Z={};function P(){return r.createElement(O.Z,null,r.createElement("div",{style:{margin:"0 auto",maxWidth:"var(--size-content)",padding:"0 var(--size-gutter)"}},r.createElement(N.ZP,{container:!0,spacing:2},r.createElement(N.ZP,{item:!0,xs:22},r.createElement(q.Z,{title:E.pagetitle})),r.createElement(N.ZP,{item:!0,xs:12},r.createElement(S.Z,{m:5},r.createElement(k,{data:E.data,styles:Y,config:Z}))),r.createElement(S.Z,{m:"auto",mb:7},r.createElement("h5",null,E.more),"(Phone Number/Email to contact)"))))}}}]);
//# sourceMappingURL=component---src-pages-faq-js-968dd8b45cd80c299365.js.map