import home from "./home.js"
import { header } from "./header.js"
import menu from "./menu.js"
import './style.css'
import contact from "./contact-us.js"
import footer from "./footer.js"

const content = document.getElementById('content')
let pageToLoad = "home"

content.appendChild(header())

const navItems = document.querySelectorAll('.nav-content')

navItems.forEach((el) => el.addEventListener('click', updateDisplay))

function updateDisplay(e) {
    if(e){
        clearDisplay()

        pageToLoad = e.target.id;
    }

    switch (pageToLoad) {
        case "home": content.appendChild(home());
        break;
        case "menu": content.appendChild(menu());
        break;
        case "contact": content.appendChild(contact());
        break;
    }

    content.appendChild(footer())

}

function clearDisplay() {
    const main = document.querySelector('main')
    while(main.firstChild) {
        main.removeChild(main.lastChild)
    }

    while(content.childNodes.length > 1){
        content.removeChild(content.lastChild)
    }
}

updateDisplay();