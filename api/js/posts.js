/**
 * loadPosts
 */
function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => displayPosts(posts))
}
loadPosts();

/**
 * displayPosts
 * @param {Array} posts 
 */
function displayPosts(posts) {
    const postContainer = document.getElementById('post-list');
    for (const post of posts) {
        const newPost = document.createElement('div');
        newPost.classList.add('mt-6');
        newPost.innerHTML = `
            <div class="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                <div class="flex items-center justify-between">
                    <span class="font-light text-gray-600">Jun 1, 2021</span>
                    <a href="#" class="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500">Laravel</a>
                </div>
                <div class="mt-2">
                    <a href="#" class="text-2xl font-bold text-gray-700 hover:underline">${post.title}</a>
                    <p class="mt-2 text-gray-600">${post.body}</p>
                </div>
                <div class="flex items-center justify-between mt-4">
                    <div>
                        <a href="#" class="flex items-center"><img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80" alt="avatar" class="hidden object-cover w-10 h-10 mr-1 rounded-full sm:block">
                            <h1 class="font-bold text-gray-700 hover:underline">Helal Uddin</h1>
                        </a>
                    </div>
                </div>
            </div>
        `;
        postContainer.appendChild(newPost);
    }
}


function addPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'Web Development course',
                body: 'This is a webdevelopement course will start',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
}