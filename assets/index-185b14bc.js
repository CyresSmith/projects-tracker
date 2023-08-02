import{t,L as M,j as o,N as L,r as c,O as D}from"./index-f8117f00.js";import{L as T}from"./Logo-6290b49f.js";import{n}from"./emotion-styled.browser.esm-b4901e7f.js";import{F as I,D as V}from"./style-6e84a5e1.js";import{G as $,I as N,B as H}from"./IconButton-6354dc2c.js";import{C as F,a as U,u as _,T as j,M as R,S as X}from"./ScheduleCall-b7973bf5.js";import{p as A,a as G,P as B}from"./PasswordInput-a377413a.js";import{F as Z,c as Y,a as x,b as q,d as J,I as w,B as K}from"./Button-38854837.js";import{u}from"./user-c6727005.js";const Q=n.aside`
  width: 244px;
  height: 100vh;
  padding: ${t.space[4]} ${t.space[3]};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${t.colors.white};
  position: fixed;
`,tt=n(M)`
  margin-bottom: ${t.space[4]};
`,et=n.p`
  display: block;
  width: 100%;
`,ot=n.span`
  color: ${t.colors.secondary.dark};
  font-size: ${t.fontSizes.l};
  font-weight: ${t.fontWeights.regular};
`,rt=n.span`
  display: block;
  width: 100%;
  padding: ${t.space[2]} ${t.space[3]};
  display: flex;
  justify-content: space-between;
  position: relative;
  color: ${t.colors.primary.regular};
  background-color: ${t.colors.primary.light};
  border-radius: ${t.radii.m};
  cursor: pointer;
  margin-top: ${t.space[2]};
`,st=n.span`
  font-size: ${t.fontSizes.m};
  font-weight: ${t.fontWeights.regular};
`,at=({open:e=!1})=>o.jsxs(rt,{children:[o.jsx(st,{children:"Unlock"}),o.jsx(I,{size:24})]}),nt=()=>o.jsxs(et,{children:[o.jsx(ot,{children:"Project"}),o.jsx(at,{})]}),it=n.ul`
  width: 100%;
  margin-top: ${t.space[4]};
  display: flex;
  flex-direction: column;
  gap: ${t.space[2]};
`,lt=n(L)`
  display: flex;
  align-items: center;
  padding: ${t.space[2]} ${t.space[3]};
  color: ${t.colors.secondary.dark};
  background-color: transparent;
  border-radius: ${t.radii.m};
  transition: ${t.transition.primary};
  font-size: ${t.fontSizes.m};
  font-weight: ${t.fontWeights.regular};
  line-height: ${t.lineHeights.m};

  :hover {
    color: ${t.colors.primary.regular};
    background-color: ${t.colors.primary.light};
  }

  &.active {
    color: ${t.colors.white};
    background-color: ${t.colors.primary.regular};
  }

  svg {
    margin-right: ${t.space[2]};
  }
`,ct=({name:e,link:r,icon:s})=>o.jsxs(lt,{to:r,children:[o.jsx(s,{size:20})," ",e]});function dt(e){return $({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm-1 7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4zm10 0a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v7zm1-10h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1z"}}]})(e)}function pt(e){return $({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"}}]})(e)}const ht=[{name:"Dashboard",link:"/",icon:dt},{name:"Chat",link:"/chat",icon:pt}],ut=()=>o.jsx(it,{children:ht.map(e=>o.jsx("li",{children:o.jsx(ct,{name:e.name,link:e.link,icon:e.icon})},e.name))}),gt=()=>o.jsxs(Q,{children:[o.jsx(tt,{to:"/",children:o.jsx(T,{color:!0,width:196,height:48})}),o.jsx(nt,{}),o.jsx(ut,{})]}),xt=n.div`
  display: flex;
`,ft=n.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  margin-left: 244px;
`;const mt=({events:e=[],setDate:r=null,afterToday:s=!1})=>{const[a,i]=c.useState(null),[l,d]=c.useState([]);return c.useEffect(()=>{r&&r(a)},[a,r]),c.useEffect(()=>{e.length!==0&&e.map(p=>d(h=>[...h,new Date(p.date)]))},[e]),o.jsx(F,{children:o.jsx(V,{mode:"multiple",selected:l,onSelect:i,fixedWeeks:!0,showOutsideDays:!0,ISOWeek:!0})})},yt=({width:e="24",height:r="24",color:s="#215DF6"})=>o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:r,viewBox:"0 0 24 24",fill:"none",children:[o.jsx("path",{d:"M12 6.43994V9.76994",stroke:s,strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round"}),o.jsx("path",{d:"M12.0199 2C8.3399 2 5.3599 4.98 5.3599 8.66V10.76C5.3599 11.44 5.0799 12.46 4.7299 13.04L3.4599 15.16C2.6799 16.47 3.2199 17.93 4.6599 18.41C9.4399 20 14.6099 20 19.3899 18.41C20.7399 17.96 21.3199 16.38 20.5899 15.16L19.3199 13.04C18.9699 12.46 18.6899 11.43 18.6899 10.76V8.66C18.6799 5 15.6799 2 12.0199 2Z",stroke:s,strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round"}),o.jsx("path",{d:"M15.3299 18.8198C15.3299 20.6498 13.8299 22.1498 11.9999 22.1498C11.0899 22.1498 10.2499 21.7698 9.64992 21.1698C9.04992 20.5698 8.66992 19.7298 8.66992 18.8198",stroke:s,strokeWidth:"1.5",strokeMiterlimit:"10"})]}),jt=n.div`
  position: absolute;
  top: -12px;
  left: -12px;
  height: 24px;
  width: 24px;
  background-color: ${t.colors.danger};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${t.radii.round};
  box-shadow: ${t.shadow.primary};
`,$t=n.span`
  font-weight: ${t.fontWeights.bold};
  color: ${t.colors.white};
`,wt=({number:e=0})=>o.jsx(jt,{children:o.jsx($t,{children:e})}),bt=n.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${t.space[3]};
  position: relative;
  margin-bottom: ${t.space[4]};

  button[id='bellButton'] {
    width: 52px;
    height: 52px;
    background-color: ${t.colors.primary.light};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,vt=n.div`
  position: relative;
`,kt=n.img`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  cursor: pointer;
`,Ct=n(U.div)`
  position: absolute;
  top: calc(100% + ${t.space[2]});
  padding: ${t.space[3]};
  background-color: ${t.colors.white};
  border-radius: ${t.radii.l};
  box-shadow: 0px 4px 18px 0px rgba(0, 0, 0, 0.08);
  z-index: 2;
  transform-origin: right top;
`,z=({children:e,isOpen:r})=>_(r,{from:{opacity:0,transform:"scale(0)"},enter:{opacity:1,transform:"scale(1)",config:{duration:150}},leave:{opacity:0,transform:"scale(0)",config:{duration:150}}})((a,i)=>o.jsx(o.Fragment,{children:i?o.jsx(Ct,{style:a,children:e}):null}));function St(e){return $({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M5.33409 4.54491C6.3494 3.63637 7.55145 2.9322 8.87555 2.49707C9.60856 3.4128 10.7358 3.99928 12 3.99928C13.2642 3.99928 14.3914 3.4128 15.1245 2.49707C16.4486 2.9322 17.6506 3.63637 18.6659 4.54491C18.2405 5.637 18.2966 6.90531 18.9282 7.99928C19.5602 9.09388 20.6314 9.77679 21.7906 9.95392C21.9279 10.6142 22 11.2983 22 11.9993C22 12.7002 21.9279 13.3844 21.7906 14.0446C20.6314 14.2218 19.5602 14.9047 18.9282 15.9993C18.2966 17.0932 18.2405 18.3616 18.6659 19.4536C17.6506 20.3622 16.4486 21.0664 15.1245 21.5015C14.3914 20.5858 13.2642 19.9993 12 19.9993C10.7358 19.9993 9.60856 20.5858 8.87555 21.5015C7.55145 21.0664 6.3494 20.3622 5.33409 19.4536C5.75952 18.3616 5.7034 17.0932 5.0718 15.9993C4.43983 14.9047 3.36862 14.2218 2.20935 14.0446C2.07212 13.3844 2 12.7002 2 11.9993C2 11.2983 2.07212 10.6142 2.20935 9.95392C3.36862 9.77679 4.43983 9.09388 5.0718 7.99928C5.7034 6.90531 5.75952 5.637 5.33409 4.54491ZM13.5 14.5974C14.9349 13.7689 15.4265 11.9342 14.5981 10.4993C13.7696 9.0644 11.9349 8.57277 10.5 9.4012C9.06512 10.2296 8.5735 12.0644 9.40192 13.4993C10.2304 14.9342 12.0651 15.4258 13.5 14.5974Z"}}]})(e)}function Pt(e){return $({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M160 256a16 16 0 0116-16h144V136c0-32-33.79-56-64-56H104a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h160a56.06 56.06 0 0056-56V272H176a16 16 0 01-16-16zm299.31-11.31l-80-80a16 16 0 00-22.62 22.62L409.37 240H320v32h89.37l-52.68 52.69a16 16 0 1022.62 22.62l80-80a16 16 0 000-22.62z"}}]})(e)}const Bt=n.div`
  width: 330px;

  p {
    display: flex;
    flex-direction: column;
  }
`,zt=n.div`
  display: flex;
  gap: ${t.space[2]};
  align-items: center;
`,Et=n.img`
  width: 64px;
  height: 64px;
  border-radius: ${t.radii.round};
  object-fit: cover;
`,Ot=n.span`
  color: ${t.colors.black};
  font-size: ${t.fontSizes.l};
  font-weight: ${t.fontWeights.bold};
`,Wt=n.span`
  color: ${t.colors.secondary.regular};
  font-size: ${t.fontSizes.m};
  font-weight: ${t.fontWeights.light};
`,Rt=n.div`
  display: flex;
  flex-direction: column;
  gap: ${t.space[3]};
  margin-top: ${t.space[3]};

  button {
    padding: ${t.space[2]};
    width: 100%;
    border-radius: ${t.radii.m};

    span {
      font-size: ${t.fontSizes.l};
    }

    :hover:not(:disabled) {
      background-color: ${t.colors.primary.bg};

      span {
        color: ${t.colors.primary.regular};
      }

      svg {
        fill: ${t.colors.primary.regular};
      }
    }
  }

  button[id='logout'] {
    svg {
      transform: scale(-1, 1);
    }
  }
`,Mt=({user:e,setShowModal:r,setPopUpShow:s})=>{const a=()=>{s(null),r(!0)};return o.jsxs(Bt,{children:[o.jsxs(zt,{children:[o.jsx(Et,{src:e.img,alt:e.name}),o.jsxs("p",{children:[o.jsx(Ot,{children:e.name}),o.jsx(Wt,{children:e.email})]})]}),o.jsxs(Rt,{children:[o.jsx(j,{iconSize:20,icon:St,color:t.colors.black,onClick:a,children:"Settings"}),o.jsx(j,{iconSize:20,icon:Pt,color:t.colors.black,id:"logout",children:"Logout"})]})]})},Lt=n.ul`
  display: flex;
  flex-direction: column;
  gap: ${t.space[3]};
`,Dt=n.p`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${t.space[3]};
`,Tt=n.span`
  display: block;
  width: 260px;
  color: ${e=>{switch(e.status){case"started":return t.colors.primary.regular;case"completed":return t.colors.progress.path;case"planned":return t.colors.warning;default:return t.colors.black}}};
  font-size: ${t.fontSizes.s};
  font-weight: ${t.fontWeights.light};
`,It=n.span`
  color: ${t.colors.secondary.dark};
  font-size: ${t.fontSizes.xs};
  font-weight: ${t.fontWeights.light};
  display: flex;
  gap: ${t.space[1]};
`,v=[{id:"1",text:"A call is scheduled for 10:00 a.m. tomorrow, 05/20/23",status:"planned",date:"2023-07-25"},{id:"2",text:"Stage “User Flows” started",status:"started",date:"2023-07-21"},{id:"3",text:"Stage “UX researches” completed",status:"completed",date:"2023-07-21"},{id:"4",text:"Stage “Strategy session” completed",status:"completed",date:"2023-07-18"}],Vt=()=>o.jsx(Lt,{children:v.map(e=>o.jsx("li",{children:o.jsxs(Dt,{children:[o.jsx(Tt,{status:e.status,children:e.text}),o.jsxs(It,{children:[o.jsx("span",{children:new Date(e.date).toTimeString().slice(0,5)}),o.jsx("span",{children:new Date(e.date).toLocaleDateString()})]})]})},e.id))}),Nt=n(Z)`
  width: 545px;
`,Ht=n.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${t.space[4]};
`,Ft=n.div`
  width: 370px;
  display: flex;
  flex-direction: column;
  gap: calc((27px + ${t.space[2]}) + ${t.space[3]});

  input[id='name'] {
    margin-top: calc(27px + ${t.space[2]});
  }
`,Ut=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    span {
      color: ${t.colors.primary.regular};
      font-size: ${t.fontSizes.l};
      line-height: ${t.lineHeights.m};
    }
  }
`,_t=n.img`
  width: 100px;
  height: 100px;
  border-radius: ${t.radii.round};
  margin-bottom: ${t.space[2]};
`;n.div`
  display: flex;
  gap: ${t.space[3]};

  p {
    flex: 50%;
  }
`;const Xt=Y().shape({name:x().min(3,"Must be at least 3 characters").max(20,"Must be max 20 characters"),phone:x().matches(A,"Must be phone in international format"),email:x().email("Must be valid email"),password:x().min(8,"Must be at least 8 characters").max(16,"Must be max 16 characters").matches(G,"Must be at least one capital letter and one number"),confirmPassword:x().oneOf([q("password"),null],"Passwords must match!")}),At={name:u.name,phone:u.phone,email:u.email,password:"",confirmPassword:""},Gt=()=>o.jsx(J,{initialValues:At,validationSchema:Xt,onSubmit:(e,{resetForm:r})=>{r()},children:o.jsxs(Nt,{children:[o.jsxs(Ht,{children:[o.jsxs(Ut,{children:[o.jsx(_t,{src:u.img}),o.jsx(j,{children:"Change photo"})]}),o.jsxs(Ft,{children:[o.jsx(w,{type:"name",label:"Name",placeholder:"name",id:"name"}),o.jsx(w,{type:"tel",id:"phone",label:"Phone",placeholder:"+3801234567"}),o.jsx(w,{type:"email",id:"email",label:"Email",placeholder:"example@email.com"}),o.jsx(B,{id:"password",label:"Password",placeholder:"********"}),o.jsx(B,{id:"confirmPassword",label:"Confirm password",placeholder:"********"})]})]}),o.jsx(K,{type:"submit",children:"Save Changes"})]})}),Zt=()=>{const[e,r]=c.useState(null),[s,a]=c.useState(!1),i=l=>{r(d=>{switch(!0){case!d:return l;case(d&&d!==l):return l;default:return null}})};return c.useEffect(()=>(window.addEventListener("keydown",l=>{l.key==="Escape"&&r(null)}),()=>{window.removeEventListener("keydown",l=>{l.key==="Escape"&&r(null)})}),[]),o.jsxs(o.Fragment,{children:[o.jsxs(bt,{children:[o.jsxs(vt,{children:[o.jsx(N,{id:"bellButton",icon:yt,iconSize:24,onClick:()=>i("notificationsOpen")}),v.length>0&&o.jsx(wt,{number:v.length})]}),o.jsx(kt,{src:u.img,onClick:()=>i("profileOpen")}),o.jsx(z,{isOpen:e==="notificationsOpen",children:o.jsx(Vt,{})}),o.jsx(z,{isOpen:e==="profileOpen",children:o.jsx(Mt,{user:u,setShowModal:a,setPopUpShow:r})})]}),o.jsx(R,{toggleModal:()=>a(!1),isOpen:s,title:"Settings",children:o.jsx(Gt,{})})]})},Yt=n.ul`
  margin: ${t.space[2]} 0 ${t.space[3]};
  display: flex;
  flex-direction: column;
  gap: ${t.space[2]};
`,qt=n.li`
  height: 70px;
  padding: ${t.space[2]} ${t.space[3]};
  background-color: ${t.colors.secondary.bg};
  border-radius: ${t.radii.m};
  display: flex;
  align-items: center;
  justify-content: flex-start;
`,Jt=n.p`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  margin-left: calc(6px + ${t.space[3]});

  ::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: ${t.radii.round};
    background-color: ${t.colors.primary.regular};
    position: absolute;
    top: 50%;
    left: calc(-6px - ${t.space[3]});
    transform: translateY(-50%);
  }
`,Kt=n.span`
  /* color: var(--black, #222); */
  font-size: ${t.fontSizes.m};
  font-weight: ${t.fontWeights.regular};
`,Qt=n.span`
  /* color: var(--black, #222); */
  font-size: ${t.fontSizes.s};
  font-weight: ${t.fontWeights.light};
  opacity: 0.4;
`,te=({event:e})=>o.jsx(qt,{children:o.jsxs(Jt,{children:[o.jsx(Kt,{children:e.name}),o.jsx(Qt,{children:new Date(e.date).toLocaleDateString()})]})}),ee=({events:e=[]})=>o.jsx(Yt,{children:e.map(r=>o.jsx(te,{event:r},r.id))});/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var k=function(e,r){return k=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,a){s.__proto__=a}||function(s,a){for(var i in a)a.hasOwnProperty(i)&&(s[i]=a[i])},k(e,r)};function oe(e,r){k(e,r);function s(){this.constructor=e}e.prototype=r===null?Object.create(r):(s.prototype=r.prototype,new s)}var C=function(){return C=Object.assign||function(r){for(var s,a=1,i=arguments.length;a<i;a++){s=arguments[a];for(var l in s)Object.prototype.hasOwnProperty.call(s,l)&&(r[l]=s[l])}return r},C.apply(this,arguments)};function re(e,r){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(s[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)r.indexOf(a[i])<0&&(s[a[i]]=e[a[i]]);return s}var se=100,ae=100,E=50,S=50,P=50;function O(e){var r=e.className,s=e.counterClockwise,a=e.dashRatio,i=e.pathRadius,l=e.strokeWidth,d=e.style;return c.createElement("path",{className:r,style:Object.assign({},d,ie({pathRadius:i,dashRatio:a,counterClockwise:s})),d:ne({pathRadius:i,counterClockwise:s}),strokeWidth:l,fillOpacity:0})}function ne(e){var r=e.pathRadius,s=e.counterClockwise,a=r,i=s?1:0;return`
      M `+S+","+P+`
      m 0,-`+a+`
      a `+a+","+a+" "+i+" 1 1 0,"+2*a+`
      a `+a+","+a+" "+i+" 1 1 0,-"+2*a+`
    `}function ie(e){var r=e.counterClockwise,s=e.dashRatio,a=e.pathRadius,i=Math.PI*2*a,l=(1-s)*i;return{strokeDasharray:i+"px "+i+"px",strokeDashoffset:(r?-l:l)+"px"}}var le=function(e){oe(r,e);function r(){return e!==null&&e.apply(this,arguments)||this}return r.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},r.prototype.getPathRadius=function(){return E-this.props.strokeWidth/2-this.getBackgroundPadding()},r.prototype.getPathRatio=function(){var s=this.props,a=s.value,i=s.minValue,l=s.maxValue,d=Math.min(Math.max(a,i),l);return(d-i)/(l-i)},r.prototype.render=function(){var s=this.props,a=s.circleRatio,i=s.className,l=s.classes,d=s.counterClockwise,p=s.styles,h=s.strokeWidth,f=s.text,g=this.getPathRadius(),m=this.getPathRatio();return c.createElement("svg",{className:l.root+" "+i,style:p.root,viewBox:"0 0 "+se+" "+ae,"data-test-id":"CircularProgressbar"},this.props.background?c.createElement("circle",{className:l.background,style:p.background,cx:S,cy:P,r:E}):null,c.createElement(O,{className:l.trail,counterClockwise:d,dashRatio:a,pathRadius:g,strokeWidth:h,style:p.trail}),c.createElement(O,{className:l.path,counterClockwise:d,dashRatio:m*a,pathRadius:g,strokeWidth:h,style:p.path}),f?c.createElement("text",{className:l.text,style:p.text,x:S,y:P},f):null)},r.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},r}(c.Component);function ce(e){e.children;var r=re(e,["children"]);return c.createElement("div",{"data-test-id":"CircularProgressbarWithChildren"},c.createElement("div",{style:{position:"relative",width:"100%",height:"100%"}},c.createElement(le,C({},r)),e.children?c.createElement("div",{"data-test-id":"CircularProgressbarWithChildren__children",style:{position:"absolute",width:"100%",height:"100%",marginTop:"-100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},e.children):null))}function de(e){var r=e.rotation,s=e.strokeLinecap,a=e.textColor,i=e.textSize,l=e.pathColor,d=e.pathTransition,p=e.pathTransitionDuration,h=e.trailColor,f=e.backgroundColor,g=r==null?void 0:"rotate("+r+"turn)",m=r==null?void 0:"center center";return{root:{},path:y({stroke:l,strokeLinecap:s,transform:g,transformOrigin:m,transition:d,transitionDuration:p==null?void 0:p+"s"}),trail:y({stroke:h,strokeLinecap:s,transform:g,transformOrigin:m}),text:y({fill:a,fontSize:i}),background:y({fill:f})}}function y(e){return Object.keys(e).forEach(function(r){e[r]==null&&delete e[r]}),e}const pe=n.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: ${t.space[3]};
`,he=n.div`
  width: 220px;
  height: 220px;
`,ue=n.p`
  display: flex;
  flex-direction: column;
  align-items: center;
`,ge=n.span`
  color: ${t.colors.black};
  text-align: center;
  font-family: ${t.fonts.body};
  font-size: 32px;
  font-weight: ${t.fontWeights.regular};
  letter-spacing: 0.64px;
`,xe=n.span`
  display: block;
  width: 110px;
  color: ${t.colors.secondary.dark};
  text-align: center;
  font-family: ${t.fonts.body};
  font-size: ${t.fontSizes.l};
  font-weight: ${t.fontWeights.light};
  letter-spacing: 0.36px;
`,W=10,fe=()=>o.jsx(pe,{children:o.jsx(he,{children:o.jsx(ce,{value:W,strokeWidth:12,styles:de({pathColor:t.colors.progress.path,trailColor:t.colors.progress.trail}),children:o.jsxs(ue,{children:[o.jsxs(ge,{children:[W,"%"]}),o.jsx(xe,{children:"Ready to launch"})]})})})}),me=n.aside`
  width: 433px;
  height: 100%;
  background-color: ${t.colors.white};
  padding: ${t.space[4]} ${t.space[3]};
`,b=[{id:1,name:"Call about User Flows",date:"2023-07-19"}],ye=()=>{const[e,r]=c.useState(!1),[s,a]=c.useState([]);return c.useEffect(()=>{b&&a(b)},[]),o.jsxs(me,{children:[o.jsx(Zt,{}),o.jsx(mt,{events:s}),o.jsx(j,{icon:H,onClick:()=>r(!0),children:"Schedule a call"}),o.jsx(ee,{events:b}),o.jsx(fe,{}),o.jsx(R,{toggleModal:()=>r(!1),isOpen:e,title:"Schedule a call",children:o.jsx(X,{events:s,setEventsState:a})})]})},je=n.header`
  width: 100%;
  padding: ${t.space[4]};
`,$e=n.h1`
  font-size: ${t.fontSizes.xxxl};
  font-weight: ${t.fontWeights.regular};
  margin-bottom: ${t.space[2]};
`,we=n.h2`
  font-size: ${t.fontSizes.m};
  font-weight: ${t.fontWeights.light};
  color: ${t.colors.secondary.dark};
`,be={name:"Alexa A"},ve=()=>o.jsxs(je,{children:[o.jsxs($e,{children:["Welcome, ",be.name,"."]}),o.jsx(we,{children:"Have a good day!"})]}),ke=()=>o.jsxs(xt,{children:[o.jsx(gt,{}),o.jsx(ft,{children:o.jsxs(o.Fragment,{children:[o.jsx(ve,{}),o.jsx(D,{})]})}),o.jsx(ye,{})]}),Me=ke;export{Me as default};
