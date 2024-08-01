window.addEventListener("load", function (event) {

    const searchBar = this.document.getElementById('searchInput');
    const searchBarForm = this.document.getElementById('searchBarForm')

    searchBarForm.addEventListener('submit', function (event) {
        event.preventDefault();

        search(searchBar.value);

    });

});


async function search(searchString) {

    const searchResult = await getSearch(searchString);
    console.log('searchResult',searchResult);

    const mainArtist = searchResult.data[0].artist;
    const tracks = searchResult.data.filter((element) => element.type === "track");

    console.log('mainArtist',mainArtist);
    console.log('tracks',tracks);

    let songsHtml = '';

    for(let i = 0; i < 5; i++){
        songsHtml += `
            <div class="song d-flex justify-content-between spotify-link" data-type="album" data-id="${tracks[i].album.id}">
                <div class="song-details d-flex gap-3">
                    <img src="${tracks[i].album.cover}" class="img-fluid"
                        style="height: 3em;">
                    <div class="song-details-text d-flex flex-column justify-content-center">
                        <p class="small fs-6 m-0 song-title">
                            ${tracks[i].title}
                        </p>
                        <p class="small m-0 song-artist">
                            ${tracks[i].artist.name}
                        </p>
                    </div>
                </div>
                <div class="song-duration d-flex align-items-center">
                    <p class="small m-0">
                        ${formatTime(tracks[i].duration)}
                    </p>
                </div>
            </div>
        `;
    }

    const mainContentContainer = document.getElementById('mainContentContainer');

    mainContentContainer.innerHTML = `
        <div class="row row-cols-2">
            <div class="col">
                <h4>
                    Artist
                </h4>
                <div class="card border-0 p-3 bg-transparent w-100 spotify-link" data-type="artist" data-id="${mainArtist.id}">
                    <div class="d-flex">
                        <img src="${mainArtist.picture}"
                            class="img-fluid w-50 w-md-25 rounded-circle shadow-lg">
                    </div>
                    <div class="card-body d-flex flex-column justify-content-md-end px-0">
                        <h2 class="card-title fw-bold">${mainArtist.name}</h2>
                        <p class="small d-none d-md-block m-0">${mainArtist.type}</p>
                    </div>
                </div>
            </div>
            <div class="col ">
                <h4>
                    Songs
                </h4>
                <div class="d-flex flex-column gap-2">

                    ${songsHtml}
                    
                </div>

            </div>

        </div>
        
    `;


    const links = document.querySelectorAll('.spotify-link');

    links.forEach(element => {
        element.addEventListener('click',function(event){

            console.log(this.dataset);

             switch(this.dataset.type){
                 case 'album':
                     window.location.replace(`./album.html?albumId=${this.dataset.id}`);
                     break;

                 case 'artist':
                     window.location.replace(`./artisti.html?artistId=${this.dataset.id}`);
                     break;

                 default:
                     throw new Error('Unknown item type');
             }         
        });
    });


}