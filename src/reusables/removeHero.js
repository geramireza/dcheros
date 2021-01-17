const removeHero = async function (hero) {
    const otherParams = { headers: { 'Content-Type': 'application/json; charset=UTF-8' }, body: JSON.stringify(hero), method: "DELETE" }
    return await fetch('http://localhost:3000/heros/' + hero.id, otherParams).catch((error) => console.log(error));

}

export default removeHero