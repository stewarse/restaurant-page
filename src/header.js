
export function header() {
    const header = document.createElement('header')

    const nav = document.createElement('nav')

    const homeTab = document.createElement('div')
    homeTab.textContent = 'Home'
    homeTab.classList.add('nav-content')
    homeTab.id = 'home'

    const menuTab = document.createElement('div')
    menuTab.textContent = 'Menu'
    menuTab.classList.add('nav-content')
    menuTab.id = 'menu'

    const contactUsTab = document.createElement('div')
    contactUsTab.textContent = 'Contact Us'
    contactUsTab.classList.add('nav-content')
    contactUsTab.id = 'contact'

    nav.appendChild(homeTab)
    nav.appendChild(menuTab)
    nav.appendChild(contactUsTab)
    
    header.appendChild(nav)

    return header  
}

export function nav(){
    // alert('What is happening?')
}