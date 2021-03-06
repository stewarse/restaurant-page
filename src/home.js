import image from './homeImage.jpg'

export default function component() {
    const container = document.createElement('main')

    const pageTitle = document.createElement('h1')
    pageTitle.textContent = 'Bears, Burgers & Brews'
    pageTitle.style.width = '400px'
    pageTitle.style.margin = '0 auto'
    pageTitle.style.padding = '30px'

    const description = document.createElement('p')
    description.textContent = 'Welcome to Bears, Burgers, and Brews! The ONLY restaurant where you can enjoy delicious burgers and brews served to you by...BEARS! Don\'t worry, our Bears are trained and won\'t bite (just don\'t try to stiff them on the tips!'
    description.style.width = '600px'
    description.style.margin = '0 auto'
    description.style.paddingBottom = '30px'
    description.style.lineHeight = '1.5'
    description.style.fontSize = '18px'

    const myImage = new Image()
    myImage.src = image
    myImage.alt = "bartender pouring a beer"
    myImage.style.maxHeight = '600px'
    myImage.style.maxWidth = '900px'
    myImage.style.height = '80%'
    myImage.style.width = '80%'
    myImage.style.margin = '30px auto'
    myImage.style.display = 'block'


    container.appendChild(pageTitle)
    container.appendChild(description)
    container.appendChild(myImage)
    
    return container
}


