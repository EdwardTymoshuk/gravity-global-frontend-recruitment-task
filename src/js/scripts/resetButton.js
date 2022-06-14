//get elements from page
const modalContent = document.querySelector('.modal-content')

//create reset button, add styles
const resetButton = document.createElement('button')
resetButton.classList.add('modal-content_reset-button')
resetButton.innerHTML = 'Reset'

//add event listeners to reset button
resetButton.addEventListener('click', () => resetClicksCount())

//append reset button to page
modalContent.appendChild(resetButton)