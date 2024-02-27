import{p as C,h as B}from"./bootstrap-vue-3.es-adcbf423.js";import{d as v,h,b as o,c as n,g as e,t as l,i as a,x as E,F as b,s as p,z as L,_ as g,E as k,aF as R,e as _,w as f,G as A,j as x,k as F}from"./index-f2bd0285.js";import{u as V}from"./usePensum-cca46c1e.js";import{E as I,F as N}from"./FileSaver.min-ae553c36.js";const D={class:"row"},P={class:"col-3"},S={class:"col-9"},q={class:"row d-flex align-items-center justify-content-center"},z={class:"row"},T={class:"col-6"},H={class:"col-6"},M=v({__name:"Card",props:{subject:null},setup(c){const r=c,{subject:s}=h(r),i=d=>{switch(d){case"A":return"aprobada";case"INSCRIBIR":return"inscribir";case"R":return"reprobada";case"C":return"cursando";default:return""}};return(d,t)=>(o(),n("section",{class:E([i(a(s).estado),"item-subject container-fluid"])},[e("header",D,[e("div",P,[e("strong",null,l(a(s).no_orden),1)]),e("div",S,l(a(s).codigo_materia),1)]),e("main",q,l(a(s).nombre_materia),1),e("article",z,[e("div",T,l(a(s).requisitos==="0"?"Bachillerato":a(s).requisitos),1),e("div",H,l(a(s).creditos)+" UV",1)])],2))}}),W={class:"table-responsive"},G={class:"table table-bordered"},U=v({__name:"List",props:{keys:null,items:null},setup(c){const r=c,{keys:s}=h(r);return(i,d)=>(o(),n("div",W,[e("table",G,[e("thead",null,[e("tr",null,[(o(!0),n(b,null,p(a(s),t=>(o(),n("th",{key:t},l(t),1))),128))])]),e("tbody",null,[e("tr",null,[(o(!0),n(b,null,p(c.items,(t,u)=>(o(),n("td",{key:u},[(o(!0),n(b,null,p(t,m=>(o(),L(M,{key:m.pensum_materia_id,subject:m},null,8,["subject"]))),128))]))),128))])])])]))}});const J=g(U,[["__scopeId","data-v-2766d120"]]),K={class:"row"},O=R('<div class="col d-flex justify-content-evenly align-items-center" data-v-a85b35b8><div class="item-subject aprobada" data-v-a85b35b8></div><h5 data-v-a85b35b8>Aprobadas</h5></div><div class="col d-flex justify-content-evenly align-items-center" data-v-a85b35b8><div class="item-subject cursando" data-v-a85b35b8></div><h5 data-v-a85b35b8>Cursando</h5></div><div class="col d-flex justify-content-evenly align-items-center" data-v-a85b35b8><div class="item-subject inscribir" data-v-a85b35b8></div><h5 style="margin-left:5px;margin-bottom:0px;" data-v-a85b35b8> Prerequisitos completos </h5></div><div class="col d-flex justify-content-evenly align-items-center" data-v-a85b35b8><div class="item-subject" data-v-a85b35b8></div><h5 data-v-a85b35b8>Pendientes</h5></div><div class="col d-flex justify-content-evenly align-items-center" data-v-a85b35b8><div class="item-subject reprobada" data-v-a85b35b8></div><h5 data-v-a85b35b8>Reprobadas</h5></div>',5),Q={key:0,class:"col-12"},X=v({__name:"Leyenda",props:{carrera:null},setup(c){const r=c,{carrera:s}=h(r);return(i,d)=>(o(),n("div",K,[O,a(s)?(o(),n("div",Q,[e("h2",null,l(a(s).nombre),1)])):k("",!0)]))}});const Y=g(X,[["__scopeId","data-v-a85b35b8"]]),Z=async c=>{const r=new I.Workbook,s=r.addWorksheet("Horario"),i=[{key:"codmate",header:"Codigo"},{key:"nommate",header:"Materia"},{key:"horario",header:"Horario"},{key:"docente",header:"Docente"}];s.columns=i,c.forEach(t=>{s.addRow({codmate:t.materia.codigo,nommate:t.materia.nombre,horario:`${t.horario.codigo} - ${t.horario.nombre}`,docente:`${t.docente.nombre} ${t.docente.apellido}`})}),s.getRow(1).font={name:"Arial",family:2,size:14};const d=new Date().getTime();r.xlsx.writeBuffer().then(t=>{const u=new Blob([t],{type:"application/vnd.ms-excel"});N.saveAs(u,`horario-${d}.xlsx`)})},ee={class:"card"},se={class:"card-header"},te={class:"header-top"},ae=e("h5",{class:"m-0"},"Materias",-1),oe={key:0,class:"",style:{float:"right"}},ne={class:"card-body"},ue=v({__name:"PensumList",setup(c){const r=V(),s=F(),{list:i,inscribir:d,studentEnrolled:t,viewBtnAsesoria:u,carrera:m}=h(r),$=()=>{Z(d.value)},w=()=>{s.push({name:"pensum-asesoria"})};return(re,ce)=>{const y=C,j=B;return o(),n(b,null,[_(A,{title:"Pensum",button:!0}),e("div",ee,[e("div",se,[e("div",null,[e("div",te,[ae,a(u)?(o(),n("div",oe,[_(j,{id:"dropdown-1",text:"Asesoria",class:"m-md-2"},{default:f(()=>[_(y,{onClick:$},{default:f(()=>[x(" Descargar horarios ")]),_:1}),_(y,{onClick:w},{default:f(()=>[x(l(a(t)?"Ver asesoria":"Iniciar asesoria"),1)]),_:1})]),_:1})])):k("",!0)])])]),e("div",ne,[_(Y,{carrera:a(m)},null,8,["carrera"]),_(J,{keys:a(i).keys,items:a(i).items},null,8,["keys","items"])])])],64)}}});export{ue as default};
