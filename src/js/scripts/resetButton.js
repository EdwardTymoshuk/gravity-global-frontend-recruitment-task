//get elements from page
const modalContent = document.querySelector('.modal-container_content')

//create reset button, add styles
const resetButton = document.createElement('button')
resetButton.classList.add('reset-button')
resetButton.innerHTML = 'Reset'

//add event listeners to reset button
resetButton.addEventListener('click', () => resetClicksCount())

//append reset button to page
modalContent.appendChild(resetButton)