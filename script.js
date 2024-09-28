const usersData = {
    admin: {
        name: 'Administrador',
        role: 'Admin',
        pasos: 0,
        frecuencia: 0,
        oxigenacion: 0,
        historico: [
            { year: '2008', value: 0 },
            { year: '2009', value: 0 },
            { year: '2010', value: 0 },
            { year: '2011', value: 0 },
            { year: '2012', value: 0 }
        ],
        ejercicio: [
            { label: "Calorias", value: 0 },
            { label: "Actividad", value: 0 },
            { label: "Pasos", value: 0 }
        ]
    },
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

// Variable para controlar si es administrador
let isAdmin = false;

// Obtener el usuario actual del localStorage
const currentUser = localStorage.getItem('currentUser');

// Comprobar si el usuario es administrador y mostrar el dropdown
if (currentUser === 'admin') {
    isAdmin = true; // Establecemos que es administrador
    loadUserData(currentUser);
} else if (currentUser && usersData[currentUser]) {
    loadUserData(currentUser);
} else {
    console.error('Usuario no válido o no existe.');
}

// Mostrar/ocultar la sección de cambiar usuario según si es administrador
if (isAdmin) {
    document.getElementById('userSelectSection').style.display = 'block';  // Mostrar dropdown
} else {
    document.getElementById('userSelectSection').style.display = 'none';   // Ocultar dropdown
}

// Función para cargar los datos de un usuario
// Función para cargar los datos de un usuario
function loadUserData(username) {
    const userData = usersData[username];

    // Limpiar los contenedores de las gráficas
    document.getElementById('myfirstchart').innerHTML = '';
    document.getElementById('donut-example').innerHTML = '';

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

    new Morris.Donut({
        element: 'donut-example',
        data: userData.ejercicio,
        colors: ['orange', '#0072f2', '#f42a26'],
        labelColor: '#ffffff'
    });
}


// Función para cambiar de usuario
function changeUser(username) {
    // Actualizar localStorage con el nuevo usuario
    localStorage.setItem('currentUser', username);

    // Cargar los datos del usuario seleccionado
    loadUserData(username);
}