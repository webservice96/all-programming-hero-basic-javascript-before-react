const getLeagues = async() => {
    const url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

const leagues = [];
const result = getLeagues().then(response => {
    for (const res of response.leagues) {
        leagues.push(res);
    }
});
// console.log(leagues);