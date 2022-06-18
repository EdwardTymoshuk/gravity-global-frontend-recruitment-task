import { getApiData } from '../api/api.js'
import { iterateObject } from '../common/common.js'
import { removePreloader } from './preloader.js'

export const addTable = () => {

    //get elemnts from page
    const modalContainer = document.querySelector('.modal-container')
    const modalContent = document.querySelector('.modal-content')

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

        //create table head and body
        const tHead = document.createElement('thead')
        const tBody = document.createElement('tbody')

        //fill table head with API data
        Object.keys(apiData[0]).forEach(value => {
            let header = document.createElement('th');
            let textNode = document.createTextNode(value);
            header.appendChild(textNode);
            !document.getElementsByTagName('thead').length && (tHead.appendChild(header),
                table.appendChild(tHead)
            )
        })

        //fill table body with API data
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

        //add table to page
        tableContainer.appendChild(table)
        modalContent.appendChild(tableContainer)
        modalContainer.classList.add('tableAlign')

        //remove preloader
        removePreloader()
    }
    setApiData()
}
