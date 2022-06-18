import { addResetButton } from "./addResetButton.js"
import { addTable } from "./addTable.js"
import { addPreloader } from "./preloader.js"

//get page elements
const articleButton = document.querySelector('.main-container_aside_button')
const modal = document.querySelector(".modal-window")
const closeButton = document.querySelector(".modal-content_close-button")
const modalContentP = document.querySelector('.modal-container p')
const modalContent = document.querySelector('.modal-content')
const openTable = document.querySelector('.modal-content_open-table-button')

//variables declaration
let clicksCount = !!localStorage.getItem('clicksCount') ? localStorage.getItem('clicksCount') : 0

//functions
//set clicks count
const setClicksCount = () => {
    clicksCount++
    localStorage.setItem('clicksCount', clicksCount)
}

//get clicks count
const getClicksCount = () => {
    let clicksCount = localStorage.getItem('clicksCount')
    return clicksCount
}

//reset clicks count
const resetClicksCount = () => {
    localStorage.removeItem('clicksCount')
    window.location.reload()
}

//display number of clicks
const displayClicksCount = () => {
    modalContentP.innerHTML = `You have clicked ${getClicksCount()} times to related button.`
}

//toggle modal vindow 
const toggleModal = () => {
    modal.classList.toggle("show-modal")
}

//close modal window by clicking outside of it
const windowOnClick = (e) => {
    if (e.target === modal) {
        toggleModal()
    }
}

//add event listeners
articleButton.addEventListener("click", () => {
    setClicksCount(),
        displayClicksCount(),
        toggleModal(),
    getClicksCount() >= 5 && addResetButton(modalContent, resetClicksCount)
})
closeButton.addEventListener("click", toggleModal)
window.addEventListener("click", windowOnClick)
openTable.addEventListener("click", () => {
    (addPreloader(modalContent), addTable())
})