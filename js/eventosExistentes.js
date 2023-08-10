document.addEventListener("DOMContentLoaded", function() {
  // Seleccionar elementos del DOM
  const existingEventForm = document.getElementById("existingEventForm");
  const tablaEventos = document.getElementById("tablaEventos");
  const btnRegistrarInvitados = document.getElementById("btnRegistrarInvitados");

  // Agregar un listener al formulario para el evento "submit"
  existingEventForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Evitar el comportamiento predeterminado del formulario
      
      // Obtener valores de los campos de entrada
      const correoExistente = document.getElementById("correoExistente").value;
      const passwordExistente = document.getElementById("passwordExistente").value;

      // Verificar si se proporcionaron ambos valores
      if (!correoExistente || !passwordExistente) {
          alert("Por favor, complete todos los campos.");
          return;
      }

      // Obtener eventos almacenados en el almacenamiento local (localStorage)
      const eventos = JSON.parse(localStorage.getItem("eventos")) || [];
      
      // Filtrar eventos que coinciden con las credenciales ingresadas
      const eventosFiltrados = eventos.filter(evento => evento.correo === correoExistente && evento.password === passwordExistente);

      // Verificar si se encontraron eventos
      if (eventosFiltrados.length === 0) {
          alert("No se encontraron eventos asociados a las credenciales ingresadas.");
          return;
      }

      // Mostrar la tabla de eventos
      mostrarEventos(eventosFiltrados);

      // Mostrar el botón de redirección
      btnRegistrarInvitados.style.display = "block";
      
      // Limpiar campos de entrada
      document.getElementById("correoExistente").value = "";
      document.getElementById("passwordExistente").value = "";
  });
  
  // Agregar un listener al botón de registro de invitados
  btnRegistrarInvitados.addEventListener("click", function() {
      // Redirigir a la página de registro de invitados utilizando el valor del "eventoSeleccionado" del almacenamiento local
      redirectToRegistrarInvitados(localStorage.getItem("eventoSeleccionado"));
  });
});

  
function mostrarEventos(eventos) {
  const tablaEventos = document.getElementById("tablaEventos");
  const tbody = tablaEventos.querySelector("tbody");
  tbody.innerHTML = "";

  eventos.forEach(evento => {
      const fila = document.createElement("tr");

      fila.innerHTML = `
          <td>${evento.responsable}</td>
          <td>${evento.nombreEvento}</td>
          <td>${evento.fechaEvento}</td>
          <td>${evento.cantidadInvitados}</td>
          <td><button class="btnRegistrarAsistentes" data-evento-id="${evento.id}">Registrar Asistentes</button></td>
      `;

      tbody.appendChild(fila);
  });

  tablaEventos.style.display = "block";

  // Agregar un listener a los botones de registro de asistentes
  const btnsRegistrarAsistentes = document.querySelectorAll(".btnRegistrarAsistentes");
  btnsRegistrarAsistentes.forEach(btn => {
      btn.addEventListener("click", function() {
          const eventoId = btn.getAttribute("data-evento-id");
          redirectToRegistroAsistentes(eventoId);
      });
  });
}

function redirectToRegistroAsistentes(eventoId) {
  // Redireccionar a la página "registroDeAsistentes.html" pasando el ID del evento como parámetro
  window.location.href = `registroDeAsistentes.html?eventoId=${eventoId}`;
}


  