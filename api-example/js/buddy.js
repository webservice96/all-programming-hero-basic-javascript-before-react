const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=8')
        .then(res => res.json())
        .then(data => displayBuddies(data))
}
loadBuddies();


/**
 * displayBuddies
 * @param {Array | Object} data 
 */
const displayBuddies = data => {
    const buddies = data.results;
    const buddyContainer = document.getElementById('buddy-container');
    for (const buddy of buddies) {
        const singleBuddy = document.createElement('div');
        const classNames = ['bg-white', 'w-full', 'flex', 'items-center', 'p-2', 'rounded-xl', 'shadow', 'border'];
        singleBuddy.classList.add(...classNames);
        singleBuddy.innerHTML = `
            <div class="flex items-center space-x-4">
                <img src="${buddy.picture.medium}" alt="My profile" class="w-16 h-16 rounded-full">
            </div>
            <div class="flex-grow p-3">
                <div class="font-semibold text-gray-700">
                    ${buddy.name.title}, ${buddy.name.first} ${buddy.name.last}
                </div>
                <div class="text-sm text-gray-500">
                    ${buddy.email}
                </div>
            </div>
            <div class="p-2">
                <img src="${buddy.picture.thumbnail}" alt="My profile" class="w-4 h-4 rounded-full order-1">
            </div>`;
        buddyContainer.appendChild(singleBuddy);
    }
}