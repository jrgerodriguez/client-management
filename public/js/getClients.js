export async function displayAllClients() {
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

        clients.sort((a, b) => a.name.localeCompare(b.name));

        clients.forEach((client) => {
          const statusClass =
            client.client_status === "Inactivo" ? "inactive" : "active";

          const clientHTML = `
            <div class="client-info">
              <p class="name">${client.name}</p>
              <p class="address">${client.address}</p>
              <p class="city">${client.city}</p>
              <p class="state">${client.state}</p>
              <p class="zipcode">${client.zip_code}</p>
              <p class="status ${statusClass}">${client.client_status}</p>
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
}