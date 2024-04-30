import{d as S,r as a,h as F,Z as B,c as A,e as o,g as O,v as w,B as l,bJ as T,t as u,i as m}from"./index-8ac73380.js";const X=(t,n=2)=>parseFloat(t==null?void 0:t.toString()).toFixed(n),i=`
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
`,_=`
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
`,f=`
<tr>
  <td rowspan="3">No</td>
  <td rowspan="3">CARNET</td>
  <td rowspan="3">NOMBRE DEL ESTUDIANTE</td>
  <td colspan="17">TEORIA</td>
  <td colspan="8">PRACTICA</td>
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
`,b=`
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
`,g=`
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
  <td colspan="8">PARTO  20%</td>
  <td colspan="8">PARTO  20%</td>
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
`,U=`
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
`,h=`
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
`,J=`
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
  <td colspan="6">UNIDAD DE SALUD</td>
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
`,V=`
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
`,v=`
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
`,y=`
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
`,k=`
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
`,x=`
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
`,z=`
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
`,H=`
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
`,$=`
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
`,G=`
<tr>
  <td rowspan="3">No</td>
  <td rowspan="3">CARNET</td>
  <td rowspan="3">NOMBRE DEL ESTUDIANTE</td>
  <td colspan="16">TEORIA</td>
  <td colspan="26">PRACTICAS</td>
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
  <td colspan="8">PARTO  20%</td>
  <td colspan="8">PUERPERIO  20%</td>
  <td colspan="8">PEDIATRIA  20%</td>
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
  <td>5%</td>
  <td>PT</td>
  <td>10%</td>
  <td>NOTA</td>
  <td>TOTAL 20%</td>
  <td>P</td>
  <td>15%</td>
  <td>CV</td>
  <td>5%</td>
  <td>PT</td>
  <td>10%</td>
  <td>NOTA</td>
  <td>TOTAL 20%</td>
  <td>P</td>
  <td>15%</td>
  <td>CV</td>
  <td>5%</td>
  <td>PT</td>
  <td>10%</td>
  <td>NOTA</td>
  <td>TOTAL 20%</td>
</tr>
`,W=`
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
`,c=new Map([[1,{template:i,number_of_columns:15}],[2,{template:U,number_of_columns:16}],[3,{template:z,number_of_columns:25}],[4,{template:f,number_of_columns:28}],[5,{template:H,number_of_columns:37}],[6,{template:k,number_of_columns:46}],[7,{template:J,number_of_columns:27}],[8,{template:_,number_of_columns:15}],[9,{template:h,number_of_columns:16}],[10,{template:x,number_of_columns:11}],[11,{template:b,number_of_columns:27}],[12,{template:$,number_of_columns:15}],[13,{template:G,number_of_columns:16}],[14,{template:v,number_of_columns:37}],[15,{template:V,number_of_columns:31}],[16,{template:g,number_of_columns:45}],[17,{template:y,number_of_columns:27}],[18,{template:W,number_of_columns:15}]]),q=t=>new Promise((n,s)=>{console.log("config_id",t),c.has(t)?n(c.get(t)):s("No se encontro la configuracion")}),Q={class:"table-responsive"},Z={key:0,class:"table-note table"},j=["innerHTML"],K={key:1},Y=O("h3",null,"Tenemos un problema al mostrar la notas, consulta al administrador del sistema",-1),tt=[Y],At=S({__name:"TableNote",props:{config:{type:Number,default:0,required:!0},alumnos:{type:Array,default:()=>[]}},setup(t){const n=t,s=a(!1),I=a([]),R=a(0),L=a(""),{config:e,alumnos:P}=F(n),D=async()=>{try{s.value=!0;const d=await q(e.value);L.value=d.template,R.value=d.number_of_columns}catch{s.value=!1}};return B(async()=>{await D(),I.value=P.value.map((d,C)=>{const{alumno:E}=d,p=[C+1,E.carnet,`${E.apellidos} ${E.nombres}`],r=T.chunk(T.filter(d,(N,M)=>T.startsWith(M,"nota_")),R.value)[0];return T.concat(p,r)})}),(d,C)=>(A(),o("div",Q,[s.value?(A(),o("table",Z,[O("thead",{innerHTML:L.value},null,8,j),O("tbody",null,[(A(!0),o(w,null,l(I.value,(E,p)=>(A(),o("tr",{key:p},[(A(!0),o(w,null,l(E,(r,N)=>(A(),o("td",{key:N},u(N>2?m(X)(r):r),1))),128))]))),128))])])):(A(),o("div",K,tt))]))}});export{At as _,X as f,q as s};
