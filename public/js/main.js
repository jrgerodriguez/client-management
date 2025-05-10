import { displayAllClients } from "./getClients.js";
import { displayForm } from "./displayNewClientForm.js";

document.addEventListener("DOMContentLoaded", () => {
  displayAllClients()
  displayForm()
});
