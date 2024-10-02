export {contactPage}

const container = document.querySelector("#content")

function contactPage() {
    container.textContent = ""
    addContact()
}

function addContact() {
    const contact = document.createElement("div")
    contact.classList.add("contact")

    const contactName = document.createElement("div")
    contactName.classList.add("contact-name")
    contactName.textContent = "John Restaurant"

    const contactInfo = document.createElement("div")
    contactInfo.classList.add("contact-info")
    contactInfo.textContent = "123-456-789"

    contact.appendChild(contactName)
    contact.appendChild(contactInfo)
    container.appendChild(contact)
}