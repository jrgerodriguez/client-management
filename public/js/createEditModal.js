export async function createEditModal(clientId) {

    let data = {}

    try {
        const response = await fetch(`/get-client/${clientId}`)
            if(response.ok) {
                data = await response.json()
            }
    } catch (error) {
        console.log(error)
    }

    console.log(data)

    const editModal = document.createElement("div")
    editModal.classList.add("editmodal-overlay")
    editModal.innerHTML = `
            <div class="edit-modal">
        <form action="/edit-client/${data._id}" method="POST" id="edit-client-form">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required value="${data.name}">

            <label for="address">Address</label>
            <input type="text" id="address" name="address" required value="${data.address}">

            <label for="city">City</label>
            <input type="text" id="city" name="city" required value="${data.city}">

            <label for="state">State</label>
            <select id="state" name="state" required>
                <option value="" disabled selected>-- Select --</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>

            <label for="zip_code">ZIP Code</label>
            <input type="text" id="zipcode" name="zip_code" required value="${data.zip_code}">

            <label for="phone">Phone</label>
            <input type="phone" id="phone" name="phone" required value="${data.phone}">

            <label for="email">Email</label>
            <input type="email" id="email" name="email" required value="${data.email}">

            <input type="submit" value="Edit Client" id="create-cliente-btn">

            <button class="edit-cancel" id="cancel-edit">Cancel</button>
        </form>
    </div>
    `
    document.body.appendChild(editModal)

    const editModalContent = document.querySelector(".edit-modal")

    editModal.addEventListener("click", (e) => {
        if(!editModalContent.contains(e.target)) {
            editModal.remove()
        }
    })

    document.querySelector("#cancel-edit").addEventListener("click", () => {
        editModal.remove()
    })
}