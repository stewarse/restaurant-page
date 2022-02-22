// import CONTENT from "./index.js"
const CONTENT = document.getElementById('content')

export default function menu() {
    const menuContainer = document.createElement('main')
    
    const title = document.createElement('h1')
    title.textContent = 'Menu'
    

    //Set up a div to hold these?
    const beverages = document.createElement('h2')
    beverages.textContent = 'beverages'

    const grizzlyIPA = document.createElement('h3')
    grizzlyIPA.textContent = 'Grizzly IPA'

    const grizzlyDesc = document.createElement('p')
    grizzlyDesc.textContent = 'Full-bodied IPA using Mosaic and Citra hops'

    const grizzlyABV = document.createElement('p')
    grizzlyABV.textContent = '7.6%'

    grizzlyIPA.appendChild(grizzlyABV)
    grizzlyIPA.appendChild(grizzlyDesc)

    beverages.appendChild(grizzlyIPA)

    title.appendChild(beverages)

    menuContainer.appendChild(title)
    
    return menuContainer
}