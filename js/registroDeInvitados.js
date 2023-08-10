// Cuando el DOM esté cargado, ejecuta la siguiente función
document.addEventListener("DOMContentLoaded", function() {
    // Obtener elementos del DOM
    const addAttendeesForm = document.getElementById("addAttendeesForm");
    const tablaAsistentes = document.getElementById("tablaAsistentes");

    // Cargar asistentes almacenados en localStorage si existen
    const asistentes = JSON.parse(localStorage.getItem("asistentes")) || [];
    mostrarAsistentes(asistentes);

    // Escuchar el evento de envío del formulario
    addAttendeesForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Obtener valores del formulario
        const nombreAsistente = document.getElementById("nombreAsistente").value;
        const cantidadPersonas = document.getElementById("cantidadPersonas").value;
        const observaciones = document.getElementById("observaciones").value;

        // Crear objeto de asistente
        const nuevoAsistente = {
            nombre: nombreAsistente,
            cantidadPersonas: cantidadPersonas,
            observaciones: observaciones
        };

        // Buscar y reemplazar asistente si ya existe
        const indiceExistente = asistentes.findIndex(asistente => asistente.nombre === nombreAsistente);
        if (indiceExistente !== -1) {
            asistentes.splice(indiceExistente, 1, nuevoAsistente);
        } else {
            // Agregar el nuevo asistente a la lista
            asistentes.push(nuevoAsistente);
        }

        // Guardar la lista actualizada en localStorage
        localStorage.setItem("asistentes", JSON.stringify(asistentes));

        // Mostrar la tabla de asistentes actualizada
        mostrarAsistentes(asistentes);

        // Limpiar campos del formulario
        addAttendeesForm.reset();
    });

    // Escuchar eventos de clic en la tabla de asistentes
    tablaAsistentes.addEventListener("click", function(event) {
        const target = event.target;

        if (target.classList.contains("btnConfirmar")) {
            target.innerHTML = "✓ Confirmado";
            target.disabled = true;
        } else if (target.classList.contains("btnEditar")) {
            // Ventana de confirmación para editar
            if (window.confirm("¿Estás seguro de que deseas editar este asistente?")) {
                const fila = target.closest("tr");
                const celdas = fila.querySelectorAll("td");

                document.getElementById("nombreAsistente").value = celdas[0].textContent;
                document.getElementById("cantidadPersonas").value = celdas[1].textContent;
                document.getElementById("observaciones").value = celdas[2].textContent;

                fila.remove();
            }
        } else if (target.classList.contains("btnEliminar")) {
            // Ventana de confirmación para eliminar
            if (window.confirm("¿Estás seguro de que deseas eliminar este asistente?")) {
                const fila = target.closest("tr");
                const indice = fila.rowIndex - 1;

                asistentes.splice(indice, 1);
                localStorage.setItem("asistentes", JSON.stringify(asistentes));

                fila.remove();
            }
        }
    });

    // Función para mostrar la tabla de asistentes
    function mostrarAsistentes(asistentes) {
        const tbody = tablaAsistentes.querySelector("tbody");
        tbody.innerHTML = "";

        asistentes.forEach(asistente => {
            const fila = document.createElement("tr");
            fila.innerHTML = `
                <td>${asistente.nombre}</td>
                <td>${asistente.cantidadPersonas}</td>
                <td>${asistente.observaciones}</td>
                <td><button class="btnConfirmar">Confirmar</button></td>
                <td><button class="btnEditar">Editar</button></td>
                <td><button class="btnEliminar">Eliminar</button></td>
            `;

            tbody.appendChild(fila);
        });
    }
});
