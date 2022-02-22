export default function footer() {
    const attribution = document.createElement('a')
    attribution.href = 'https://www.freepik.com/photos/pattern'
    attribution.textContent = 'Pattern photo created by rawpixel.com - www.freepik.com'

    const footer = document.createElement('footer')
    footer.appendChild(attribution)

    return footer 
}