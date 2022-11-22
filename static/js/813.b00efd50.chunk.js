"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[813],{9515:function(e,r,n){n.d(r,{Z:function(){return a}});n(2791);var t=n(6580),i=n(184);function a(){return(0,i.jsxs)("div",{sx:{display:"flex",justifyContent:"center","& > * + *":{marginLeft:"2em"}},children:[(0,i.jsx)(t.Z,{}),(0,i.jsx)(t.Z,{})]})}},5813:function(e,r,n){n.r(r);var t=n(1413),i=n(885),a=n(2791),o=n(7689),s=n(1087),c=n(952),l=n(6910),u=n(9515),d=n(5017),v=n(6650),h=n(184);r.default=function(){var e=(0,a.useState)(""),r=(0,i.Z)(e,2),n=r[0],f=r[1],m=(0,a.useState)(""),x=(0,i.Z)(m,2),p=x[0],g=x[1],Z=(0,l.F_)(c.I8),k=(0,i.Z)(Z,2),j=k[0],w=k[1],S=(0,o.s0)();(0,a.useEffect)((function(){w?u.Z:j&&S("/")}),[j,w,S]);var b={justifyContent:"mid",flexWrap:"wrap",listStyle:"none",padding:2.5,margin:.5,ml:92,mr:92,pl:8,pb:4};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(v.Z,{component:"ul",sx:(0,t.Z)({},b),children:[(0,h.jsx)("li",{children:(0,h.jsx)("p",{children:"Please Log In"})}),(0,h.jsx)("li",{children:(0,h.jsx)(d.Z,{required:!0,id:"outlined-required",label:"E-mail Address",value:n,onChange:function(e){return f(e.target.value)}})}),(0,h.jsx)("li",{children:(0,h.jsx)(d.Z,{id:"outlined-password-input",label:"Password",type:"password",autoComplete:"current-password",value:p,onChange:function(e){return g(e.target.value)}})}),(0,h.jsx)("li",{children:(0,h.jsx)("button",{onClick:function(){return(0,c.LE)(n,p)},children:"Login"})})]}),(0,h.jsxs)(v.Z,{component:"ul",sx:(0,t.Z)({},b),children:[(0,h.jsx)("li",{children:(0,h.jsx)("p",{children:"Login with Google"})}),(0,h.jsx)("li",{children:(0,h.jsx)("button",{className:"login__btn login__google",onClick:c.qj,children:"Login with Google"})})]}),(0,h.jsx)(v.Z,{component:"ul",sx:(0,t.Z)({},b),children:(0,h.jsxs)("li",{children:["Don't have an account? ",(0,h.jsx)(s.rU,{to:"/register",children:"Register"})," now."]})})]})}},6580:function(e,r,n){n.d(r,{Z:function(){return N}});var t=n(168),i=n(3366),a=n(7462),o=n(2791),s=n(8182),c=n(4419),l=n(2554),u=n(9853),d=n(7254),v=n(6863),h=n(5878),f=n(1217);function m(e){return(0,f.Z)("MuiCircularProgress",e)}(0,h.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var x,p,g,Z,k,j,w,S,b=n(184),y=["className","color","disableShrink","size","style","thickness","value","variant"],C=44,P=(0,l.F4)(k||(k=x||(x=(0,t.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),D=(0,l.F4)(j||(j=p||(p=(0,t.Z)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))),M=(0,v.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:function(e,r){var n=e.ownerState;return[r.root,r[n.variant],r["color".concat((0,u.Z)(n.color))]]}})((function(e){var r=e.ownerState,n=e.theme;return(0,a.Z)({display:"inline-block"},"determinate"===r.variant&&{transition:n.transitions.create("transform")},"inherit"!==r.color&&{color:(n.vars||n).palette[r.color].main})}),(function(e){return"indeterminate"===e.ownerState.variant&&(0,l.iv)(w||(w=g||(g=(0,t.Z)(["\n      animation: "," 1.4s linear infinite;\n    "]))),P)})),F=(0,v.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:function(e,r){return r.svg}})({display:"block"}),L=(0,v.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:function(e,r){var n=e.ownerState;return[r.circle,r["circle".concat((0,u.Z)(n.variant))],n.disableShrink&&r.circleDisableShrink]}})((function(e){var r=e.ownerState,n=e.theme;return(0,a.Z)({stroke:"currentColor"},"determinate"===r.variant&&{transition:n.transitions.create("stroke-dashoffset")},"indeterminate"===r.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(function(e){var r=e.ownerState;return"indeterminate"===r.variant&&!r.disableShrink&&(0,l.iv)(S||(S=Z||(Z=(0,t.Z)(["\n      animation: "," 1.4s ease-in-out infinite;\n    "]))),D)})),N=o.forwardRef((function(e,r){var n=(0,d.Z)({props:e,name:"MuiCircularProgress"}),t=n.className,o=n.color,l=void 0===o?"primary":o,v=n.disableShrink,h=void 0!==v&&v,f=n.size,x=void 0===f?40:f,p=n.style,g=n.thickness,Z=void 0===g?3.6:g,k=n.value,j=void 0===k?0:k,w=n.variant,S=void 0===w?"indeterminate":w,P=(0,i.Z)(n,y),D=(0,a.Z)({},n,{color:l,disableShrink:h,size:x,thickness:Z,value:j,variant:S}),N=function(e){var r=e.classes,n=e.variant,t=e.color,i=e.disableShrink,a={root:["root",n,"color".concat((0,u.Z)(t))],svg:["svg"],circle:["circle","circle".concat((0,u.Z)(n)),i&&"circleDisableShrink"]};return(0,c.Z)(a,m,r)}(D),R={},_={},I={};if("determinate"===S){var q=2*Math.PI*((C-Z)/2);R.strokeDasharray=q.toFixed(3),I["aria-valuenow"]=Math.round(j),R.strokeDashoffset="".concat(((100-j)/100*q).toFixed(3),"px"),_.transform="rotate(-90deg)"}return(0,b.jsx)(M,(0,a.Z)({className:(0,s.Z)(N.root,t),style:(0,a.Z)({width:x,height:x},_,p),ownerState:D,ref:r,role:"progressbar"},I,P,{children:(0,b.jsx)(F,{className:N.svg,ownerState:D,viewBox:"".concat(22," ").concat(22," ").concat(C," ").concat(C),children:(0,b.jsx)(L,{className:N.circle,style:R,ownerState:D,cx:C,cy:C,r:(C-Z)/2,fill:"none",strokeWidth:Z})})}))}))}}]);
//# sourceMappingURL=813.b00efd50.chunk.js.map