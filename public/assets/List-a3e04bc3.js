import{l as b,s as p}from"./bootstrap-vue-3.es-4f9ad53f.js";import{d as k,C as g,D as C,o as h,e as y,f as n,g as c,j as r,z as V,w as a,E as N,F as v,h as x,c as l,G as B,k as i,t as D}from"./index-e0048f3a.js";const E={class:"file-content"},T={class:"card"},R=k({__name:"List",setup(w){const m=x(),t=g(),{data:s}=C(t),d=[{key:"codmate",label:"Codigo",sortable:!1},{key:"nommate",label:"Materia",sortable:!1},{key:"dias",label:"Dias",sortable:!1},{key:"hora",label:"Horas",sortable:!1},{key:"actions",label:""}],_=o=>{m.replace({name:"notes-docente-student",params:{id:o.codcarga}})};return h(()=>t.getListaCargasDocente()),(o,z)=>{const u=b,f=p;return l(),y(v,null,[n(B,{title:"Cargas Academicas",button:!0}),c("div",E,[c("div",T,[r(s)?(l(),V(f,{key:0,fields:d,items:r(s).cargas},{"cell(nommate)":a(({item:e})=>[i(D(e.materia.nommate),1)]),"cell(actions)":a(e=>[n(u,{variant:"success",onClick:F=>_(e.item),size:"sm",class:"mr-1"},{default:a(()=>[i(" Ver estudiantes ")]),_:2},1032,["onClick"])]),_:1},8,["items"])):N("",!0)])])],64)}}});export{R as default};
