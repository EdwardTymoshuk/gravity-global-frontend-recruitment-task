//add preloader to page
export const addPreloader = (element) => {
    const preloader = document.createElement('div')
    const image = document.createElement('img')
    
    image.src = '../../../images/loading.svg'
    image.alt="Preloader"
    preloader.classList.add('preloader')

    preloader.appendChild(image)
    element.appendChild(preloader)
}

//remove preloader from page
export const removePreloader = () => {
    const preloaderEl = document.querySelector('.preloader')
    preloaderEl.remove()
}
