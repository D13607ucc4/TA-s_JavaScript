const personas = ["Ana", "Juan", "Lucía", "Marcos", "Sofía", "Pedro", "Valentina"];
const lista = document.getElementById("listaPersonas");
const input = document.getElementById("busqueda");

// Función para renderizar la lista
function renderizarLista(filtradas) {
  lista.innerHTML = "";
  filtradas.forEach(persona => {
    lista.innerHTML += `<li>${persona}</li>`;
  });
}

// Evento para filtrar mientras se escribe
input.addEventListener("input", () => {
  const texto = input.value.toLowerCase();
  const filtradas = personas.filter(p => p.toLowerCase().includes(texto));
  renderizarLista(filtradas);
});

// Renderizar lista completa al inicio
renderizarLista(personas);