document.addEventListener("DOMContentLoaded", () => {
  const existingClientsOption = document.querySelector("#existing-clients");
  const addNewClientOption = document.querySelector("#add-new-client");
  const contentTitle = document.querySelector("#content-title");
  const content = document.querySelector("#content");

  existingClientsOption.addEventListener("click", async (e) => {
    e.preventDefault();

    contentTitle.textContent = "Current Clients";
    content.innerHTML = "";

    try {
      const response = await fetch("/clients");

      if (response.ok) {
        const clients = await response.json();

        clients.sort((a, b) => a.nombre.localeCompare(b.nombre));

        clients.forEach((client) => {
          const statusClass =
            client.estado_cliente === "Inactivo" ? "inactive" : "active";

          const clientHTML = `
            <div class="client-info">
              <p class="name">${client.nombre}</p>
              <p class="address">${client.direccion}</p>
              <p class="city">${client.ciudad}</p>
              <p class="state">${client.estado}</p>
              <p class="zipcode">${client.zip_code}</p>
              <p class="status ${statusClass}">${client.estado_cliente}</p>
                <a href="#" class="ver-detalles">Ver Detalles</a>
            </div>  
          `;

          content.insertAdjacentHTML("beforeend", clientHTML);
        });
      }
    } catch (error) {
      content.innerHTML = `<p style="color:red;">Error loading clients.</p>`;
      console.error("Fetch error:", error);
    }
  });

  addNewClientOption.addEventListener("click", (e) => {
    e.preventDefault();

    contentTitle.textContent = "Add New Client";
    content.innerHTML = ""
  });
});
