// import Data from './data.csv';

export default function menu() {
    const menuContainer = document.createElement('main')
    menuContainer.style.display = 'flex'
    menuContainer.style.flexFlow = 'column wrap'
    menuContainer.style.maxHeight = '100vh'

    const title = document.createElement('h1')
    title.textContent = 'Menu'


    //Set up a div to hold these
    const beverages = document.createElement('div')
    const beverageTitle = document.createElement('h1')
    beverageTitle.textContent = 'Beverages'
    beverageTitle.classList.add('menu-header')
    beverages.classList.add('menu-section')
    beverages.id = 'beverages'

    beverages.appendChild(beverageTitle)

    const appetizers = document.createElement('div')
    const appetizerTitle = document.createElement('h1')
    appetizerTitle.textContent = 'Appetizer'
    appetizerTitle.classList.add('menu-header')
    appetizers.classList.add('menu-section')
    appetizers.id = 'appetizers'

    appetizers.appendChild(appetizerTitle)

    const dinner = document.createElement('div')
    const dinnerTitle = document.createElement('h1')
    dinnerTitle.textContent = 'Dinner'
    dinnerTitle.classList.add('menu-header')
    dinner.classList.add('menu-section')
    dinner.id = 'dinner'

    dinner.appendChild(dinnerTitle)

    beverages.appendChild(createMenuItem('beverage', 'Panda Bear Sour','Star Fruit Sour', 6.5, beverages.childNodes.length, 4.8))

    beverages.appendChild(createMenuItem('beverage', 'Sun Bear Sour','Passionfruit infused sour', 6.5, beverages.childNodes.length, 7))

    beverages.appendChild(createMenuItem('beverage', 'Grizzly IPA','Full-bodied IPA', 6.5, beverages.childNodes.length, 7))

    beverages.appendChild(createMenuItem('beverage', 'Black Bear Stout','Thick stout served cold', 7.5, beverages.childNodes.length,5))

    beverages.appendChild(createMenuItem('beverage', 'Polar Bear Porter','Delicious chocoloatey oatey Porter', 7, beverages.childNodes.length, 5.5))

    beverages.appendChild(createMenuItem('beverage', 'Cinnamon Bear Saison','Belgian Style Saison', 5.5, beverages.childNodes.length, 5.2))

    beverages.appendChild(createMenuItem('beverage', 'Kodiak IIPA','Sweet and strong IIPA', 8, beverages.childNodes.length, 8.8))

    appetizers.appendChild(createMenuItem('appetizers', 'Mozzarella Sticks', 'Served with home-made Marinara Sauce',8, appetizers.childNodes.length,))

    appetizers.appendChild(createMenuItem('appetizers', 'Pretzel Bites', 'Soft pretzel bites served with spicy cheese spread',9.5, appetizers.childNodes.length,))

    dinner.appendChild(createMenuItem('dinner', 'Honey Smacked Chicken Burger', 'Grilled Chicken Breast cooked in honey sauce', 13, dinner.childNodes.length))

    dinner.appendChild(createMenuItem('dinner', 'Fresh Caught Salmon Burger', 'Grilled salmon fillet caught by our servers daily', 15, dinner.childNodes.length))

    dinner.appendChild(createMenuItem('dinner', 'Big Bear BBQ Burger', 'BBQ burger served with swiss cheese and onion straws', 12, dinner.childNodes.length))

    
    menuContainer.appendChild(beverages)
    menuContainer.appendChild(appetizers)
    menuContainer.appendChild(dinner)

    return menuContainer
}

function createMenuItem(category,title,description,price,count,abv){
    const div = document.createElement('div');
    const titleEl = document.createElement('h3');
    titleEl.textContent = title

    const descriptionEl = document.createElement('p')
    descriptionEl.textContent = description
    descriptionEl.classList.add('description')

    const priceEl = document.createElement('p')
    priceEl.textContent = `$${price}`

    div.appendChild(titleEl)

    if(category === 'beverage'){
        const abvEl = document.createElement('abv')
        abvEl.textContent = `${abv}%`
        abvEl.id = `beverage-${count}`
        abvEl.classList.add('abv')
        div.appendChild(abvEl)

    }

    div.appendChild(descriptionEl)
    div.appendChild(priceEl)

    div.classList.add('menu-item')

    return div
}