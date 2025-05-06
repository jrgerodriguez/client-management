import { displayAllClients } from "./getClients.js";
import { displayForm } from "./displayNewClientForm.js";
import { displayClientById } from "./getClientByID.js";

document.addEventListener("DOMContentLoaded", () => {
  displayAllClients()
  displayForm()
});
