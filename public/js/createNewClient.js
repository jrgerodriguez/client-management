export async function createNewClient() {
    const form = document.querySelector("#create-client-form")
    form.addEventListener("submit", async function(e) {
        e.preventDefault()

        if (!form) return;

        const formData = new FormData(form)
        const data = Object.fromEntries(formData)

        try {
            const response = await fetch("/create-client", {
                method: "POST", 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            if(response.ok) {
                console.log("New Client Created Successfully")
                alert("New Client Created Successfully")
                window.location.reload();
            } else {
                alert("Unable to create new client")
            }
        } catch (error) {
            console.error("Error:", error);
        }
    })
}