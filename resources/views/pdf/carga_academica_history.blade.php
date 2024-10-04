@extends('pdf.layout')

@section('content')
<h1 class="text-center title">
  INSTITUTO TECNOLÓGICO <br> "ESCUELA TÉCNICA PARA LA SALUD"
</h1>
<h2 class="text-center title">
  {{ $carga_academica->materia->carrera->nombre }} - CICLO {{ $carga_academica->ciclo->nombre }}
</h2>
<br>
<h1 class="text-center title">Materia: {{ $carga_academica->materia->nombre }}</h1>
<h2 class="text-center title"> Docente: 
  {{ $carga_academica->docente->nombres }}
  {{ $carga_academica->docente->apellidos }}
</h2>

<h2 class="text-center font-normal">{{ $historial->created_at->isoFormat('dddd, D [de] MMM [de] YYYY') }}</h2>
<h2 class="text-center font-normal">{{ strtoupper(str_replace('_', ' ', $historial->key_note)) }}</h2>

<table class="table-note mt-2">
  <thead>
    <tr>
      <th class="text-center">#</th>
      <th class="text-center" style="width: 150px">Carnet</th>
      <th class="text-center">Alumno</th>
      <th class="text-center" style="width: 100px;">Nota</th>
    </tr>
  </thead>
  <tbody>
    @foreach ($alumnos as $index => $nota)
      <tr>
        <td class="text-center">{{ $index + 1 }}</td>
        <td class="text-center">{{ $nota['carnet'] }}</td>
        <td>{{ $nota['nombres'] }}</td>
        <td class="text-center">{{ number_format($nota['nota'], 2) }}</td>
      </tr>
    @endforeach
  </tbody>
</table>

<div style='margin-top: 100px'>
  <h4 class='text-center'>
    ________________________________________ <br>
    FIRMA Y SELLO DE DOCENTE
  </h4>
</div>
@endsection