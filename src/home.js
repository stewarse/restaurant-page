// import CONTENT from "./index.js"
//const CONTENT = document.getElementById('content')

export default function component() {
    const container = document.createElement('main')

    const pageTitle = document.createElement('h1')
    pageTitle.textContent = 'Bears, Burgers & Brews'

    const description = document.createElement('p')
    description.textContent = 'Welcome to our poop house! Enjoy our delicious burgers and massive Tap List served to you by...BEARS!'

    const image = document.createElement('img')
    image.src = "/src/bear-beer.jpg" 
    image.alt= "sitting bear drinking a beer"

    container.appendChild(pageTitle)
    container.appendChild(description)
    container.appendChild(image)
    
    return container
}


