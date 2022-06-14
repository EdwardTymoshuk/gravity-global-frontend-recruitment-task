//get page elements
const articleButton = document.querySelector('.container_aside_button')
const modal = document.querySelector(".modal-window")
const closeButton = document.querySelector(".modal-content_close-button")
const modalContentP = document.querySelector('.modal-container p')
const resetButtonEl = document.querySelector('.modal-content_reset-button')
const modalContainer = document.querySelector('.modal-container')


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
    toggleModal()
   
    getClicksCount() > 5 ? !!resetButton && !!resetButton.classList.add('visible') : !!resetButton && !!resetButton.classList.remove('visible')
})
closeButton.addEventListener("click", toggleModal)
window.addEventListener("click", windowOnClick)