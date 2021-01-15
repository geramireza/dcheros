const editHero = async function(hero){
    const otherParams = {headers:{'Content-Type':'application/json; charset=UTF-8'},body:JSON.stringify(hero),method:'PATCH'}
    return await fetch('http://localhost:3000/dcHeros/' + hero.id,otherParams)
}

export default editHero