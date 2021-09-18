const seachFood = async() => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';

    /* get food data */
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayFood(data.meals);
}

const displayFood = (foods) => {
    const searchResult = document.getElementById('search-result');
    // clear prvius search result
    searchResult.textContent = '';
    if (foods == null) {
        const errorCont = document.createElement('div');
        const classNames = ['alert', 'alert-warning', 'ms-2'];
        errorCont.classList.add(...classNames);
        errorCont.innerHTML = `
            Please search a valid food name!
        `;
        searchResult.appendChild(errorCont);
    }
    if (foods != null) {
        foods.forEach(food => {
            console.log();
            const foodCol = document.createElement('div');
            foodCol.classList.add('col');
            foodCol.innerHTML = `
            <div class="card">
                <img src="${food.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${food.strMeal}</h5>
                    <p class="card-text">${food.strInstructions.slice(0,150)}</p>
                    <button onclick="getFoodId(${food.idMeal})" class="btn btn-primary">Check Details</button>
                </div>
            </div>
        `;
            searchResult.appendChild(foodCol);
        });
    }
}

const getFoodId = async foodId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`;
    const res = await fetch(url);
    const data = await res.json();
    disPLayFoodDetails(data.meals[0]);
}

const disPLayFoodDetails = (details) => {
    console.log(details);
    const resultContainer = document.getElementById('result-container');
    // clear previus data
    resultContainer.textContent = '';
    const detailsCol = document.createElement('div');
    const classNames = ['card', 'mt-5', 'mb-3'];
    detailsCol.classList.add(...classNames);
    detailsCol.innerHTML = `
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${details.strMealThumb}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${details.strMeal}</h5>
                    <p class="card-text">${details.strInstructions}</p>
                    <a href="${details.strYoutube}" target="_blank" class="btn btn-primary">Check Live</a>
                </div>
            </div>
        </div>
    `;
    resultContainer.append(detailsCol);
}