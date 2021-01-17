const addHero = async function (hero) {
    const otherParams = { headers: { 'Content-Type': 'application/json; charset=UTF-8' }, body: JSON.stringify(hero), method: "POST" }
    return await fetch('http://localhost:3000/heros', otherParams).catch((error) => console.log(error));

}

export default addHero