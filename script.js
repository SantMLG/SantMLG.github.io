// Definir los datos para cada usuario
const usersData = {
  user1: {
      name: 'Fernando Briseno',
      role: 'Software Developer',
      pasos: 3281,
      frecuencia: 85,
      oxigenacion: 98,
      historico: [
          { year: '2008', value: 30 },
          { year: '2009', value: 15 },
          { year: '2010', value: 8 },
          { year: '2011', value: 10 },
          { year: '2012', value: 25 }
      ],
      ejercicio: [
          { label: "Calorias", value: 25 },
          { label: "Actividad", value: 45 },
          { label: "Pasos", value: 30 }
      ]
  },
  user2: {
      name: 'Luis Perez',
      role: 'Doctor',
      pasos: 4123,
      frecuencia: 75,
      oxigenacion: 96,
      historico: [
          { year: '2008', value: 25 },
          { year: '2009', value: 20 },
          { year: '2010', value: 12 },
          { year: '2011', value: 18 },
          { year: '2012', value: 22 }
      ],
      ejercicio: [
          { label: "Calorias", value: 35 },
          { label: "Actividad", value: 25 },
          { label: "Pasos", value: 40 }
      ]
  },
  user3: {
      name: 'Maria Gomez',
      role: 'Fitness Trainer',
      pasos: 6000,
      frecuencia: 90,
      oxigenacion: 99,
      historico: [
          { year: '2008', value: 35 },
          { year: '2009', value: 25 },
          { year: '2010', value: 18 },
          { year: '2011', value: 20 },
          { year: '2012', value: 28 }
      ],
      ejercicio: [
          { label: "Calorias", value: 40 },
          { label: "Actividad", value: 30 },
          { label: "Pasos", value: 50 }
      ]
  }
};

// Recuperar el usuario del localStorage
const currentUser = localStorage.getItem('currentUser');

// Si el usuario está definido, cargar sus datos
if (currentUser && usersData[currentUser]) {
    const userData = usersData[currentUser];

    // Actualizar el nombre y rol del usuario en el sidebar
    document.querySelector('.side-user small').textContent = userData.name;
    document.querySelector('.side-user p').textContent = userData.role;

    // Actualizar las métricas del dashboard
    document.querySelector('.card-info h2').textContent = userData.pasos;
    document.querySelector('.card-info small').textContent = "Pasos";

    document.querySelectorAll('.card')[1].querySelector('.card-info h2').textContent = userData.frecuencia;
    document.querySelectorAll('.card')[2].querySelector('.card-info h2').textContent = userData.oxigenacion;

    // Actualizar los gráficos
    new Morris.Line({
        element: 'myfirstchart',
        lineColors: ['orange'],
        data: userData.historico,
        xkey: 'year',
        ykeys: ['value'],
        labels: ['Value']
    });

    Morris.Donut({
        element: 'donut-example',
        data: userData.ejercicio,
        colors: ['orange', '#0072f2', '#f42a26'],
        labelColor: '#ffffff'
    });
}