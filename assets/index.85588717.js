var N=Object.defineProperty,j=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var F=(e,r,o)=>r in e?N(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,C=(e,r)=>{for(var o in r||(r={}))D.call(r,o)&&F(e,o,r[o]);if(k)for(var o of k(r))H.call(r,o)&&F(e,o,r[o]);return e},y=(e,r)=>j(e,E(r));import{j as M,r as c,s as l,N as g,F as P,R,a as f,b as I,c as T,B as W}from"./vendor.2d82116c.js";const O=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))d(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&d(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}};O();var p=[{title:"default",background:"#ECECEC",text:"#5463FF",accent:"#FFC300",highlight:"#FF1818"},{title:"bluered",background:"#333C83",text:"#EAEA7F",accent:"#F24A72",highlight:"#FDAF75"},{title:"google",background:"#6BCB77",text:"#fff",accent:"#4D96FF",highlight:"#FF6B6B"},{title:"watermelon",background:"#C0EDA6",text:"#FD5D5D",accent:"#FFF7BC",highlight:"#FF8080"},{title:"violetta",background:"#FBD6D2",text:"#444",accent:"#CE49BF",highlight:"#F190B7"}];const t=M.exports.jsx,i=M.exports.jsxs,m=c.exports.createContext({theme:p[0],themeHandler:()=>{}}),U=({children:e})=>{const[r,o]=c.exports.useState(p[0]),d=n=>{o(n)};return t(m.Provider,{value:{theme:r,themeHandler:d},children:e})},z=e=>(c.exports.useContext(m),i(V,{children:[t("h2",{children:"SideBar"}),i(g,{className:r=>r.isActive?"active":"",to:"/",children:[t("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",children:i("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",children:[t("path",{d:"M5 12H3l9-9l9 9h-2M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"}),t("path",{d:"M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6"})]})}),"Home"]}),i(g,{to:"/movies/all",children:[t("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",children:t("path",{d:"M3 9h18M3 9v6m0-6V5a2 2 0 0 1 2-2h4m12 6v6m0-6V5a2 2 0 0 0-2-2h-4M3 15v4a2 2 0 0 0 2 2h4m-6-6h18m0 0v4a2 2 0 0 1-2 2h-4M9 3v18M9 3h6M9 21h6m0-18v18",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),"All\xA0movies"]}),i(g,{className:r=>r.isActive?"active":"",to:"/settings",children:[t("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",children:i("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",children:[t("path",{d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37c1 .608 2.296.07 2.572-1.065z"}),t("circle",{cx:"12",cy:"12",r:"3"})]})}),"Settings"]})]})),V=l.nav`
  height: 100vh;
  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding: 10px;
  border-right: 1px solid;
  color: ${e=>e.theme.text};
  background-color: ${e=>e.theme.background};
  h2 {
    padding: 10px 20px;
  }
  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    text-indent: 5px;
    justify-content: flex-start;
    padding: 10px 20px;
    border-radius: 15px;
    color: ${e=>e.theme.text};
    svg {
      width: 16px;
      height: 16px;
      transition: 0ms;
    }
  }
  .active {
    background: ${e=>e.theme.text};
    color: ${e=>e.theme.background};
  }
`,x=c.exports.createContext({user:null,userHandler:()=>{}}),q=({children:e})=>{const[r,o]=c.exports.useState(null),d=n=>{o(n)};return t(x.Provider,{value:{user:r,userHandler:d},children:e})},v=l.div`
  display: flex;
  flex-direction: column;
`,b=l.h2`
  border-bottom: 1px solid;
  display: block;
  color: ${e=>e.theme.accent};
  /* background-color: ${e=>e.theme.background}; */
`;function G({}){const{user:e}=c.exports.useContext(x);return i(v,{children:[t(b,{children:"IndexPage"}),i("p",{children:["Hello, ",e==null?void 0:e.username,"!"]})]})}const K=e=>{const{user:r}=c.exports.useContext(x);return i(v,{children:[t(b,{children:"MoviesAll"}),i("p",{children:["Watch all the movies , ",r==null?void 0:r.username,"!"]})]})},J=e=>{const[r,o]=c.exports.useState(null),{themeHandler:d,theme:n}=c.exports.useContext(m),{userHandler:s,user:a}=c.exports.useContext(x),w=h=>{const u=h.target.value;a?s(y(C({},a),{username:u})):(o("No user found"),s({id:0,username:u,firstName:"Alo",lastName:"Dobri",email:"alo@alo.com",isAdmin:!1}))},L=h=>{const u=h.target.value,S=p.filter($=>$.title===u);d(S[0])};return i(v,{children:[t(b,{children:"Settings"}),r?t(Y,{children:r}):"",i(A,{children:[t(B,{children:"User"}),t(X,{type:"text",onChange:w,value:a==null?void 0:a.username})]}),i(A,{children:[t(B,{children:"Theme"}),t(Q,{onChange:L,children:p.map(h=>t("option",{value:h.title,children:h.title},h.title))})]})]})},A=l.div`
  display: flex;
  flex-direction: column;
  width: min-content;
  margin: 10px 0;
`,B=l.label`
  font-size: 18px;
  color: ${e=>e.theme.highlight};
`,Q=l.select`
  border-radius: 10px;
  border: none;
  padding: 5px 20px;
  font-size: 18px;
  color: ${e=>e.theme.text};
  background-color: ${e=>e.theme.background};
`,X=l.input`
  border-radius: 10px;
  border: none;
  padding: 5px 10px;
  font-size: 18px;
  color: ${e=>e.theme.text};
  background-color: ${e=>e.theme.background};
`,Y=l.p`
  color: crimson;
  font-weight: 600;
  background-color: rgba(252, 57, 96, 0.466);
  padding: 10px;
  margin: 10px 0;
  border-radius: 10px;
`;function Z(){const{theme:e}=c.exports.useContext(m);return t("div",{className:"App",children:t(P,{theme:e,children:t(q,{children:i(_,{children:[t(z,{}),t(ee,{children:i(R,{children:[t(f,{path:"/settings",element:t(J,{})}),t(f,{path:"/movies/all",element:t(K,{})}),t(f,{path:"/",element:t(G,{})})]})})]})})})})}const _=l.div`
  display: flex;
`,ee=l.main`
  padding: 20px;
  width: 100%;
`;I.render(t(T.StrictMode,{children:t(W,{children:t(U,{children:t(Z,{})})})}),document.getElementById("root"));
