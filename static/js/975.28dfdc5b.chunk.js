"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[975],{8975:function(e,a,s){s.r(a),s.d(a,{default:function(){return R}});var n=s(885),r=s(3504),o=s(5925),i=(0,o.QM)({container:{display:"flex",alignItems:"center",columnGap:10,"& img":{width:50,height:50,objectFit:"cover",borderRadius:"50%"}}}),t=s(184),l=function(e){var a=i();return(0,t.jsxs)("div",{className:a.container,children:[(0,t.jsx)("img",{src:e.avatar,alt:""}),(0,t.jsx)(r.OL,{to:"/dialogs/"+e.id,children:e.name})]})},c=(0,o.QM)((function(e){return{message:{width:"max-content",padding:"6px 18px",backgroundColor:e.colors.backgroundContainer,borderRadius:e.sizes.borderRadius}}})),d=function(e){var a=e.text,s=c();return(0,t.jsx)("div",{className:s.message,children:a})},u=(s(1413),s(1795)),g=s(7058),m=s(3068),h=s(8938),f=(s(2591),s(8862)),p=(0,m.Z)(f.e),x=function(e){var a=(0,g.Fg)();return(0,t.jsx)(u.J9,{initialValues:{message:""},onSubmit:function(a,s){var n=s.setSubmitting,r=s.resetForm;e.sendMessage(a.message),n(!1),r()},children:function(e){var s=e.dirty,n=e.handleSubmit,r=e.isValid,o=e.isSubmitting;return(0,t.jsx)(u.l0,{children:(0,t.jsx)(u.gN,{component:p,name:"message",placeholder:"Enter Your message",onKeyPress:function(e){13!==e.charCode||e.shiftKey||(e.preventDefault(),n())},validate:h.Nf,disabled:!r||o||!s,style:{backgroundColor:a.colors.backgroundContainer}})})}})},b=(0,o.QM)((function(e){return{container:{display:"grid",gridTemplateColumns:"4fr 8fr",height:"calc(100vh - ".concat(e.sizes.headerHeight,"px)"),padding:20},dialogs:{"&>*:not(:last-child)":{marginBottom:10}},chat:{rowGap:15,display:"flex",flexFlow:"column",justifyContent:"flex-end",overflow:"hidden"},chatWrapper:{display:"flex",position:"relative",overflow:"hidden"},messagesBlock:{display:"flex",width:"100%",flexFlow:"column-reverse nowrap",overflowY:"auto",overflowX:"hidden","&>*:not(:first-child)":{marginBottom:10},"&::-webkit-scrollbar":{width:5,backgroundColor:e.colors.scrollbarBackground,borderRadius:"5px"},"&::-webkit-scrollbar-thumb":{backgroundColor:e.colors.scrollbar,borderRadius:"5px"},"&::-webkit-scrollbar-track":{borderRadius:"5px"}},magicBox:function(a){return{display:"block",position:"absolute",height:"100%",width:5,top:0,right:0,opacity:a.scrollBarIsShow?0:1,backgroundColor:e.colors.background,transition:"opacity .1s"}}}}),{name:"Dialogs"}),v=s(2791),j=s(7954),k=s(1440),w=function(e){var a=e.dialogs,s=e.messages,r=e.sendMessage,o=(0,v.useState)(!1),i=(0,n.Z)(o,2),c=i[0],u=i[1],g=b({scrollBarIsShow:c}),m=a.map((function(e){return(0,t.jsx)(l,{name:"".concat(e.firstName," ").concat(e.lastName),id:e.id,avatar:e.avatar},e.id)})),h=s.map((function(e){return(0,t.jsx)(d,{text:e.text},e.id)})).reverse(),f=(0,v.useRef)(null);function p(){u(!0)}function w(){u(!1)}return(0,v.useEffect)((function(){(0,k.X)(f,"end")}),[s]),(0,t.jsx)(j.S,{children:(0,t.jsxs)("div",{className:g.container,children:[(0,t.jsx)("div",{className:g.dialogs,children:m}),(0,t.jsxs)("div",{className:g.chat,children:[(0,t.jsxs)("div",{className:g.chatWrapper,onTouchMove:p,onTouchEnd:w,onMouseEnter:p,onMouseLeave:w,children:[(0,t.jsx)("span",{className:g.magicBox}),(0,t.jsxs)("div",{className:g.messagesBlock,children:[(0,t.jsx)("div",{ref:f}),h]})]}),(0,t.jsx)(x,{sendMessage:r})]})]})})},y=s(2807),C=s(8687),N=s(1548),M=s(7781),B=function(e){return e.dialogs.dialogsData},S=function(e){return e.dialogs.msgData},R=(0,M.qC)((0,C.$j)((function(e){return{dialogs:B(e),messages:S(e)}}),{sendMessage:y.b}),N.Z)(w)}}]);
//# sourceMappingURL=975.28dfdc5b.chunk.js.map