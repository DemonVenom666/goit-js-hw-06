const categoriesList = document.querySelectorAll('.item');
console.log(`Number of categoriesList: ${categoriesList.length}`)

categoriesList.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`)
});