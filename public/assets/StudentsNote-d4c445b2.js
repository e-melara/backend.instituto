import{a as tt,q as at,x as Pe,e as Te,l as Be,s as je,Z as nt,N as ot,k as rt,_ as st,c as lt,v as it,y as ut,h as ct}from"./bootstrap-vue-3.es-eb0b9d46.js";import{ah as ft,ai as dt,aj as vt,ak as pt,al as mt,am as gt,an as bt,aa as yt,ao as ht,a5 as ze,ap as _t,aq as wt,ar as Dt,as as xt,K as Me,$ as Ct,r as K,at as Et,au as Ft,Y as St,av as kt,aw as At,L as Rt,h as Ne,ax as Pt,i as C,ay as Tt,az as Bt,D as de,V as Oe,n as jt,t as G,aA as zt,aB as Mt,a8 as Nt,v as me,aC as Ot,aD as Vt,aE as $t,ad as It,aF as Lt,aG as qt,aH as Kt,aI as Ut,aJ as Ht,M as ge,G as ee,U as se,e as O,g as I,aK as Wt,aL as Gt,aM as Jt,aN as Zt,aO as Yt,q as Q,f as p,aP as Qt,d as be,aQ as Xt,aR as ea,aS as ta,aT as aa,a9 as na,aU as oa,W as Ve,P as ra,aV as sa,aW as la,a1 as ia,aX as ua,aY as ca,aZ as fa,a_ as da,p as $e,O as va,a0 as pa,A as ma,Q as ga,a$ as ba,b0 as ya,b1 as ha,o as ye,b2 as _a,b3 as wa,b4 as Da,a as xa,b5 as Ca,c as R,z as Ea,a6 as Fa,y as Sa,b6 as ka,b7 as Aa,B as Ie,S as Ra,b as Le,b8 as Pa,H as Ta,b9 as Ba,ba as ja,bb as za,bc as Ma,bd as Na,be as Oa,bf as Va,bg as $a,bh as Ia,a2 as La,bi as qa,T as Ka,bj as Ua,bk as Ha,bl as Wa,N as le,Z as Ga,bm as Ja,bn as Za,bo as Ya,w as m,bp as Qa,a3 as Xa,bq as en,br as tn,X as an,bs as nn,bt as on,bu as rn,bv as sn,bw as ln,bx as un,by as cn,bz as fn,bA as dn,bB as vn,bC as pn,bD as mn,bE as gn,bF as bn,a4 as yn,bG as hn,ac as _n,ab as wn,a7 as Dn,bH as qe,bI as Ke,C as Ue,_ as xn,ae as Cn,af as En,ag as Fn,x as Sn}from"./index-8ac73380.js";import{F as kn,e as An,E as Rn}from"./FileSaver.min-4afbc08e.js";import{f as De,_ as Pn,s as Tn}from"./TableNote.vue_vue_type_script_setup_true_lang-5d44c62d.js";const Bn=()=>{},jn=Object.freeze(Object.defineProperty({__proto__:null,compile:Bn,EffectScope:ft,ReactiveEffect:dt,customRef:vt,effect:pt,effectScope:mt,getCurrentScope:gt,isProxy:bt,isReactive:yt,isReadonly:ht,isRef:ze,isShallow:_t,markRaw:wt,onScopeDispose:Dt,proxyRefs:xt,reactive:Me,readonly:Ct,ref:K,shallowReactive:Et,shallowReadonly:Ft,shallowRef:St,stop:kt,toRaw:At,toRef:Rt,toRefs:Ne,triggerRef:Pt,unref:C,camelize:Tt,capitalize:Bt,normalizeClass:de,normalizeProps:Oe,normalizeStyle:jt,toDisplayString:G,toHandlerKey:zt,BaseTransition:Mt,Comment:Nt,Fragment:me,KeepAlive:Ot,Static:Vt,Suspense:$t,Teleport:It,Text:Lt,callWithAsyncErrorHandling:qt,callWithErrorHandling:Kt,cloneVNode:Ut,compatUtils:Ht,computed:ge,createBlock:ee,createCommentVNode:se,createElementBlock:O,createElementVNode:I,createHydrationRenderer:Wt,createPropsRestProxy:Gt,createRenderer:Jt,createSlots:Zt,createStaticVNode:Yt,createTextVNode:Q,createVNode:p,defineAsyncComponent:Qt,defineComponent:be,defineEmits:Xt,defineExpose:ea,defineProps:ta,get devtools(){return aa},getCurrentInstance:na,getTransitionRawChildren:oa,guardReactiveProps:Ve,h:ra,handleError:sa,initCustomFormatter:la,inject:ia,isMemoSame:ua,isRuntimeOnly:ca,isVNode:fa,mergeDefaults:da,mergeProps:$e,nextTick:va,onActivated:pa,onBeforeMount:ma,onBeforeUnmount:ga,onBeforeUpdate:ba,onDeactivated:ya,onErrorCaptured:ha,onMounted:ye,onRenderTracked:_a,onRenderTriggered:wa,onServerPrefetch:Da,onUnmounted:xa,onUpdated:Ca,openBlock:R,popScopeId:Ea,provide:Fa,pushScopeId:Sa,queuePostFlushCb:ka,registerRuntimeCompiler:Aa,renderList:Ie,renderSlot:Ra,resolveComponent:Le,resolveDirective:Pa,resolveDynamicComponent:Ta,resolveFilter:Ba,resolveTransitionHooks:ja,setBlockTracking:za,setDevtoolsHook:Ma,setTransitionHooks:Na,ssrContextKey:Oa,ssrUtils:Va,toHandlers:$a,transformVNodeArgs:Ia,useAttrs:La,useSSRContext:qa,useSlots:Ka,useTransitionState:Ua,version:Ha,warn:Wa,watch:le,watchEffect:Ga,watchPostEffect:Ja,watchSyncEffect:Za,withAsyncContext:Ya,withCtx:m,withDefaults:Qa,withDirectives:Xa,withMemo:en,withScopeId:tn,Transition:an,TransitionGroup:nn,VueElement:on,createApp:rn,createSSRApp:sn,defineCustomElement:ln,defineSSRCustomElement:un,hydrate:cn,initDirectivesForSSR:fn,render:dn,useCssModule:vn,useCssVars:pn,vModelCheckbox:mn,vModelDynamic:gn,vModelRadio:bn,vModelSelect:yn,vModelText:hn,vShow:_n,withKeys:wn,withModifiers:Dn},Symbol.toStringTag,{value:"Module"}));function zn(e,t=new Date().getTime().toString()){return e.xlsx.writeBuffer().then(a=>{const o=new Blob([a],{type:"application/vnd.ms-excel"});kn.saveAs(o,`${t}.xlsx`)})}var U=(e=>(e[e.Border=0]="Border",e[e.Protection=1]="Protection",e[e.Validation=2]="Validation",e[e.Fill=3]="Fill",e))(U||{});const fe=(e,t,a,o=U.Border,n="thin",s="F08080")=>{const c={top:{style:n},left:{style:n},bottom:{style:n},right:{style:n}};if(o===U.Fill)for(let u=t.column;u<a.column;u++)e.getCell(t.row,u).fill={type:"pattern",pattern:"solid",fgColor:{argb:s}};else for(let u=t.row;u<=a.row;u++)for(let d=t.column;d<=a.column;d++)o===U.Border&&(e.getCell(u,d).border=c),o===U.Protection&&(e.getCell(u,d).protection={locked:!1}),o===U.Validation&&(e.getCell(u,d).dataValidation={type:"decimal",operator:"between",allowBlank:!0,showErrorMessage:!0,formulae:[0,10],promptTitle:"Decimal",errorStyle:"error",errorTitle:"Valor no valido",error:"El valor debe ser un numero, Debe ser mayor que cero y menor o igual a 10"})},Mn=(e,t,a)=>{const[o]=e,n=new An.Workbook,s=new FileReader;return new Promise((c,u)=>{s.readAsArrayBuffer(o),s.onerror=()=>{u("Tenemos un problema para poder leer el documento")},s.onload=()=>{const d=s.result;n.xlsx.load(d).then(i=>{var T;const l=[],g=i.worksheets[0],P=(T=g.getCell("A1").value)==null?void 0:T.toString();t.toString()!==P&&u("El Documento no es valido para esta asignatura"),g.eachRow({includeEmpty:!0},function(H,B){var _,E,j;if(B>7&&B<=a+7){const M=g.getRow(B),F=parseFloat((_=M.getCell(5).value)==null?void 0:_.toString())||0;l.push({carnet:((E=M.getCell(3).value)==null?void 0:E.toString())||"",nombre:((j=M.getCell(4).value)==null?void 0:j.toString())||"",color:F<5?"bg-danger":F>=5&&F<=8?"bg-warning":"bg-primary",valor:F})}}),c(l)})}})},Nn=(e,t,a,o)=>{e.mergeCells("B2:E2"),e.mergeCells("B4:E4"),e.mergeCells("B5:E5"),e.mergeCells("F4:J4"),e.mergeCells("F5:J5");const[n]=t;e.getCell("A1").value=n.carga_academica_id,e.getCell("E2").value=`NOMBRE MATERIA: ${o.nombre}`,e.getCell("E4").value=`Codigo: ${o.codigo}`,e.getCell("E5").value=`Docente: ${a.nombres} ${a.apellidos}`,[{column:0,width:1},{column:1,width:5.5},{column:2,width:12.1},{column:3,width:48.4},{column:4,width:6}].forEach(({column:c,width:u})=>{e.columns[c].width=u})},On=e=>{["E2","E4","E5","J4","J5"].map(t=>{const a=t==="E2";e.getCell(t).alignment={vertical:"middle",horizontal:"center"},e.getCell(t).font={name:"Arial",size:a?14:12,bold:!!a}}),e.getCell("A1").font={color:{argb:"FFFFFFFF",theme:1}}},Vn=async(e,t)=>{const a=new Rn.Workbook,o=a.addWorksheet("Cuadro de notas"),{materia:n,docente:s}=t.value,c=new Date().getTime()+"--pass--word--secret";await o.protect(c,{});let u=new Array;e&&(Nn(o,e,s,n),u=e.map((i,l)=>[l+1,i.alumno.carnet,`${i.alumno.apellidos} ${i.alumno.nombres}`])),o.addTable({ref:"B7",name:"notas",headerRow:!0,totalsRow:!1,style:{theme:"TableStyleLight1",showRowStripes:!0},columns:[{name:"#",filterButton:!1},{name:"Carnet",filterButton:!1},{name:"Alumno",filterButton:!1},{name:"Nota",filterButton:!1}],rows:[...u]}),On(o),fe(o,{row:7,column:12},{column:5,row:8+u.length}),fe(o,{row:8,column:5},{row:8+u.length,column:5},U.Protection),fe(o,{row:8,column:5},{column:5,row:8+u.length},U.Validation);const d=`${n.nombre}-${s.nombres}-${new Date().getTime()}`;return zn(a,d)};var He={};const $n=qe(jn);function te(e,t,a,o){function n(s){return s instanceof a?s:new a(function(c){c(s)})}return new(a||(a=Promise))(function(s,c){function u(l){try{i(o.next(l))}catch(g){c(g)}}function d(l){try{i(o.throw(l))}catch(g){c(g)}}function i(l){l.done?s(l.value):n(l.value).then(u,d)}i((o=o.apply(e,t||[])).next())})}function ae(e,t){var a={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},o,n,s,c;return c={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function u(i){return function(l){return d([i,l])}}function d(i){if(o)throw new TypeError("Generator is already executing.");for(;c&&(c=0,i[0]&&(a=0)),a;)try{if(o=1,n&&(s=i[0]&2?n.return:i[0]?n.throw||((s=n.return)&&s.call(n),0):n.next)&&!(s=s.call(n,i[1])).done)return s;switch(n=0,s&&(i=[i[0]&2,s.value]),i[0]){case 0:case 1:s=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(s=a.trys,!(s=s.length>0&&s[s.length-1])&&(i[0]===6||i[0]===2)){a=0;continue}if(i[0]===3&&(!s||i[1]>s[0]&&i[1]<s[3])){a.label=i[1];break}if(i[0]===6&&a.label<s[1]){a.label=s[1],s=i;break}if(s&&a.label<s[2]){a.label=s[2],a.ops.push(i);break}s[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(l){i=[6,l],n=0}finally{o=s=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}}function In(e,t){var a=typeof Symbol=="function"&&e[Symbol.iterator];if(!a)return e;var o=a.call(e),n,s=[],c;try{for(;(t===void 0||t-- >0)&&!(n=o.next()).done;)s.push(n.value)}catch(u){c={error:u}}finally{try{n&&!n.done&&(a=o.return)&&a.call(o)}finally{if(c)throw c.error}}return s}function Ln(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(In(arguments[t]));return e}var qn=new Map([["avi","video/avi"],["gif","image/gif"],["ico","image/x-icon"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["mkv","video/x-matroska"],["mov","video/quicktime"],["mp4","video/mp4"],["pdf","application/pdf"],["png","image/png"],["zip","application/zip"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]]);function ue(e,t){var a=Kn(e);if(typeof a.path!="string"){var o=e.webkitRelativePath;Object.defineProperty(a,"path",{value:typeof t=="string"?t:typeof o=="string"&&o.length>0?o:e.name,writable:!1,configurable:!1,enumerable:!0})}return a}function Kn(e){var t=e.name,a=t&&t.lastIndexOf(".")!==-1;if(a&&!e.type){var o=t.split(".").pop().toLowerCase(),n=qn.get(o);n&&Object.defineProperty(e,"type",{value:n,writable:!1,configurable:!1,enumerable:!0})}return e}var Un=[".DS_Store","Thumbs.db"];function Hn(e){return te(this,void 0,void 0,function(){return ae(this,function(t){return[2,Wn(e)&&e.dataTransfer?Zn(e.dataTransfer,e.type):Gn(e)]})})}function Wn(e){return!!e.dataTransfer}function Gn(e){var t=Jn(e.target)?e.target.files?ve(e.target.files):[]:[];return t.map(function(a){return ue(a)})}function Jn(e){return e!==null}function Zn(e,t){return te(this,void 0,void 0,function(){var a,o;return ae(this,function(n){switch(n.label){case 0:return e.items?(a=ve(e.items).filter(function(s){return s.kind==="file"}),t!=="drop"?[2,a]:[4,Promise.all(a.map(Yn))]):[3,2];case 1:return o=n.sent(),[2,xe(We(o))];case 2:return[2,xe(ve(e.files).map(function(s){return ue(s)}))]}})})}function xe(e){return e.filter(function(t){return Un.indexOf(t.name)===-1})}function ve(e){for(var t=[],a=0;a<e.length;a++){var o=e[a];t.push(o)}return t}function Yn(e){if(typeof e.webkitGetAsEntry!="function")return Ce(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?Ge(t):Ce(e)}function We(e){return e.reduce(function(t,a){return Ln(t,Array.isArray(a)?We(a):[a])},[])}function Ce(e){var t=e.getAsFile();if(!t)return Promise.reject(e+" is not a File");var a=ue(t);return Promise.resolve(a)}function Qn(e){return te(this,void 0,void 0,function(){return ae(this,function(t){return[2,e.isDirectory?Ge(e):Xn(e)]})})}function Ge(e){var t=e.createReader();return new Promise(function(a,o){var n=[];function s(){var c=this;t.readEntries(function(u){return te(c,void 0,void 0,function(){var d,i,l;return ae(this,function(g){switch(g.label){case 0:if(u.length)return[3,5];g.label=1;case 1:return g.trys.push([1,3,,4]),[4,Promise.all(n)];case 2:return d=g.sent(),a(d),[3,4];case 3:return i=g.sent(),o(i),[3,4];case 4:return[3,6];case 5:l=Promise.all(u.map(Qn)),n.push(l),s(),g.label=6;case 6:return[2]}})})},function(u){o(u)})}s()})}function Xn(e){return te(this,void 0,void 0,function(){return ae(this,function(t){return[2,new Promise(function(a,o){e.file(function(n){var s=ue(n,e.fullPath);a(s)},function(n){o(n)})})]})})}const eo=Object.freeze(Object.defineProperty({__proto__:null,fromEvent:Hn},Symbol.toStringTag,{value:"Module"})),to=qe(eo);var he={};he.__esModule=!0;he.default=function(e,t){if(e&&t){var a=Array.isArray(t)?t:t.split(","),o=e.name||"",n=(e.type||"").toLowerCase(),s=n.replace(/\/.*$/,"");return a.some(function(c){var u=c.trim().toLowerCase();return u.charAt(0)==="."?o.toLowerCase().endsWith(u):u.endsWith("/*")?s===u.replace(/\/.*$/,""):n===u})}return!0};Object.defineProperty(He,"__esModule",{value:!0});var A=$n,ao=to;function no(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var oo=no(he),b=function(){return(b=Object.assign||function(e){for(var t,a=1,o=arguments.length;a<o;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};function Ee(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(a[o[n]]=e[o[n]])}return a}function ro(e,t,a,o){return new(a||(a=Promise))(function(n,s){function c(i){try{d(o.next(i))}catch(l){s(l)}}function u(i){try{d(o.throw(i))}catch(l){s(l)}}function d(i){var l;i.done?n(i.value):(l=i.value,l instanceof a?l:new a(function(g){g(l)})).then(c,u)}d((o=o.apply(e,t||[])).next())})}function so(e,t){var a,o,n,s,c={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return s={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function u(d){return function(i){return function(l){if(a)throw new TypeError("Generator is already executing.");for(;c;)try{if(a=1,o&&(n=2&l[0]?o.return:l[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,l[1])).done)return n;switch(o=0,n&&(l=[2&l[0],n.value]),l[0]){case 0:case 1:n=l;break;case 4:return c.label++,{value:l[1],done:!1};case 5:c.label++,o=l[1],l=[0];continue;case 7:l=c.ops.pop(),c.trys.pop();continue;default:if(n=c.trys,!((n=n.length>0&&n[n.length-1])||l[0]!==6&&l[0]!==2)){c=0;continue}if(l[0]===3&&(!n||l[1]>n[0]&&l[1]<n[3])){c.label=l[1];break}if(l[0]===6&&c.label<n[1]){c.label=n[1],n=l;break}if(n&&c.label<n[2]){c.label=n[2],c.ops.push(l);break}n[2]&&c.ops.pop(),c.trys.pop();continue}l=t.call(e,c)}catch(g){l=[6,g],o=0}finally{a=n=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([d,i])}}}function pe(e,t){for(var a=0,o=t.length,n=e.length;a<o;a++,n++)e[n]=t[a];return e}function Fe(e){e.preventDefault()}function re(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(t){return t==="Files"||t==="application/x-moz-file"}):!!e.target&&!!e.target.files}function ie(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():e.cancelBubble!==void 0&&e.cancelBubble}var lo={code:"too-many-files",message:"Too many files"},io=function(e){return e=Array.isArray(e)&&e.length===1?e[0]:e,{code:"file-invalid-type",message:"File type must be "+(Array.isArray(e)?"one of "+e.join(", "):e)}};function X(e){return e!=null}function Se(e,t){var a=e.type==="application/x-moz-file"||oo.default(e,t);return[a,a?null:io(t)]}var ke=function(e){return{code:"file-too-large",message:"File is larger than "+e+" bytes"}},Ae=function(e){return{code:"file-too-small",message:"File is smaller than "+e+" bytes"}};function Re(e,t,a){if(X(e.size)&&e.size)if(X(t)&&X(a)){if(e.size>a)return[!1,ke(a)];if(e.size<t)return[!1,Ae(t)]}else{if(X(t)&&e.size<t)return[!1,Ae(t)];if(X(a)&&e.size>a)return[!1,ke(a)]}return[!0,null]}function N(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return function(a){for(var o=[],n=1;n<arguments.length;n++)o[n-1]=arguments[n];return e.some(function(s){return!ie(a)&&s&&s.apply(void 0,pe([a],o)),ie(a)})}}var uo={disabled:!1,getFilesFromEvent:ao.fromEvent,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1};function co(e,t){switch(t.type){case"focus":return b(b({},e),{isFocused:!0});case"blur":return b(b({},e),{isFocused:!1});case"openDialog":return b(b({},e),{isFileDialogActive:!0});case"closeDialog":return b(b({},e),{isFileDialogActive:!1});case"setDraggedFiles":var a=t.isDragActive,o=t.draggedFiles;return b(b({},e),{draggedFiles:o,isDragActive:a});case"setFiles":return b(b({},e),{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return b(b({},e),{isFileDialogActive:!1,isDragActive:!1,draggedFiles:[],acceptedFiles:[],fileRejections:[]});default:return e}}var fo=He.useDropzone=function(e){e===void 0&&(e={});var t=A.ref(b(b({},uo),e));A.watch(function(){return b({},e)},function(r){t.value=b(b({},t.value),r)});var a=A.ref(),o=A.ref(),n=function(r,f,v){var y=A.reactive(f),h=function(k){var S=r(A.toRaw(y),k);Object.keys(S).forEach(function(z){y[z]=S[z]})};return v!=null&&h(v),[y,h]}(co,{isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,draggedFiles:[],acceptedFiles:[],fileRejections:[]}),s=n[0],c=n[1],u=function(){o.value&&(c({type:"openDialog"}),o.value.value="",o.value.click())},d=function(){var r=t.value.onFileDialogCancel;s.isFileDialogActive&&setTimeout(function(){if(o.value){var f=o.value.files;f&&!f.length&&(c({type:"closeDialog"}),typeof r=="function"&&r())}},300)};function i(r){a.value&&(a.value.$el||a.value).isEqualNode(r.target)&&(r.keyCode!==32&&r.keyCode!==13||(r.preventDefault(),u()))}function l(){c({type:"focus"})}function g(){c({type:"blur"})}function P(){var r;t.value.noClick||(r===void 0&&(r=window.navigator.userAgent),function(f){return f.includes("MSIE")||f.includes("Trident/")}(r)||function(f){return f.includes("Edge/")}(r)?setTimeout(u,0):u())}var T=A.ref([]),H=function(r){a.value&&((a.value.$el||a.value).contains(r.target)||(r.preventDefault(),T.value=[]))};function B(r){t.value.noDragEventsBubbling&&r.stopPropagation()}function _(r){return ro(this,void 0,void 0,function(){var f,v,y,h,k;return so(this,function(S){switch(S.label){case 0:return f=t.value,v=f.getFilesFromEvent,y=f.noDragEventsBubbling,h=f.onDragEnter,r.preventDefault(),B(r),T.value=pe(pe([],T.value),[r.target]),re(r)?v?[4,v(r)]:[2]:[3,2];case 1:if((k=S.sent())||(k=[]),ie(r)&&!y)return[2];c({draggedFiles:k,isDragActive:!0,type:"setDraggedFiles"}),h&&h(r),S.label=2;case 2:return[2]}})})}function E(r){var f=t.value.onDragOver;if(r.preventDefault(),B(r),r.dataTransfer)try{r.dataTransfer.dropEffect="copy"}catch{}return re(r)&&f&&f(r),!1}function j(r){r.preventDefault(),B(r);var f=T.value.filter(function(h){return!!a.value&&(a.value.$el||a.value).contains(h)}),v=f.indexOf(r.target);if(v!==-1&&f.splice(v,1),T.value=f,!(f.length>0)){c({isDragActive:!1,type:"setDraggedFiles",draggedFiles:[]});var y=t.value.onDragLeave;re(r)&&y&&y(r)}}function M(r){r.preventDefault(),B(r),T.value=[];var f=t.value,v=f.getFilesFromEvent,y=f.noDragEventsBubbling,h=f.accept,k=f.minSize,S=f.maxSize,z=f.multiple,D=f.maxFiles,q=f.onDrop,ne=f.onDropRejected,oe=f.onDropAccepted;if(re(r)){if(!v)return;Promise.resolve(v(r)).then(function(ce){if(!ie(r)||y){var $=[],Z=[];ce.forEach(function(Y){var _e=Se(Y,h),Je=_e[0],Ze=_e[1],we=Re(Y,k,S),Ye=we[0],Qe=we[1];if(Je&&Ye)$.push(Y);else{var Xe=[Ze,Qe].filter(function(et){return et});Z.push({file:Y,errors:Xe})}}),(!z&&$.length>1||z&&D>=1&&$.length>D)&&($.forEach(function(Y){Z.push({file:Y,errors:[lo]})}),$.splice(0)),c({acceptedFiles:$,fileRejections:Z,type:"setFiles"}),q&&q($,Z,r),Z.length>0&&ne&&ne(Z,r),$.length>0&&oe&&oe($,r)}})}c({type:"reset"})}A.onMounted(function(){window.addEventListener("focus",d,!1),t.value.preventDropOnDocument&&(document.addEventListener("dragover",Fe,!1),document.addEventListener("drop",H,!1))}),A.onUnmounted(function(){window.removeEventListener("focus",d,!1),t.value.preventDropOnDocument&&(document.removeEventListener("dragover",Fe),document.removeEventListener("drop",H))});var F=function(r){return t.value.disabled?void 0:r},W=function(r){return t.value.noKeyboard?void 0:F(r)},V=function(r){return t.value.noDrag?void 0:F(r)},L=function(r){r.stopPropagation()},J=A.computed(function(){return s.draggedFiles?s.draggedFiles.length:0}),w=A.computed(function(){return J.value>0&&function(r){var f=r.files,v=r.accept,y=r.minSize,h=r.maxSize,k=r.multiple,S=r.maxFiles;return!(!k&&f.length>1||k&&S>=1&&f.length>S)&&f.every(function(z){var D=Se(z,v)[0],q=Re(z,y,h)[0];return D&&q})}({files:s.draggedFiles,accept:t.value.accept,minSize:t.value.minSize,maxSize:t.value.maxSize,multiple:t.value.multiple,maxFiles:t.value.maxFiles})}),x=A.computed(function(){return J.value>0&&!w.value});return b(b({},A.toRefs(s)),{isDragAccept:w,isDragReject:x,isFocused:A.computed(function(){return s.isFocused&&!t.value.disabled}),getRootProps:function(r){r===void 0&&(r={});var f=r.onKeyDown,v=r.onFocus,y=r.onBlur,h=r.onClick,k=r.onDragEnter,S=r.onDragenter,z=r.onDragOver,D=r.onDragover,q=r.onDragLeave,ne=r.onDragleave,oe=r.onDrop,ce=Ee(r,["onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragenter","onDragOver","onDragover","onDragLeave","onDragleave","onDrop"]);return b(b({onKeyDown:W(N(f,i)),onFocus:W(N(v,l)),onBlur:W(N(y,g)),onClick:F(N(h,P)),onDragenter:V(N(k,S,_)),onDragover:V(N(z,D,E)),onDragleave:V(N(q,ne,j)),onDrop:V(N(oe,M)),ref:a},t.value.disabled||t.value.noKeyboard?{}:{tabIndex:0}),ce)},getInputProps:function(r){r===void 0&&(r={});var f=r.onChange,v=r.onClick,y=Ee(r,["onChange","onClick"]),h={accept:t.value.accept,multiple:t.value.multiple,style:"display: none",type:"file",onChange:F(N(f,M)),onClick:F(N(v,L)),autoComplete:"off",tabIndex:-1,ref:o};return b(b({},h),y)},rootRef:a,inputRef:o,open:F(u)})};const vo={key:0,class:"files"},po={key:0},mo={key:1,class:"text-center"},go={key:0,class:"text-center"},bo={key:0,class:"d-flex justify-content-end mt-4"},yo=be({__name:"SubirNotasModal",props:{show:{type:Boolean},carga:null,data:null},emits:["close","send"],setup(e,{emit:t}){const a=e,o=["#","carnet","nombre","nota"],n=Ue(),s=Ke(),c=K([]),u=K([]),d=K(void 0),i=K(void 0),l=K([]),g=K(!1),P=Me({files:[]}),{getRootProps:T,getInputProps:H,isDragActive:B,..._}=fo({onDrop:function(w){P.files=w},accept:["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.ms-excel"]}),{show:E,carga:j}=Ne(a);le(()=>a.data.notas,w=>{w&&(c.value=Object.keys(w))},{immediate:!0}),le(()=>d.value,w=>{if(w){const x=a.data.notas[w];i.value=void 0,typeof x=="object"?u.value=Object.keys(x):u.value=[]}});const M=()=>{L(),t("close")},F=()=>{l.value=[],P.files.splice(0,1)},W=w=>{if(w.preventDefault(),u.value.length>0&&i.value===void 0){s.showAlert({detail:"Debes seleccionar una evaluacion",summary:"Error",severity:"error"});return}if(V){const x=n.params.id;Mn(P.files,+x,j.value.length).then(r=>{l.value=r,g.value=!0}).catch(r=>{s.showAlert({detail:r,summary:"Error",severity:"error"}),g.value=!1})}},V=ge(()=>u.value.length>0&&i.value===void 0?!1:P.files.length>0&&d.value!==void 0),L=()=>{P.files=[],l.value=[],d.value=void 0,g.value=!1,u.value=[],i.value=void 0},J=()=>{if(d.value){let w=a.data.notas[d.value];i.value&&(w=w[i.value]);const x={notes:l.value.map(({carnet:r,valor:f})=>({carnet:r,valor:f})),idcarga:n.params.id,key_note:w};t("send",x),L()}else s.showAlert({detail:"Debes seleccionar todas las evaluaciones y subir un archivo valido",summary:"Error",severity:"error"})};return ye(()=>{L()}),(w,x)=>{const r=tt,f=at,v=Pe,y=Te,h=Be,k=je,S=nt,z=ot;return R(),ee(z,{id:"modal-1",title:"Notas",modelValue:C(E),"onUpdate:modelValue":x[2]||(x[2]=D=>ze(E)?E.value=D:null),onHide:M,size:"xl","hide-footer":"",scrollable:"","no-close-on-esc":!0,"no-close-on-backdrop":!0},{default:m(()=>[p(S,{fluid:""},{default:m(()=>[p(v,null,{default:m(()=>[p(y,{cols:"4"},{default:m(()=>[p(v,null,{default:m(()=>[p(f,{id:"nota-group",label:"Evaluacion:","label-for":"nota-input"},{default:m(()=>[p(r,{modelValue:d.value,"onUpdate:modelValue":x[0]||(x[0]=D=>d.value=D),required:"",options:c.value,id:"nota-input"},null,8,["modelValue","options"])]),_:1}),u.value.length>0?(R(),ee(f,{key:0,id:"nota-group",label:"Nota: ","label-for":"nota-input-children"},{default:m(()=>[p(r,{modelValue:i.value,"onUpdate:modelValue":x[1]||(x[1]=D=>i.value=D),required:"",options:u.value,id:"nota-input-children"},null,8,["modelValue","options"])]),_:1})):se("",!0)]),_:1}),p(v,null,{default:m(()=>[p(y,{class:"mt-3"},{default:m(()=>[P.files.length>0?(R(),O("div",vo,[(R(!0),O(me,null,Ie(P.files,(D,q)=>(R(),O("div",{class:"file-item",key:q},[I("span",null,G(D.name),1),I("span",{class:"delete-file",onClick:F},"Eliminar")]))),128))])):(R(),O("div",$e({key:1},C(T)(),{class:"dropzone"}),[I("div",{class:de(["border",{isDragActive:C(B)}])},[I("input",Oe(Ve(C(H)())),null,16),C(B)?(R(),O("p",po,"Suelta el archivo aquí ....")):(R(),O("p",mo," Arrastre y suelte archivos aquí, o haga clic para seleccionar archivos "))],2)],16))]),_:1})]),_:1}),p(h,{class:"mt-4",disabled:!C(V),onClick:W,variant:"primary"},{default:m(()=>[Q("Ver")]),_:1},8,["disabled"])]),_:1}),p(y,{class:"d-flex justify-content-center align-items-center"},{default:m(()=>[l.value.length===0?(R(),O("h2",go," Debes seleccionar un archivo valido. ")):(R(),ee(k,{key:1,items:l.value,bordered:"",hover:"",small:"",fields:o},{"cell(nota)":m(({item:D})=>[I("span",{class:de(["d-block text-center badge",D.color])},G(D.valor.toFixed(2)),3)]),"cell(#)":m(({index:D})=>[Q(G(D+1),1)]),_:1},8,["items"]))]),_:1})]),_:1})]),_:1}),g.value?(R(),O("div",bo,[p(h,{variant:"primary",onClick:J},{default:m(()=>[Q("Subir notas")]),_:1})])):se("",!0)]),_:1},8,["modelValue"])}}});const ho=xn(yo,[["__scopeId","data-v-8553858a"]]),_o={class:"file-content"},wo=I("h5",null,"Listado de estudiantes",-1),Fo=be({__name:"StudentsNote",setup(e){const t=Ue(),a=Sn(),o=Ke(),n=Cn(),s=K(0),{open:c,carga:u,data:d}=En(n);le(d,async _=>{const E=await Tn(_.config);s.value=E.number_of_columns});const i=[{key:"carnet",label:"Carnet",sortable:!1},{key:"estudiante",label:"Estudiante",sortable:!1,class:"text-left"},{key:"nota_final",label:"Nota",sortable:!1,class:"text-center"}],l=ge(()=>{var _,E,j;return(E=(_=d.value)==null?void 0:_.materia)!=null&&E.nombre?(j=d.value.materia)==null?void 0:j.nombre.toString():""}),g=async()=>{const _=u.value;_&&await Vn(_,d)},P=()=>{n.toggleShowModal(!0)},T=()=>{n.toggleShowModal()},H=async _=>{n.sendNotesCarga(_).then(async E=>{E.response.status===200?(await n.getDataConfigMateria(+t.params.id),o.showAlert({summary:"Exito!",detail:"Proceso realizado con exito",severity:"success"})):o.showAlert({summary:"Error!",detail:"Proceso no realizado",severity:"error"})})},B=()=>{a.push({name:"notes-docente"})};return ye(()=>{const{id:_}=t.params;n.getDataConfigMateria(+_),n.getDataCargaAcademica(+_)}),(_,E)=>{const j=Le("vue-feather"),M=Te,F=Be,W=rt,V=Pe,L=st,J=lt,w=je,x=it,r=ut,f=ct;return R(),O(me,null,[p(Fn,{main:"Cargas Academicas",title:C(l),button:!0},{back:m(()=>[I("button",{class:"btn btn-primary align-items-center d-flex justify-content-center",style:{"margin-right":"15px",padding:"0px 20px"},onClick:B},[p(j,{type:"arrow-left"})])]),_:1},8,["title"]),I("div",_o,[p(x,{"no-body":""},{default:m(()=>[p(f,{class:"tabs-student",card:""},{default:m(()=>[p(r,{title:"Alumnos",active:""},{default:m(()=>[p(L,null,{default:m(()=>[p(x,{"no-body":""},{default:m(()=>[p(J,null,{default:m(()=>[p(L,null,{default:m(()=>[p(V,null,{default:m(()=>[p(M,{cols:"8"},{default:m(()=>[wo]),_:1}),p(M,{cols:"4",class:"d-flex justify-content-end"},{default:m(()=>[p(W,null,{default:m(()=>[p(F,{title:"Descargar Listado",variant:"primary",onClick:g},{default:m(()=>[p(j,{type:"download-cloud"})]),_:1}),p(F,{onClick:P,title:"Subir Notas"},{default:m(()=>[p(j,{type:"upload-cloud"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),p(w,{fields:i,items:C(u),striped:"",bordered:"",borderless:"",small:"",hover:""},{"cell(estudiante)":m(({item:v})=>{var y,h;return[Q(G((y=v==null?void 0:v.alumno)==null?void 0:y.apellidos)+" "+G((h=v==null?void 0:v.alumno)==null?void 0:h.nombres),1)]}),"cell(nota_final)":m(({item:v})=>[Q(G(s.value!==0?C(De)(v[`nota_${s.value}`]):C(De)(0)),1)]),_:1},8,["items"])]),_:1})]),_:1})]),_:1}),p(r,{title:"Notas"},{default:m(()=>{var v;return[p(Pn,{config:(v=C(d))==null?void 0:v.config,alumnos:C(u)},null,8,["config","alumnos"])]}),_:1})]),_:1})]),_:1})]),C(u)&&C(d)?(R(),ee(ho,{key:0,show:C(c),onClose:T,onSend:H,carga:C(u),data:C(d)},null,8,["show","carga","data"])):se("",!0)],64)}}});export{Fo as default};
