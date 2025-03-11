console.log('is it working')


function loadCategories () {
    fetch ('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(recive => recive.json())
    .then(data => displayCategories(data.categories))
}

function displayCategories (category) {
    // get the container
    const categoryContainer = document.getElementById('category-container');
    // Loop operation on array of object
    for (let cate of category){
        // create Element
        const categoryDiv = document.createElement('div');
        // set innerHtml of element 
        categoryDiv.innerHTML = `
            <button onclick = "loadCategoryVideos(${cate.category_id})" class="bg-[#ececec] text-[#ff1e3c] font-semibold text-sm py-1 px-4 rounded-md hover:cursor-pointer hover:bg-[#ff1e3c] hover:text-white">${cate.category}</button>
        `;
        // Append the created element
        categoryContainer.append(categoryDiv);
    }
    
}

loadCategories()