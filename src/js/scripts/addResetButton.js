export const addResetButton = (element, resetFunction) => {
    const openTable = document.querySelector('.modal-content_open-table-button') 

    const { className } = element
    const resetButtonEl = document.querySelector(`.${className}_reset-button`)
    //create reset button, add styles
    const resetButton = document.createElement('button')
    resetButton.classList.add(`${className}_reset-button`)
    resetButton.innerHTML = 'Reset'

    //add event listeners to reset button
    resetButton.addEventListener('click', () => resetFunction())

    //append reset button to page
    !resetButtonEl && openTable.insertAdjacentElement('afterend', resetButton)
}
// /element.appendChild(resetButton)