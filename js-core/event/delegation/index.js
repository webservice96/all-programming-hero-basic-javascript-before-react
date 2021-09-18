/* list container ul */
const listcontainer = document.getElementById("uls");
/* list item */
const uls = document.getElementsByClassName('item');

/* using for loop */
for(const li of uls){
    const parent = document.getElementById("uls");
    /* way 1 */
    li.addEventListener('click', function(event){
        /* way 1 */
        // parent.removeChild(li);
        /* way 2 */
        // event.target.parentNode.removeChild(event.target);
    });
}

/* standard way: using bubble system */
listcontainer.addEventListener('click', (event)=>{
    event.target.parentNode.removeChild(event.target);
});


/* add new list item */
document.getElementById("add-btn").addEventListener('click', ()=>{
    const newli = document.createElement('li');
    newli.innerText = "New list item";
    newli.setAttribute('class', 'item p-4 hover:bg-gray-50 cursor-pointer');
    listcontainer.appendChild(newli);
});