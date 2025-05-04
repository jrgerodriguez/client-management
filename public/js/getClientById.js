export async function displayClientById() {
  const contentTitle = document.querySelector("#content-title");
  const content = document.querySelector("#content");
  const seeDetailsBtns = document.querySelectorAll(".see-details");

    seeDetailsBtns.forEach((btn) => {
        btn.addEventListener("click", async function(e) {
            e.preventDefault()

            const clientId = e.target.getAttribute("data-id")
            content.innerHTML = ""

            try {
                const response = await fetch(`/get-client/${clientId}`)
                if (response.ok) {

                const details = await response.json()
                contentTitle.textContent = details.name;
               
                const clientInfo = `
                    <div class="client-details">
                      <p><strong>Address:</strong> ${details.address}</p>
                      <p><strong>City:</strong> ${details.city}</p>
                      <p><strong>State:</strong> ${details.state}</p>
                      <p><strong>ZIP Code:</strong> ${details.zip_code}</p>
                      <p><strong>Phone:</strong> ${details.phone}</p>
                      <p><strong>Email:</strong> ${details.email}</p>
                      <p><strong>Status:</strong> 
                        <span class="status ${details.client_status.toLowerCase()}">${details.client_status}</span>
                      </p>
                      <a href="" class="see-details">Edit</a> <a href="#" class="see-details change-status" data-id="${details._id}">Make ${details.client_status === "Inactive" ? "Active" : "Inactive"}</a> <a href="" class="see-details">Delete</a>
                    </div>
                    `;
                    content.insertAdjacentHTML("beforeend", clientInfo);
                }
            } catch (error) {
                console.log(error)
            }
        })
    }) 
}

    //Funcion para cambiar el estado del cliente
    document.addEventListener("click", async function(e) {
      if(e.target.classList.contains("change-status")) {
        e.preventDefault()

        const clientId = e.target.getAttribute("data-id")

        try {
          const response = await fetch(`/change-status/${clientId}`, {
            method: "PUT",
            headers: {
              "Content-type": "application/json"
            }
          });

          if (response.ok) {
            alert("Status Updated")
            const result = await response.json() //El resultado lo convierte a json ({message: "Status updated", newStatus}), o sea nos dara el opuesto del que estamos cambiando
            const updatedStatus = result.newStatus //Guardamos el new status de esta respuesta en la variable updatedStatus, este newStatus viene del response que enviamos en la funcion del backend

            // Actualizar el estado visual sin recargar la página
            const statusElement = document.querySelector(`.status`); //Seleccionamos el elemento que contiene el texto del estado
            statusElement.textContent = updatedStatus; //Se actualiza ese texto de acuerdo a lo que esta en la variable
            statusElement.className = `status ${updatedStatus.toLowerCase()}`; //Se actualiza la clase al mismo

            // Cambiar el texto en el enlace "Make [newStatus]"
            e.target.textContent = `Make ${updatedStatus === 'Active' ? 'Inactive' : 'Active'}`;
          } else {
            alert("Failed to update status.")
          }
        } catch (error) {
          console.error("Error:", error)
        }
      }
})
