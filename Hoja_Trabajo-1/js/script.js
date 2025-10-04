function mostrarItinerario(tipo) {
  document.querySelectorAll('.tabla-itinerario').forEach(tabla => tabla.style.display = 'none');
  document.getElementById(`tabla-${tipo}`).style.display = 'block';
}

const nombres = ["Lucía", "Pedro", "Ana", "Carlos", "María", "José", "Elena", "Luis", "Sofía", "Miguel"];
const comentarios = [
  "Una experiencia inolvidable.",
  "El paisaje es espectacular.",
  "Los guías fueron muy amables.",
  "Recomiendo llevar abrigo.",
  "Excelente organización.",
  "Las vistas del volcán son increíbles.",
  "Me encantó el ascenso nocturno.",
  "Muy buena comida y ambiente.",
  "Volvería sin dudarlo.",
  "Perfecto para amantes de la naturaleza."
];

function mostrarComentarios() {
  const indices = [];
  while (indices.length < 3) {
    const num = Math.floor(Math.random() * nombres.length);
    if (!indices.includes(num)) indices.push(num);
  }

  const contenedor = document.getElementById('contenedor-comentarios');
  contenedor.innerHTML = '';

  indices.forEach(i => {
    const card = document.createElement('div');
    card.className = 'comentario-card';
    card.innerHTML = `<h4>${nombres[i]}</h4><p>"${comentarios[i]}"</p>`;
    contenedor.appendChild(card);
  });
}
mostrarComentarios();

document.getElementById('formulario').addEventListener('submit', function(e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value.trim();
  const fecha = document.getElementById('fecha').value;
  const email = document.getElementById('email').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!nombre || !fecha || !email || !mensaje) {
    alert("Por favor, completa todos los campos.");
    return;
  }
  if (!emailRegex.test(email)) {
    alert("Correo electrónico inválido.");
    return;
  }

  console.log({ nombre, fecha, email, mensaje });
  const modal = new bootstrap.Modal(document.getElementById('modalConfirmacion'));
  modal.show();
  this.reset();
});
