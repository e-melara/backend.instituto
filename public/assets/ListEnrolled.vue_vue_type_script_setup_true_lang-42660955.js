import{d as h,h as _,M as u,c as t,e as o,g as e,v as m,B as g,i as c,t as s}from"./index-011ca880.js";const v={class:"card"},b=e("div",{class:"card-header p-4"},[e("h5",null,"Materias solicitadas")],-1),x={class:"table-responsive mb-0"},f={class:"table b-table asesoria"},w=e("thead",{role:"rowgroup"},[e("tr",{role:"row"},[e("th",{class:"text-center",role:"columnheader",width:"40px",scope:"col"}),e("th",{class:"text-center",role:"columnheader",width:"60px",scope:"col"}," Codigo "),e("th",{class:"text-left",role:"columnheader",scope:"col"}," Nombre de la materia "),e("th",{role:"columnheader",scope:"col"}," Docente ")])],-1),y={class:"card-footer",style:{padding:"20px 15px"}},B={class:"alert alert-success"},E={class:"text-center"},S=h({__name:"ListEnrolled",props:{items:null,status:null},setup(r){const l=r,n=new Map([["007","Se ha enviado la asesoria al proceso de validacion"],["008","Se ha enviado la asesoria a la validacion de pago"],["009","La asesoria has sido validad y sus materias estas inscriptas"]]),{items:d}=_(l),i=u(()=>n.get(l.status.codigo));return(k,L)=>(t(),o("div",v,[b,e("div",x,[e("table",f,[w,e("tbody",null,[(t(!0),o(m,null,g(c(d),(a,p)=>(t(),o("tr",{key:a.codcarga},[e("td",null,s(p+1),1),e("td",null,s(a.materia_codigo),1),e("td",null,s(a.materia_nombre),1),e("td",null,s(a.docente_nombres)+" "+s(a.docente_apellidos),1)]))),128))])])]),e("div",y,[e("div",B,[e("h6",E,s(c(i)),1)])])]))}});export{S as _};
