import{t as e,j as t,r as l}from"./index-f8117f00.js";import{n as s}from"./emotion-styled.browser.esm-b4901e7f.js";import{T as W,M,S as V}from"./ScheduleCall-b7973bf5.js";import{i as Z}from"./style-6e84a5e1.js";import{G as z,b as P,B as F}from"./IconButton-6354dc2c.js";import{B as I}from"./Button-38854837.js";import{C as U}from"./CalendarIcon-183ee150.js";import{C as G,S as X,a as Q}from"./SectionBox.styled-87e08756.js";import"./user-c6727005.js";const N=s.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: ${e.space[3]};
`,J=s.li`
  /* width: calc((100% - ${e.space[4]}) / 2); */
  width: 322px;
  height: 300px;
  border-radius: ${e.radii.m};
  background-color: ${e.colors.white};
  padding: ${e.space[3]};
  overflow: hidden;
  position: relative;
  cursor: pointer;
`,Y=s.span`
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
`,K=s.span`
  display: block;
  font-size: ${e.fontSizes.l};
  margin-top: ${e.space[2]};
  margin-bottom: ${e.space[2]};
`,ee=s.span`
  display: block;
  font-size: ${e.fontSizes.s};
  font-weight: ${e.fontWeights.light};
  line-height: ${e.lineHeights.m};
  margin-bottom: ${e.space[3]};
  opacity: 0.6;
`,te=s.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,E=s.h5`
  color: ${e.colors.black};
  font-size: ${e.fontSizes.m};
  line-height: ${e.lineHeights.m};
`,oe=s.p`
  color: ${e.colors.black};
  font-size: ${e.fontSizes.s};
  font-weight: ${e.fontWeights.thin};
  line-height: ${e.lineHeights.l};
  margin-top: ${e.space[2]};
  margin-bottom: ${e.space[3]};
  opacity: 0.6;
  width: 440px;
`,se=s.div`
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
`,ae=s.ul`
  display: flex;
  flex-direction: column;
  gap: ${e.space[1]};
`,re=s.a`
  color: ${e.colors.primary.regular};
  font-size: ${e.fontSizes.s};
  line-height: ${e.lineHeights.l};
  cursor: pointer;
  transition: ${e.transition.primary};

  :hover {
    color: ${e.colors.black};
  }
`,ie=s.div`
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
`;s.div`
  margin-top: auto;
  height: 42px;
`;const ne=s.div`
  margin-top: ${e.space[3]};
`;function le(o){return z({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M128,40a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,40Zm45.66,61.66-40,40a8,8,0,0,1-11.32-11.32l40-40a8,8,0,0,1,11.32,11.32ZM96,16a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,16Z"}}]})(o)}const ce=s.span`
  display: block;
  font-size: ${e.fontSizes.s};
  font-weight: ${e.fontWeights.light};
  margin-bottom: ${e.space[3]};
  opacity: ${o=>o.active?1:.4};
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
`,B=({active:o,dateStart:a,deadline:r,duration:x})=>{const c=d=>new Date(d).toLocaleDateString();return t.jsxs(ce,{active:o,children:[t.jsxs("span",{children:[t.jsx(U,{size:18,color:o?e.colors.primary.regular:e.colors.black}),c(a)," - ",c(r)]}),t.jsxs("span",{children:[t.jsx(le,{size:18,color:o?e.colors.warning:e.colors.black}),x," hours"]})]})},de=s.span`
  display: block;
  margin-bottom: ${e.space[3]};
`,ue=s.span`
  font-size: ${e.fontSizes.s};
  font-weight: ${e.fontWeights.thin};
  display: flex;
  align-items: center;
  
  svg {
    margin-right: ${e.space[2]};
  }
`,pe=s.span`
  display: flex;
  flex-direction: column;
  gap: ${e.space[1]};
`,me=s.span`
  font-size: ${e.fontSizes.s};
  font-weight: ${e.fontWeights.thin};
  display: flex;
  justify-content: space-between;
`,ge=s.span`
  display: flex;
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background-color: ${e.colors.progress.trail};
  position: relative;
`,he=s.span`
  position: absolute;
  width: ${o=>`${o.progress}%`};
  top: 0;
  left: 0;
  display: block;
  height: 6px;
  border-radius: 3px;
  background-color: ${e.colors.progress.path};
`,O=({progress:o=0})=>t.jsxs(de,{children:[o===100&&t.jsxs(ue,{children:[t.jsx(P,{size:24,color:e.colors.progress.path}),"Completed"]}),o!==100&&t.jsxs(pe,{children:[t.jsxs(me,{children:[t.jsx("span",{children:"Progress"}),t.jsxs("span",{children:[o,"%"]})]}),t.jsx(ge,{children:t.jsx(he,{progress:o})})]})]}),xe=s.span`
  display: flex;
  align-items: center;
`,fe=s.span`
  font-size: ${e.fontSizes.s};
  font-weight: ${e.fontWeights.thin};
`,we=s.img`
  width: 36px;
  height: 36px;
  border-radius: ${e.radii.round};
  object-fit: cover;
  margin-right: ${e.space[2]};
`,H=({img:o,name:a})=>t.jsxs(xe,{children:[t.jsx(we,{src:o,alt:a}),t.jsx(fe,{children:a})]}),Ce=s.div`
  margin-top: ${e.space[4]};
`,je=s.div`
  height: 294px;
`,be=s.h5`
  color: ${e.colors.black};
  font-size: ${e.fontSizes.l};
  line-height: ${e.lineHeights.m};
  margin-bottom: ${e.space[2]};
`,ye=({messages:o})=>t.jsxs(Ce,{children:[t.jsx(be,{children:"Chat"}),t.jsx(je,{children:t.jsx(G,{messages:o})})]}),ve=({stage:o})=>t.jsxs(te,{children:[t.jsxs("div",{children:[t.jsx(E,{children:"Description"}),t.jsx(oe,{children:o.desc}),t.jsx(se,{children:o.links.map(a=>t.jsxs("div",{children:[t.jsx(E,{children:a.name}),t.jsx(ae,{children:a.linksArr.map(r=>t.jsx("li",{children:t.jsx(re,{href:r.link,rel:"noopener noreferrer nofollow",target:"_blank",children:r.name})},r.name))})]},a.name))}),t.jsxs(ie,{children:[t.jsx(E,{children:"Files"}),t.jsx("ul",{children:o.files.map(a=>t.jsx("li",{children:t.jsxs("a",{href:a.link,rel:"noopener noreferrer nofollow",target:"_blank",children:[t.jsx(Z,{size:83,color:"inherit"}),t.jsx("span",{children:a.name.slice(0,10)})]})},a.name))})]})]}),t.jsx("div",{children:t.jsx(I,{children:"Confirm"})})]}),$e=({stage:o,progress:a,contact:r})=>{const[x,c]=l.useState(!1),[d,w]=l.useState([]);return t.jsxs(t.Fragment,{children:[t.jsx(B,{...o}),t.jsx(O,{progress:a}),t.jsx(H,{...r}),t.jsxs(ne,{children:[t.jsx(W,{icon:F,onClick:()=>c(!0),children:"Schedule a call"}),t.jsx(ye,{messages:o.chat.messages})]}),t.jsx(M,{toggleModal:()=>c(!1),isOpen:x,title:"Schedule a call",children:t.jsx(V,{events:d,setEventsState:w})})]})},De=({stage:o})=>{const{name:a,desc:r,dateStart:x,deadline:c,contact:d}=o,[w,$]=l.useState(!1),k=()=>{$(!0)},L=new Date,q=new Date(c),C=new Date(x),f=()=>{const j=q-C,_=L-C,b=Math.round(_/j*100);return b>=100?100:b<=0?0:b},T=f()>0&&f()<100;return t.jsxs(t.Fragment,{children:[t.jsxs(J,{onClick:k,children:[T&&t.jsx(Y,{children:"Active"}),t.jsxs("p",{children:[t.jsx(K,{children:a}),t.jsxs(ee,{children:[r.slice(0,50),"..."]}),t.jsx(B,{...o}),t.jsx(O,{progress:f()}),t.jsx(H,{...d})]})]}),t.jsx(M,{toggleModal:()=>$(!1),isOpen:w,title:a,duplex:!0,leftSide:t.jsx(ve,{stage:o}),leftSideWidth:"auto",rightSide:t.jsx($e,{stage:o,progress:f(),contact:d}),rightSideWidth:"462px"})]})},h=[{id:1,name:"Strategy session",desc:"Lorem ipsum dolor sit amet consectetur. Consequat augue cum leo mus. Quis duis molestie gravida rutrum a nulla. Elementum fames consectetur elementum ultricies eleifend. Urna tempor aliquam eu id. Maecenas consequat suspendisse ultrices mus senectus. Tempus nullam dolor enim pellentesque volutpat sed ornare massa egestas.",dateStart:"2023-07-12",deadline:"2023-07-18",duration:8,progress:100,isActive:!1,contact:{name:"Wadew Warren",img:"https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4a_438x447.jpg.img.jpg"}},{id:2,name:"UX researches",desc:"Lorem ipsum dolor sit amet consectetur. Consequat augue cum leo mus. Quis duis molestie gravida rutrum a nulla. Elementum fames consectetur elementum ultricies eleifend. Urna tempor aliquam eu id. Maecenas consequat suspendisse ultrices mus senectus. Tempus nullam dolor enim pellentesque volutpat sed ornare massa egestas.",dateStart:"2023-07-18",deadline:"2023-07-21",duration:6,progress:100,isActive:!1,contact:{name:"Wadew Warren",img:"https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4a_438x447.jpg.img.jpg"}},{id:3,name:"User Flows",desc:"Lorem ipsum dolor sit amet consectetur. Consequat augue cum leo mus. Quis duis molestie gravida rutrum a nulla. Elementum fames consectetur elementum ultricies eleifend. Urna tempor aliquam eu id. Maecenas consequat suspendisse ultrices mus senectus. Tempus nullam dolor enim pellentesque volutpat sed ornare massa egestas.",dateStart:"2023-07-21",deadline:"2023-07-27",duration:4,progress:32,isActive:!0,contact:{name:"Wadew Warren",img:"https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4a_438x447.jpg.img.jpg"}},{id:4,name:"Wireframing",desc:"Lorem ipsum dolor sit amet consectetur. Consequat augue cum leo mus. Quis duis molestie gravida rutrum a nulla. Elementum fames consectetur elementum ultricies eleifend. Urna tempor aliquam eu id. Maecenas consequat suspendisse ultrices mus senectus. Tempus nullam dolor enim pellentesque volutpat sed ornare massa egestas.",dateStart:"2023-07-27",deadline:"2023-07-31",duration:4,progress:0,isActive:!1,contact:{name:"Wadew Warren",img:"https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4a_438x447.jpg.img.jpg"},chat:{messages:[{id:1,text:"Lorem ipsum dolor sit amet consectetur. Tellus ultricies massa quisque mus turpis amet aliquet. Pharetra molestie non sed quam diam amet pretium proin at?",date:"2023-07-18T13:28:51.435Z",author:{id:1,name:"Wadew Warren",img:"https://apprendre-la-photographie.net/wp-content/uploads/2016/10/portrait-photo-bokeh-arriere-plan-flou-Christoph-Gellert.jpg"}},{id:2,text:"Tellus ultricies massa quisque mus turpis amet aliquet.",date:"2023-07-18T12:36:51.435Z",author:{id:2,name:"Alexa A",img:"https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4a_438x447.jpg.img.jpg"}},{id:3,text:"Nunc cras id aliquam vulputate odio sit maecenas.",date:"2023-07-19T11:15:51.435Z",author:{id:1,name:"Wadew Warren",img:"https://apprendre-la-photographie.net/wp-content/uploads/2016/10/portrait-photo-bokeh-arriere-plan-flou-Christoph-Gellert.jpg"}},{id:4,text:"Tellus ultricies massa quisque mus turpis amet aliquet.",date:"2023-07-19T11:17:51.435Z",author:{id:2,name:"Alexa A",img:"https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4a_438x447.jpg.img.jpg"}},{id:5,text:"Lorem ipsum dolor sit amet consectetur.",date:"2023-07-19T11:18:51.435Z",author:{id:3,name:"Ottokar Elmar",img:"https://imgv3.fotor.com/images/gallery/ai-generated-a-real-man-wearing-a-cap-by-Fotor-ai-art-generator.jpg"}},{id:6,text:"Lorem ipsum dolor sit amet consectetur.",date:"2023-07-19T11:21:51.435Z",author:{id:3,name:"Ottokar Elmar",img:"https://imgv3.fotor.com/images/gallery/ai-generated-a-real-man-wearing-a-cap-by-Fotor-ai-art-generator.jpg"}},{id:7,text:"Tellus ultricies massa quisque mus turpis amet aliquet.",date:"2023-07-19T11:23:51.435Z",author:{id:2,name:"Alexa A",img:"https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4a_438x447.jpg.img.jpg"}}]},links:[{name:"Working links",linksArr:[{name:"Figma file",link:"https://www.figma.com/file/ixzT5tbO48DMqTjVlESTVl/Onboarding?node-id=97%3A1026&mode=dev"},{name:"Google doc",link:"https://www.google.com/intl/uk_ua/docs/about/"}]},{name:"Other links",linksArr:[{name:"Google doc",link:"https://www.google.com/intl/uk_ua/docs/about/"},{name:"Figma file",link:"https://www.figma.com/file/ixzT5tbO48DMqTjVlESTVl/Onboarding?node-id=97%3A1026&mode=dev"}]}],files:[{name:"Google doc",link:"https://docs.google.com/document/d/1ECo7_YHne8w7nV5m2f2lBR53xKUoCmHJR8WyuX0I7D4/edit?usp=sharing"},{name:"Google pdf",link:"https://drive.google.com/file/d/1HhXElAN8RyZDRvDD1J4Z0H14eUQ12r3l/view?usp=sharing"}]},{id:5,name:"Testing",desc:"Lorem ipsum dolor sit amet consectetur. Consequat augue cum leo mus. Quis duis molestie gravida rutrum a nulla. Elementum fames consectetur elementum ultricies eleifend. Urna tempor aliquam eu id. Maecenas consequat suspendisse ultrices mus senectus. Tempus nullam dolor enim pellentesque volutpat sed ornare massa egestas.",dateStart:"2023-07-31",deadline:"2023-08-02",duration:4,progress:32,isActive:!0,contact:{name:"Wadew Warren",img:"https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4a_438x447.jpg.img.jpg"},chat:{messages:[{id:1,text:"Lorem ipsum dolor sit amet consectetur. Tellus ultricies massa quisque mus turpis amet aliquet. Pharetra molestie non sed quam diam amet pretium proin at?",date:"2023-07-18T13:28:51.435Z",author:{id:1,name:"Wadew Warren",img:"https://apprendre-la-photographie.net/wp-content/uploads/2016/10/portrait-photo-bokeh-arriere-plan-flou-Christoph-Gellert.jpg"}},{id:2,text:"Tellus ultricies massa quisque mus turpis amet aliquet.",date:"2023-07-18T12:36:51.435Z",author:{id:2,name:"Alexa A",img:"https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4a_438x447.jpg.img.jpg"}},{id:3,text:"Nunc cras id aliquam vulputate odio sit maecenas.",date:"2023-07-19T11:15:51.435Z",author:{id:1,name:"Wadew Warren",img:"https://apprendre-la-photographie.net/wp-content/uploads/2016/10/portrait-photo-bokeh-arriere-plan-flou-Christoph-Gellert.jpg"}},{id:4,text:"Tellus ultricies massa quisque mus turpis amet aliquet.",date:"2023-07-19T11:17:51.435Z",author:{id:2,name:"Alexa A",img:"https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4a_438x447.jpg.img.jpg"}},{id:5,text:"Lorem ipsum dolor sit amet consectetur.",date:"2023-07-19T11:18:51.435Z",author:{id:3,name:"Ottokar Elmar",img:"https://imgv3.fotor.com/images/gallery/ai-generated-a-real-man-wearing-a-cap-by-Fotor-ai-art-generator.jpg"}},{id:6,text:"Lorem ipsum dolor sit amet consectetur.",date:"2023-07-19T11:21:51.435Z",author:{id:3,name:"Ottokar Elmar",img:"https://imgv3.fotor.com/images/gallery/ai-generated-a-real-man-wearing-a-cap-by-Fotor-ai-art-generator.jpg"}},{id:7,text:"Tellus ultricies massa quisque mus turpis amet aliquet.",date:"2023-07-19T11:23:51.435Z",author:{id:2,name:"Alexa A",img:"https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4a_438x447.jpg.img.jpg"}}]},links:[{name:"Working links",linksArr:[{name:"Figma file",link:"https://www.figma.com/file/ixzT5tbO48DMqTjVlESTVl/Onboarding?node-id=97%3A1026&mode=dev"},{name:"Google doc",link:"https://www.google.com/intl/uk_ua/docs/about/"}]},{name:"Other links",linksArr:[{name:"Google doc",link:"https://www.google.com/intl/uk_ua/docs/about/"},{name:"Figma file",link:"https://www.figma.com/file/ixzT5tbO48DMqTjVlESTVl/Onboarding?node-id=97%3A1026&mode=dev"}]}],files:[{name:"Google doc",link:"https://docs.google.com/document/d/1ECo7_YHne8w7nV5m2f2lBR53xKUoCmHJR8WyuX0I7D4/edit?usp=sharing"},{name:"Google pdf",link:"https://drive.google.com/file/d/1HhXElAN8RyZDRvDD1J4Z0H14eUQ12r3l/view?usp=sharing"}]},{id:6,name:"Moodboard",desc:"Lorem ipsum dolor sit amet consectetur. Consequat augue cum leo mus. Quis duis molestie gravida rutrum a nulla. Elementum fames consectetur elementum ultricies eleifend. Urna tempor aliquam eu id. Maecenas consequat suspendisse ultrices mus senectus. Tempus nullam dolor enim pellentesque volutpat sed ornare massa egestas.",dateStart:"2023-08-02",deadline:"2023-08-04",duration:4,progress:0,isActive:!1,contact:{name:"Wadew Warren",img:"https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4a_438x447.jpg.img.jpg"}}],Se=()=>t.jsx(N,{children:h.map(o=>t.jsx(De,{stage:o},o.id))}),A="130px",ke=s.ul`
  width: 1235px;
  height: 630px;
  display: flex;
  flex-shrink: 0;
  padding: ${e.space[4]};
  background-color: ${e.colors.white};
  border-radius: ${e.radii.l};
  overflow-x: scroll;
  cursor: ${o=>o.cursor};
`,Le=s.li`
  flex-shrink: 0;
  width: ${A};
  height: 490px;
  border-left: 1px dashed
    ${o=>o.isRequiredDate?e.colors.primary.regular:e.colors.secondary.regular};
  position: relative;
  background-color: ${o=>o.isRequiredDate?e.colors.primary.bg:"transparent"};

  :last-of-type {
    width: 1px;
  }
`,qe=s.h4`
  color: ${o=>o.isRequiredDate?e.colors.primary.regular:e.colors.secondary.regular};
  font-size: ${e.fontSizes.s};
  font-weight: ${o=>o.isRequiredDate?e.fontWeights.bold:e.fontWeights.light};
  line-height: ${e.lineHeights.m};
  position: absolute;
  bottom: calc(-21px - ${e.space[3]});
  left: -17px;
`,Te=s.div`
  width: calc(${A} * ${o=>o.duration});
  height: calc(490px / ${o=>o.numberOfStages});
  background-color: ${o=>{switch(!0){case o.status==="completed":return e.colors.progress.trail;case o.status==="active":return e.colors.primary.light;default:return e.colors.secondary.bg}}};
  position: absolute;
  top: calc((490px / ${o=>o.numberOfStages}) * ${o=>o.index});
  left: 0;
  border-radius: 0 calc((490px / ${o=>o.numberOfStages}) / 2)
    calc((490px / ${o=>o.numberOfStages}) / 2) 0;
  border-left: 4px solid
    ${o=>{switch(!0){case o.status==="completed":return e.colors.progress.path;case o.status==="active":return e.colors.primary.regular;default:return e.colors.secondary.dark}}};
  z-index: 2;
`,_e=s.p`
  position: absolute;
  top: calc((490px / ${o=>o.numberOfStages}) - 50%);
  left: ${e.space[2]};
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
`,Ee=s.span`
  color: ${o=>{switch(!0){case o.status==="completed":return e.colors.progress.path;case o.status==="active":return e.colors.primary.regular;default:return e.colors.secondary.dark}}};
  font-weight: ${e.fontWeights.light};
  margin-right: ${e.space[3]};
`,We=s.span`
  color: ${e.colors.black};
  font-size: ${e.fontSizes.xs};
  font-weight: ${e.fontWeights.light};
  opacity: 0.4;
`,Me=()=>{const[o,a]=l.useState([]),[r,x]=l.useState([]),[c,d]=l.useState(!1),[w,$]=l.useState(0),[k,L]=l.useState(0),[q,C]=l.useState("grab"),[f,T]=l.useState(!0),j=l.useRef(null);l.useEffect(()=>{if(h.length===0)return;const i=[...h].sort((n,p)=>new Date(n.dateStart)-new Date(p.dateStart));a(i);const{startDate:u,endDate:m}=i.reduce((n,p)=>{const y=new Date(p.dateStart),S=new Date(p.deadline);return(!n.startDate||y<n.startDate)&&(n.startDate=y),(!n.endDate||S>n.endDate)&&(n.endDate=S),n},{}),D=[],g=new Date(u);for(;g<=m;)D.push(new Date(g)),g.setDate(g.getDate()+1);x(D)},[h]),l.useEffect(()=>{const i=new Date,u=r.findIndex(m=>m.toDateString()===i.toDateString());f&&u!==-1&&j.current&&(j.current.scrollIntoView({inline:"center",behavior:"smooth"}),T(!1))},[f,r]);const _=i=>{d(!0),$(i.clientX),L(i.currentTarget.scrollLeft),C("grabbing")},b=()=>{d(!1),C("grab")},R=i=>{if(!c)return;const u=i.clientX-w;i.currentTarget.scrollLeft=k-u};return t.jsx(ke,{onMouseDown:_,onMouseMove:R,onMouseUp:b,cursor:q,children:r.map(i=>{const u=i.toLocaleDateString()===new Date().toLocaleDateString();return t.jsxs(Le,{ref:u?j:null,isRequiredDate:u,children:[t.jsx(qe,{isRequiredDate:u,children:new Date(i).toLocaleDateString().slice(0,-4)}),o.map((m,D)=>{const g=new Date,n=new Date(m.deadline),p=new Date(m.dateStart),y=()=>{switch(!0){case g>n:return"completed";case(g>p&&g<n):return"active";default:return"pending"}},S=v=>v.length>17?`${v.slice(0,17)}...`:v;if(i.getTime()===p.getTime()){const v=Math.floor((n-p)/864e5);return t.jsx(Te,{duration:v,numberOfStages:h.length,index:D,status:y(),children:t.jsxs(_e,{numberOfStages:h.length,children:[t.jsx(Ee,{status:y(),children:S(m.name)}),t.jsxs(We,{children:[p.toLocaleDateString()," - ",n.toLocaleDateString()]})]})},m.id)}})]},i)})})},ze=s.div`
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
`,Be=({width:o="24",height:a="24",color:r="inherit"})=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:o,height:a,viewBox:"0 0 24 25",fill:"none",children:[t.jsx("path",{d:"M21 6.5H3",stroke:r,strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M21 12.5H9",stroke:r,strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M12 18.5H3",stroke:r,strokeWidth:"1.5",strokeLinecap:"round"})]});function Oe(o){return z({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M2.8 1L2.74967 0.99997C2.52122 0.999752 2.32429 0.999564 2.14983 1.04145C1.60136 1.17312 1.17312 1.60136 1.04145 2.14983C0.999564 2.32429 0.999752 2.52122 0.99997 2.74967L1 2.8V5.2L0.99997 5.25033C0.999752 5.47878 0.999564 5.67572 1.04145 5.85017C1.17312 6.39864 1.60136 6.82688 2.14983 6.95856C2.32429 7.00044 2.52122 7.00025 2.74967 7.00003L2.8 7H5.2L5.25033 7.00003C5.47878 7.00025 5.67572 7.00044 5.85017 6.95856C6.39864 6.82688 6.82688 6.39864 6.95856 5.85017C7.00044 5.67572 7.00025 5.47878 7.00003 5.25033L7 5.2V2.8L7.00003 2.74967C7.00025 2.52122 7.00044 2.32429 6.95856 2.14983C6.82688 1.60136 6.39864 1.17312 5.85017 1.04145C5.67572 0.999564 5.47878 0.999752 5.25033 0.99997L5.2 1H2.8ZM2.38328 2.01382C2.42632 2.00348 2.49222 2 2.8 2H5.2C5.50779 2 5.57369 2.00348 5.61672 2.01382C5.79955 2.05771 5.94229 2.20045 5.98619 2.38328C5.99652 2.42632 6 2.49222 6 2.8V5.2C6 5.50779 5.99652 5.57369 5.98619 5.61672C5.94229 5.79955 5.79955 5.94229 5.61672 5.98619C5.57369 5.99652 5.50779 6 5.2 6H2.8C2.49222 6 2.42632 5.99652 2.38328 5.98619C2.20045 5.94229 2.05771 5.79955 2.01382 5.61672C2.00348 5.57369 2 5.50779 2 5.2V2.8C2 2.49222 2.00348 2.42632 2.01382 2.38328C2.05771 2.20045 2.20045 2.05771 2.38328 2.01382ZM9.8 1L9.74967 0.99997C9.52122 0.999752 9.32429 0.999564 9.14983 1.04145C8.60136 1.17312 8.17312 1.60136 8.04145 2.14983C7.99956 2.32429 7.99975 2.52122 7.99997 2.74967L8 2.8V5.2L7.99997 5.25033C7.99975 5.47878 7.99956 5.67572 8.04145 5.85017C8.17312 6.39864 8.60136 6.82688 9.14983 6.95856C9.32429 7.00044 9.52122 7.00025 9.74967 7.00003L9.8 7H12.2L12.2503 7.00003C12.4788 7.00025 12.6757 7.00044 12.8502 6.95856C13.3986 6.82688 13.8269 6.39864 13.9586 5.85017C14.0004 5.67572 14.0003 5.47878 14 5.25033L14 5.2V2.8L14 2.74967C14.0003 2.52122 14.0004 2.32429 13.9586 2.14983C13.8269 1.60136 13.3986 1.17312 12.8502 1.04145C12.6757 0.999564 12.4788 0.999752 12.2503 0.99997L12.2 1H9.8ZM9.38328 2.01382C9.42632 2.00348 9.49222 2 9.8 2H12.2C12.5078 2 12.5737 2.00348 12.6167 2.01382C12.7995 2.05771 12.9423 2.20045 12.9862 2.38328C12.9965 2.42632 13 2.49222 13 2.8V5.2C13 5.50779 12.9965 5.57369 12.9862 5.61672C12.9423 5.79955 12.7995 5.94229 12.6167 5.98619C12.5737 5.99652 12.5078 6 12.2 6H9.8C9.49222 6 9.42632 5.99652 9.38328 5.98619C9.20045 5.94229 9.05771 5.79955 9.01382 5.61672C9.00348 5.57369 9 5.50779 9 5.2V2.8C9 2.49222 9.00348 2.42632 9.01382 2.38328C9.05771 2.20045 9.20045 2.05771 9.38328 2.01382ZM2.74967 7.99997L2.8 8H5.2L5.25033 7.99997C5.47878 7.99975 5.67572 7.99956 5.85017 8.04145C6.39864 8.17312 6.82688 8.60136 6.95856 9.14983C7.00044 9.32429 7.00025 9.52122 7.00003 9.74967L7 9.8V12.2L7.00003 12.2503C7.00025 12.4788 7.00044 12.6757 6.95856 12.8502C6.82688 13.3986 6.39864 13.8269 5.85017 13.9586C5.67572 14.0004 5.47878 14.0003 5.25033 14L5.2 14H2.8L2.74967 14C2.52122 14.0003 2.32429 14.0004 2.14983 13.9586C1.60136 13.8269 1.17312 13.3986 1.04145 12.8502C0.999564 12.6757 0.999752 12.4788 0.99997 12.2503L1 12.2V9.8L0.99997 9.74967C0.999752 9.52122 0.999564 9.32429 1.04145 9.14983C1.17312 8.60136 1.60136 8.17312 2.14983 8.04145C2.32429 7.99956 2.52122 7.99975 2.74967 7.99997ZM2.8 9C2.49222 9 2.42632 9.00348 2.38328 9.01382C2.20045 9.05771 2.05771 9.20045 2.01382 9.38328C2.00348 9.42632 2 9.49222 2 9.8V12.2C2 12.5078 2.00348 12.5737 2.01382 12.6167C2.05771 12.7995 2.20045 12.9423 2.38328 12.9862C2.42632 12.9965 2.49222 13 2.8 13H5.2C5.50779 13 5.57369 12.9965 5.61672 12.9862C5.79955 12.9423 5.94229 12.7995 5.98619 12.6167C5.99652 12.5737 6 12.5078 6 12.2V9.8C6 9.49222 5.99652 9.42632 5.98619 9.38328C5.94229 9.20045 5.79955 9.05771 5.61672 9.01382C5.57369 9.00348 5.50779 9 5.2 9H2.8ZM9.8 8L9.74967 7.99997C9.52122 7.99975 9.32429 7.99956 9.14983 8.04145C8.60136 8.17312 8.17312 8.60136 8.04145 9.14983C7.99956 9.32429 7.99975 9.52122 7.99997 9.74967L8 9.8V12.2L7.99997 12.2503C7.99975 12.4788 7.99956 12.6757 8.04145 12.8502C8.17312 13.3986 8.60136 13.8269 9.14983 13.9586C9.32429 14.0004 9.52122 14.0003 9.74967 14L9.8 14H12.2L12.2503 14C12.4788 14.0003 12.6757 14.0004 12.8502 13.9586C13.3986 13.8269 13.8269 13.3986 13.9586 12.8502C14.0004 12.6757 14.0003 12.4788 14 12.2503L14 12.2V9.8L14 9.74967C14.0003 9.52122 14.0004 9.32429 13.9586 9.14983C13.8269 8.60136 13.3986 8.17312 12.8502 8.04145C12.6757 7.99956 12.4788 7.99975 12.2503 7.99997L12.2 8H9.8ZM9.38328 9.01382C9.42632 9.00348 9.49222 9 9.8 9H12.2C12.5078 9 12.5737 9.00348 12.6167 9.01382C12.7995 9.05771 12.9423 9.20045 12.9862 9.38328C12.9965 9.42632 13 9.49222 13 9.8V12.2C13 12.5078 12.9965 12.5737 12.9862 12.6167C12.9423 12.7995 12.7995 12.9423 12.6167 12.9862C12.5737 12.9965 12.5078 13 12.2 13H9.8C9.49222 13 9.42632 12.9965 9.38328 12.9862C9.20045 12.9423 9.05771 12.7995 9.01382 12.6167C9.00348 12.5737 9 12.5078 9 12.2V9.8C9 9.49222 9.00348 9.42632 9.01382 9.38328C9.05771 9.20045 9.20045 9.05771 9.38328 9.01382Z",fill:"currentColor"}}]})(o)}const He=({viewType:o,setViewType:a})=>t.jsxs(ze,{children:[t.jsx(W,{color:o==="board"?e.colors.primary.regular:e.colors.black,icon:Oe,onClick:()=>a("board"),children:"Board"}),t.jsx(W,{color:o==="timeline"?e.colors.primary.regular:e.colors.black,icon:Be,onClick:()=>a("timeline"),children:"Timeline"})]}),Ae=()=>{const[o,a]=l.useState("board");return t.jsxs(X,{children:[t.jsx(Q,{name:"Unlock",children:t.jsx(He,{viewType:o,setViewType:a})}),o==="board"&&t.jsx(Se,{stages:h}),o==="timeline"&&t.jsx(Me,{stages:h})]})},Re=()=>t.jsx(Ae,{}),Ne=Re;export{Ne as default};
