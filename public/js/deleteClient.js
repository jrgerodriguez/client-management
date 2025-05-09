//Esta funcion solo llama al modal

import { createDeleteModal } from "./createDeleteModal.js"

export async function deleteClient() {
    document.addEventListener("click", async function (e) {
        if (e.target.classList.contains("delete-client")) {
            e.preventDefault()

            const clientId = e.target.getAttribute("data-id")

            createDeleteModal(clientId)
        }
    })
}