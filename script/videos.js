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
            <div class="card bg-base-100">
                <figure class="relative">
                    <img class="w-full h-[150px] object-cover" src="${element.thumbnail}" />
                    <span class="absolute bottom-2 right-2 text-sm bg-black px-2 rounded text-white">3hrs 56 min
                        ago</span>
                </figure>
                <div class=" flex gap-3 px-0 py-4">
                    <div class="profiel">
                        <div class="avatar">
                            <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
                                <img src="${element.authors[0].profile_picture}" />
                            </div>
                        </div>
                    </div>
                    <div class="intro">
                        <h2 class="text-sm font-semibold">${element.title}</h2>
                        <p class="text-sm text-gray-400 flex items-center gap-1">${element.authors[0].profile_name} <img class="w-4 h-4" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt=""></p>
                        <p class="text-sm text-gray-400">${element.others.views}</p>
                    </div>

                </div>
            </div>
        `;
        // append element
        videosContainer.append(videoCard);
    });
}

loadVideos()

