import{l as f,s as b}from"./bootstrap-vue-3.es-eb0b9d46.js";import{d as p,ae as k,af as g,o as C,c as s,e as h,f as o,ag as x,g as r,i as n,G as V,w as c,q as v,U as y,v as N,x as w}from"./index-8ac73380.js";const B={class:"file-content"},M={class:"card"},q=p({__name:"List",setup(T){const i=w(),e=k(),{data:t}=g(e),l=[{key:"materia_codigo",label:"Codigo",sortable:!1},{key:"materia_nombre",label:"Materia",sortable:!1,with:"50%"},{key:"carrera",label:"Carrera",sortable:!1},{key:"actions",label:"",width:"50px"}],d=a=>{i.replace({name:"notes-docente-student",params:{id:a.id}})};return C(()=>e.getListaCargasDocente()),(a,E)=>{const m=f,_=b;return s(),h(N,null,[o(x,{title:"Materias",button:!0}),r("div",B,[r("div",M,[n(t)?(s(),V(_,{key:0,fields:l,items:n(t)},{"cell(actions)":c(u=>[o(m,{variant:"success",onClick:L=>d(u.item),size:"sm",class:"mr-1"},{default:c(()=>[v(" Ver estudiantes ")]),_:2},1032,["onClick"])]),_:1},8,["items"])):y("",!0)])])],64)}}});export{q as default};
