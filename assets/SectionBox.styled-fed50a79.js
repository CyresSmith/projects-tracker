import{t,r as a,j as o}from"./index-85b482a1.js";import{n as s}from"./emotion-styled.browser.esm-c6f8bd0e.js";import{u as p}from"./user-c6727005.js";import{I as w,c as j}from"./IconButton-8c5e713c.js";const S=s.li`
  max-width: 400px;
  padding: ${t.space[2]};
  margin-left: ${e=>e.currentUser?"auto":"0"};
  display: flex;
  flex-direction: column;
  gap: ${t.space[2]};
  align-items: ${e=>e.currentUser?"flex-end":"flex-start"};
  background-color: ${e=>e.currentUser?t.colors.white:t.colors.primary.light};

  border-radius: ${t.radii.l} ${t.radii.l}
    ${e=>e.currentUser?0:t.radii.l}
    ${e=>e.currentUser?t.radii.l:0};
`,b=s.div`
  display: flex;
  align-items: center;
  gap: ${t.space[2]};
`,y=s.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
`,z=s.p`
  font-size: ${t.fontSizes.m};
  font-weight: ${t.fontWeights.light};
`,M=s.p`
  font-size: ${t.fontSizes.xs};
  font-weight: ${t.fontWeights.light};
  word-wrap: break-word;
`,v=s.p`
  color: ${t.colors.secondary.regular};
  font-size: ${t.fontSizes.xs};
  font-weight: ${t.fontWeights.light};
`,f=a.forwardRef(({message:e},r)=>{const i=p.id===e.author.id;return o.jsxs(S,{currentUser:i,ref:r,children:[o.jsxs(b,{children:[o.jsx(y,{src:e.author.img,alt:e.author.name}),o.jsx(z,{children:e.author.name})]}),o.jsx(M,{children:e.text}),o.jsx(v,{children:new Date(e.date).toLocaleString()})]})});f.displayName="Message";const I=s.div`
  form {
    position: relative;
  }

  button {
    position: absolute;
    color: ${t.colors.primary.regular};
    background-color: transparent;
    right: ${t.space[2]};
    top: 50%;
    transform: translateY(-50%);

    :hover:not(:disabled) {
      color: ${t.colors.primary.hover};
    }
  }
`,W=s.input`
  display: block;
  width: 100%;
  height: 48px;
  margin-top: ${t.space[3]};
  padding: 12px 24px;
  border-radius: 24px;
  border: 1px solid ${t.colors.secondary.regular};

  font-family: ${t.fonts.body};
  font-size: ${t.fontSizes.m};
  font-weight: ${t.fontWeights.light};
  line-height: ${t.lineHeights.m};

  ::placeholder {
    font-size: ${t.fontSizes.m};
    font-weight: ${t.fontWeights.light};
    line-height: ${t.lineHeights.m};
  }
`,B=({onChange:e,value:r,onClick:i})=>o.jsx(I,{children:o.jsxs("form",{children:[o.jsx(W,{placeholder:"Start typing",onChange:e,onSubmit:i,value:r}),o.jsx(w,{icon:j,iconSize:24,type:"submit",onClick:i,round:!0})]})}),U=s.ul`
  display: flex;
  flex-direction: column;
  gap: ${t.space[3]};
  padding-right: ${t.space[2]};
  width: 100%;
  height: calc(100% - (48px + ${t.space[3]}));
  overflow-y: auto;
`,A=({messages:e})=>{const[r,i]=a.useState(""),[c,h]=a.useState([]),d=a.useRef(null),u=n=>{n&&(d.current=n)};a.useEffect(()=>{e&&h(e)},[e]),a.useEffect(()=>{d.current&&d.current.scrollIntoView()},[c]);const g=n=>{i(n.currentTarget.value)},x=n=>{n.preventDefault();const l=r.trim();if(l.length===0)return;const m={id:c.length+1,text:l,date:new Date,author:p};h($=>[...$,m]),i("")};return o.jsxs(o.Fragment,{children:[o.jsx(U,{children:c.map((n,l)=>o.jsx(f,{message:n,ref:l===c.length-1?u:null},n.id))}),o.jsx(B,{onChange:g,value:r,onClick:x})]})},C=s.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: ${t.space[3]};
`,R=s.h3`
  font-size: ${t.fontSizes.xl};
  font-weight: ${t.fontWeights.bold};
  letter-spacing: 0.48px;
`,L=({name:e,children:r})=>o.jsxs(C,{children:[o.jsx(R,{children:e}),r]}),H=s.section`
  width: 100%;
  padding: 0 ${t.space[4]} ${t.space[4]};
`;export{A as C,H as S,L as a};
