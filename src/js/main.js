//get page elements
const articleButton = document.querySelector('.container_aside_button')
const modal = document.querySelector(".modal-window")
const closeButton = document.querySelector(".close-button")

const toggleModal = () => {
    modal.classList.toggle("show-modal")
}

const windowOnClick = (e) => {
    if (e.target === modal) {
        toggleModal()
    }
}

articleButton.addEventListener("click", toggleModal)
closeButton.addEventListener("click", toggleModal)
window.addEventListener("click", windowOnClick)

// //add event listeners 
// articleButton.addEventListener( e => {
//     e.preventDefault()
//     openModal()
// })

// //open modal function
// const openModal = () => {

// }