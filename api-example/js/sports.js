/**
 * allLeagues
 * get all league
 */
const fetchLeagues = async() => {
    const url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayAllLeague(data.leagues);
    } catch (err) {
        console.log(err);
    }
}
fetchLeagues();

/**
 * displayLeague
 * @param {Objects} leagues 
 */
const displayAllLeague = (leagues) => {
    const leagueContainer = document.getElementById('league-container');
    leagues.forEach(league => {
        const leagueSingleDiv = document.createElement('div');
        const classNames = ['xl:w-1/3', 'md:w-1/2', 'p-4'];
        leagueSingleDiv.classList.add(...classNames);
        leagueSingleDiv.innerHTML = `
            <div class="border border-gray-300 p-6 rounded-lg">
                <div class="w-40 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <span class="font-bold text-sm ">
                        ${league.strSport}
                    </span>
                </div>
                <h2 class="text-lg  font-medium title-font mb-2">${league.strLeague}</h2>
                <p class="leading-relaxed text-base">
                    ${league.strLeagueAlternate}
                </p>

                <div class="text-center mt-2 leading-none flex justify-between w-full">
                    <span class=" mr-3 inline-flex items-center leading-none text-sm  py-1 ">
                        <svg class=" fill-current w-4 h-4 mr-2 text-blue-500"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path
                                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
                        </svg>
                        ${league.idLeague}
                    </span>
                    
                </div>
            </div>
        `;
        leagueContainer.appendChild(leagueSingleDiv);
    });
}


/* dom elements */
const cricket = document.getElementById('cricket');
const footbal = document.getElementById('footbal');
const basketball = document.getElementById('basketball');
const soccer = document.getElementById('soccer');


/**
 * get all cricket leagues
 */
cricket.addEventListener('click', async() => {
    const url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
    try {
        const res = await fetch(url);
        const data = await res.json();
        const crickets = data.leagues;
        const matchedCricket = [];
        for (const cricket of crickets) {
            const leagueType = cricket.strSport;
            if (leagueType.indexOf('Cricket') != -1) {
                matchedCricket.push(cricket);
            }
        }
        console.log('Hello Cricket');
        console.log(matchedCricket);
    } catch (err) {
        console.log(err);
    }
});


/**
 * get all football leagues
 */
footbal.addEventListener('click', async() => {
    const url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
    try {
        const res = await fetch(url);
        const data = await res.json();
        const footbals = data.leagues;
        const matchedFootbals = [];
        for (const footbalLeague of footbals) {
            const leagueType = footbalLeague.strSport;
            if (leagueType.indexOf('Football') != -1) {
                matchedFootbals.push(footbalLeague);
            }
        }
        console.log('Hello Football');
        console.log(matchedFootbals);
    } catch (err) {
        console.log(err);
    }
});


/**
 * get all Basketball leagues
 */
basketball.addEventListener('click', async() => {
    const url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
    try {
        const res = await fetch(url);
        const data = await res.json();
        const basketballs = data.leagues;
        const matchedbasketball = [];
        for (const basketball of basketballs) {
            const leagueType = basketball.strSport;
            if (leagueType.indexOf('Basketball') != -1) {
                matchedbasketball.push(basketball);
            }
        }
        console.log('Hello basketball');
        console.log(matchedbasketball);
    } catch (err) {
        console.log(err);
    }
});