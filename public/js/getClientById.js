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
                    </div>
                    `;
                    content.insertAdjacentHTML("beforeend", clientInfo);
                }
            } catch (error) {
                
            }
        })
    }) 

}
