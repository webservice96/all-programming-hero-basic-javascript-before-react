/**
 * alert api
 */
function alertMe() {
    alert(
        `Hello Alert`
    );
}


/**
 * confirm api
 */
const confirmMe = () => {
    const res = confirm('Are you sure?');
    if (true == res) {
        alert('Yes i am going to us');
    } else {
        alert('You have lost your opertunaty');
    }
}


/**
 * promt api
 */
const addName = () => {
    const res = prompt('You sure! You want to delete?');
    if ('delete' === res) {
        alert('Deleted successfullly!');
    } else {
        alert('Your deletion is failed!');
    }
}

//  location
const reloadPage = () => {
    location.reload();
}