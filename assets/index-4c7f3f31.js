import{t as c,j as o,r as f,g as Yt,R as Vt}from"./index-f8117f00.js";import{L as Jt}from"./Logo-6290b49f.js";import{n as g}from"./emotion-styled.browser.esm-b4901e7f.js";import{B as ce,F as yt,e as Pe,L as B,S as Te,E as vt,f as Re,c as wt,a as $,b as jt,g as Fe,d as Dt,I as M,h as kt,i as Xt,j as Ze}from"./Button-38854837.js";import{F as re,r as Qt,h as Zt,e as er,s as tr}from"./image 270-19c7a971.js";import{G as Ft,a as Et,I as Ee}from"./IconButton-6354dc2c.js";import{p as rr,a as nr,P as et}from"./PasswordInput-a377413a.js";import{a as or,b as ar,c as ir,d as tt,e as rt,f as nt,D as sr,g as cr,R as lr,h as ur}from"./style-6e84a5e1.js";import{C as ot}from"./CalendarIcon-183ee150.js";function W(e,t,r,n){function i(a){return a instanceof r?a:new r(function(s){s(a)})}return new(r||(r=Promise))(function(a,s){function u(h){try{p(n.next(h))}catch(y){s(y)}}function m(h){try{p(n.throw(h))}catch(y){s(y)}}function p(h){h.done?a(h.value):i(h.value).then(u,m)}p((n=n.apply(e,t||[])).next())})}function q(e,t){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,i,a,s;return s={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function u(p){return function(h){return m([p,h])}}function m(p){if(n)throw new TypeError("Generator is already executing.");for(;s&&(s=0,p[0]&&(r=0)),r;)try{if(n=1,i&&(a=p[0]&2?i.return:p[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,p[1])).done)return a;switch(i=0,a&&(p=[p[0]&2,a.value]),p[0]){case 0:case 1:a=p;break;case 4:return r.label++,{value:p[1],done:!1};case 5:r.label++,i=p[1],p=[0];continue;case 7:p=r.ops.pop(),r.trys.pop();continue;default:if(a=r.trys,!(a=a.length>0&&a[a.length-1])&&(p[0]===6||p[0]===2)){r=0;continue}if(p[0]===3&&(!a||p[1]>a[0]&&p[1]<a[3])){r.label=p[1];break}if(p[0]===6&&r.label<a[1]){r.label=a[1],a=p;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(p);break}a[2]&&r.ops.pop(),r.trys.pop();continue}p=t.call(e,r)}catch(h){p=[6,h],i=0}finally{n=a=0}if(p[0]&5)throw p[1];return{value:p[0]?p[1]:void 0,done:!0}}}function at(e,t){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var n=r.call(e),i,a=[],s;try{for(;(t===void 0||t-- >0)&&!(i=n.next()).done;)a.push(i.value)}catch(u){s={error:u}}finally{try{i&&!i.done&&(r=n.return)&&r.call(n)}finally{if(s)throw s.error}}return a}function it(e,t,r){if(r||arguments.length===2)for(var n=0,i=t.length,a;n<i;n++)(a||!(n in t))&&(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))}const _e="all 1s cubic-bezier(0.47, 0.01, 0.61, 0.99)",pr=g.section`
  width: 100%;
  height: ${e=>{switch(e.step){case 1:return"107px";case 2:return"341px";default:return"607px"}}};
  background-color: ${c.colors.primary.regular};
  padding: ${c.space[3]} 0 ${c.space[1]};
  transition: ${_e};

  div[id='container'] {
    position: relative;
  }

  svg {
    position: absolute;
  }
`,dr=g.h1`
  font-size: 42px;
  font-weight: ${c.fontWeights.bold};
  line-height: ${c.lineHeights.s};
  color: ${c.colors.white};
  display: block;
  width: ${e=>e.step===2?"1000px":"533px"};
  text-align: center;
  margin-top: ${e=>e.step===2?"129px":"204px"};
  margin-bottom: 36px;
  transition: ${_e};
  position: relative;
  top: ${e=>e.step===1?"-100vh":"0"};
`,fr=g.div`
  position: relative;
  top: ${e=>e.step?"-100vh":"0"};
  width: 100%;
  height: ${e=>e.step?"0":"100%"};
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: ${_e};
`,mr=g.div`
  width: ${c.mediaBreakpoints.desktop.width};
  height: 100%;
  padding: 0 ${c.space[3]};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,St=({children:e})=>o.jsx(mr,{id:"container",children:e}),gr=({step:e,setStep:t})=>{const r=()=>{t(1)};return f.useEffect(()=>{const n=document.querySelector("body");e&&(n.style.overflow="auto"),e||(n.style.overflow="hidden")},[e]),o.jsx(pr,{step:e,children:o.jsxs(St,{children:[o.jsx(Jt,{}),o.jsx(dr,{step:e,children:e!==2?"Please fill the form and we almoust set up":`You filled out 90% of the required information! It remains to fill
            in the key points ...`}),o.jsxs(fr,{step:e,children:[o.jsx(ce,{onClick:r,white:!0,children:"Fill the form"}),o.jsx(re,{color:"#67FEE3",textColor:"#000",icon:Qt,right:1223,bottom:74,transform:"-4.123deg",small:!0,children:"Get results"}),o.jsx(re,{color:"#01C62C",textColor:"#fff",icon:Zt,right:1116,bottom:12,transform:"3.043deg",small:!0,children:"Be focused on right things"}),o.jsx(re,{color:"#E067FE",textColor:"#fff",icon:er,right:8,bottom:81,transform:"7.169deg",small:!0,children:"Trust"}),o.jsx(re,{color:"#FF9053",textColor:"#fff",icon:tr,right:68,bottom:15,transform:"-9.715deg",small:!0,children:"Take control"})]})]})})},hr=g.section`
  width: 100%;
  padding: ${c.space[3]} 0;
  position: relative;
`,br=g.div`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
`,xr=g(yt)`
  width: 595px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 97px;

  div[id='email&password'] {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 60px;
  }

  fieldset {
    margin: ${c.space[4]} 0 0;
    padding: 0;
    border: none;
    position: relative;
    width: 100%;

    label[for='services'] {
      position: relative;
      bottom: 0;
    }

    ul {
      margin-top: ${c.space[2]};
    }
  }

  input[id='desc'] {
    margin-top: 125px;
  }

  label[for='desc'],
  label[for='goals'] {
    bottom: calc(185px + 44px);
  }

  textarea[id='desc'],
  textarea[id='goals'] {
    margin-top: 124px;
  }

  label[for='mission'],
  label[for='values'] {
    bottom: calc(185px + 84px);
  }

  textarea[id='mission'],
  textarea[id='values'] {
    margin-top: 172px;
  }

  button[id='next'] {
    margin-top: ${c.space[4]};
  }
`,yr=g.li`
  display: flex;
  align-items: center;

  :not(:last-child) {
    margin-bottom: ${c.space[3]};
  }

  svg {
    margin-right: ${c.space[2]};
    cursor: pointer;
  }
`,vr=g.label`
  cursor: pointer;
  font-size: ${c.fontSizes.m};
`,wr=g.input`
  display: none;
`;function jr(e){return Ft({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M14 0h-12c-1.1 0-2 0.9-2 2v12c0 1.1 0.9 2 2 2h12c1.1 0 2-0.9 2-2v-12c0-1.1-0.9-2-2-2zM7 12.414l-3.707-3.707 1.414-1.414 2.293 2.293 4.793-4.793 1.414 1.414-6.207 6.207z"}}]})(e)}function Dr(e){return Ft({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M14 0h-12c-1.1 0-2 0.9-2 2v12c0 1.1 0.9 2 2 2h12c1.1 0 2-0.9 2-2v-12c0-1.1-0.9-2-2-2zM14 14h-12v-12h12v12z"}}]})(e)}const kr=({name:e,id:t,label:r,arrayHelpers:n})=>{const{services:i}=n.form.values,a=i.includes(e),s=()=>{a?i.forEach((u,m)=>{u===e&&n.remove(m)}):n.push(e)};return o.jsxs(yr,{children:[o.jsx(wr,{type:"checkbox",name:e,id:t,onClick:s}),a?o.jsx(jr,{size:24,color:c.colors.primary.regular,onClick:s}):o.jsx(Dr,{size:24,color:c.colors.primary.regular,onClick:s}),o.jsx(vr,{htmlFor:t,checked:a,children:r})]})},Fr=g.p`
  width: 100%;
  position: relative;
`,Er=g(Pe)`
  display: block;
  width: 100%;
  height: 185px;
  padding: 12px 24px;
  border-radius: 24px;
  border: 1px solid ${c.colors.secondary.regular};
  resize: none;

  font-family: ${c.fonts.body};
  font-size: ${c.fontSizes.m};
  font-weight: ${c.fontWeights.light};
  line-height: ${c.lineHeights.m};

  ::placeholder {
    font-size: ${c.fontSizes.m};
    font-weight: ${c.fontWeights.light};
    line-height: ${c.lineHeights.m};
  }
`,ne=({id:e,type:t,label:r,subLabel:n,placeholder:i})=>o.jsxs(Fr,{children:[o.jsx(B,{htmlFor:e,children:r}),o.jsx(Te,{children:n}),o.jsx(Er,{id:e,name:e,type:t,placeholder:i,as:"textarea",maxLength:"340"}),o.jsx(vt,{name:e,component:Re})]}),Sr=["UI/UX Design","Web Design","Mobile App Design","Prototyping","Branding","Custom Web development","Webflow","Elementor"],$r=wt().shape({name:$().min(3,"Must be at least 3 characters").max(20,"Must be max 20 characters").required("Required"),phone:$().matches(rr,"Must be phone in international format").required("Required"),email:$().email("Must be valid email").required("Required"),password:$().min(8,"Must be at least 8 characters").max(16,"Must be max 16 characters").matches(nr,"Must be at least one capital letter and one number").required("Required"),confirmPassword:$().oneOf([jt("password"),null],"Passwords must match!").required("Required"),services:Fe().min(1,"Must be at least 1 option selected").required("Required"),desc:$().min(30,"Must be at least 30 characters").max(300,"Must be max 300 characters").required("Required"),mission:$().min(30,"Must be at least 30 characters").max(300,"Must be max 300 characters").required("Required"),values:$().min(30,"Must be at least 30 characters").max(300,"Must be max 300 characters").required("Required"),goals:$().min(30,"Must be at least 30 characters").max(300,"Must be max 300 characters").required("Required")}),Ar={name:"",phone:"",email:"",password:"",confirmPassword:"",services:[],desc:"",mission:"",values:"",goals:""},Or=({setStep:e,setFirstStepData:t})=>{const r=async n=>{e(2),t(n)};return o.jsx(Dt,{initialValues:Ar,validationSchema:$r,onSubmit:(n,{resetForm:i})=>{const{confirmPassword:a,...s}=n;r(s),i()},children:({errors:n,touched:i})=>o.jsxs(xr,{children:[o.jsxs("div",{id:"email&password",children:[o.jsx(M,{type:"text",id:"name",label:"Name",placeholder:"Name"}),o.jsx(M,{type:"tel",id:"phone",label:"Phone",placeholder:"+3801234567"}),o.jsx(M,{type:"email",id:"email",label:"Email",placeholder:"example@email.com"}),o.jsx(et,{id:"password",label:"Password",placeholder:"********"}),o.jsx(et,{id:"confirmPassword",label:"Confirm password",placeholder:"********"})]}),o.jsxs("fieldset",{children:[o.jsx(B,{htmlFor:"services",children:"What are you looking for?"}),o.jsx(kt,{name:"services",id:"services",children:a=>o.jsx("ul",{children:Sr.map((s,u)=>o.jsx(Pe,{name:s,children:({field:m})=>o.jsx(kr,{...m,id:`${s}_${u}`,name:s,label:s,arrayHelpers:a})},u))})}),n.services&&i.services&&o.jsx(Re,{children:n.services})]}),o.jsx(ne,{type:"text",label:"Describe your company's main activity",subLabel:"Give us a detailed answer about what your company does.",id:"desc",placeholder:"Start typing..."}),o.jsx(ne,{type:"text",label:"What is your compay's mission?",subLabel:`Example: Nike - "Bring inspiration and innovation to every athlete in the world." Walmart - "We're saving people money, so they can live better lives."`,id:"mission",placeholder:"Start typing..."}),o.jsx(ne,{type:"text",label:"What are your company's values?",subLabel:"Example: IKEA values (each IKEA item has a detailed description): Togetherness; Caring for people and planet; Cost-consciousness; Simplicity",id:"values",placeholder:"Start typing..."}),o.jsx(ne,{type:"text",label:"What are the main goals of cooperating with us?",subLabel:"What do you want to achieve by implementing this project?",id:"goals",placeholder:"Start typing..."}),o.jsx(ce,{id:"next",type:"submit",children:"Next"})]})})},Cr=g(yt)`
  width: 595px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 97px;

  input[id='links'] {
    margin-top: 124px;
  }

  label[for='links'] {
    bottom: calc(48px + ${c.space[4]});
  }

  span[id='links'] {
    bottom: calc(48px + ${c.space[2]});
  }
`;var $t={exports:{}},Pr="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Tr=Pr,Rr=Tr;function At(){}function Ot(){}Ot.resetWarningCache=At;var _r=function(){function e(n,i,a,s,u,m){if(m!==Rr){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Ot,resetWarningCache:At};return r.PropTypes=r,r};$t.exports=_r();var Ir=$t.exports;const b=Yt(Ir);var zr=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function Y(e,t){var r=Lr(e);if(typeof r.path!="string"){var n=e.webkitRelativePath;Object.defineProperty(r,"path",{value:typeof t=="string"?t:typeof n=="string"&&n.length>0?n:e.name,writable:!1,configurable:!1,enumerable:!0})}return r}function Lr(e){var t=e.name,r=t&&t.lastIndexOf(".")!==-1;if(r&&!e.type){var n=t.split(".").pop().toLowerCase(),i=zr.get(n);i&&Object.defineProperty(e,"type",{value:i,writable:!1,configurable:!1,enumerable:!0})}return e}var Mr=[".DS_Store","Thumbs.db"];function Br(e){return W(this,void 0,void 0,function(){return q(this,function(t){return ae(e)&&Wr(e.dataTransfer)?[2,Nr(e.dataTransfer,e.type)]:qr(e)?[2,Kr(e)]:Array.isArray(e)&&e.every(function(r){return"getFile"in r&&typeof r.getFile=="function"})?[2,Hr(e)]:[2,[]]})})}function Wr(e){return ae(e)}function qr(e){return ae(e)&&ae(e.target)}function ae(e){return typeof e=="object"&&e!==null}function Kr(e){return Se(e.target.files).map(function(t){return Y(t)})}function Hr(e){return W(this,void 0,void 0,function(){var t;return q(this,function(r){switch(r.label){case 0:return[4,Promise.all(e.map(function(n){return n.getFile()}))];case 1:return t=r.sent(),[2,t.map(function(n){return Y(n)})]}})})}function Nr(e,t){return W(this,void 0,void 0,function(){var r,n;return q(this,function(i){switch(i.label){case 0:return e.items?(r=Se(e.items).filter(function(a){return a.kind==="file"}),t!=="drop"?[2,r]:[4,Promise.all(r.map(Ur))]):[3,2];case 1:return n=i.sent(),[2,st(Ct(n))];case 2:return[2,st(Se(e.files).map(function(a){return Y(a)}))]}})})}function st(e){return e.filter(function(t){return Mr.indexOf(t.name)===-1})}function Se(e){if(e===null)return[];for(var t=[],r=0;r<e.length;r++){var n=e[r];t.push(n)}return t}function Ur(e){if(typeof e.webkitGetAsEntry!="function")return ct(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?Pt(t):ct(e)}function Ct(e){return e.reduce(function(t,r){return it(it([],at(t),!1),at(Array.isArray(r)?Ct(r):[r]),!1)},[])}function ct(e){var t=e.getAsFile();if(!t)return Promise.reject("".concat(e," is not a File"));var r=Y(t);return Promise.resolve(r)}function Gr(e){return W(this,void 0,void 0,function(){return q(this,function(t){return[2,e.isDirectory?Pt(e):Yr(e)]})})}function Pt(e){var t=e.createReader();return new Promise(function(r,n){var i=[];function a(){var s=this;t.readEntries(function(u){return W(s,void 0,void 0,function(){var m,p,h;return q(this,function(y){switch(y.label){case 0:if(u.length)return[3,5];y.label=1;case 1:return y.trys.push([1,3,,4]),[4,Promise.all(i)];case 2:return m=y.sent(),r(m),[3,4];case 3:return p=y.sent(),n(p),[3,4];case 4:return[3,6];case 5:h=Promise.all(u.map(Gr)),i.push(h),a(),y.label=6;case 6:return[2]}})})},function(u){n(u)})}a()})}function Yr(e){return W(this,void 0,void 0,function(){return q(this,function(t){return[2,new Promise(function(r,n){e.file(function(i){var a=Y(i,e.fullPath);r(a)},function(i){n(i)})})]})})}var Vr=function(e,t){if(e&&t){var r=Array.isArray(t)?t:t.split(","),n=e.name||"",i=(e.type||"").toLowerCase(),a=i.replace(/\/.*$/,"");return r.some(function(s){var u=s.trim().toLowerCase();return u.charAt(0)==="."?n.toLowerCase().endsWith(u):u.endsWith("/*")?a===u.replace(/\/.*$/,""):i===u})}return!0};function lt(e){return Qr(e)||Xr(e)||Rt(e)||Jr()}function Jr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Xr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Qr(e){if(Array.isArray(e))return $e(e)}function ut(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function pt(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ut(Object(r),!0).forEach(function(n){Tt(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ut(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Tt(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function G(e,t){return tn(e)||en(e,t)||Rt(e,t)||Zr()}function Zr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Rt(e,t){if(e){if(typeof e=="string")return $e(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return $e(e,t)}}function $e(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function en(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n=[],i=!0,a=!1,s,u;try{for(r=r.call(e);!(i=(s=r.next()).done)&&(n.push(s.value),!(t&&n.length===t));i=!0);}catch(m){a=!0,u=m}finally{try{!i&&r.return!=null&&r.return()}finally{if(a)throw u}}return n}}function tn(e){if(Array.isArray(e))return e}var rn="file-invalid-type",nn="file-too-large",on="file-too-small",an="too-many-files",sn=function(t){t=Array.isArray(t)&&t.length===1?t[0]:t;var r=Array.isArray(t)?"one of ".concat(t.join(", ")):t;return{code:rn,message:"File type must be ".concat(r)}},dt=function(t){return{code:nn,message:"File is larger than ".concat(t," ").concat(t===1?"byte":"bytes")}},ft=function(t){return{code:on,message:"File is smaller than ".concat(t," ").concat(t===1?"byte":"bytes")}},cn={code:an,message:"Too many files"};function _t(e,t){var r=e.type==="application/x-moz-file"||Vr(e,t);return[r,r?null:sn(t)]}function It(e,t,r){if(R(e.size))if(R(t)&&R(r)){if(e.size>r)return[!1,dt(r)];if(e.size<t)return[!1,ft(t)]}else{if(R(t)&&e.size<t)return[!1,ft(t)];if(R(r)&&e.size>r)return[!1,dt(r)]}return[!0,null]}function R(e){return e!=null}function ln(e){var t=e.files,r=e.accept,n=e.minSize,i=e.maxSize,a=e.multiple,s=e.maxFiles,u=e.validator;return!a&&t.length>1||a&&s>=1&&t.length>s?!1:t.every(function(m){var p=_t(m,r),h=G(p,1),y=h[0],A=It(m,n,i),E=G(A,1),C=E[0],K=u?u(m):null;return y&&C&&!K})}function ie(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function oe(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(t){return t==="Files"||t==="application/x-moz-file"}):!!e.target&&!!e.target.files}function mt(e){e.preventDefault()}function un(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function pn(e){return e.indexOf("Edge/")!==-1}function dn(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return un(e)||pn(e)}function S(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(n){for(var i=arguments.length,a=new Array(i>1?i-1:0),s=1;s<i;s++)a[s-1]=arguments[s];return t.some(function(u){return!ie(n)&&u&&u.apply(void 0,[n].concat(a)),ie(n)})}}function fn(){return"showOpenFilePicker"in window}function mn(e){if(R(e)){var t=Object.entries(e).filter(function(r){var n=G(r,2),i=n[0],a=n[1],s=!0;return zt(i)||(console.warn('Skipped "'.concat(i,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),s=!1),(!Array.isArray(a)||!a.every(Lt))&&(console.warn('Skipped "'.concat(i,'" because an invalid file extension was provided.')),s=!1),s}).reduce(function(r,n){var i=G(n,2),a=i[0],s=i[1];return pt(pt({},r),{},Tt({},a,s))},{});return[{description:"Files",accept:t}]}return e}function gn(e){if(R(e))return Object.entries(e).reduce(function(t,r){var n=G(r,2),i=n[0],a=n[1];return[].concat(lt(t),[i],lt(a))},[]).filter(function(t){return zt(t)||Lt(t)}).join(",")}function hn(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function bn(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function zt(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function Lt(e){return/^.*\.[\w]+$/.test(e)}var xn=["children"],yn=["open"],vn=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],wn=["refKey","onChange","onClick"];function jn(e){return Fn(e)||kn(e)||Mt(e)||Dn()}function Dn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function kn(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Fn(e){if(Array.isArray(e))return Ae(e)}function De(e,t){return $n(e)||Sn(e,t)||Mt(e,t)||En()}function En(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Mt(e,t){if(e){if(typeof e=="string")return Ae(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Ae(e,t)}}function Ae(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Sn(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n=[],i=!0,a=!1,s,u;try{for(r=r.call(e);!(i=(s=r.next()).done)&&(n.push(s.value),!(t&&n.length===t));i=!0);}catch(m){a=!0,u=m}finally{try{!i&&r.return!=null&&r.return()}finally{if(a)throw u}}return n}}function $n(e){if(Array.isArray(e))return e}function gt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?gt(Object(r),!0).forEach(function(n){Oe(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):gt(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Oe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function se(e,t){if(e==null)return{};var r=An(e,t),n,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function An(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,a;for(a=0;a<n.length;a++)i=n[a],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}var Ie=f.forwardRef(function(e,t){var r=e.children,n=se(e,xn),i=Wt(n),a=i.open,s=se(i,yn);return f.useImperativeHandle(t,function(){return{open:a}},[a]),Vt.createElement(f.Fragment,null,r(x(x({},s),{},{open:a})))});Ie.displayName="Dropzone";var Bt={disabled:!1,getFilesFromEvent:Br,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};Ie.defaultProps=Bt;Ie.propTypes={children:b.func,accept:b.objectOf(b.arrayOf(b.string)),multiple:b.bool,preventDropOnDocument:b.bool,noClick:b.bool,noKeyboard:b.bool,noDrag:b.bool,noDragEventsBubbling:b.bool,minSize:b.number,maxSize:b.number,maxFiles:b.number,disabled:b.bool,getFilesFromEvent:b.func,onFileDialogCancel:b.func,onFileDialogOpen:b.func,useFsAccessApi:b.bool,autoFocus:b.bool,onDragEnter:b.func,onDragLeave:b.func,onDragOver:b.func,onDrop:b.func,onDropAccepted:b.func,onDropRejected:b.func,onError:b.func,validator:b.func};var Ce={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function Wt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=x(x({},Bt),e),r=t.accept,n=t.disabled,i=t.getFilesFromEvent,a=t.maxSize,s=t.minSize,u=t.multiple,m=t.maxFiles,p=t.onDragEnter,h=t.onDragLeave,y=t.onDragOver,A=t.onDrop,E=t.onDropAccepted,C=t.onDropRejected,K=t.onFileDialogCancel,le=t.onFileDialogOpen,ze=t.useFsAccessApi,Le=t.autoFocus,ue=t.preventDropOnDocument,Me=t.noClick,pe=t.noKeyboard,Be=t.noDrag,P=t.noDragEventsBubbling,de=t.onError,H=t.validator,N=f.useMemo(function(){return gn(r)},[r]),We=f.useMemo(function(){return mn(r)},[r]),fe=f.useMemo(function(){return typeof le=="function"?le:ht},[le]),V=f.useMemo(function(){return typeof K=="function"?K:ht},[K]),j=f.useRef(null),F=f.useRef(null),qt=f.useReducer(On,Ce),qe=De(qt,2),me=qe[0],D=qe[1],Kt=me.isFocused,Ke=me.isFileDialogActive,J=f.useRef(typeof window<"u"&&window.isSecureContext&&ze&&fn()),He=function(){!J.current&&Ke&&setTimeout(function(){if(F.current){var d=F.current.files;d.length||(D({type:"closeDialog"}),V())}},300)};f.useEffect(function(){return window.addEventListener("focus",He,!1),function(){window.removeEventListener("focus",He,!1)}},[F,Ke,V,J]);var _=f.useRef([]),Ne=function(d){j.current&&j.current.contains(d.target)||(d.preventDefault(),_.current=[])};f.useEffect(function(){return ue&&(document.addEventListener("dragover",mt,!1),document.addEventListener("drop",Ne,!1)),function(){ue&&(document.removeEventListener("dragover",mt),document.removeEventListener("drop",Ne))}},[j,ue]),f.useEffect(function(){return!n&&Le&&j.current&&j.current.focus(),function(){}},[j,Le,n]);var T=f.useCallback(function(l){de?de(l):console.error(l)},[de]),Ue=f.useCallback(function(l){l.preventDefault(),l.persist(),ee(l),_.current=[].concat(jn(_.current),[l.target]),oe(l)&&Promise.resolve(i(l)).then(function(d){if(!(ie(l)&&!P)){var v=d.length,w=v>0&&ln({files:d,accept:N,minSize:s,maxSize:a,multiple:u,maxFiles:m,validator:H}),k=v>0&&!w;D({isDragAccept:w,isDragReject:k,isDragActive:!0,type:"setDraggedFiles"}),p&&p(l)}}).catch(function(d){return T(d)})},[i,p,T,P,N,s,a,u,m,H]),Ge=f.useCallback(function(l){l.preventDefault(),l.persist(),ee(l);var d=oe(l);if(d&&l.dataTransfer)try{l.dataTransfer.dropEffect="copy"}catch{}return d&&y&&y(l),!1},[y,P]),Ye=f.useCallback(function(l){l.preventDefault(),l.persist(),ee(l);var d=_.current.filter(function(w){return j.current&&j.current.contains(w)}),v=d.indexOf(l.target);v!==-1&&d.splice(v,1),_.current=d,!(d.length>0)&&(D({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),oe(l)&&h&&h(l))},[j,h,P]),X=f.useCallback(function(l,d){var v=[],w=[];l.forEach(function(k){var U=_t(k,N),L=De(U,2),he=L[0],be=L[1],xe=It(k,s,a),te=De(xe,2),ye=te[0],ve=te[1],we=H?H(k):null;if(he&&ye&&!we)v.push(k);else{var je=[be,ve];we&&(je=je.concat(we)),w.push({file:k,errors:je.filter(function(Gt){return Gt})})}}),(!u&&v.length>1||u&&m>=1&&v.length>m)&&(v.forEach(function(k){w.push({file:k,errors:[cn]})}),v.splice(0)),D({acceptedFiles:v,fileRejections:w,type:"setFiles"}),A&&A(v,w,d),w.length>0&&C&&C(w,d),v.length>0&&E&&E(v,d)},[D,u,N,s,a,m,A,E,C,H]),Q=f.useCallback(function(l){l.preventDefault(),l.persist(),ee(l),_.current=[],oe(l)&&Promise.resolve(i(l)).then(function(d){ie(l)&&!P||X(d,l)}).catch(function(d){return T(d)}),D({type:"reset"})},[i,X,T,P]),I=f.useCallback(function(){if(J.current){D({type:"openDialog"}),fe();var l={multiple:u,types:We};window.showOpenFilePicker(l).then(function(d){return i(d)}).then(function(d){X(d,null),D({type:"closeDialog"})}).catch(function(d){hn(d)?(V(d),D({type:"closeDialog"})):bn(d)?(J.current=!1,F.current?(F.current.value=null,F.current.click()):T(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):T(d)});return}F.current&&(D({type:"openDialog"}),fe(),F.current.value=null,F.current.click())},[D,fe,V,ze,X,T,We,u]),Ve=f.useCallback(function(l){!j.current||!j.current.isEqualNode(l.target)||(l.key===" "||l.key==="Enter"||l.keyCode===32||l.keyCode===13)&&(l.preventDefault(),I())},[j,I]),Je=f.useCallback(function(){D({type:"focus"})},[]),Xe=f.useCallback(function(){D({type:"blur"})},[]),Qe=f.useCallback(function(){Me||(dn()?setTimeout(I,0):I())},[Me,I]),z=function(d){return n?null:d},ge=function(d){return pe?null:z(d)},Z=function(d){return Be?null:z(d)},ee=function(d){P&&d.stopPropagation()},Ht=f.useMemo(function(){return function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=l.refKey,v=d===void 0?"ref":d,w=l.role,k=l.onKeyDown,U=l.onFocus,L=l.onBlur,he=l.onClick,be=l.onDragEnter,xe=l.onDragOver,te=l.onDragLeave,ye=l.onDrop,ve=se(l,vn);return x(x(Oe({onKeyDown:ge(S(k,Ve)),onFocus:ge(S(U,Je)),onBlur:ge(S(L,Xe)),onClick:z(S(he,Qe)),onDragEnter:Z(S(be,Ue)),onDragOver:Z(S(xe,Ge)),onDragLeave:Z(S(te,Ye)),onDrop:Z(S(ye,Q)),role:typeof w=="string"&&w!==""?w:"presentation"},v,j),!n&&!pe?{tabIndex:0}:{}),ve)}},[j,Ve,Je,Xe,Qe,Ue,Ge,Ye,Q,pe,Be,n]),Nt=f.useCallback(function(l){l.stopPropagation()},[]),Ut=f.useMemo(function(){return function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=l.refKey,v=d===void 0?"ref":d,w=l.onChange,k=l.onClick,U=se(l,wn),L=Oe({accept:N,multiple:u,type:"file",style:{display:"none"},onChange:z(S(w,Q)),onClick:z(S(k,Nt)),tabIndex:-1},v,F);return x(x({},L),U)}},[F,r,u,Q,n]);return x(x({},me),{},{isFocused:Kt&&!n,getRootProps:Ht,getInputProps:Ut,rootRef:j,inputRef:F,open:z(I)})}function On(e,t){switch(t.type){case"focus":return x(x({},e),{},{isFocused:!0});case"blur":return x(x({},e),{},{isFocused:!1});case"openDialog":return x(x({},Ce),{},{isFileDialogActive:!0});case"closeDialog":return x(x({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return x(x({},e),{},{isDragActive:t.isDragActive,isDragAccept:t.isDragAccept,isDragReject:t.isDragReject});case"setFiles":return x(x({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return x({},Ce);default:return e}}function ht(){}const Cn=({isDragAccept:e,isDragReject:t})=>e?c.colors.success:t?c.colors.danger:c.colors.primary.regular,Pn=g.div`
  position: relative;
  width: 100%;

  label {
    bottom: calc(256px + ${c.space[4]});
  }

  span {
    bottom: calc(256px + ${c.space[2]});
  }
`,Tn=g.div`
  width: 100%;
  height: 256px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  border: ${e=>`2px dashed ${Cn(e)}`};
  background-color: ${e=>{switch(!0){case e.isDragAccept:return"rgba(20, 174, 92, 0.3)";case e.isDragReject:return"rgba(210, 19, 18, 0.3)";default:return c.colors.primary.bg}}};
  padding: ${c.space[3]} ${c.space[5]};
  cursor: pointer;
  transition: ${c.transition.primary};
`,Rn=g.p`
  color: ${c.colors.secondary.dark};
  font-weight: ${c.fontWeights.light};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${c.space[4]};
`,_n=g.span`
  font-size: ${c.fontSizes.xl};
  font-weight: ${c.fontWeights.regular};
  text-align: center;
`,In=g.span`
  display: flex;
  flex-direction: column;
  align-items: center;
`,ke=g.span`
  font-size: ${c.fontSizes.s};
  text-align: center;
  max-width: 270px;
`,zn=g.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: ${c.space[3]};
  margin-top: ${c.space[3]};
`,Ln=g.div`
  position: relative;
  height: 100px;
  width: calc((100% - (${c.space[3]} * 4)) / 5);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 24px;
  overflow: hidden;
`,Mn=g.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: ${c.transition.primary};
  opacity: ${e=>e.hovered?"1":"0"};
`,Bn=g.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`,Wn=g.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,qn=g.p`
  font-size: ${c.fontSizes.xs};
  font-weight: ${c.fontWeights.light};
  margin-top: ${c.space[1]};
`,O=({icon:e,name:t})=>{const r=()=>t.length>16?`${t.substr(0,12)}...`:t;return o.jsxs(Wn,{children:[o.jsx(e,{size:76,color:c.colors.secondary.dark,height:"50%"}),o.jsx(qn,{children:r()})]})},Kn=({file:e,setFiles:t})=>{const[r,n]=f.useState(null),[i,a]=f.useState(!1),[s,u]=f.useState(!1),m=["image/png","image/gif","image/jpeg","image/svg+xml","image/tiff"];return f.useEffect(()=>{if(!e)return;a(!0);let p=new FileReader;p.onloadend=()=>{a(!1),n(p.result)},p.readAsDataURL(e)},[e]),o.jsxs(Ln,{onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1),onClick:()=>t(p=>p.filter(h=>h.name!==e.name)),children:[o.jsx(Mn,{hovered:s,children:o.jsx(Et,{size:30,color:c.colors.danger})}),m.includes(e==null?void 0:e.type)&&o.jsx(Bn,{src:r,alt:e==null?void 0:e.name}),(e==null?void 0:e.type)==="text/plain"&&o.jsx(O,{icon:or,name:e==null?void 0:e.name}),(e==null?void 0:e.type)==="application/pdf"&&o.jsx(O,{icon:ar,name:e==null?void 0:e.name}),(e==null?void 0:e.type)==="application/json"&&o.jsx(O,{icon:ir,name:e==null?void 0:e.name}),(e==null?void 0:e.type)==="application/msword"&&o.jsx(O,{icon:tt,name:e==null?void 0:e.name}),(e==null?void 0:e.type)==="application/vnd.openxmlformats-officedocument.wordprocessingml.document"&&o.jsx(O,{icon:tt,name:e==null?void 0:e.name}),(e==null?void 0:e.type)==="application/vnd.ms-powerpoint"&&o.jsx(O,{icon:rt,name:e==null?void 0:e.name}),(e==null?void 0:e.type)==="application/vnd.openxmlformats-officedocument.presentationml.presentation"&&o.jsx(O,{icon:rt,name:e==null?void 0:e.name}),(e==null?void 0:e.type)==="application/vnd.ms-excel"&&o.jsx(O,{icon:nt,name:e==null?void 0:e.name}),(e==null?void 0:e.type)==="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"&&o.jsx(O,{icon:nt,name:e==null?void 0:e.name})]})},Hn=({values:e,setFieldValue:t})=>{const[r,n]=f.useState([]);f.useEffect(()=>{r.length<1||t("files",r)},[r,t]);const{acceptedFiles:i,fileRejections:a,getRootProps:s,getInputProps:u,isFocused:m,isDragAccept:p,isDragReject:h}=Wt({maxFiles:10,maxSize:1e7,multiple:!0,accept:{"text/plain":[".txt"],"image/*":[".png",".gif",".jpeg",".jpg",".svg",".tiff"],"application/json":[".json"],"application/pdf":[".pdf"],"application/msword":[".doc"],"application/vnd.openxmlformats-officedocument.wordprocessingml.document":[".docx"],"application/vnd.ms-powerpoint":[".ppt"],"application/vnd.openxmlformats-officedocument.presentationml.presentation":[".pptx"],"application/vnd.ms-excel":[".xls"],"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":[".xlsx"]},onDrop:y=>{if(y.length===0)return;const A=y.filter(E=>{if(!r.some(C=>C.name===E.name))return E});n(E=>[...E,...A])}});return o.jsxs(o.Fragment,{children:[o.jsxs(Pn,{children:[o.jsx(B,{htmlFor:"files",children:"Please upload project files"}),o.jsx(Te,{children:"Brand guides, copy, logo files, etc."}),o.jsxs(Tn,{...s({isDragAccept:p,isDragReject:h}),children:[o.jsx("input",{id:"files",...u()}),o.jsxs(Rn,{children:[o.jsx(_n,{children:"Drag'n'drop some files here, or click to select files"}),o.jsxs(In,{children:[o.jsx(ke,{children:"Max 10 files"}),o.jsx(ke,{children:"Max size 10mb"}),o.jsx(ke,{children:".txt, .json, .pdf, .doc, .docx, .ppt, .pptx, .xls, .xlsx, .png, .gif, .jpeg, .jpg, .svg, .tiff"})]})]})]})]}),r.length>0&&o.jsx(zn,{children:r.map((y,A)=>o.jsx(Kn,{file:y,setFiles:n},A))})]})},Nn=g.div`
  display: block;
  width: 100%;
  position: relative;
  margin-top: 124px;

  label[id='linksLabel'] {
    bottom: unset;
    top: calc(-27px - ${c.space[4]});
  }

  span[id='linksSubLabel'] {
    bottom: unset;
    top: calc(-20px - ${c.space[2]});
  }

  button[id='addLink'] {
    margin-top: ${c.space[3]};
  }
`,Un=g(kt)`
  width: 100%;
  display: flex;
  gap: ${c.space[3]};
`,Gn=g.ul`
  display: flex;
  flex-direction: column;
  gap: ${c.space[3]};
`,Yn=g.li`
  position: relative;

  button {
    position: absolute;
    right: ${c.space[1]};
    top: ${c.space[1]};
    background-color: ${c.colors.white};
    color: ${c.colors.secondary.regular};

    :hover {
      color: ${c.colors.danger};
    }
  }
`,Vn=({values:e})=>o.jsxs(Nn,{children:[o.jsx(B,{id:"linksLabel",children:"Share the links"}),o.jsx(Te,{id:"linksSubLabel",children:"Dropbox, GDrive, WeTransfer, etc."}),o.jsx(Un,{name:"links",children:({insert:t,remove:r,push:n})=>o.jsxs(o.Fragment,{children:[o.jsx(Gn,{children:e.links.map((i,a)=>o.jsxs(Yn,{children:[o.jsx(M,{type:"url",id:`links.${a}`,placeholder:"https://"}),e.links.length>1&&o.jsx(Ee,{icon:Et,iconSize:24,type:"button",onClick:()=>r(a),round:!0})]},a))}),o.jsx(ce,{disabled:e.links.length>9,id:"addLink",onClick:()=>n(""),children:"Add link"})]})})]}),Jn=g.div`
  width: 100%;
  height: 48px;
  margin-top: 84px;
  display: flex;
  align-items: center;
  position: relative;

  label {
    bottom: calc(48px + ${c.space[2]});
  }

  input[type='range'].styled-slider {
    -webkit-appearance: none;
  }

  /*progress support*/
  input[type='range'].styled-slider.slider-progress {
    --range: calc(var(--max) - var(--min));
    --ratio: calc((var(--value) - var(--min)) / var(--range));
    --sx: calc(0.5 * 24px + var(--ratio) * (100% - 24px));
  }

  input[type='range'].styled-slider:focus {
    outline: none;
  }

  /*webkit*/
  input[type='range'].styled-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 24px;
    height: 24px;
    border-radius: 12px;
    background: #215df6;
    border: none;
    box-shadow: 0 0 2px black;
    margin-top: calc(12px * 0.5 - 24px * 0.5);
    cursor: grab;
  }

  input[type='range'].styled-slider::-webkit-slider-runnable-track {
    height: 12px;
    border: none;
    border-radius: 6px;
    background: #dbdfe9;
    box-shadow: none;
  }

  input[type='range'].styled-slider.slider-progress::-webkit-slider-runnable-track {
    background: linear-gradient(#215df6, #215df6) 0 / var(--sx) 100% no-repeat,
      #dbdfe9;
  }

  input[type='range'].styled-slider.slider-progress:hover::-webkit-slider-runnable-track {
    background: linear-gradient(#5280f3, #5280f3) 0 / var(--sx) 100% no-repeat,
      #dbdfe9;
  }

  /*mozilla*/
  input[type='range'].styled-slider::-moz-range-thumb {
    width: 24px;
    height: 24px;
    border-radius: 12px;
    background: #215df6;
    border: none;
    box-shadow: 0 0 2px black;
  }

  input[type='range'].styled-slider::-moz-range-track {
    height: 12px;
    border: none;
    border-radius: 6px;
    background: #dbdfe9;
    box-shadow: none;
  }

  input[type='range'].styled-slider.slider-progress::-moz-range-track {
    background: linear-gradient(#215df6, #215df6) 0 / var(--sx) 100% no-repeat,
      #dbdfe9;
  }

  input[type='range'].styled-slider.slider-progress:hover::-moz-range-track {
    background: linear-gradient(#5280f3, #5280f3) 0 / var(--sx) 100% no-repeat,
      #dbdfe9;
  }

  /*ms*/
  input[type='range'].styled-slider::-ms-fill-upper {
    background: transparent;
    border-color: transparent;
  }

  input[type='range'].styled-slider::-ms-fill-lower {
    background: transparent;
    border-color: transparent;
  }

  input[type='range'].styled-slider::-ms-thumb {
    width: 24px;
    height: 24px;
    border-radius: 12px;
    background: #215df6;
    border: none;
    box-shadow: 0 0 2px black;
    margin-top: 0;
    box-sizing: border-box;
  }

  input[type='range'].styled-slider::-ms-track {
    height: 12px;
    border-radius: 6px;
    background: #dbdfe9;
    border: none;
    box-shadow: none;
    box-sizing: border-box;
  }

  input[type='range'].styled-slider.slider-progress::-ms-fill-lower {
    height: 12px;
    border-radius: 6px 0 0 6px;
    margin: -undefined 0 -undefined -undefined;
    background: #215df6;
    border: none;
    border-right-width: 0;
  }

  input[type='range'].styled-slider.slider-progress:hover::-ms-fill-lower {
    background: #5280f3;
  }
`,Xn=g(Pe)`
  width: 100%;
  padding: 0;
  margin: 0;
`,Qn=({values:e})=>(f.useEffect(()=>{for(let t of document.querySelectorAll('input[type="range"].slider-progress'))t.style.setProperty("--value",t.value),t.style.setProperty("--min",t.min==""?"200":t.min),t.style.setProperty("--max",t.max==""?"5000":t.max),t.addEventListener("input",()=>t.style.setProperty("--value",t.value))},[]),o.jsxs(Jn,{children:[o.jsxs(B,{htmlFor:"budget",children:["Set up the budget: $",e.budget]}),o.jsx(Xn,{className:"styled-slider slider-progress",type:"range",id:"budget",name:"budget",min:"200",max:"5000",step:"100",value:e.budget}),o.jsx(vt,{name:"budget",component:Re})]})),Zn=g.div`
  width: 100%;
  display: flex;
  gap: ${c.space[3]};
  position: relative;
  margin-top: 84px;
  margin-bottom: ${c.space[4]};

  .rdp-nav {
    button {
      transition: ${c.transition.primary};
    }
  }

  .rdp-cell {
    button {
      transition: ${c.transition.primary};
    }
  }
`,bt=g.div`
  position: relative;
  flex: 50%;

  button[id='calendar'] {
    position: absolute;
    right: ${c.space[1]};
    top: ${c.space[1]};
    background-color: transparent;
    color: ${c.colors.primary.regular};
  }

  div[id='datePicker'] {
    position: absolute;
    bottom: calc(48px + ${c.space[2]});
    border-radius: ${c.space[3]};
    box-shadow: ${c.shadow.primary};
    background-color: ${c.colors.white};
  }
`,xt=({field:e,setFieldValue:t,togglePicker:r})=>{const[n,i]=f.useState(null),a=new Date,s=p=>cr(p,new Date)<0,u=p=>(p.dates.every(s),o.jsx(lr,{...p})),m=p=>{const h=ur(p,"dd.MM.yyyy");i(h),t(e,h),r()};return o.jsx("div",{id:"datePicker",children:o.jsx(sr,{mode:"single",selected:n,onSelect:m,fromDate:a,captionLayout:"dropdown",fixedWeeks:!0,showOutsideDays:!0,hidden:s,components:{Row:u},ISOWeek:!0})})},eo=({setFieldValue:e,values:t})=>{const[r,n]=f.useState(!1),[i,a]=f.useState(!1);return o.jsxs(Zn,{children:[o.jsx(B,{htmlFor:"dateStart",children:"Choose the dates of project launch"}),o.jsxs(bt,{children:[o.jsx(M,{type:"text",placeholder:"Start",id:"dateStart",value:t.dateStart}),o.jsx(Ee,{id:"calendar",icon:ot,iconSize:24,onClick:()=>n(s=>!s),round:!0}),r&&o.jsx(xt,{field:"dateStart",setFieldValue:e,togglePicker:()=>n(s=>!s)})]}),o.jsxs(bt,{children:[o.jsx(M,{type:"text",placeholder:"Deadline",id:"deadline",value:t.deadline}),o.jsx(Ee,{id:"calendar",icon:ot,iconSize:24,onClick:()=>{a(s=>!s)},round:!0}),i&&o.jsx(xt,{field:"deadline",setFieldValue:e,togglePicker:()=>a(s=>!s)})]})]})},to=/^(http[s]?:\/\/)?[^\s(["<,>]*\.[^\s[",><]*$/i,ro={files:[],links:[""],budget:1e3,dateStart:"",deadline:""},no=({firstStepData:e})=>{const t=i=>{console.log({...i,...e})};f.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[]);const r=(i,a)=>{const[s,u,m]=a.split(".");return new Date(`${m}-${u}-${s}`)},n=wt().shape({files:Fe().max(10),links:Fe().of($().matches(to,"Enter a valid url")).max(10,"Max 10 links"),budget:Xt().min(200).max(5e3).required("Required"),dateStart:Ze().required("Start date is required").min(new Date,"Cannot be earlier than today").transform(r),deadline:Ze().required("Deadline is required").min(jt("dateStart"),"Cannot be earlier than start date").transform(r)});return o.jsx(Dt,{initialValues:ro,validationSchema:n,onSubmit:(i,{resetForm:a})=>{t({...i,links:(()=>i.links.filter(u=>u!==""))()}),a()},children:({errors:i,touched:a,values:s,setFieldValue:u})=>o.jsxs(Cr,{children:[o.jsx(Hn,{setFieldValue:u,values:s}),o.jsx(Vn,{setFieldValue:u,values:s}),o.jsx(Qn,{setFieldValue:u,values:s}),o.jsx(eo,{setFieldValue:u,values:s}),o.jsx(ce,{type:"submit",children:"Send"})]})})},oo=({step:e,setStep:t})=>{const[r,n]=f.useState({});return o.jsxs(hr,{formActive:e,children:[!e&&o.jsx(br,{}),o.jsx(St,{children:o.jsxs(o.Fragment,{children:[e!==2&&o.jsx(Or,{setStep:t,setFirstStepData:n}),e===2&&o.jsx(no,{setStep:t,firstStepData:r})]})})]})},ao=()=>{const[e,t]=f.useState(null);return o.jsxs(o.Fragment,{children:[o.jsx(gr,{step:e,setStep:t}),o.jsx(oo,{step:e,setStep:t})]})},ho=ao;export{ho as default};
