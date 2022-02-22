import home from "./home.js"
import { header, nav } from "./header.js"
import menu from "./menu.js"
import './style.css'
import contact from "./contact-us.js"

const content = document.getElementById('content')

content.appendChild(header())

const navItems = document.querySelectorAll('.nav-content')

navItems.forEach((el) => el.addEventListener('click', updateDisplay))
//navItems.forEach(el => console.log(el))


function updateDisplay(e) {
    clearDisplay()

    let pageToLoad = e.target.id;
    
    switch (pageToLoad) {
        case "menu": content.appendChild(menu());
        break;
        case "home": content.appendChild(home());
        break;
        case "contact": content.appendChild(contact());
        break;
    }
}

function clearDisplay() {
    const main = document.querySelector('main')
    while(main.firstChild) {
        main.removeChild(main.lastChild)
    }
    main.parentElement.removeChild(main)
}

content.appendChild(home())
