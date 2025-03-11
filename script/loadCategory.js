const loadCategoryVideos = (id) => {
    console.log(id);
    const url = ` https://openapi.programming-hero.com/api/phero-tube/category/${id} `
    
    fetch(url)
    .then(recive => recive.json())
    .then(data => displayVideos(data.category))
}