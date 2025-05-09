//Esta funcion hace el fetch para borrar al cliente

export async function confirmClientDelete(clientId) {
  try {
    const response = await fetch(`/delete-client/${clientId}`, {
      method: "DELETE",
      header: {
        "Content-type": "application/json",
      },
    });

    if (response.ok) {
      alert("Client Eliminated");
      window.location.reload();
    } else {
      alert("Failed to eliminate client");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
