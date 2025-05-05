export async function changeClientStatus() {
  document.addEventListener("click", async function (e) {
    if (e.target.classList.contains("change-status")) {
      e.preventDefault();

      const clientId = e.target.getAttribute("data-id");

      try {
        const response = await fetch(`/change-status/${clientId}`, {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
        });

        if (response.ok) {
          alert("Status Updated");
          const result = await response.json(); //El resultado lo convierte a json ({message: "Status updated", newStatus}), o sea nos dara el opuesto del que estamos cambiando
          const updatedStatus = result.newStatus; //Guardamos el new status de esta respuesta en la variable updatedStatus, este newStatus viene del response que enviamos en la funcion del backend

          // Actualizar el estado visual sin recargar la página
          const statusElement = document.querySelector(`.status`); //Seleccionamos el elemento que contiene el texto del estado
          statusElement.textContent = updatedStatus; //Se actualiza ese texto de acuerdo a lo que esta en la variable
          statusElement.className = `status ${updatedStatus.toLowerCase()}`; //Se actualiza la clase al mismo

          // Cambiar el texto en el enlace "Make [newStatus]"
          e.target.textContent = `Make ${
            updatedStatus === "Active" ? "Inactive" : "Active"
          }`;
        } else {
          alert("Failed to update status.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  });
}
