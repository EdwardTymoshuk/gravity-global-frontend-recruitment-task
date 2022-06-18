export const getApiData = async () => {
    const settings = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }
    let url = 'https://jsonplaceholder.typicode.com/users'
    try {
        return await fetch(url, settings).then(res => res.json())
    } catch (err) {
         alert(`Somthing went wrong. Try later. ERROR: ${err.message}`)
    }
}