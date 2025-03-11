const loadVideos = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(recive => recive.json())
        .then(data => displayVideos(data.videos));
}

const displayVideos = (videos) => {
    // get the element 
    const videosContainer = document.getElementById('video-container');
    // make a loop to get the video. making a forEach loop:
    videos.forEach(element => {
        console.log(element);
        // create an element :
        const videoCard = document.createElement("div");
        // set innerHtml
        videoCard.innerHTML =`
            <div class="card bg-base-100 shadow-sm">
                <figure>
                    <img
                        src="${element.thumbnail}" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">${element.title}</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    
                </div>
            </div>
        `;
        // append element
        videosContainer.append(videoCard);
    });
}

loadVideos()

