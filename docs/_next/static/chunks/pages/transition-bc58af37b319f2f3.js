(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[579],{7204:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/transition",function(){return t(8526)}])},7301:function(e,n,t){"use strict";t.d(n,{pT:function(){return l},lW:function(){return c},oA:function(){return o},eR:function(){return s}});var r=t(9520);class i extends r.ZP{constructor(){super("playerModelsDatabase"),this.version(1).stores({models:"++id, item"})}}let a=new i,o=async e=>{let n=e.name.split("."),t=n[n.length-1];if("vrm"!==t)throw Error("is not vrm file");try{await a.models.add({item:e})}catch(e){throw Error("file load error.\n".concat(e))}},s=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new URL("".concat(window.location.origin,"/transition"));e.searchParams.append("url",n.toString()),location.href=e.toString()},c=async e=>{if(!window||!window.parent||window.parent===window)return;let n=await a.models.toArray();if(n.length<=0)return;let t=n[n.length-1];window.parent.postMessage(t,e)},l=async e=>new Promise((n,t)=>{let r=new URLSearchParams(e.searchParams);if(r.has("url")){let e=document.createElement("iframe");e.src=r.get("url"),e.width="".concat(0),e.height="".concat(0),document.body.appendChild(e),window.addEventListener("message",async t=>{t.data.item&&(n(t.data),e.remove())},!1)}else t("file load error.")})},8526:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var r=t(5893),i=t(9008),a=t.n(i),o=t(7301),s=t(7294);function c(){return(0,s.useEffect)(()=>{(0,o.lW)("*")},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:"Create Next App"}),(0,r.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)("main",{children:(0,r.jsx)("h1",{children:"transition"})})]})}}},function(e){e.O(0,[722,774,888,179],function(){return e(e.s=7204)}),_N_E=e.O()}]);