const getHeros = async function () {
    const otherParams = { headers: { 'Content-Type': 'application/json; charset=UTF-8' }, method: "GET" }
    return await fetch('http://localhost:3000/dcHeros', otherParams)
        .then(data => data.json())
        .then(data => data).catch(error => console.log(error))
}

export default getHeros