import {getApiData} from '../api/api.js'

//get elemnts from page
const dataButton = document.querySelector('.modal-content_data-button')

//create table and add class
const table = document.createElement('table')
table.classList.add('modal-content_table')

//functions
//iterate object
const iterateObject = (obj) => {
    let result = ''
    const getProp = (subObj) => {
        if (typeof subObj === 'string') {return subObj} 
        for (const prop in subObj) {
            if (typeof (subObj[prop]) === 'object') {
                getProp(subObj[prop])
            } else {
                result +=`${prop}:${subObj[prop]}. ` 
            }
    }
}
    getProp(obj)
    return result
}

//add event listeners
dataButton.addEventListener('click', async () => {
    const apiData = await getApiData()

    const tHead = document.createElement('thead')
    const tBody = document.createElement('tbody')
    
        Object.keys(apiData[0]).forEach(value => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(value);
        header.appendChild(textNode);
        !document.getElementsByTagName('thead').length && (tHead.appendChild(header),
        table.appendChild(tHead)
)
        })


        apiData.map(value => {
        let row = document.createElement('tr')
        Object.values(value).map(text => {
            let cell = document.createElement('td');
            let textNode = document.createTextNode(typeof text === 'object' ? iterateObject(text) : text)
            cell.appendChild(textNode);
            row.appendChild(cell);
        })
        !document.getElementsByTagName('tbody').length && (tBody.appendChild(row),
        table.appendChild(tBody))
    });

    modalContent.appendChild(table)
    modalContainer.classList.add('tableAlign')
})