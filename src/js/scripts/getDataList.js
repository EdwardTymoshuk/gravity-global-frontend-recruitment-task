import {getApiData} from '../api/api.js'

//get elemnts from page
const openTable = document.querySelector('.modal-content_open-table-button')


//create table and add class
const tableContainer = document.createElement('div')
const table = document.createElement('table')

tableContainer.classList.add('modal-content_table-container')
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
openTable.addEventListener('click', async () => {
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

    tableContainer.appendChild(table)
    modalContent.appendChild(tableContainer)
    modalContainer.classList.add('tableAlign')
})