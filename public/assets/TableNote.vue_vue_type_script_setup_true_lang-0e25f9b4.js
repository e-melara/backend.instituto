import{bL as m,d as B,r as O,h as i,N as D,Z as X,c as s,e as E,g as C,v as M,B as S,bM as I,t as _,i as f}from"./index-3189dc9f.js";const b=(t,a=2,o=!1)=>{if(o){const n=parseFloat(t.toString());return(Math.round(n*10)/10).toFixed(1)}else return parseFloat(t==null?void 0:t.toString()).toFixed(a)},rt=t=>m(t).format("DD/MM/YYYY HH:mm"),at=t=>t.toLocaleUpperCase().replace("_"," "),g=`
<tr>
  <td rowspan="3">No</td>
  <td rowspan="3">CARNET</td>
  <td rowspan="3">NOMBRE DEL ESTUDIANTE</td>
  <td colspan="12">TEORIA</td>
  <td rowspan="3">NOTA FINAL</td>
  <td rowspan="3">EXAMEN DE REPO</td>
  <td rowspan="3">NOTA DEL CICLO</td>
</tr>
<tr>
  <td colspan="4">EXAMENES PARCIALES</td>
  <td colspan="2">TRABAJO DE CAMPO</td>
  <td colspan="4">EXAMENES CORTOS</td>
  <td rowspan="2">EXAMEN FINAL</td>
  <td rowspan="2">EXAMEN FINAL 20%</td>
</tr>
<tr>
  <td>1</td>
  <td>2</td>
  <td>3</td>
  <td>54%</td>
  <td>1</td>
  <td>14%</td>
  <td>1</td>
  <td>2</td>
  <td>3</td>
  <td>12%</td>
</tr>
`,U=`
<tr>
  <td rowspan="3">No</td>
  <td rowspan="3">CARNET</td>
  <td rowspan="3">NOMBRE DEL ESTUDIANTE</td>
  <td colspan="12">TEORIA</td>
  <td rowspan="3">NOTA FINAL</td>
  <td rowspan="3">EXAMEN DE REPO</td>
  <td rowspan="3">NOTA DEL CICLO</td>
</tr>
<tr>
  <td colspan="4">EXAMENES PARCIALES</td>
  <td colspan="2">TRABAJO DE CAMPO</td>
  <td colspan="4">EXAMENES CORTOS</td>
  <td rowspan="2">EXAMEN FINAL</td>
  <td rowspan="2">EXAMEN FINAL 20%</td>
</tr>
<tr>
  <td>1</td>
  <td>2</td>
  <td>3</td>
  <td>45%</td>
  <td>1</td>
  <td>20%</td>
  <td>1</td>
  <td>2</td>
  <td>3</td>
  <td>15%</td>
</tr>
`,h=(t=!0)=>`
<tr>
  <td rowspan="3">No</td>
  <td rowspan="3">CARNET</td>
  <td rowspan="3">NOMBRE DEL ESTUDIANTE</td>
  <td colspan="17">TEORIA</td>
  <td colspan="8">PRACTICA ${t?"":"PEDIATRIA"} </td>
  <td rowspan="3">NOTA FINAL CICLO (TEORIA + PRACTICA)</td>
  <td rowspan="3">EXAMEN DE REPO</td>
  <td rowspan="3">NOTA DEL CICLO</td>
</tr>
<tr>
  <td colspan="4">EXAMENES PARCIALES</td>
  <td colspan="2">TRABAJO DE CAMPO</td>
  <td colspan="5">LABORATORIOS</td>
  <td colspan="2">EXAMEN FINAL</td>
  <td rowspan="2">NOTA FINAL TEORIA</td>
  <td rowspan="2">Examen Repo</td>
  <td rowspan="2">NOTA FINAL TEORIA</td>
  <td rowspan="2">NOTA FINAL TEORIA 40%</td>
  <td rowspan="2">P</td>
  <td rowspan="2">15%</td>
  <td rowspan="2">CV</td>
  <td rowspan="2">15%</td>
  <td rowspan="2">PT</td>
  <td rowspan="2">30%</td>
  <td rowspan="2">NOTA FINAL DE PRACTICA</td>
  <td rowspan="2">NOTA FINAL PRACTICA 60%</td>
</tr>
<tr>
  <td>1</td>
  <td>2</td>
  <td>3</td>
  <td>15%</td>
  <td>1</td>
  <td>5%</td>
  <td>LAB. 1</td>
  <td>LAB. 2</td>
  <td>LAB. 3</td>
  <td>LAB. 4</td>
  <td>TOTAL 10%</td>
  <td>1</td>
  <td>10%</td>
</tr>
`,J=`
<tr>
  <td rowspan="3">No</td>
  <td rowspan="3">CARNET</td>
  <td rowspan="3">NOMBRE DEL ESTUDIANTE</td>
  <td colspan="12">TEORIA</td>
  <td rowspan="3">NOTA FINAL TEORIA</td>
  <td rowspan="3">EXAMEN DE REPOSICION</td>
  <td rowspan="3">NOTA FINAL TEORIA</td>
  <td rowspan="3">NOTA FINAL TEORIA 40%</td>
  <td colspan="8">PRACTICA</td>
  <td rowspan="3">NOTA FINAL CICLO (TEORIA + PRACTICA)</td>
  <td rowspan="3">EXAMEN DE REPOSICION</td>
  <td rowspan="3">NOTA DEL CICLO</td>
</tr>
<tr>
  <td colspan="4">EXAMENES PARCIALES</td>
  <td colspan="2">TRABAJO DE CAMPO</td>
  <td colspan="4">LABORATORIOS PRACTICOS</td>
  <td rowspan="2">EXAMEN FINAL</td>
  <td rowspan="2">EXAMEN FINAL 10%</td>
  <td rowspan="2">P</td>
  <td rowspan="2">15%</td>
  <td rowspan="2">CV</td>
  <td rowspan="2">15%</td>
  <td rowspan="2">PT</td>
  <td rowspan="2">30%</td>
  <td rowspan="2">NOTA FINAL PRACTICA</td>
  <td rowspan="2">PRACTICA 60%</td>
</tr>
<tr>
  <td>1</td>
  <td>2</td>
  <td>3</td>
  <td>15%</td>
  <td>1</td>
  <td>10%</td>
  <td>LAB. 1</td>
  <td>LAB. 2</td>
  <td>LAB. 3</td>
  <td>TOTAL 5%</td>
</tr>
`,V=`
<tr>
  <td rowspan="3">No</td>
  <td rowspan="3">CARNET</td>
  <td rowspan="3">NOMBRE DEL ESTUDIANTE</td>
  <td colspan="16">TEORIA</td>
  <td colspan="26">PRACTICAS</td>
  <td rowspan="3">N.F (TEORIA + PRACTICA)</td>
  <td rowspan="3">EXAMEN DE REPO</td>
  <td rowspan="3">N. DEL CICLO</td>
</tr>
<tr>
  <td colspan="4">EXAMENES PARCIALES</td>
  <td colspan="2">TRABAJO DE CAMPO</td>
  <td colspan="4">LABORATORIOS</td>
  <td colspan="2">EXAMEN FINAL</td>
  <td rowspan="2">N.F TEORIA</td>
  <td rowspan="2">EXAMEN DE REPO</td>
  <td rowspan="2">N.F TEORIA</td>
  <td rowspan="2">N.F TEORIA 40%</td>
  <td colspan="8">PARTO  20%</td>
  <td colspan="8">PUERPERIO 20%</td>
  <td colspan="8">PEDIATRIA 20%</td>
  <td rowspan="2">N.F PRACTICA</td>
  <td rowspan="2">60%</td>
</tr>
<tr>
  <td>1</td>
  <td>2</td>
  <td>3</td>
  <td>15%</td>
  <td>1</td>
  <td>10%</td>
  <td>LAB. 1</td>
  <td>LAB. 2</td>
  <td>LAB. 3</td>
  <td>TOTAL 5%</td>
  <td>1</td>
  <td>10%</td>
  <td>P</td>
  <td>5%</td>
  <td>CV</td>
  <td>5%</td>
  <td>PT</td>
  <td>10%</td>
  <td>NOTA</td>
  <td>Total 20%</td>
  <td>P</td>
  <td>5%</td>
  <td>CV</td>
  <td>5%</td>
  <td>PT</td>
  <td>10%</td>
  <td>NOTA</td>
  <td>Total 20%</td>
  <td>P</td>
  <td>5%</td>
  <td>CV</td>
  <td>5%</td>
  <td>PT</td>
  <td>10%</td>
  <td>NOTA</td>
  <td>Total 20%</td>
</tr>
`,v=`
<tr>
  <td rowspan="3">No</td>
  <td rowspan="3">CARNET</td>
  <td rowspan="3">NOMBRE DEL ESTUDIANTE</td>
  <td colspan="11">TEORIA</td>
  <td rowspan="2" colspan="2">EXAMEN FINAL 20%</td>
  <td rowspan="3">NOTA FINAL</td>
  <td rowspan="3">EXAMEN REPO</td>
  <td rowspan="3">NOTA DEL CICLO</td>
</tr>
<tr>
  <td colspan="4">EXAMENES PARCIALES</td>
  <td colspan="2">TRABAJO DE CAMPO</td>
  <td colspan="5">LABORATORIOS PRACTICOS</td>
</tr>
<tr>
  <td>1</td>
  <td>2</td>
  <td>3</td>
  <td>51%</td>
  <td>1</td>
  <td>14%</td>
  <td>LAB.1</td>
  <td>LAB.2</td>
  <td>LAB.3</td>
  <td>LAB.4</td>
  <td>TOTAL 20%</td>
  <td>1</td>
  <td>15%</td>
</tr>
`,y=`
<tr>
  <td rowspan="3">No</td>
  <td rowspan="3">CARNET</td>
  <td rowspan="3">NOMBRE DEL ESTUDIANTE</td>
  <td colspan="11">TEORIA</td>
  <td rowspan="2" colspan="2">EXAMEN FINAL</td>
  <td rowspan="3">NOTA FINAL</td>
  <td rowspan="3">EXAMEN REPO</td>
  <td rowspan="3">NOTA DEL CICLO</td>
</tr>
<tr>
  <td colspan="4">EXAMENES PARCIALES</td>
  <td colspan="2">TRABAJO DE CAMPO</td>
  <td colspan="5">LABORATORIOS PRACTICOS</td>
</tr>
<tr>
  <td>1</td>
  <td>2</td>
  <td>3</td>
  <td>45%</td>
  <td>1</td>
  <td>15%</td>
  <td>LAB.1</td>
  <td>LAB.2</td>
  <td>LAB.3</td>
  <td>LAB.4</td>
  <td>TOTAL 20%</td>
  <td>1</td>
  <td>20%</td>
</tr>
`,k=(t=!0)=>`
<tr>
  <td rowspan="3">No</td>
  <td rowspan="3">CARNET</td>
  <td rowspan="3">NOMBRE DEL ESTUDIANTE</td>
  <td colspan="16">TEORIA</td>
  <td colspan="8">PRACTICAS</td>
  <td rowspan="3">NOTA FINAL (TEORIA + PRACTICA)</td>
  <td rowspan="3">EXAMEN DE REPO</td>
  <td rowspan="3">NOTA DEL CICLO</td>
</tr>
<tr>
  <td colspan="4">EXAMENES PARCIALES</td>
  <td colspan="2">TRABAJO DE CAMPO</td>
  <td colspan="4">EXAMENES CORTOS</td>
  <td colspan="2">EXAMEN FINAL</td>
  <td rowspan="2">NOTA FINAL TEORIA</td>
  <td rowspan="2">EXAMEN DE REPO</td>
  <td rowspan="2">NOTA FINAL TEORIA</td>
  <td rowspan="2">NOTA FINAL TEORIA 40%</td>
  <td colspan="6">${t?"UNIDAD DE SALUD":""}</td>
  <td rowspan="2">NOTA FINAL PRACTICA</td>
  <td rowspan="2">PRACTICA 60%</td>
</tr>
<tr>
  <td>1</td>
  <td>2</td>
  <td>3</td>
  <td>15%</td>
  <td>1</td>
  <td>5%</td>
  <td>1</td>
  <td>2</td>
  <td>3</td>
  <td>10%</td>
  <td>1</td>
  <td>10%</td>
  <td>P</td>
  <td>15%</td>
  <td>CV</td>
  <td>15%</td>
  <td>PT</td>
  <td>30%</td>
</tr>
`,H=`
<tr>
  <td rowspan="3">No</td>
  <td rowspan="3">CARNET</td>
  <td rowspan="3">NOMBRE DEL ESTUDIANTE</td>
  <td colspan="16">TEORIA</td>
  <td colspan="12">PRACTICAS</td>
  <td rowspan="3">NOTA FINAL (TEORIA + PRACTICA)</td>
  <td rowspan="3">EXAMEN DE REPO</td>
  <td rowspan="3">NOTA DEL CICLO </td>
</tr>
<tr>
  <td colspan="4">EXAMENES PARCIALES</td>
  <td colspan="2">TRABAJO DE CAMPO</td>
  <td colspan="4">PRUEBAS CORTAS</td>
  <td colspan="2">EXAMEN FINAL</td>
  <td rowspan="2">NOTA FINAL TEORIA</td>
  <td rowspan="2">EXAMEN DE REPO</td>
  <td rowspan="2">NOTA FINAL TEORIA</td>
  <td rowspan="2">NOTA FINAL TEORIA 40%</td>
  <td rowspan="2">P</td>
  <td rowspan="2">5%</td>
  <td rowspan="2">MR</td>
  <td rowspan="2">10%</td>
  <td rowspan="2">PAE</td>
  <td rowspan="2">15%</td>
  <td rowspan="2">DS</td>
  <td rowspan="2">15%</td>
  <td rowspan="2">PC</td>
  <td rowspan="2">15%</td>
  <td rowspan="2">NOTA FINAL PRACTICA</td>
  <td rowspan="2">PRACTICA 60%</td>
</tr>
<tr>
  <td>1</td>
  <td>2</td>
  <td>3</td>
  <td>15%</td>
  <td>1</td>
  <td>5%</td>
  <td>1</td>
  <td>2</td>
  <td>3</td>
  <td>TOTAL 10%</td>
  <td>1</td>
  <td>10%</td>
</tr>
`,Y=`
<tr>
  <td rowspan="3">No</td>
  <td rowspan="3">CARNET</td>
  <td rowspan="3">NOMBRE DEL ESTUDIANTE</td>
  <td colspan="16">TEORIA (T)</td>
  <td colspan="18">PRACTICA (P)</td>
  <td rowspan="3">NFC (T + P)</td>
  <td rowspan="3">EXAMEN DE REPOSICION</td>
  <td rowspan="3">NOTA DEL CICLO</td>
</tr>
<tr>
  <td colspan="4">EXAMENES PARCIALES</td>
  <td colspan="2">TRABAJO DE CAMPO</td>
  <td colspan="4">LABORATORIOS</td>
  <td colspan="2">EXAMEN FINAL</td>
  <td rowspan="2">NOTA FINAL TEORIA</td>
  <td rowspan="2">EXAMEN DE REPO</td>
  <td rowspan="2">NOTA FINAL TEORIA</td>
  <td rowspan="2">NOTA FINAL TEORIA 40%</td>
  <td colspan="8">AREA DE MEDICINA</td>
  <td colspan="8">AREA DE CIRUGIA</td>
  <td rowspan="2">NOTA FINAL PRACTICA</td>
  <td rowspan="2">PRACTICA 60%</td>
</tr>
<tr>
  <td>1</td>
  <td>2</td>
  <td>3</td>
  <td>15%</td>
  <td>1</td>
  <td>10%</td>
  <td>LAB. 1</td>
  <td>LAB. 2</td>
  <td>LAB. 3</td>
  <td>TOTAL 5%</td>
  <td>1</td>
  <td>10%</td>
  <td>P</td>
  <td>7.50%</td>
  <td>CV</td>
  <td>7.50%</td>
  <td>PT</td>
  <td>15%</td>
  <td>NOTA</td>
  <td>TOTAL 30%</td>
  <td>P</td>
  <td>7.50%</td>
  <td>CV</td>
  <td>7.50%</td>
  <td>PT</td>
  <td>15%</td>
  <td>NOTA</td>
  <td>TOTAL 30%</td>
</tr>
`,$=`
<tr>
  <td rowspan="3">No</td>
  <td rowspan="3">CARNET</td>
  <td rowspan="3">NOMBRE DEL ESTUDIANTE</td>
  <td colspan="16">TEORIA</td>
  <td colspan="8">PRACTICAS</td>
  <td rowspan="3">NOTA FINAL (TEORIA + PRACTICA)</td>
  <td rowspan="3">EXAMEN DE REPO</td>
  <td rowspan="3">NOTA DEL CICLO</td>
</tr>
<tr>
  <td colspan="4">EXAMENES PARCIALES</td>
  <td colspan="2">TRABAJO DE CAMPO</td>
  <td colspan="4">LABORATORIOS</td>
  <td colspan="2">EXAMEN FINAL</td>
  <td rowspan="2">NOTA FINAL TEORIA</td>
  <td rowspan="2">EXAMEN DE REPO</td>
  <td rowspan="2">NOTA FINAL TEORIA</td>
  <td rowspan="2">NOTA FINAL TEORIA 40%</td>
  <td colspan="6">SALA DE OPERACIONES</td>
  <td rowspan="2">NOTA FINAL PRACTICA</td>
  <td rowspan="2">60%</td>
</tr>
<tr>
  <td>1</td>
  <td>2</td>
  <td>3</td>
  <td>15%</td>
  <td>1</td>
  <td>10%</td>
  <td>LAB. 1</td>
  <td>LAB. 2</td>
  <td>LAB. 3</td>
  <td>TOTAL 5%</td>
  <td>1</td>
  <td>10%</td>
  <td>P</td>
  <td>15%</td>
  <td>CV</td>
  <td>15%</td>
  <td>PT</td>
  <td>30%</td>
</tr>
`,x=`
<tr>
  <td rowspan="3">No</td>
  <td rowspan="3">CARNET</td>
  <td rowspan="3">NOMBRE DEL ESTUDIANTE</td>
  <td colspan="17">TEORIA</td>
  <td colspan="26">PRACTICAS</td>
  <td rowspan="3">NOTA FINAL (TEORIA + PRACTICA)</td>
  <td rowspan="3">EXAMEN DE REPO</td>
  <td rowspan="3">NOTA DEL CICLO</td>
</tr>
<tr>
  <td colspan="4">EXAMENES PARCIALES</td>
  <td colspan="2">TRABAJO DE CAMPO</td>
  <td colspan="5">LABORATORIOS</td>
  <td colspan="2">EXAMEN FINAL</td>
  <td rowspan="2">NOTA FINAL TEORIA</td>
  <td rowspan="2">EXAMEN DE REPO</td>
  <td rowspan="2">NOTA FINAL TEORIA</td>
  <td rowspan="2">NOTA FINAL TEORIA 40%</td>
  <td colspan="8">PARTO</td>
  <td colspan="8">PUERPERIO</td>
  <td colspan="8">UNIDAD DE SALUD</td>
  <td rowspan="2">NOTA FINAL DE PRACTICA</td>
  <td rowspan="2">NOTA FINAL PRACTICA 60%</td>
</tr>
<tr>
  <td>1</td>
  <td>2</td>
  <td>3</td>
  <td>15%</td>
  <td>1</td>
  <td>5%</td>
  <td>LAB. 1</td>
  <td>LAB. 2</td>
  <td>LAB. 3</td>
  <td>LAB. 4</td>
  <td>TOTAL 10%</td>
  <td>1</td>
  <td>10%</td>
  <td>P</td>
  <td>5%</td>
  <td>CV</td>
  <td>5%</td>
  <td>PT</td>
  <td>10%</td>
  <td>NOTA</td>
  <td>TOTAL 20%</td>
  <td>P</td>
  <td>5%</td>
  <td>CV</td>
  <td>5%</td>
  <td>PT</td>
  <td>10%</td>
  <td>NOTA</td>
  <td>TOTAL 20%</td>
  <td>P</td>
  <td>5%</td>
  <td>CV</td>
  <td>5%</td>
  <td>PT</td>
  <td>10%</td>
  <td>NOTA</td>
  <td>TOTAL 20%</td>
</tr>
`,z=`
<tr>
  <td rowspan="3">No</td>
  <td rowspan="3">CARNET</td>
  <td rowspan="3">NOMBRE DEL ESTUDIANTE</td>
  <td colspan="8">TEORIA</td>
  <td rowspan="3">NOTA FINAL</td>
  <td rowspan="3">EXAMEN DE REPOSICION</td>
  <td rowspan="3">NOTA DEL CICLO</td>
</tr>
<tr>
  <td colspan="4">EXAMENES PARCIALES</td>
  <td colspan="2">TRABAJO DE CAMPO</td>
  <td rowspan="2">EXAMEN FINAL</td>
  <td rowspan="2">EXAMEN FINAL 25%</td>
</tr>
<tr>
  <td>1</td>
  <td>2</td>
  <td>3</td>
  <td>45%</td>
  <td>1</td>
  <td>30%</td>
</tr>
`,G=`
<tr>
  <td rowspan="3">No</td>
  <td rowspan="3">CARNET</td>
  <td rowspan="3">NOMBRE DEL ESTUDIANTE</td>
  <td colspan="14">TEORIA</td>
  <td colspan="8">PRACTICAS DE BASES FUNDAMENTALES </td>
  <td rowspan="3">NOTA FINAL (TEORIA + PRACTICA)</td>
  <td rowspan="3">EXAMEN DE REPO</td>
  <td rowspan="3">NOTA DEL CICLO</td>
</tr>
<tr>
  <td colspan="4">EXAMENES PARCIALES</td>
  <td colspan="2">TRABAJO DE CAMPO</td>
  <td colspan="4">EXAMENES CORTOS</td>
  <td colspan="2">EXAMEN FINAL</td>
  <td rowspan="2">NOTA FINAL TEORIA</td>
  <td rowspan="2">NOTA TEORIA 40%</td>
  <td rowspan="2">P</td>
  <td rowspan="2">15%</td>
  <td rowspan="2">CV</td>
  <td rowspan="2">15%</td>
  <td rowspan="2">PT</td>
  <td rowspan="2">30%</td>
  <td rowspan="2">NOTA FINAL PRACTICA</td>
  <td rowspan="2">NOTA FINAL PRACTICA 60%</td>
</tr>
<tr>
  <td>1</td>
  <td>2</td>
  <td>3</td>
  <td>18%</td>
  <td>1</td>
  <td>6%</td>
  <td>1</td>
  <td>2</td>
  <td>3</td>
  <td>6%</td>
  <td>1</td>
  <td>10%</td>
</tr>
`,q=`
<tr>
  <td rowspan="3">No</td>
  <td rowspan="3">CARNET</td>
  <td rowspan="3">NOMBRE DEL ESTUDIANTE</td>
  <td colspan="16">TEORIA (T)</td>
  <td colspan="18">PRACTICA (P)</td>
  <td rowspan="3">NFC (T + P)</td>
  <td rowspan="3">EXAMEN DE REPOSICION</td>
  <td rowspan="3">NOTA DEL CICLO</td>
</tr>
<tr>
  <td colspan="4">EXAMENES PARCIALES</td>
  <td colspan="2">TRABAJO DE CAMPO</td>
  <td colspan="4">LABORATORIOS</td>
  <td colspan="2">EXAMEN FINAL</td>
  <td rowspan="2">NOTA FINAL TEORIA</td>
  <td rowspan="2">EXAMEN DE REPO</td>
  <td rowspan="2">NOTA FINAL TEORIA</td>
  <td rowspan="2">NOTA FINAL TEORIA 40%</td>
  <td colspan="8">AREA DE MEDICINA</td>
  <td colspan="8">AREA DE CIRUGIA</td>
  <td rowspan="2">NOTA FINAL PRACTICA</td>
  <td rowspan="2">PRACTICA 60%</td>
</tr>
<tr>
  <td>1</td>
  <td>2</td>
  <td>3</td>
  <td>15%</td>
  <td>1</td>
  <td>5%</td>
  <td>LAB. 1</td>
  <td>LAB. 2</td>
  <td>LAB. 3</td>
  <td>TOTAL 10%</td>
  <td>1</td>
  <td>10%</td>
  <td>P</td>
  <td>7.50%</td>
  <td>CV</td>
  <td>7.50%</td>
  <td>PT</td>
  <td>15%</td>
  <td>NOTA</td>
  <td>TOTAL 30%</td>
  <td>P</td>
  <td>7.50%</td>
  <td>CV</td>
  <td>7.50%</td>
  <td>PT</td>
  <td>15%</td>
  <td>NOTA</td>
  <td>TOTAL 30%</td>
</tr>
`,Q=`
<tr>
  <td rowspan="3">No</td>
  <td rowspan="3">CARNET</td>
  <td rowspan="3">NOMBRE DEL ESTUDIANTE</td>
  <td colspan="10">TEORIA</td>
  <td colspan="2" rowspan="2">EXAMEN FINAL</td>
  <td rowspan="3">NOTA FINAL</td>
  <td rowspan="3">EXAMEN DE REPOSICION</td>
  <td rowspan="3">NOTA DEL CICLO</td>
</tr>
<tr>
  <td colspan="4">EXAMENES PARCIALES</td>
  <td colspan="2">TRABAJO DE CAMPO</td>
  <td colspan="4">LABORATORIOS PRACTICOS</td>
</tr>
<tr>
  <td>1</td>
  <td>2</td>
  <td>3</td>
  <td>45%</td>
  <td>1</td>
  <td>15%</td>
  <td>LAB. 1</td>
  <td>LAB. 2</td>
  <td>LAB. 3</td>
  <td>TOTAL 20%</td>
  <td>1</td>
  <td>20%</td>
</tr>
`,W=`
<tr>
  <td rowspan="3">No</td>
  <td rowspan="3">CARNET</td>
  <td rowspan="3">NOMBRE DEL ESTUDIANTE</td>
  <td colspan="13">TEORIA</td>
  <td rowspan="3">NOTA FINAL</td>
  <td rowspan="3">EXAMEN DE REPOSICION</td>
  <td rowspan="3">NOTA DEL CICLO</td>
</tr>
<tr>
  <td colspan="4">EXAMENES PARCIALES</td>
  <td colspan="2">TRABAJO DE CAMPO</td>
  <td colspan="5">LABORATORIOS PRACTICOS</td>
  <td colspan="2">EXAMEN FINAL</td>
</tr>
<tr>
  <td>1</td>
  <td>2</td>
  <td>3</td>
  <td>45%</td>
  <td>1</td>
  <td>15%</td>
  <td>LAB. 1</td>
  <td>10%</td>
  <td>LAB. 2</td>
  <td>10%</td>
  <td>TOTAL 20%</td>
  <td>1</td>
  <td>20%</td>
</tr>
`,Z=`
<tr>
  <td rowspan="3">No</td>
  <td rowspan="3">CARNET</td>
  <td rowspan="3">NOMBRE DEL ESTUDIANTE</td>
	<td colspan="12">TEORIA</td>
  <td rowspan="3">NOTA FINAL</td>
  <td rowspan="3">EXAMEN DE REPOSICION</td>
  <td rowspan="3">NOTA DEL CICLO</td>
</tr>
<tr>
  <td colspan="4">EXAMENES PARCIALES</td>
  <td colspan="2">TRABAJO DE CAMPO</td>
  <td colspan="4">EXAMENES CORTOS</td>
  <td rowspan="2">EXAMEN FINAL</td>
  <td rowspan="2">EXAMEN FINAL 20%</td>
</tr>
<tr>
  <td>1</td>
  <td>2</td>
  <td>3</td>
  <td>54%</td>
  <td>1</td>
  <td>14%</td>
  <td>1</td>
  <td>2</td>
  <td>3</td>
  <td>TOTAL 12%</td>
</tr>
`,j=`
<tr>
  <td rowspan="3">No</td>
  <td rowspan="3">CARNET</td>
  <td rowspan="3">NOMBRE DEL ESTUDIANTE</td>
  <td colspan="16">TEORIA</td>
  <td colspan="10">PRACTICAS</td>
  <td rowspan="3">NOTA FINAL (TEORIA + PRACTICA)</td>
  <td rowspan="3">EXAMEN DE REPO</td>
  <td rowspan="3">NOTA DEL CICLO</td>
</tr>
  <tr>
    <td colspan="4">EXAMANES PARCIALES</td>
    <td colspan="2">TRABAJO DE CAMPO</td>
    <td colspan="4">EXAMANES CORTOS</td>
    <td colspan="2">EXAMEN FINAL</td>
    <td rowspan="2">NOTA FINAL TEORIA</td>
    <td rowspan="2">EXAMEN DE REPO</td>
    <td rowspan="2">NOTA FINAL TEORIA</td>
    <td rowspan="2">NOTA FINAL TEORIA 40%</td>
    <td colspan="6">AREA DE PSIQUIATRIA</td>
    <td rowspan="2">PROYECTO SALUD MENTAL</td>
    <td rowspan="2">15%</td>
    <td rowspan="2">NOTA FINAL PRACTICA</td>
    <td rowspan="2">PRACTICA 60%</td>
  </tr>
		<tr>
			<td>1</td>
			<td>2</td>
			<td>3</td>
			<td>15%</td>
			<td>1</td>
			<td>5%</td>
			<td>1</td>
			<td>2</td>
			<td>3</td>
			<td>10%</td>
			<td>1</td>
			<td>10%</td>
			<td>P</td>
			<td>5%</td>
			<td>CV</td>
			<td>10%</td>
			<td>PT</td>
			<td>30%</td>
		</tr>
`,L=new Map([[1,{template:g,number_of_columns:15}],[2,{template:v,number_of_columns:16}],[3,{template:G,number_of_columns:25}],[4,{template:h,number_of_columns:28}],[5,{template:q,number_of_columns:37}],[6,{template:x,number_of_columns:46}],[7,{template:k,number_of_columns:27}],[8,{template:U,number_of_columns:15}],[9,{template:y,number_of_columns:16}],[10,{template:z,number_of_columns:11}],[11,{template:J,number_of_columns:27}],[12,{template:Q,number_of_columns:15}],[13,{template:W,number_of_columns:16}],[14,{template:Y,number_of_columns:37}],[15,{template:H,number_of_columns:31}],[16,{template:V,number_of_columns:45}],[17,{template:$,number_of_columns:27}],[18,{template:Z,number_of_columns:15}],[19,{template:j,number_of_columns:29}]]),K=(t,a)=>new Promise((o,n)=>{if(console.log(t),L.has(t)){if([4,7].includes(t)){let p=!0;const d=L.get(t);["ESCII23","AGSE27","AMNII14"].includes(a)&&(p=!1),o({template:d==null?void 0:d.template(p),number_of_columns:d==null?void 0:d.number_of_columns})}o(L.get(t))}else n("No se encontro la configuracion")}),tt={class:"table-responsive"},dt={key:0,class:"table-note table"},At=["innerHTML"],ot={key:1},nt=C("h3",null,"Tenemos un problema al mostrar la notas, consulta al administrador del sistema",-1),st=[nt],pt=B({__name:"TableNote",props:{config:{type:Number,default:0,required:!0},codigo:{type:String,default:"",required:!1},alumnos:{type:Array,default:()=>[]}},setup(t){const a=t,o=O(!1),n=O([]),p=O(0),d=O(""),{config:l,alumnos:w,codigo:u}=i(a),e=async()=>{try{o.value=!0;const A=await K(l.value,u.value);d.value=A.template,p.value=A.number_of_columns}catch{o.value=!1}};D(l,async A=>{await e()}),D(w,async A=>{c()});const c=()=>{n.value=w.value.map((A,P)=>{const{alumno:r}=A,R=[P+1,r.carnet,`${r.apellidos} ${r.nombres}`],T=I.chunk(I.filter(A,(N,F)=>I.startsWith(F,"nota_")),p.value)[0];return I.concat(R,T)},[n.value])};return X(async()=>{await e(),c()}),(A,P)=>(s(),E("div",tt,[o.value?(s(),E("table",dt,[C("thead",{innerHTML:d.value},null,8,At),C("tbody",null,[(s(!0),E(M,null,S(n.value,(r,R)=>(s(),E("tr",{key:R},[(s(!0),E(M,null,S(r,(T,N)=>(s(),E("td",{key:N},_(N>2?f(b)(T,2,N===r.length-1):T),1))),128))]))),128))])])):(s(),E("div",ot,st))]))}});export{pt as _,b as f,at as n,K as s,rt as t};
