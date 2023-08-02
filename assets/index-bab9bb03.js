import{t as i,j as e,L as p}from"./index-35cc4ac2.js";import{n as t}from"./emotion-styled.browser.esm-c7072f6a.js";import{F as r,h as x,s as g,e as m,r as f}from"./image 270-adf427e7.js";import{L as u}from"./Logo-e0a4225f.js";import{F as j,c as w,a as n,d as $,I as l,B as b}from"./Button-8255a22b.js";const y=t.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
`,v=t.div`
  flex: 50%;
  background-color: ${i.colors.primary.regular};
  padding-top: ${i.space[4]};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`,C=t.div`
  width: calc(${i.mediaBreakpoints.desktop.width} / 2);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`,L=t.h1`
  text-align: center;
  font-size: 46px;
  font-weight: ${i.fontWeights.bold};
  color: ${i.colors.white};
  margin-top: 311px;
  display: block;
  width: 584px;
`,k=()=>e.jsx(v,{children:e.jsxs(C,{children:[e.jsx(u,{}),e.jsx(L,{children:"Here’s the place where you hand-off all routine"}),e.jsx(r,{color:"#01C62C",textColor:"#fff",icon:x,right:304,bottom:132,transform:"3.043deg",children:"Be focused on right things"}),e.jsx(r,{color:"#FF9053",textColor:"#fff",icon:g,right:5,bottom:108,transform:"-9.715deg",children:"Take control"}),e.jsx(r,{color:"#E067FE",textColor:"#fff",icon:m,right:373,bottom:19,transform:"-12.305deg",children:"Trust"}),e.jsx(r,{color:"#67FEE3",textColor:"#000",icon:f,right:108,bottom:21,transform:"8.488deg",children:"Get results"})]})}),S=t.span`
  color: ${i.colors.secondary.regular};
  font-size: ${i.fontSizes.l};
  font-weight: ${i.fontWeights.regular};
  line-height: ${i.lineHeights.m};
  margin: 32px 0 68px;
  position: relative;

  ::before {
    content: '';
    display: block;
    position: absolute;
    width: 174px;
    top: 14px;
    right: 33px;
    height: 1px;
    background-color: ${i.colors.secondary.regular};
  }

  ::after {
    content: '';
    display: block;
    position: absolute;
    width: 174px;
    top: 14px;
    left: 33px;
    height: 1px;
    background-color: ${i.colors.secondary.regular};
  }
`,B=()=>e.jsx(S,{children:"Or"}),F=t.button`
  height: 48px;
  width: 407px;
  border-radius: 24px;
  background-color: ${i.colors.primary.light};
  border: none;
  cursor: pointer;
  font-size: ${i.fontSizes.l};
  font-weight: ${i.fontWeights.regular};
  line-height: ${i.lineHeights.m};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${i.space[2]};
  padding: 0;
  transition: ${i.transition.primary};

  :hover {
    background-color: ${i.colors.primary.bg};
  }
`,R=({width:s=29,height:o=29})=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:s,height:o,viewBox:"0 0 29 29",fill:"none",children:[e.jsxs("g",{clipPath:"url(#clip0_57_800)",children:[e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.24969 14.5002C6.24969 13.5583 6.40602 12.6553 6.68537 11.8084L1.79842 8.07666C0.845948 10.0104 0.309448 12.1894 0.309448 14.5002C0.309448 16.8091 0.845495 18.9866 1.79638 20.9191L6.68061 17.1802C6.40398 16.3371 6.24969 15.4374 6.24969 14.5002Z",fill:"#FBBC05"}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.8301 5.93186C16.8762 5.93186 18.7243 6.65686 20.1763 7.84314L24.4003 3.625C21.8264 1.38407 18.5263 0 14.8301 0C9.09174 0 4.15992 3.28153 1.79846 8.0765L6.68519 11.8082C7.8112 8.39029 11.0209 5.93186 14.8301 5.93186Z",fill:"#EA4335"}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.8301 23.0678C11.0211 23.0678 7.81143 20.6093 6.68542 17.1914L1.79846 20.9224C4.15992 25.7181 9.09174 28.9996 14.8301 28.9996C18.3717 28.9996 21.7532 27.742 24.2909 25.3857L19.6523 21.7997C18.3434 22.6241 16.6952 23.0678 14.8301 23.0678Z",fill:"#34A853"}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28.6905 14.5001C28.6905 13.6432 28.5584 12.7204 28.3604 11.8638H14.8301V17.466H22.6184C22.2289 19.3761 21.1691 20.8445 19.6522 21.8001L24.2909 25.3862C26.9566 22.9121 28.6905 19.2264 28.6905 14.5001Z",fill:"#215DF6"})]}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_57_800",children:e.jsx("rect",{width:"29",height:"29",fill:"white"})})})]}),z=()=>e.jsxs(F,{children:[e.jsx(R,{})," Login with Google"]}),H=t(j)`
  width: 407px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 60px;
  }
`,a=t(p)`
  font-size: ${i.fontSizes.l};
  line-height: ${i.lineHeights.s};
  color: ${i.colors.primary.regular};
  transition: ${i.transition.primary};

  :hover {
    color: ${i.colors.danger};
  }
`,M=t.p`
  font-size: ${i.fontSizes.s};
  line-height: ${i.lineHeights.s};
  margin-top: 32px;

  span {
    margin-right: ${i.space[3]};
  }
`,E=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/,T=w().shape({email:n().email("Must be valid email").required("Required"),password:n().min(8,"Must be at least 8 characters").max(20,"Must be max 20 characters").matches(E,"Must be at least one capital letter and one number").required("Required")}),Z={email:"",password:""},q=()=>{const s=async o=>{console.log("userData: ",o)};return e.jsx($,{initialValues:Z,validationSchema:T,onSubmit:({email:o,password:d},{resetForm:c})=>{const h={email:o.trim(),password:d.trim()};s(h),c()},children:e.jsxs(H,{children:[e.jsxs("div",{children:[e.jsx(l,{type:"email",id:"email",label:"Your email",placeholder:"example@email.com"}),e.jsx(l,{type:"password",id:"password",label:"Password",placeholder:"********"})]}),e.jsx("div",{style:{marginTop:i.space[3],marginBottom:"32px"},children:e.jsx(a,{to:"/register",children:"Forget password?"})}),e.jsx(b,{type:"submit",children:"Login"}),e.jsxs(M,{children:[e.jsx("span",{children:"Not registered yet?"}),e.jsx(a,{to:"/register",children:"Sign up"})]})]})})},G=t.div`
  flex: 50%;
`,W=t.div`
  width: calc(${i.mediaBreakpoints.desktop.width} / 2);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,_=t.h2`
  color: ${i.colors.black};
  font-size: 32px;
  font-weight: ${i.fontWeights.bold};
  line-height: ${i.lineHeights.m};
  margin-top: 224px;
  margin-bottom: 32px;
  text-align: left;
  display: block;
  width: 407px;
`,A=()=>e.jsx(G,{children:e.jsxs(W,{children:[e.jsx(_,{children:"Cozyboard"}),e.jsx(z,{}),e.jsx(B,{}),e.jsx(q,{})]})}),D=()=>e.jsxs(y,{children:[e.jsx(k,{}),e.jsx(A,{})]}),U=D;export{U as default};
