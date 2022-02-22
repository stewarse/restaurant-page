export default function contact() {

    const container = document.createElement('main')

    const contactDiv = document.createElement('div')
    contactDiv.id = "contact-header-div"
    const contactTitle = document.createElement('h1')
    contactTitle.textContent = 'Contact Us'
    contactTitle.id = 'contact-title'
    const contactPhoneNumber = document.createElement('a')
    contactPhoneNumber.textContent = '(555) 555-5555'
    contactPhoneNumber.href = 'tel:5555555555'
    const contactDescription = document.createElement('p')
    contactDescription.id = 'contact-description'
    contactDescription.textContent = 'Please complete the below form to contact us and we will get back to you as soon as we can. To contact us directly call '



    const form = document.createElement('form')
    
    const nameInput = document.createElement('input')
    nameInput.type = "text"
    const nameLabel = document.createElement('label')
    nameLabel.setAttribute("for", "name-input")
    nameLabel.textContent = "Name"

    const emailInput = document.createElement('input')
    emailInput.type = 'text'
    const emailLabel = document.createElement('label')
    emailLabel.setAttribute('for','emailInput')
    emailLabel.textContent = 'Email'

    const phoneNumberInput = document.createElement('input')
    phoneNumberInput.type = 'text'
    const phoneNumberLabel = document.createElement('label')
    phoneNumberLabel.setAttribute('for','phoneNumberInput')
    phoneNumberLabel.textContent = 'Phone Number'

    const messageInput = document.createElement('input')
    messageInput.type = 'text'
    const messageLabel = document.createElement('label')
    messageLabel.setAttribute('for','messageInput')
    messageLabel.textContent = 'Message'

    const btn = document.createElement('button')
    btn.type = 'submit'
    btn.textContent = 'Send'

    contactDiv.appendChild(contactTitle)
    contactDescription.appendChild(contactPhoneNumber)
    contactDiv.appendChild(contactDescription)

    form.appendChild(nameLabel)
    form.appendChild(nameInput)
    form.appendChild(emailLabel)
    form.appendChild(emailInput)
    form.appendChild(phoneNumberLabel)
    form.appendChild(phoneNumberInput)
    form.appendChild(messageLabel)
    form.appendChild(messageInput)
    form.appendChild(btn)

    container.appendChild(contactDiv)
    container.appendChild(form)

    return container
}