<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Historial de notas</title>
  <style>
    @page { margin: 100px 25px; }
    body { counter-increment: pageplus1, page; counter-reset: pageplus1 1; }
    body {
      margin: 0px;
      padding: 0px;
    }

    * {
      font-family: Arial, Helvetica, sans-serif;
    }

    h1, h2 {
      margin: 0px;
      padding: 0px;
    }

    h1.title {
      font-size: 26px;
      font-weight: bold;
    }

    h2.title {
      font-size: 22px;
      font-weight: normal;
      font-style: italic;
    }

    table.table-note {
      width: 100%;
      border-collapse: collapse;
    }

    table.table-note thead th {
      font-size: 1rem;
      color: white;
      padding: 12px 0px;
      background-color: #000;
      border: 1px solid #aaa;
      text-transform: uppercase;
    }

    table.table-note tbody td {
      font-size: 1rem;
      padding: 5px 10px;
      border-left: 1px solid #000;
      border-right: 1px solid #000;
      border-bottom: 1px solid #000;
    }

    .mt-2 {
      margin-top: 2rem;
    }
    .font-normal { font-weight: normal; }
    .text-center { text-align: center; }
    .text-justify { text-align: justify; }

    footer .pagenum:before { content: counter(page); }
    footer .total-pages:before { content: counter(pageplus1); }
  </style>
</head>
<body>
  @yield('content')
</body>
</html>