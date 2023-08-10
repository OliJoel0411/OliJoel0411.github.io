document.addEventListener("DOMContentLoaded", function() {
    const newEventForm = document.getElementById("newEventForm");
    const registroExitoso = document.getElementById("registroExitoso");
  
    newEventForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const responsable = document.getElementById("responsable").value;
      const password = document.getElementById("password").value;
      const correo = document.getElementById("correo").value;
      const nombreEvento = document.getElementById("nombreEvento").value;
      const fechaEvento = document.getElementById("fechaEvento").value;
      const cantidadInvitados = document.getElementById("cantidadInvitados").value;
  
      if (!responsable || !password || !correo || !nombreEvento || !fechaEvento || !cantidadInvitados) {
        alert("Por favor, complete todos los campos.");
        return;
      }
  
      const evento = {
        responsable,
        password,
        correo,
        nombreEvento,
        fechaEvento,
        cantidadInvitados
      };
  
      const eventos = JSON.parse(localStorage.getItem("eventos")) || [];
      eventos.push(evento);
      localStorage.setItem("eventos", JSON.stringify(eventos));
  
      console.log("Evento registrado:", evento);
  
      // Mostrar pantalla de registro exitoso
      registroExitoso.style.display = "block";
  
      // Limpiar campos de entrada después de un tiempo
      setTimeout(() => {
        newEventForm.reset();
        registroExitoso.style.display = "none";
      }, 3000); // Ocultar después de 3 segundos
    });
  });
  
