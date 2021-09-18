const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuot(data))
}

const displayQuot = quote => {
    const quoteElement = document.getElementById('quote-text');
    quoteElement.innerText = quote.quote;
}