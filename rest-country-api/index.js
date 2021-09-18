const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = (countries) => {
    const coubtryContainer = document.querySelector('.countries');
    const countriesHtml = countries.map(country => getCountryHtml(country));
    coubtryContainer.innerHTML = countriesHtml.join(' ');
}

const getCountryHtml = (country) => {
    const { name, capital, flag } = country;
    return `
        <div class="country">
            <h2>${name}</h2>
            <h4>Capital: ${capital}</h4>
            <img src="${flag}" alt="Flag not found" />
        </div>
    `;
}

loadCountries();