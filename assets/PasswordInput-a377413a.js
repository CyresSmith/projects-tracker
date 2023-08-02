import{t as o,r as p,j as r}from"./index-f8117f00.js";import{I as d}from"./Button-38854837.js";import{G as e,I as l}from"./IconButton-6354dc2c.js";import{n as u}from"./emotion-styled.browser.esm-b4901e7f.js";const w=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/,j=/^(\+?\d{1,3}\s?-?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{2}[\s.-]?\d{2}$/,x=u.div`
  position: relative;

  button {
    position: absolute;
    right: ${o.space[1]};
    top: ${o.space[1]};
    background-color: transparent;
    color: ${o.colors.secondary.regular};

    :hover {
      color: ${o.colors.primary.regular};
    }
  }
`;function g(t){return e({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}},{tag:"line",attr:{x1:"1",y1:"1",x2:"23",y2:"23"}}]})(t)}function m(t){return e({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"}}]})(t)}const v=({label:t,placeholder:n,id:a})=>{const[s,i]=p.useState(!1);return r.jsxs(x,{children:[r.jsx(d,{type:s?"text":"password",id:a,label:t,placeholder:n}),r.jsx(l,{icon:s?m:g,iconSize:24,onClick:()=>i(c=>!c),round:!0})]})};export{v as P,w as a,j as p};
