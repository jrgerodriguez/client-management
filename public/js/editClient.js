import { createEditModal } from "./createEditModal.js"

export async function editClient() {
    document.addEventListener("click", (e) => {
        if(e.target.classList.contains("edit-client")) {
            e.preventDefault()

            const clientId = e.target.getAttribute("data-id")

            createEditModal(clientId)
        }
    })
}