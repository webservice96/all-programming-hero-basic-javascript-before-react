const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries();
const displayCountries = (data) => {
    const countryContainer = document.getElementById('country-container');
    const classNames = ['bg-white', 'shadow', 'flex', 'justify-items-center', 'p-1'];
    data.forEach(country => {
        const newCountryEl = document.createElement('div');
        newCountryEl.classList.add(...classNames);
        newCountryEl.innerHTML = `
            <div class="country-flag w-1/4 mr-2">
                <img src="${country.flag}" alt="Flag not found!">
            </div>
            <div class="country-content">
                <h1 class="text-xl">${country.name}</h1>
                <p>${country.capital}</p>
                <div class="p-2">
                    <div class="inline-flex items-center bg-white leading-none text-purple-600 rounded-full p-2 shadow text-teal text-sm">
                        <button onclick="countryByName('${country.name}')"><span class="inline-flex bg-indigo-600 text-white rounded-full h-6 px-3 justify-center items-center">See More</span></button>
                        <span class="inline-flex px-2">For more details</span>
                    </div>
                </div>
            </div>
        `;
        countryContainer.appendChild(newCountryEl);
    });
}


/**
 * 
 * @param {String} name 
 */
const countryByName = (name) => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = (detail) => {
    const details = document.getElementById('details');
    const jsonToString = JSON.stringify(detail);
    details.innerHTML = `<h2 class="text-3xl">Full json data</h2> <br/> ${jsonToString}`;
}