document.addEventListener('DOMContentLoaded', function() {
    // Inicialización del dashboard
    // Aquí puedes agregar funciones para manipular y mostrar datos
    console.log("Dashboard cargado.");
});

new Morris.Line({
    // ID of the element in which to draw the chart.
    element: 'myfirstchart',
    lineColors: ['orange'],
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [
      { year: '2008', value: 20 },
      { year: '2009', value: 10 },
      { year: '2010', value: 5 },
      { year: '2011', value: 5 },
      { year: '2012', value: 20 }
    ],
    // The name of the data record attribute that contains x-values.
    xkey: 'year',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['Value']
  });

  Morris.Donut({
    element: 'donut-example',
    data: [
      {label: "Calorias", value: 12},
      {label: "Actividad", value: 30},
      {label: "Pasos", value: 20}
    ],
    colors: ['orange', '#0072f2', '#f42a26'],
    labelColor: '#ffffff'
  });
