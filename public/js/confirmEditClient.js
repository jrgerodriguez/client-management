export async function confirmEditClient(clientId) {
    const editClientForm = document.querySelector("#edit-client-form")
    editClientForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target)
        const updatedClientData = {}

        formData.forEach((value, key) => {
            updatedClientData[key] = value
        })

        try {
            const response = await fetch(`/edit-client/${clientId}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedClientData)
        })

            if(response.ok) {
                alert("Client Was Edited")
                document.querySelector(".editmodal-overlay")?.remove()
                window.location.reload()
            }

        } catch (error) {
            console.error(error)
            alert('Error: Unable to edit client') 
        }   
    })
}