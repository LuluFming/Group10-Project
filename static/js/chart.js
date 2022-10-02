console.log('trayendo chart js')
var ctxB = document.getElementById("myChart").getContext('2d');
var myBarChart = new Chart(ctxB, {
  type: 'bar',
  data: {
    labels: ["Lionel Messi", "LeBron James", "Cristiano Ronaldo", "Neymar", "Stephen Curry", "Kevin Durant"],
    datasets: [{
      label: 'USD Millions',
      data: [130, 121.2, 115, 95, 92.8, 92.1],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

//Boton para el Darkmode
function darkmode(){
  var pagina_chart = document.getElementById("pagina_chart");

  pagina_chart.classList.toggle('darkmode');
}