import{e as g,x as $,Z as b}from"./bootstrap-vue-3.es-a48bef6c.js";import{d as x,ad as h,ae as v,r as u,o as B,c as r,e as d,f as e,af as N,w as o,i as c,v as f,B as k,G as T,g as w}from"./index-3189dc9f.js";import{s as y,a as L}from"./accordiontab.esm-7393dc47.js";import{_ as j}from"./TableNote.vue_vue_type_script_setup_true_lang-0e25f9b4.js";const C={class:"table-responsive"},G=x({__name:"List",setup(E){const l=h(),{subjectsStudent:m}=v(l);u(""),u(!1);const p=_=>{const{codigo:i,nombre:n,docente:t}=_;let a=`${i} - ${n}`;return t&&(a+=` - ${t.nombres} ${t.apellidos}`),a};return B(()=>l.getNotasEstudiante()),(_,i)=>{const n=g,t=$,a=b;return r(),d(f,null,[e(N,{title:"Notas",button:!0}),e(a,{fluid:""},{default:o(()=>[e(t,null,{default:o(()=>[e(n,{cols:"12"},{default:o(()=>[e(c(y),null,{default:o(()=>[(r(!0),d(f,null,k(c(m),s=>(r(),T(c(L),{key:s.id,header:p(s)},{default:o(()=>[w("div",C,[e(j,{config:s.id_porcentaje_nota,codigo:s.codigo,alumnos:[s]},null,8,["config","codigo","alumnos"])])]),_:2},1032,["header"]))),128))]),_:1})]),_:1})]),_:1}),e(t,null,{default:o(()=>[e(n,{cols:"12"})]),_:1})]),_:1})],64)}}});export{G as default};
