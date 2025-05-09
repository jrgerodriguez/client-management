//Esta funcion crea el model y ejecuta confirmClientDelete al dar click en Yes, Delete
import { confirmClientDelete } from "./confirmClientDelete.js";

export function createDeleteModal(clientId) {
    const modal = document.createElement("div")
    modal.classList.add("modal-overlay")
    modal.innerHTML = `
    <div class="modal">
      <p>Are you sure you want to delete this client?</p>
      <div class="modal-buttons">
        <button class="btn-confirm" id="confirm-delete">Yes, Delete</button>
        <button class="btn-cancel" id="cancel-delete">Cancel</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  const modalContent = document.querySelector(".modal")
  
  modal.addEventListener("click", (e) => {
    // Si se hace clic fuera del contenido del modal (o sea, en el overlay)
    if(!modalContent.contains(e.target)) {
      modal.remove()
    }
  })

  document.querySelector("#cancel-delete").addEventListener("click", () => {
    modal.remove()
  })

  document.querySelector("#confirm-delete").addEventListener("click", () => {
    modal.remove()
    confirmClientDelete(clientId);
  })
}