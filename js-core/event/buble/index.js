document.getElementById('section').addEventListener('click', ()=>{
    console.log('Section as clicked');
});

document.getElementById('uls').addEventListener('click', (event)=>{
    console.log('Ul section as clicked');
    event.stopPropagation();
});

document.getElementById('second-item').addEventListener('click', (event)=>{
    console.log('Li second item as clicked');
    event.stopImmediatePropagation();
});