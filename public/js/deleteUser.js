export async function deleteUser() {
    document.addEventListener("click", async function (e) {
        if (e.target.classList.contains("delete-client")) {
            e.preventDefault()

            const clientId = e.target.getAttribute("data-id")

            try {
                const response = await fetch(`/delete-client/${clientId}`, {
                    method: "DELETE",
                    header: {
                        "Content-type": "application/json",
                    },
                });

                if (response.ok) {
                    alert("Client Eliminated")
                    
                } else {
                    alert("Failed to eliminate client")
                }
            } catch (error) {
                console.error("Error:", error);
            }
        }
    })
}