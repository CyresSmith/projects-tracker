import{t as e,j as t,r as l}from"./index-35cc4ac2.js";import{n as o}from"./emotion-styled.browser.esm-c7072f6a.js";import{T,M as V,S as O,s as x}from"./stages-3b8c6d7f.js";import{i as q}from"./style-fc250dee.js";import{G as W,b as A,B as E}from"./IconButton-63199a28.js";import{B as X}from"./Button-8255a22b.js";import{C as N}from"./CalendarIcon-8b08ad00.js";import{C as U,S as G,a as _}from"./SectionBox.styled-7a10138e.js";import"./user-c6727005.js";const Y=o.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: ${e.space[3]};
`,J=o.li`
  /* width: calc((100% - ${e.space[4]}) / 2); */
  width: 322px;
  height: 300px;
  border-radius: ${e.radii.m};
  background-color: ${e.colors.white};
  padding: ${e.space[3]};
  overflow: hidden;
  position: relative;
  cursor: pointer;
`,K=o.span`
  display: flex;
  width: 100%;
  height: ${e.space[3]};
  align-items: center;
  justify-content: flex-end;
  padding: 0 ${e.space[2]};
  color: ${e.colors.white};
  background-color: ${e.colors.primary.regular};
  position: absolute;
  top: 0;
  left: 0;
  font-size: ${e.fontSizes.xs};
`,Q=o.span`
  display: block;
  font-size: ${e.fontSizes.l};
  margin-top: ${e.space[2]};
  margin-bottom: ${e.space[2]};
`,ee=o.span`
  display: block;
  font-size: ${e.fontSizes.s};
  font-weight: ${e.fontWeights.light};
  line-height: ${e.lineHeights.m};
  margin-bottom: ${e.space[3]};
  opacity: 0.6;
`,te=o.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,B=o.h5`
  color: ${e.colors.black};
  font-size: ${e.fontSizes.m};
  line-height: ${e.lineHeights.m};
`,se=o.p`
  color: ${e.colors.black};
  font-size: ${e.fontSizes.s};
  font-weight: ${e.fontWeights.thin};
  line-height: ${e.lineHeights.l};
  margin-top: ${e.space[2]};
  margin-bottom: ${e.space[3]};
  opacity: 0.6;
  width: 440px;
`,oe=o.div`
  display: flex;
  width: 100%;
  gap: ${e.space[3]};
  margin-bottom: ${e.space[3]};

  div {
    flex: 50%;

    h5 {
      margin-bottom: ${e.space[1]};
    }
  }
`,re=o.ul`
  display: flex;
  flex-direction: column;
  gap: ${e.space[1]};
`,ne=o.a`
  color: ${e.colors.primary.regular};
  font-size: ${e.fontSizes.s};
  line-height: ${e.lineHeights.l};
  cursor: pointer;
  transition: ${e.transition.primary};

  :hover {
    color: ${e.colors.black};
  }
`,ie=o.div`
  h5 {
    margin-bottom: ${e.space[1]};
  }

  ul {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap: ${e.space[2]};

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: ${e.colors.primary.light};
      transition: ${e.transition.primary};

      span {
        margin-top: ${e.space[1]};
      }

      :hover {
        color: ${e.colors.primary.hover};
      }
    }
  }
`;o.div`
  margin-top: auto;
  height: 42px;
`;const ae=o.div`
  margin-top: ${e.space[3]};
`;function le(s){return W({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M128,40a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,40Zm45.66,61.66-40,40a8,8,0,0,1-11.32-11.32l40-40a8,8,0,0,1,11.32,11.32ZM96,16a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,16Z"}}]})(s)}const ce=o.span`
  display: block;
  font-size: ${e.fontSizes.s};
  font-weight: ${e.fontWeights.light};
  margin-bottom: ${e.space[3]};
  opacity: ${s=>s.active?1:.4};
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    display: flex;
    align-items: center;
  }

  svg {
    margin-right: ${e.space[1]};
  }
`,I=({active:s,dateStart:r,deadline:n,duration:f})=>{const c=d=>new Date(d).toLocaleDateString();return t.jsxs(ce,{active:s,children:[t.jsxs("span",{children:[t.jsx(N,{size:18,color:s?e.colors.primary.regular:e.colors.black}),c(r)," - ",c(n)]}),t.jsxs("span",{children:[t.jsx(le,{size:18,color:s?e.colors.warning:e.colors.black}),f," hours"]})]})},de=o.span`
  display: block;
  margin-bottom: ${e.space[3]};
`,he=o.span`
  font-size: ${e.fontSizes.s};
  font-weight: ${e.fontWeights.thin};
  display: flex;
  align-items: center;
  
  svg {
    margin-right: ${e.space[2]};
  }
`,pe=o.span`
  display: flex;
  flex-direction: column;
  gap: ${e.space[1]};
`,ge=o.span`
  font-size: ${e.fontSizes.s};
  font-weight: ${e.fontWeights.thin};
  display: flex;
  justify-content: space-between;
`,ue=o.span`
  display: flex;
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background-color: ${e.colors.progress.trail};
  position: relative;
`,xe=o.span`
  position: absolute;
  width: ${s=>`${s.progress}%`};
  top: 0;
  left: 0;
  display: block;
  height: 6px;
  border-radius: 3px;
  background-color: ${e.colors.progress.path};
`,R=({progress:s=0})=>t.jsxs(de,{children:[s===100&&t.jsxs(he,{children:[t.jsx(A,{size:24,color:e.colors.progress.path}),"Completed"]}),s!==100&&t.jsxs(pe,{children:[t.jsxs(ge,{children:[t.jsx("span",{children:"Progress"}),t.jsxs("span",{children:[s,"%"]})]}),t.jsx(ue,{children:t.jsx(xe,{progress:s})})]})]}),fe=o.span`
  display: flex;
  align-items: center;
`,me=o.span`
  font-size: ${e.fontSizes.s};
  font-weight: ${e.fontWeights.thin};
`,Ce=o.img`
  width: 36px;
  height: 36px;
  border-radius: ${e.radii.round};
  object-fit: cover;
  margin-right: ${e.space[2]};
`,Z=({img:s,name:r})=>t.jsxs(fe,{children:[t.jsx(Ce,{src:s,alt:r}),t.jsx(me,{children:r})]}),$e=o.div`
  margin-top: ${e.space[4]};
`,je=o.div`
  height: 294px;
`,Se=o.h5`
  color: ${e.colors.black};
  font-size: ${e.fontSizes.l};
  line-height: ${e.lineHeights.m};
  margin-bottom: ${e.space[2]};
`,we=({messages:s})=>t.jsxs($e,{children:[t.jsx(Se,{children:"Chat"}),t.jsx(je,{children:t.jsx(U,{messages:s})})]}),be=({stage:s})=>t.jsxs(te,{children:[t.jsxs("div",{children:[t.jsx(B,{children:"Description"}),t.jsx(se,{children:s.desc}),t.jsx(oe,{children:s.links.map(r=>t.jsxs("div",{children:[t.jsx(B,{children:r.name}),t.jsx(re,{children:r.linksArr.map(n=>t.jsx("li",{children:t.jsx(ne,{href:n.link,rel:"noopener noreferrer nofollow",target:"_blank",children:n.name})},n.name))})]},r.name))}),t.jsxs(ie,{children:[t.jsx(B,{children:"Files"}),t.jsx("ul",{children:s.files.map(r=>t.jsx("li",{children:t.jsxs("a",{href:r.link,rel:"noopener noreferrer nofollow",target:"_blank",children:[t.jsx(q,{size:83,color:"inherit"}),t.jsx("span",{children:r.name.slice(0,10)})]})},r.name))})]})]}),t.jsx("div",{children:t.jsx(X,{children:"Confirm"})})]}),De=({stage:s,progress:r,contact:n})=>{const[f,c]=l.useState(!1),[d,C]=l.useState([]);return t.jsxs(t.Fragment,{children:[t.jsx(I,{...s}),t.jsx(R,{progress:r}),t.jsx(Z,{...n}),t.jsxs(ae,{children:[t.jsx(T,{icon:E,onClick:()=>c(!0),children:"Schedule a call"}),t.jsx(we,{messages:s.chat.messages})]}),t.jsx(V,{toggleModal:()=>c(!1),isOpen:f,title:"Schedule a call",children:t.jsx(O,{events:d,setEventsState:C})})]})},ye=({stage:s})=>{const{name:r,desc:n,dateStart:f,deadline:c,contact:d}=s,[C,D]=l.useState(!1),k=()=>{D(!0)},v=new Date,z=new Date(c),$=new Date(f),m=()=>{const j=z-$,H=v-$,S=Math.round(H/j*100);return S>=100?100:S<=0?0:S},M=m()>0&&m()<100;return t.jsxs(t.Fragment,{children:[t.jsxs(J,{onClick:k,children:[M&&t.jsx(K,{children:"Active"}),t.jsxs("p",{children:[t.jsx(Q,{children:r}),t.jsxs(ee,{children:[n.slice(0,50),"..."]}),t.jsx(I,{...s}),t.jsx(R,{progress:m()}),t.jsx(Z,{...d})]})]}),t.jsx(V,{toggleModal:()=>D(!1),isOpen:C,title:r,duplex:!0,leftSide:t.jsx(be,{stage:s}),leftSideWidth:"auto",rightSide:t.jsx(De,{stage:s,progress:m(),contact:d}),rightSideWidth:"462px"})]})},Le=()=>t.jsx(Y,{children:x.map(s=>t.jsx(ye,{stage:s},s.id))}),F="130px",ke=o.ul`
  width: 1235px;
  height: 630px;
  display: flex;
  flex-shrink: 0;
  padding: ${e.space[4]};
  background-color: ${e.colors.white};
  border-radius: ${e.radii.l};
  overflow-x: scroll;
  cursor: ${s=>s.cursor};
`,ve=o.li`
  flex-shrink: 0;
  width: ${F};
  height: 490px;
  border-left: 1px dashed
    ${s=>s.isRequiredDate?e.colors.primary.regular:e.colors.secondary.regular};
  position: relative;
  background-color: ${s=>s.isRequiredDate?e.colors.primary.bg:"transparent"};

  :last-of-type {
    width: 1px;
  }
`,ze=o.h4`
  color: ${s=>s.isRequiredDate?e.colors.primary.regular:e.colors.secondary.regular};
  font-size: ${e.fontSizes.s};
  font-weight: ${s=>s.isRequiredDate?e.fontWeights.bold:e.fontWeights.light};
  line-height: ${e.lineHeights.m};
  position: absolute;
  bottom: calc(-21px - ${e.space[3]});
  left: -17px;
`,Me=o.div`
  width: calc(${F} * ${s=>s.duration});
  height: calc(490px / ${s=>s.numberOfStages});
  background-color: ${s=>{switch(!0){case s.status==="completed":return e.colors.progress.trail;case s.status==="active":return e.colors.primary.light;default:return e.colors.secondary.bg}}};
  position: absolute;
  top: calc((490px / ${s=>s.numberOfStages}) * ${s=>s.index});
  left: 0;
  border-radius: 0 calc((490px / ${s=>s.numberOfStages}) / 2)
    calc((490px / ${s=>s.numberOfStages}) / 2) 0;
  border-left: 4px solid
    ${s=>{switch(!0){case s.status==="completed":return e.colors.progress.path;case s.status==="active":return e.colors.primary.regular;default:return e.colors.secondary.dark}}};
  z-index: 2;
`,He=o.p`
  position: absolute;
  top: calc((490px / ${s=>s.numberOfStages}) - 50%);
  left: ${e.space[2]};
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
`,Be=o.span`
  color: ${s=>{switch(!0){case s.status==="completed":return e.colors.progress.path;case s.status==="active":return e.colors.primary.regular;default:return e.colors.secondary.dark}}};
  font-weight: ${e.fontWeights.light};
  margin-right: ${e.space[3]};
`,Te=o.span`
  color: ${e.colors.black};
  font-size: ${e.fontSizes.xs};
  font-weight: ${e.fontWeights.light};
  opacity: 0.4;
`,Ve=()=>{const[s,r]=l.useState([]),[n,f]=l.useState([]),[c,d]=l.useState(!1),[C,D]=l.useState(0),[k,v]=l.useState(0),[z,$]=l.useState("grab"),[m,M]=l.useState(!0),j=l.useRef(null);l.useEffect(()=>{if(x.length===0)return;const i=[...x].sort((a,p)=>new Date(a.dateStart)-new Date(p.dateStart));r(i);const{startDate:h,endDate:g}=i.reduce((a,p)=>{const w=new Date(p.dateStart),L=new Date(p.deadline);return(!a.startDate||w<a.startDate)&&(a.startDate=w),(!a.endDate||L>a.endDate)&&(a.endDate=L),a},{}),y=[],u=new Date(h);for(;u<=g;)y.push(new Date(u)),u.setDate(u.getDate()+1);f(y)},[x]),l.useEffect(()=>{const i=new Date,h=n.findIndex(g=>g.toDateString()===i.toDateString());m&&h!==-1&&j.current&&(j.current.scrollIntoView({inline:"center",behavior:"smooth"}),M(!1))},[m,n]);const H=i=>{d(!0),D(i.clientX),v(i.currentTarget.scrollLeft),$("grabbing")},S=()=>{d(!1),$("grab")},P=i=>{if(!c)return;const h=i.clientX-C;i.currentTarget.scrollLeft=k-h};return t.jsx(ke,{onMouseDown:H,onMouseMove:P,onMouseUp:S,cursor:z,children:n.map(i=>{const h=i.toLocaleDateString()===new Date().toLocaleDateString();return t.jsxs(ve,{ref:h?j:null,isRequiredDate:h,children:[t.jsx(ze,{isRequiredDate:h,children:new Date(i).toLocaleDateString().slice(0,-4)}),s.map((g,y)=>{const u=new Date,a=new Date(g.deadline),p=new Date(g.dateStart),w=()=>{switch(!0){case u>a:return"completed";case(u>p&&u<a):return"active";default:return"pending"}},L=b=>b.length>17?`${b.slice(0,17)}...`:b;if(i.getTime()===p.getTime()){const b=Math.floor((a-p)/864e5);return t.jsx(Me,{duration:b,numberOfStages:x.length,index:y,status:w(),children:t.jsxs(He,{numberOfStages:x.length,children:[t.jsx(Be,{status:w(),children:L(g.name)}),t.jsxs(Te,{children:[p.toLocaleDateString()," - ",a.toLocaleDateString()]})]})},g.id)}})]},i)})})},We=o.div`
  display: flex;
  gap: ${e.space[3]};

  button {
    span {
      font-size: ${e.fontSizes.l};
      font-weight: ${e.fontWeights.regular};
      line-height: normal;
      transition: ${e.transition.primary};
    }
  }

  svg {
    width: 24px;
    height: 24px;
  }
`,Ie=({width:s="24",height:r="24",color:n="inherit"})=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:s,height:r,viewBox:"0 0 24 25",fill:"none",children:[t.jsx("path",{d:"M21 6.5H3",stroke:n,strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M21 12.5H9",stroke:n,strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M12 18.5H3",stroke:n,strokeWidth:"1.5",strokeLinecap:"round"})]});function Re(s){return W({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M2.8 1L2.74967 0.99997C2.52122 0.999752 2.32429 0.999564 2.14983 1.04145C1.60136 1.17312 1.17312 1.60136 1.04145 2.14983C0.999564 2.32429 0.999752 2.52122 0.99997 2.74967L1 2.8V5.2L0.99997 5.25033C0.999752 5.47878 0.999564 5.67572 1.04145 5.85017C1.17312 6.39864 1.60136 6.82688 2.14983 6.95856C2.32429 7.00044 2.52122 7.00025 2.74967 7.00003L2.8 7H5.2L5.25033 7.00003C5.47878 7.00025 5.67572 7.00044 5.85017 6.95856C6.39864 6.82688 6.82688 6.39864 6.95856 5.85017C7.00044 5.67572 7.00025 5.47878 7.00003 5.25033L7 5.2V2.8L7.00003 2.74967C7.00025 2.52122 7.00044 2.32429 6.95856 2.14983C6.82688 1.60136 6.39864 1.17312 5.85017 1.04145C5.67572 0.999564 5.47878 0.999752 5.25033 0.99997L5.2 1H2.8ZM2.38328 2.01382C2.42632 2.00348 2.49222 2 2.8 2H5.2C5.50779 2 5.57369 2.00348 5.61672 2.01382C5.79955 2.05771 5.94229 2.20045 5.98619 2.38328C5.99652 2.42632 6 2.49222 6 2.8V5.2C6 5.50779 5.99652 5.57369 5.98619 5.61672C5.94229 5.79955 5.79955 5.94229 5.61672 5.98619C5.57369 5.99652 5.50779 6 5.2 6H2.8C2.49222 6 2.42632 5.99652 2.38328 5.98619C2.20045 5.94229 2.05771 5.79955 2.01382 5.61672C2.00348 5.57369 2 5.50779 2 5.2V2.8C2 2.49222 2.00348 2.42632 2.01382 2.38328C2.05771 2.20045 2.20045 2.05771 2.38328 2.01382ZM9.8 1L9.74967 0.99997C9.52122 0.999752 9.32429 0.999564 9.14983 1.04145C8.60136 1.17312 8.17312 1.60136 8.04145 2.14983C7.99956 2.32429 7.99975 2.52122 7.99997 2.74967L8 2.8V5.2L7.99997 5.25033C7.99975 5.47878 7.99956 5.67572 8.04145 5.85017C8.17312 6.39864 8.60136 6.82688 9.14983 6.95856C9.32429 7.00044 9.52122 7.00025 9.74967 7.00003L9.8 7H12.2L12.2503 7.00003C12.4788 7.00025 12.6757 7.00044 12.8502 6.95856C13.3986 6.82688 13.8269 6.39864 13.9586 5.85017C14.0004 5.67572 14.0003 5.47878 14 5.25033L14 5.2V2.8L14 2.74967C14.0003 2.52122 14.0004 2.32429 13.9586 2.14983C13.8269 1.60136 13.3986 1.17312 12.8502 1.04145C12.6757 0.999564 12.4788 0.999752 12.2503 0.99997L12.2 1H9.8ZM9.38328 2.01382C9.42632 2.00348 9.49222 2 9.8 2H12.2C12.5078 2 12.5737 2.00348 12.6167 2.01382C12.7995 2.05771 12.9423 2.20045 12.9862 2.38328C12.9965 2.42632 13 2.49222 13 2.8V5.2C13 5.50779 12.9965 5.57369 12.9862 5.61672C12.9423 5.79955 12.7995 5.94229 12.6167 5.98619C12.5737 5.99652 12.5078 6 12.2 6H9.8C9.49222 6 9.42632 5.99652 9.38328 5.98619C9.20045 5.94229 9.05771 5.79955 9.01382 5.61672C9.00348 5.57369 9 5.50779 9 5.2V2.8C9 2.49222 9.00348 2.42632 9.01382 2.38328C9.05771 2.20045 9.20045 2.05771 9.38328 2.01382ZM2.74967 7.99997L2.8 8H5.2L5.25033 7.99997C5.47878 7.99975 5.67572 7.99956 5.85017 8.04145C6.39864 8.17312 6.82688 8.60136 6.95856 9.14983C7.00044 9.32429 7.00025 9.52122 7.00003 9.74967L7 9.8V12.2L7.00003 12.2503C7.00025 12.4788 7.00044 12.6757 6.95856 12.8502C6.82688 13.3986 6.39864 13.8269 5.85017 13.9586C5.67572 14.0004 5.47878 14.0003 5.25033 14L5.2 14H2.8L2.74967 14C2.52122 14.0003 2.32429 14.0004 2.14983 13.9586C1.60136 13.8269 1.17312 13.3986 1.04145 12.8502C0.999564 12.6757 0.999752 12.4788 0.99997 12.2503L1 12.2V9.8L0.99997 9.74967C0.999752 9.52122 0.999564 9.32429 1.04145 9.14983C1.17312 8.60136 1.60136 8.17312 2.14983 8.04145C2.32429 7.99956 2.52122 7.99975 2.74967 7.99997ZM2.8 9C2.49222 9 2.42632 9.00348 2.38328 9.01382C2.20045 9.05771 2.05771 9.20045 2.01382 9.38328C2.00348 9.42632 2 9.49222 2 9.8V12.2C2 12.5078 2.00348 12.5737 2.01382 12.6167C2.05771 12.7995 2.20045 12.9423 2.38328 12.9862C2.42632 12.9965 2.49222 13 2.8 13H5.2C5.50779 13 5.57369 12.9965 5.61672 12.9862C5.79955 12.9423 5.94229 12.7995 5.98619 12.6167C5.99652 12.5737 6 12.5078 6 12.2V9.8C6 9.49222 5.99652 9.42632 5.98619 9.38328C5.94229 9.20045 5.79955 9.05771 5.61672 9.01382C5.57369 9.00348 5.50779 9 5.2 9H2.8ZM9.8 8L9.74967 7.99997C9.52122 7.99975 9.32429 7.99956 9.14983 8.04145C8.60136 8.17312 8.17312 8.60136 8.04145 9.14983C7.99956 9.32429 7.99975 9.52122 7.99997 9.74967L8 9.8V12.2L7.99997 12.2503C7.99975 12.4788 7.99956 12.6757 8.04145 12.8502C8.17312 13.3986 8.60136 13.8269 9.14983 13.9586C9.32429 14.0004 9.52122 14.0003 9.74967 14L9.8 14H12.2L12.2503 14C12.4788 14.0003 12.6757 14.0004 12.8502 13.9586C13.3986 13.8269 13.8269 13.3986 13.9586 12.8502C14.0004 12.6757 14.0003 12.4788 14 12.2503L14 12.2V9.8L14 9.74967C14.0003 9.52122 14.0004 9.32429 13.9586 9.14983C13.8269 8.60136 13.3986 8.17312 12.8502 8.04145C12.6757 7.99956 12.4788 7.99975 12.2503 7.99997L12.2 8H9.8ZM9.38328 9.01382C9.42632 9.00348 9.49222 9 9.8 9H12.2C12.5078 9 12.5737 9.00348 12.6167 9.01382C12.7995 9.05771 12.9423 9.20045 12.9862 9.38328C12.9965 9.42632 13 9.49222 13 9.8V12.2C13 12.5078 12.9965 12.5737 12.9862 12.6167C12.9423 12.7995 12.7995 12.9423 12.6167 12.9862C12.5737 12.9965 12.5078 13 12.2 13H9.8C9.49222 13 9.42632 12.9965 9.38328 12.9862C9.20045 12.9423 9.05771 12.7995 9.01382 12.6167C9.00348 12.5737 9 12.5078 9 12.2V9.8C9 9.49222 9.00348 9.42632 9.01382 9.38328C9.05771 9.20045 9.20045 9.05771 9.38328 9.01382Z",fill:"currentColor"}}]})(s)}const Ze=({viewType:s,setViewType:r})=>t.jsxs(We,{children:[t.jsx(T,{color:s==="board"?e.colors.primary.regular:e.colors.black,icon:Re,onClick:()=>r("board"),children:"Board"}),t.jsx(T,{color:s==="timeline"?e.colors.primary.regular:e.colors.black,icon:Ie,onClick:()=>r("timeline"),children:"Timeline"})]}),Fe=()=>{const[s,r]=l.useState("board");return t.jsxs(G,{children:[t.jsx(_,{name:"Unlock",children:t.jsx(Ze,{viewType:s,setViewType:r})}),s==="board"&&t.jsx(Le,{stages:x}),s==="timeline"&&t.jsx(Ve,{stages:x})]})},Pe=()=>t.jsx(Fe,{}),Ye=Pe;export{Ye as default};
