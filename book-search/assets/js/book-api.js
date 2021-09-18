// dom element
const searchBtn = document.getElementById('book-seach');
const booksContainer = document.getElementById('books-container');
const searchFound = document.getElementById('search-found-no');
const errContainer = document.getElementById('error');

/**
 * book search event handler
 */
searchBtn.addEventListener('click', async() => {
    try {
        const searchText = document.getElementById('search-text');
        const bookName = searchText.value;
        booksContainer.innerHTML = '';
        errContainer.innerHTML = '';
        const url = `https://openlibrary.org/search.json?q=${bookName}`;
        const res = await fetch(url);
        const data = await res.json();
        const booksData = data.docs;
        searchFound.innerText = data.numFound;

        if (data.numFound !== 0) {
            booksData.forEach(book => {
                console.log(book);
                // create single book element
                const singleBookDiv = document.createElement('div');
                const classNames = ['col-lg-3', 'mb-4'];
                singleBookDiv.classList.add(...classNames);
                singleBookDiv.innerHTML = `
                    <div class="card">
                        <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="book image not found">
                        <div class="card-body">
                            <h5 class="card-title">${book.title}</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Author: ${book.author_name}</li>
                            <li class="list-group-item">First publish: ${book.first_publish_year}</li>
                        </ul>
                    </div>
                `;
                booksContainer.appendChild(singleBookDiv);
            });
        } else {
            errorHandler('Please search a valid book name!');
        }

        searchText.value = '';

    } catch (err) {
        errorHandler(err);
    }
});


/**
 * errorHandler
 * @param {String} errMessage 
 */
const errorHandler = (errMessage) => {
    errContainer.innerHTML = '';
    const createErrEle = document.createElement('div');
    const classNames = ['alert', 'alert-warning'];
    createErrEle.classList.add(...classNames);
    createErrEle.innerText = errMessage;
    errContainer.appendChild(createErrEle);
}