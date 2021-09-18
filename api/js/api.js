/**
 * load Data
 */
function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => console.log(data))
}


/**
 * loadUsers
 */
function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => displayUsers(users))
}

/**
 * displayUsers
 * @param {Array} users 
 */
function displayUsers(users) {
    const ul = document.getElementById('user');
    for (const user of users) {
        const li = document.createElement('li');
        li.innerText = `Name: ${user.name} | Email: ${user.email}`;
        ul.appendChild(li);
    }
}


/**
 * loadPosts
 */
function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => console.log(posts))
}