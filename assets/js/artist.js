const mainContent = document.getElementById('mainContent')
const playCenter = document.getElementById("playCenter");
const playButtonMobile = document.getElementById("play-button");
window.addEventListener("load", function (event) {
    const artistId = new URLSearchParams(location.search).get('artistId');
    console.log('artisti', artistId);

    if(!artistId){
      mainContent.innerHTML = `
        <div class="vh-100 w-100 d-flex justify-content-center align-items-center">
          <h2> 404 Not Found</h2>
        </div>
      `;
      return;
    }
    
    
    getArtistId(artistId)
})


async function getArtistId (artistId) {
    const newArtistId = await getArtist(artistId)
    console.log('artisti', newArtistId)

    const mainContent = document.getElementById('mainContent')

    mainContent.innerHTML = ` 
        <div class="row px-4 m-0 d-flex align-items-end pb-3" id="bannerArtist" style = 'background-image:url(${newArtistId.picture_xl});background-size: cover;background-repeat:no-repeat;'>
          <div id="..." class="col">
            <small class="fw-bold"><i class="bi bi-patch-check-fill text-primary me-1"></i>Artista
              verificato</small>
            <h1 id="artistName" class="fw-bold display-3">
              ${newArtistId.name}
            </h1>
          </div>
        </div>

        <div class="h-100 px-4" id="artistRow">
          <div class="row">
            <div class="d-flex">
              <small class="ps-1">${
                newArtistId.nb_fan.toLocaleString()
                } Ascoltatori mensili</small>
            </div>
            <div class="col-12 d-flex align-items-center mb-4">
              <button type="button" class="btn btn-outline-none">
                Seguiti
              </button>
              <i class="bi bi-three-dots-vertical ms-3"></i>
              <button class="btn">
                <i class="bi mx-2 bi-shuffle text-success ms-auto start-button" data-song=""></i>
              </button>
              <button class="btn btn-success rounded-circle start-button hero-start-button" data-song="">
                <i class="text-black bi bi-play-fill"></i>
              </button>
            </div>

            <h5 class="fw-bold">Popolari</h5>
                <div id="tracklist"></div>
            <!--card artisti creata dinamicamente con js-->


          </div>
        </div>`
        getTracklist(newArtistId.tracklist)
}

async function getTracklist (url) {
    const tracklist = await getGenericFetch(url)
    console.log('traccia', tracklist)
    const tracklistDiv = document.getElementById('tracklist')

    const playFirstSongBtn =document.querySelector('.start-button.hero-start-button');
    
    playFirstSongBtn.setAttribute('data-song', tracklist.data[0].preview);
    playFirstSongBtn.setAttribute('data-songImg', tracklist.data[0].album.cover_small);
    playFirstSongBtn.setAttribute('data-songName', tracklist.data[0].title_short);
    
    const shuffleBtn = document.querySelector('.bi-shuffle.start-button');
    const randomSong = tracklist.data[RandomNumberGenerator(0, tracklist.data.length -1)];

    shuffleBtn.setAttribute('data-song', randomSong.preview);
    shuffleBtn.setAttribute('data-songImg', randomSong.album.cover_small);
    shuffleBtn.setAttribute('data-songName', randomSong.title_short);

    for (let i=0; i<tracklist.data.length ;i++) {
        tracklistDiv.innerHTML += `
        <div class="row d-flex align-items-center mb-2">
              <div class="col-1 text-center d-flex justify-content-center">
                <small id="trackNumber">
                  ${i+1}
                </small>
                <button class="btn btn-success rounded-circle start-button row-button" 
                  data-song="${tracklist.data[i].preview}"
                  data-songName="${tracklist.data[i].title_short}"
                  data-songImg="${tracklist.data[i].album.cover_small}"
                >
                  <i class="text-black bi bi-play-fill"></i>
                </button>
              </div>
              <div class="col-2">
                  <img class="top3Images rounded-1" src="${tracklist.data[i].album.cover}" />
              </div>
              <div class="col-5">
                <small id="trackTitle">${tracklist.data[i].title}</small></a>
                <div class="d-block d-md-none">
                  <small class="small" id="trackReprod">${tracklist.data[i].rank.toLocaleString()}</small>
                </div>
              </div>
              <div class="col-2 text-end d-none d-md-block">
                <small id="trackReprod">${tracklist.data[i].rank.toLocaleString()}</small>
              </div>
              <div class="col-2 ms-auto d-flex align-items-center">
                  <button class="btn d-block d-md-none btn-success rounded-circle start-button row-button"
                    data-song="${tracklist.data[i].preview}"
                    data-songName="${tracklist.data[i].title_short}"
                    data-songImg="${tracklist.data[i].album.cover_small}"
                  >
                  <i class="text-black bi bi-play-fill"></i>
                </button>
                <i class="bi bi-three-dots-vertical"></i>
              </div>
            </div>`
    }

    const playButtons = document.querySelectorAll('.start-button');

    playButtons.forEach(element => {
      element.addEventListener('click', function(e){
        console.log(this.dataset.song);
        TogglePlayer(this.dataset.song, this);
      })
    });

    playCenter.addEventListener('click',function(event){
      TogglePlayer(this.dataset.song, this);
    });

    playButtonMobile.addEventListener('click',function(event){
      TogglePlayer(this.dataset.song, this);
    });


}



