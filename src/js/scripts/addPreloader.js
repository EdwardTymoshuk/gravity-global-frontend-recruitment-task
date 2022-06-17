const addPreloader = (element) => {
    const preloader = document.createElement('div')
    const image = document.createElement('img')
    image.src = '../../../images/loading.svg'
    preloader.classList.add('preloader')
    preloader.appendChild(image)
    element.appendChild(preloader)
}

export default addPreloader