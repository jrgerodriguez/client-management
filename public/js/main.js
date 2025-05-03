document.addEventListener("DOMContentLoaded", () => {
    const existingClientsOption = document.querySelector("#existing-clients")
    const addNewClientOption = document.querySelector("#add-new-client")
    const contentTitle = document.querySelector("#content-title")
    
    existingClientsOption.addEventListener("click", function(e) {
        e.preventDefault()
    
        contentTitle.textContent = "Current Clients"
    })
    
    addNewClientOption.addEventListener("click", function(e) {
        e.preventDefault()
    
        contentTitle.textContent = "Add New Client"
    })
});