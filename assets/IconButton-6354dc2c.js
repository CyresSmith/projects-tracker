import{R as s,t as n,j as f}from"./index-f8117f00.js";import{n as b}from"./emotion-styled.browser.esm-b4901e7f.js";var g={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},m=s.createContext&&s.createContext(g),o=globalThis&&globalThis.__assign||function(){return o=Object.assign||function(t){for(var r,e=1,a=arguments.length;e<a;e++){r=arguments[e];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(t[l]=r[l])}return t},o.apply(this,arguments)},x=globalThis&&globalThis.__rest||function(t,r){var e={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&r.indexOf(a)<0&&(e[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(t);l<a.length;l++)r.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(t,a[l])&&(e[a[l]]=t[a[l]]);return e};function v(t){return t&&t.map(function(r,e){return s.createElement(r.tag,o({key:e},r.attr),v(r.child))})}function d(t){return function(r){return s.createElement(w,o({attr:o({},t.attr)},r),v(t.child))}}function w(t){var r=function(e){var a=t.attr,l=t.size,c=t.title,h=x(t,["attr","size","title"]),u=l||e.size||"1em",i;return e.className&&(i=e.className),t.className&&(i=(i?i+" ":"")+t.className),s.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,a,h,{className:i,style:o(o({color:t.color||e.color},e.style),t.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&s.createElement("title",null,c),t.children)};return m!==void 0?s.createElement(m.Consumer,null,function(e){return r(e)}):r(g)}function O(t){return d({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"}}]})(t)}function z(t){return d({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"}}]})(t)}function j(t){return d({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"}}]})(t)}function k(t){return d({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"}}]})(t)}const C=b("button")`
  display: inline-flex;
  padding: ${n.space[1]};
  color: ${t=>t.color};
  background-color: ${t=>t.disabled?n.colors.secondary.light:n.colors.secondary.dark};
  cursor: pointer;
  border: none;
  border-radius: ${t=>t.round?"50%":n.radii.m};
  transition: ${n.transition.primary};
  transform-origin: center;

  :disabled {
    pointer-events: none;
  }

  :hover:not(:disabled) {
    background-color: ${n.colors.secondary.hover};
  }
`,E=({id:t=null,icon:r=null,iconSize:e,type:a="button",disabled:l=!1,ariaLabel:c,round:h,onClick:u,backgroundColor:i=`${n.colors.secondary.dark}`,color:y=`${n.colors.white}`})=>f.jsx(C,{id:t,type:a,disabled:l,"aria-labelledby":c,round:h,onClick:u,backgroundColor:i,color:y,children:r&&f.jsx(r,{size:e})});export{O as B,d as G,E as I,j as a,k as b,z as c};
