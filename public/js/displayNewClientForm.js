export async function displayForm() {
    const contentTitle = document.querySelector("#content-title");
    const addNewClientOption = document.querySelector("#add-new-client");
    addNewClientOption.addEventListener("click", (e) => {
        e.preventDefault();
    
        contentTitle.textContent = "Add New Client";
        content.innerHTML = "";
    });
}