import { getApiData } from '../api/api.js'
import { removePreloader } from './preloader.js'

export const addTable = () => {

    //get elemnts from page
    const modalContent = document.querySelector('.modal-content')
    const tableElement = document.querySelector('.modal-content_table')
    const openTableButton = document.querySelector('.modal-content_open-table-button')

    //declarate a variables
    let apiData = ''

    //create table and add class
    const tableContainer = document.createElement('div')
    const table = document.createElement('table')

    tableContainer.classList.add('modal-content_table-container')
    table.classList.add('modal-content_table')

    //functions
    //set API data to table
    const setApiData = async () => {
        //get data from API
        apiData = await getApiData()

        const cropedTableData = apiData.map(obj => {
            return Object.keys(obj).
                filter((key) => key === 'name' || key === 'email' || key === 'address' || key === 'company').
                reduce((cur, key) => { return Object.assign(cur, { [key]: obj[key] }) }, {});
        })

        //create table head and body
        const tHead = document.createElement('thead')
        const tBody = document.createElement('tbody')

        //fill table head with API data
        Object.keys(apiData[0]).forEach(value => {
            if (value === 'name' || value === 'email' || value === 'address' || value === 'company') {
                let header = document.createElement('th');
                let textNode = document.createTextNode(value);
                header.appendChild(textNode);
                !document.getElementsByTagName('thead').length && (tHead.appendChild(header),
                    table.appendChild(tHead)
                )
            }
        })

        //fill table body with API data
        cropedTableData.map(value => {
            let row = document.createElement('tr')
            Object.values(value).map(text => {
                let cell = document.createElement('td');
                let textNode = document.createTextNode(typeof text === 'object' ?
                    !!text.zipcode ?
                        `${text.street} ${text.suite}, ${text.city}` :
                        `${text.name}` :
                    text)
                cell.appendChild(textNode);
                row.appendChild(cell);
            })
            !document.getElementsByTagName('tbody').length && (tBody.appendChild(row),
                table.appendChild(tBody))
        });

        //add table to page
        !tableElement &&
        (tableContainer.appendChild(table),
        modalContent.appendChild(tableContainer))

        openTableButton.disabled = true
        //remove preloader
        removePreloader()
    }
    setApiData()
}
