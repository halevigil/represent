(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{68:function(e,t,a){e.exports=a(87)},73:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),c=a.n(o),i=(a(73),a(134)),l=a(64),s=a(137),m=a(45),u=a(23),p=a(22),f=a(51),h=a(89),d=a(13),b=a(124),g=a(125),E=a(126),v=a(127),j=a(44),y=a.n(j),w=a(138),k=a(135),O=a(61),x=a.n(O),S=a(136),I=Object(h.a)(function(e){return{root:{flexGrow:1,position:"fixed",width:"100%",zIndex:1100},bar:{background:"linear-gradient(45deg, ".concat(e.palette.primary.main," 30%, ").concat(e.palette.secondary.main," 90%)"),width:"100%"},menuButton:{marginRight:e.spacing(2)},title:{marginRight:e.spacing(2)},search:Object(f.a)({position:"absolute",right:"2rem",borderRadius:e.shape.borderRadius,backgroundColor:Object(d.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(d.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(f.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:120,"&:focus":{width:200}})}}),N=function(){var e=I(),t=Object(n.useState)(!0),a=Object(p.a)(t,1)[0],o=Object(n.useState)(null),c=Object(p.a)(o,2),i=c[0],l=c[1],s=Boolean(i),m=Object(n.useState)(""),u=Object(p.a)(m,2),f=u[0],h=u[1],d=function(){return l(null)};return Object(n.useEffect)(function(){console.log(f)}),r.a.createElement("div",{className:e.root},r.a.createElement(b.a,{className:e.bar,position:"static"},r.a.createElement(g.a,null,r.a.createElement(E.a,{variant:"h6",className:e.title},"Represent."),r.a.createElement("div",{className:e.search},r.a.createElement("div",{className:e.searchIcon},r.a.createElement(x.a,null)),r.a.createElement(S.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"Search"},onChange:function(e){return h(e.target.value)}})),a&&r.a.createElement("div",null,r.a.createElement(v.a,{"aria-label":"Account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){return l(e.currentTarget)},color:"inherit"},r.a.createElement(y.a,null)),r.a.createElement(k.a,{id:"menu-appbar",anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:s,onClose:d},r.a.createElement(w.a,{onClick:d},"Profile"),r.a.createElement(w.a,{onClick:d},"My account"))))))},C=a(128),A=a(129),z=a(132),B=a(130),_=a(133),Q=a(131),R=Object(h.a)(function(e){return{card:{minWidth:275,justifyContent:"center",alignContent:"center",flexGrow:1},title:{fontSize:14},pos:{marginBottom:12},links:{justifyContent:"center",alignItems:"center",textDecoration:"none",color:e.palette.primary.main},avatar:{justifyContent:"center",alignSelf:"center",marginBottom:12},party:{fontSize:14,float:"left"}}}),T=function(e){console.log("RepCard Mount: ",{props:e});var t=R(),a=e.member;return e.senate&&console.log(e.senate.senate[0]),r.a.createElement(C.a,{item:!0,xs:!0},r.a.createElement(A.a,{className:t.card},r.a.createElement(B.a,null,r.a.createElement(E.a,{className:t.party,color:"textSecondary",gutterBottom:!0},a.state," ",a.party),r.a.createElement(m.b,{className:t.links,to:"/profile"},r.a.createElement(C.a,{container:!0,justify:"center",alignItems:"center"},r.a.createElement(Q.a,{className:t.avatar},r.a.createElement(y.a,null))),r.a.createElement(E.a,{variant:"h5",component:"h2"},a.first_name," ",a.last_name)),r.a.createElement(E.a,{className:t.pos,color:"textSecondary"},a.title),r.a.createElement(E.a,{variant:"body2",component:"p"},r.a.createElement("i",null,"Summary..."))),r.a.createElement(z.a,{className:t.links},r.a.createElement(_.a,{rel:"noopener noreferrer",target:"_blank",href:"https://twitter.com/".concat(a.twitter_account),size:"small"},"Twitter"),r.a.createElement(_.a,{rel:"noopener noreferrer",target:"_blank",href:"https://facebook.com/".concat(a.facebook_account),size:"small"},"Facebook"),r.a.createElement(_.a,{rel:"noopener noreferrer",target:"_blank",href:"https://youtube.com/".concat(a.youtube_account),size:"small"},"YouTube"),r.a.createElement(_.a,{rel:"noopener noreferrer",target:"_blank",href:a.url,size:"small"},"Website"))))},P=Object(h.a)(function(e){return{root:{padding:e.spacing(3,2),flexGrow:1,position:"relative",top:60},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}),D=function(e){var t=P(),a=Object(n.useState)(),o=Object(p.a)(a,2),c=o[0],i=o[1],l={headers:{"X-API-Key":"JSp1AQhdSIuQQssE07bf5bsDT7HTpPDVQLAda1nx"},mode:"cors"};Object(n.useEffect)(function(){console.log(c),c||fetch("https://api.propublica.org/congress/v1/116/senate/members.json",l).then(function(e){return e.json()}).then(function(e){return i({senate:e.results[0].members})}).catch(function(e){return console.error(e)})});return r.a.createElement("div",{className:t.root},r.a.createElement(E.a,{variant:"h2",gutterBottom:!0},"Senate"),r.a.createElement(C.a,{container:!0,spacing:3,justify:"center",alignItems:"center"},c&&c.senate.map(function(e,t){return r.a.createElement(T,{key:t,member:e})})))},G=Object(h.a)(function(e){return{root:{padding:e.spacing(3,2),flexGrow:1,position:"relative",top:60},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}),F=function(e){var t=G(),a=Object(n.useState)(),o=Object(p.a)(a,2),c=o[0],i=o[1],l={headers:{"X-API-Key":"JSp1AQhdSIuQQssE07bf5bsDT7HTpPDVQLAda1nx"},mode:"cors"};Object(n.useEffect)(function(){console.log(c),c||fetch("https://api.propublica.org/congress/v1/116/house/members.json",l).then(function(e){return e.json()}).then(function(e){return i({house:e.results[0].members})}).catch(function(e){return console.error(e)})});return r.a.createElement("div",{className:t.root},r.a.createElement(E.a,{variant:"h2",gutterBottom:!0},"House"),r.a.createElement(C.a,{container:!0,spacing:3,justify:"center",alignItems:"center"},c&&c.house.map(function(e,t){return r.a.createElement(T,{key:t,member:e})})))},J=a(65),L=Object(h.a)(function(e){return{root:{padding:e.spacing(3,2),flexGrow:1,position:"relative",top:60}}}),W=function(e){var t=L();return r.a.createElement("div",null,r.a.createElement(J.a,{className:t.root},r.a.createElement(E.a,{variant:"h5",component:"h3"},"This is a sheet of paper."),r.a.createElement(E.a,{component:"p"},"Paper can be used to build surface or other elements for your application.")))},H=function(e){return r.a.createElement(m.a,null,r.a.createElement(u.a,{path:"/",component:N}),r.a.createElement(u.a,{exact:!0,path:"/",component:D}),r.a.createElement(u.a,{exact:!0,path:"/",component:F}),r.a.createElement(u.a,{path:"/profile",component:W}))},M=(a(86),Object(l.a)({palette:{primary:{main:"#0d47a1"},secondary:{main:"#d50000"},background:{default:"#F6F8FA"}}})),K=function(){return r.a.createElement(s.a,{theme:M},r.a.createElement("div",{className:"App"},r.a.createElement(i.a,null),r.a.createElement(H,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[68,1,2]]]);
//# sourceMappingURL=main.cf68255c.chunk.js.map