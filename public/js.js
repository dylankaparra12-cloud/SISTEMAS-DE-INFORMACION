document.getElementById('boton').addEventListener('click', async () => {

    const alumno = {
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        telefono: document.getElementById('telefono').value,
        curso: document.getElementById('curso').value,
        division: document.getElementById('division').value
    };

    await fetch('/guardar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(alumno)
    });

    mostrarAlumnos();
});

async function mostrarAlumnos() {
    const respuesta = await fetch('/obtener');
    const alumnos = await respuesta.json();

    const lista = document.getElementById('lista');
    lista.innerHTML = '';

    alumnos.forEach(a => {
        lista.innerHTML += `<li>${a.nombre} ${a.apellido} - Tel: ${a.telefono} - ${a.curso} ${a.division}</li>`;
    });
}

mostrarAlumnos();