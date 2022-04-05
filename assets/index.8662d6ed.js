var _=Object.defineProperty,U=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var L=(t,r,o)=>r in t?_(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,C=(t,r)=>{for(var o in r||(r={}))T.call(r,o)&&L(t,o,r[o]);if(A)for(var o of A(r))V.call(r,o)&&L(t,o,r[o]);return t},k=(t,r)=>U(t,R(r));import{j as $,r as l,s as d,N as y,u as P,F as I,R as W,a as w,b as O,c as z,B as Z}from"./vendor.288e5ba0.js";const q=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))p(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const b of s.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&p(b)}).observe(document,{childList:!0,subtree:!0});function o(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function p(i){if(i.ep)return;i.ep=!0;const s=o(i);fetch(i.href,s)}};q();const h="/dar_tasks-sansevieria";var F=[{title:"default",background:"#ECECEC",text:"#5463FF",accent:"#FFC300",highlight:"#FF1818"},{title:"bluered",background:"#333C83",text:"#EAEA7F",accent:"#F24A72",highlight:"#FDAF75"},{title:"google",background:"#6BCB77",text:"#fff",accent:"#4D96FF",highlight:"#FF6B6B"},{title:"watermelon",background:"#C0EDA6",text:"#FD5D5D",accent:"#FFF7BC",highlight:"#FF8080"},{title:"violetta",background:"#FBD6D2",text:"#444",accent:"#CE49BF",highlight:"#F190B7"}];const e=$.exports.jsx,n=$.exports.jsxs,G=$.exports.Fragment,M=l.exports.createContext({theme:F[0],themeHandler:()=>{}}),K=({children:t})=>{const[r,o]=l.exports.useState(F[0]),p=i=>{o(i)};return e(M.Provider,{value:{theme:r,themeHandler:p},children:t})},f=l.exports.createContext({user:null,userHandler:()=>{}}),J=({children:t})=>{const[r,o]=l.exports.useState(null),p=i=>{o(i)};return e(f.Provider,{value:{user:r,userHandler:p},children:t})},Q=t=>{l.exports.useContext(M);const{user:r}=l.exports.useContext(f);return n(X,{children:[e("h2",{children:"SideBar"}),n(y,{className:o=>o.isActive?"active":"",to:h+"/",children:[e("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",children:n("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",children:[e("path",{d:"M5 12H3l9-9l9 9h-2M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"}),e("path",{d:"M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6"})]})}),"Home"]}),n(y,{to:h+"/movies/all",children:[e("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",children:e("path",{d:"M3 9h18M3 9v6m0-6V5a2 2 0 0 1 2-2h4m12 6v6m0-6V5a2 2 0 0 0-2-2h-4M3 15v4a2 2 0 0 0 2 2h4m-6-6h18m0 0v4a2 2 0 0 1-2 2h-4M9 3v18M9 3h6M9 21h6m0-18v18",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),"All\xA0movies"]}),r?n(G,{children:[n(y,{className:o=>o.isActive?"active":"",to:h+"/profile",children:[e("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",children:e("path",{fill:"currentColor",d:"M1.5 4v1.5c0 4.15 2.21 7.78 5.5 9.8V20h15v-2c0-2.66-5.33-4-8-4h-.25C9 14 5 10 5 5.5V4m9 0a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4Z"})}),"Profile"]}),n(y,{className:o=>o.isActive?"active":"",to:h+"/settings",children:[e("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",children:n("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",children:[e("path",{d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37c1 .608 2.296.07 2.572-1.065z"}),e("circle",{cx:"12",cy:"12",r:"3"})]})}),"Settings"]})]}):n(y,{className:o=>o.isActive?"active":"",to:h+"/login",children:[e("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",children:e("path",{fill:"currentColor",d:"M10 17v-3H3v-4h7V7l5 5l-5 5m0-15h9a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2v-2h2v2h9V4h-9v2H8V4a2 2 0 0 1 2-2Z"})}),"Login"]})]})},X=d.nav`
  height: 100vh;
  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding: 10px;
  border-right: 1px solid;
  color: ${t=>t.theme.text};
  background-color: ${t=>t.theme.background};
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
    color: ${t=>t.theme.text};
    svg {
      width: 16px;
      height: 16px;
      transition: 0ms;
    }
  }
  .active {
    background: ${t=>t.theme.text};
    color: ${t=>t.theme.background};
  }
`,S=d.div`
  display: flex;
  flex-direction: column;
`,N=d.h2`
  border-bottom: 1px solid;
  display: block;
  color: ${t=>t.theme.accent};
  /* background-color: ${t=>t.theme.background}; */
`,g=d.div`
  display: flex;
  flex-direction: column;
  width: min-content;
  margin: 10px 0;
`,x=d.label`
  font-size: 18px;
  color: ${t=>t.theme.highlight};
`,Y=d.select`
  border-radius: 10px;
  border: none;
  padding: 5px 20px;
  font-size: 18px;
  color: ${t=>t.theme.text};
  background-color: ${t=>t.theme.background};
`,v=d.input`
  border-radius: 10px;
  border: none;
  padding: 5px 10px;
  font-size: 18px;
  color: ${t=>t.theme.text};
  background-color: ${t=>t.theme.background};
`,ee=d.p`
  color: crimson;
  font-weight: 600;
  background-color: rgba(252, 57, 96, 0.466);
  padding: 10px;
  margin: 10px 0;
  border-radius: 10px;
`,j=d.button`
  border: 1px solid;
  color: ${t=>t.theme.text};
  background: ${t=>t.theme.background};
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  :hover {
    color: ${t=>t.theme.background};
    background: ${t=>t.theme.text};
  }
`,te=d.hr`
  border: 2px solid;
  color: ${t=>t.theme.text};
`;function re({}){const{user:t}=l.exports.useContext(f);return n(S,{children:[e(N,{children:"IndexPage"}),n("p",{children:["Hello, ",t==null?void 0:t.username,"!"]})]})}const ne=t=>{const{user:r,userHandler:o}=l.exports.useContext(f),[p,i]=l.exports.useState(""),[s,b]=l.exports.useState("");let a=P();const u=m=>{m.preventDefault(),o({id:0,username:p,password:s,avatar:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Dmitry_Medvedev_govru_official_photo_2.jpg/248px-Dmitry_Medvedev_govru_official_photo_2.jpg",email:"bearboy1965@union.com",firstName:"Medved",lastName:"Ev",isAdmin:!1}),a(`${h}/`)};return n(S,{children:[e(N,{children:"Login"}),n("form",{onSubmit:m=>u(m),children:[n(g,{children:[e(x,{children:"Username"}),e(v,{type:"text",onChange:m=>i(m.target.value),value:r==null?void 0:r.username})]}),n(g,{children:[e(x,{children:"Password"}),e(v,{type:"password",onChange:m=>b(m.target.value),value:r==null?void 0:r.password})]}),e(j,{type:"submit",children:"Submit"})]})]})},oe=t=>{const{user:r}=l.exports.useContext(f);return n(S,{children:[e(N,{children:"MoviesAll"}),n("p",{children:["Watch all the movies , ",r==null?void 0:r.username,"!"]})]})},ie=t=>{const{user:r}=l.exports.useContext(f);return n(S,{children:[e(N,{children:"Profile"}),n(ae,{children:[n(le,{children:[e("h3",{children:r==null?void 0:r.username}),n("p",{children:["first name: ",e(B,{children:r==null?void 0:r.firstName})]}),n("p",{children:["last name: ",e(B,{children:r==null?void 0:r.lastName})]}),n("p",{children:["email: ",e(B,{children:r==null?void 0:r.email})]})]}),e(ce,{children:e("img",{src:r==null?void 0:r.avatar,alt:""})})]})]})},ae=d.div`
  display: flex;
  flex-direction: row;
`,le=d.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`,ce=d.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  img {
    width: 250px;
    height: 250px;
    border-radius: 100%;
    object-fit: cover;
    object-position: top;
  }
`,B=d.span`
  font-weight: bold;
`,se=t=>{const{themeHandler:r,theme:o}=l.exports.useContext(M),{userHandler:p,user:i}=l.exports.useContext(f),[s,b]=l.exports.useState(""),[a,u]=l.exports.useState({id:0,firstName:"first name",lastName:"last name",email:"email@email.com",isAdmin:!1,username:"username",password:"password"});let m=P();return l.exports.useEffect(()=>{i&&u(i)},[]),n(S,{children:[e(N,{children:"Settings"}),s?e(ee,{children:s}):"",n("form",{onSubmit:c=>{c.preventDefault(),p(a),m(`${h}/`)},children:[n(g,{children:[e(x,{children:"Theme"}),e(Y,{onChange:c=>{const E=c.target.value,H=F.filter(D=>D.title===E);r(H[0])},children:F.map(c=>e("option",{value:c.title,children:c.title},c.title))})]}),e(te,{}),n(g,{children:[e(x,{children:"Username"}),e(v,{type:"text",onChange:c=>u(k(C({},a),{username:c.target.value})),value:a==null?void 0:a.username})]}),n(g,{children:[e(x,{children:"First name"}),e(v,{type:"text",onChange:c=>u(k(C({},a),{firstName:c.target.value})),value:a==null?void 0:a.firstName})]}),n(g,{children:[e(x,{children:"Last name"}),e(v,{type:"text",onChange:c=>u(k(C({},a),{lastName:c.target.value})),value:a==null?void 0:a.lastName})]}),n(g,{children:[e(x,{children:"Email"}),e(v,{type:"email",onChange:c=>u(k(C({},a),{email:c.target.value})),value:a==null?void 0:a.email})]}),n(g,{children:[e(x,{children:"Avatar"}),e(v,{type:"text",onChange:c=>u(k(C({},a),{avatar:c.target.value})),value:a==null?void 0:a.avatar})]}),e(j,{type:"submit",children:"Submit"})]})]})};function de(){const{theme:t}=l.exports.useContext(M);return e("div",{className:"App",children:e(I,{theme:t,children:e(J,{children:n(he,{children:[e(Q,{}),e(pe,{children:n(W,{children:[e(w,{path:h+"/settings",element:e(se,{})}),e(w,{path:h+"/movies/all",element:e(oe,{})}),e(w,{path:h+"/profile",element:e(ie,{})}),e(w,{path:h+"/login",element:e(ne,{})}),e(w,{path:h+"/",element:e(re,{})})]})})]})})})})}const he=d.div`
  display: flex;
`,pe=d.main`
  padding: 20px;
  width: 100%;
`;O.render(e(z.StrictMode,{children:e(Z,{children:e(K,{children:e(de,{})})})}),document.getElementById("root"));
