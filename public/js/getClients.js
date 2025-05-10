import { displayClientById } from "./getClientById.js";

export async function displayAllClients() {
  const existingClientsOption = document.querySelector("#existing-clients");
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

        const tableHTML = `
          <table class="clients-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>City</th>
                <th>State</th>
                <th>Zip Code</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${clients
                .map((client) => {
                  const statusClass = client.client_status === "Inactive" ? "inactive" : "active";
                  return `
                    <tr>
                      <td>${client.name}</td>
                      <td>${client.address}</td>
                      <td>${client.city}</td>
                      <td>${client.state}</td>
                      <td>${client.zip_code}</td>
                      <td class="status ${statusClass}">${client.client_status}</td>
                      <td><a href="#" class="see-details" data-id=${client._id}>See Details</a></td>
                    </tr>
                  `;
                })
                .join("")}
            </tbody>
          </table>
        `;

        content.insertAdjacentHTML("beforeend", tableHTML);

        displayClientById()
      }
    } catch (error) {
      content.innerHTML = `<p style="color:red;">Error loading clients.</p>`;
      console.error("Fetch error:", error);
    }
  });
}
