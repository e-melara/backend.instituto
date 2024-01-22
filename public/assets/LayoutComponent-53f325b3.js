import{d as h,r as D,o as Q,a as C,b as v,c as r,e as d,f as t,n as V,_ as B,g as e,t as w,u as k,h as L,i as E,j as l,k as Y,p as I,l as F,m as R,q as U,s as z,w as b,R as x,F as M,v as O,x as S,y as W,z as q,A as G,B as N}from"./index-d66447e3.js";const P=h({__name:"TapTop",setup(s){const o=D(!1);Q(()=>window.addEventListener("scroll",n)),C(()=>window.removeEventListener("scroll",n));const n=()=>{window.scrollY>600?o.value=!0:o.value=!1},a=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})};return(_,A)=>{const g=v("vue-feather");return r(),d("div",{class:"tap-top",style:V([o.value?{display:"block"}:{display:"none"}])},[t(g,{type:"chevrons-up",onClick:a})],4)}}}),H={},J={class:"footer"},T={class:"container-fluid"},K={class:"row"},Z={class:"col-md-12 footer-copyright text-center"},X={class:"mb-0"};function ee(s,o){return r(),d("div",null,[e("footer",J,[e("div",T,[e("div",K,[e("div",Z,[e("p",X,"Copyright "+w(new Date().getFullYear())+" © Universidad Tecnica Latinoamericana",1)])])])])])}const te=B(H,[["render",ee]]),oe=h({__name:"Maxime",setup(s){const o=()=>{document.fullScreenElement&&document.fullScreenElement!==null||!document.mozFullScreen&&!document.webkitIsFullScreen?document.documentElement.requestFullScreen?document.documentElement.requestFullScreen():document.documentElement.mozRequestFullScreen?document.documentElement.mozRequestFullScreen():document.documentElement.webkitRequestFullScreen&&document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()};return(n,a)=>{const _=v("vue-feather");return r(),d("a",{class:"text-dark",onClick:o},[t(_,{type:"maximize"})])}}});const se=B(oe,[["__scopeId","data-v-17e5824f"]]),ne="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIACUAJQMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAADBQYHAAIECP/aAAgBAQAAAAAeS5XooL6EpZIIlk17GnSc0phzo/B3x/8A/8QAGAEBAAMBAAAAAAAAAAAAAAAACAMEBgf/2gAIAQIQAAAAQ5VmUPE8SqKhj//EABcBAQEBAQAAAAAAAAAAAAAAAAcIAgb/2gAIAQMQAAAA099FPjagzgjJH//EACwQAAIBAwIEAwkBAAAAAAAAAAECAwQFEQASECExQQYTkRQjMjRCUWFjcaH/2gAIAQEAAT8A4Cx1EFkpbp1WQkuoHNVPRjwZEfG5c8IU3yKvbqdWeiM1ppY4oxLEtKhc9VwV55zrxXW0FHd3pbTGnlxribmSvm55hf5qO7Qke8jZT+OfCKaOAmSVtqhTk6stypaLwqbxNXOkLySYjLY+FtuxV7k4zq5+H2t9poLvJUfOsrRw4yVR13glu543RmDRR/SV3f7jVkpYJqmOor1JoIHDyjswB5j01e7y96tEFRLhGNY5jiAwI4QCqKPTjVWqKreF2kZdiBSB3GrzJ7LBDRQKEjYZOPsO2liV7VCn6UOjyJGv/8QAJREAAgIBAgUFAQAAAAAAAAAAAgMBBBEABQYQEjFRIiNBYnGC/9oACAECAQE/ALlpVGpZuOn20KNpfgRnVuw7cLtq6YzBWGsbP9TnGlX92rrFKL1pax7ADSEY/IidbjSVuNG1QcRCt6yWUj3iC8a4k4NHY1Ms0Bc5cv62MmPSpU56F/OfsXJszEjifOraVWKbUODqW0DE48wUYnl//8QAKREAAgIBAwIDCQAAAAAAAAAAAQMCBBEABRIGMRAh0RMUIjNBQ2Fxgf/aAAgBAwEBPwCpWZdtV6ifmOZFcf3I410vck4nZYLMzVjxjMAABcPIch9Dp2yVnMkx22IYw95yVGRP9xrpSu6xv1Ap+ywOmSMgRh69tbZ73W3YeybmFp/J54gDjg8Yj18OgQA3c2Y+IRUAfwSdWHMr1mWEy4tWubIy74lEZB0PMA6//9k=",$=s=>(I("data-v-84740536"),s=s(),F(),s),ae={class:"profile-nav onhover-dropdown p-0 mr-0"},ce={class:"media profile-media d-flex"},le={class:"flex-shrink-0"},re=["src"],ie={class:"media-body flex-grow-1 ms-3"},de={class:"mb-0 font-roboto arrow-configuration"},_e={class:"profile-dropdown onhover-show-div"},Ae=$(()=>e("span",null,"Configuración",-1)),ue=$(()=>e("span",null,"Salir",-1)),pe=h({__name:"Profile",setup(s){const o=k(),n=L(),{people:a}=E(o),_=()=>{o.logout(),n.replace({name:"authenticate-login"})};return(A,g)=>{var u,p,m,i,f;const c=v("vue-feather");return r(),d("li",ae,[e("div",ce,[e("div",le,[e("img",{class:"b-r-10",src:l(ne),alt:"profile image"},null,8,re)]),e("div",ie,[e("span",null,w((p=(u=l(a))==null?void 0:u.persona)==null?void 0:p.nombre)+", "+w((i=(m=l(a))==null?void 0:m.persona)==null?void 0:i.apellido),1),e("p",de,[Y(w((f=l(a))==null?void 0:f.perfil)+" ",1),t(c,{type:"chevron-down"})])])]),e("ul",_e,[e("li",null,[e("a",null,[t(c,{type:"settings"}),Ae])]),e("li",null,[e("a",{onClick:_},[t(c,{type:"log-in"}),ue])])])])}}});const me=B(pe,[["__scopeId","data-v-84740536"]]),he={class:"header-wrapper m-0"},fe=e("div",{class:"left-header col horizontal-wrapper pl-0"},null,-1),ve={class:"nav-right col-8 pull-right right-header p-0"},ge={class:"nav-menus"},we={class:"maxime"},Ee=h({__name:"HeaderComponent",setup(s){return(o,n)=>(r(),d("div",he,[fe,e("div",ve,[e("ul",ge,[e("li",we,[t(se)]),t(me)])])]))}}),Be="/assets/logo-icon-b0425b59.png",ye=s=>(I("data-v-588e7669"),s=s(),F(),s),be={class:"d-flex",id:"sidebar-menu",style:{"margin-top":"10px"}},xe={class:"sidebar-links custom-scrollbar",id:"myDiv",style:{margin:"0px"}},Qe={class:"back-btn"},ke=["src"],Se=ye(()=>e("div",{class:"mobile-back text-right"},[e("span",null,"Back"),e("i",{class:"fa fa-angle-right pl-2","aria-hidden":"true"})],-1)),Ce=h({__name:"NavMenu",setup(s){const o=R(),n=k(),{rutas:a}=E(n),{menuItems:_,activeOverrlay:A,toggleSideBar:g,menu:c}=E(o),{setMenu:u}=o,p=()=>{c.value.width=window.innerWidth-450};return Q(()=>{const m=U();_.value.forEach(i=>{if(i.path===m.path&&u(i),!i.children)return!1;i.children.forEach(f=>{f.path===m.path&&u(i)})})}),z(()=>{window.addEventListener("resize",p),p(),setTimeout(()=>{const m=document.querySelector("#myDiv");c.value.menuWidth=m.offsetWidth;const i=c.value.menuWidth>window.innerWidth;c.value.hideRightArrow=!1,c.value.hideLeftArrow=!i},500)}),C(()=>{window.removeEventListener("resize",p)}),(m,i)=>{const f=v("vue-feather");return r(),d("div",be,[e("ul",xe,[e("li",Qe,[t(l(x),{to:"/"},{default:b(()=>[e("img",{src:l(Be),alt:"image logo"},null,8,ke)]),_:1}),Se]),(r(!0),d(M,null,O(l(a),(y,j)=>(r(),d("li",{key:j,class:"sidebar-list py-2"},[t(l(x),{to:y.url,class:"sidebar-link sidebar-title",exact:""},{default:b(()=>[t(f,{class:"top",type:y.icon},null,8,["type"]),e("span",null,w(y.nombre),1)]),_:2},1032,["to"])]))),128))])])}}});const Ie=B(Ce,[["__scopeId","data-v-588e7669"]]),Fe={class:"sidebar-main",id:"sidebar-main"},Re={class:"left-arrow"},Me={class:"right-arrow"},$e=h({__name:"Nav",setup(s){return(o,n)=>{const a=v("vue-feather");return r(),d("nav",Fe,[e("li",Re,[t(a,{type:"arrow-left"})]),t(Ie),e("li",Me,[t(a,{type:"arrow-right"})])])}}}),je={class:"logo-wrapper"},De={class:"logo-icon-wrapper"},Ve=h({__name:"SidebarComponent",emits:["clicked"],setup(s,{emit:o}){const n=()=>{o("clicked")};return(a,_)=>{const A=v("vue-feather");return r(),d(M,null,[e("div",je,[e("div",{class:"back-btn",onClick:n},[t(A,{type:"chevron-left"})]),e("div",{class:"toggle-sidebar",onClick:n},[t(A,{type:"grid",id:"sidebar-toggle",class:"status_toggle middle"})])]),e("div",De,[t(l(x),{to:"/"})]),t($e)],64)}}}),Le={class:"page-wrapper compact-wrapper color-sidebar"},Ye={class:"page-body-wrapper"},Ue={class:"page-body"},Oe=h({__name:"LayoutComponent",setup(s){const o=k(),n=R(),a=W(),{activeOverrlay:_,toggleSideBar:A}=E(n),g=()=>{n.openSideBar(),_.value=!1};return Q(()=>{const c=a.getItemFn({key:"token"}),u=a.getItemFn({key:"persona"});o.setData(c,u)}),(c,u)=>(r(),d("div",Le,[e("div",{class:S(["page-header",{close_icon:l(A)}])},[t(Ee)],2),e("div",Ye,[e("div",{class:S(["sidebar-wrapper",{close_icon:l(A)}]),"sidebar-layout":"default-sidebar"},[t(Ve,{onClicked:g})],2),e("div",Ue,[t(l(N),{class:"view"},{default:b(({Component:p})=>[(r(),q(G(p)))]),_:1})]),t(te)]),t(P)]))}});export{Oe as default};
