window.addEventListener("load", function (event) {
    const artistId = new URLSearchParams(location.search).get('artistId');
    console.log('artisti', artistId);
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
                newArtistId.nb_fan
                } Ascoltatori mensili</small>
            </div>
            <div class="col-12 d-flex align-items-center mb-4">
              <button type="button" class="btn btn-outline-none">
                Seguiti
              </button>
              <i class="bi bi-three-dots-vertical ms-3"></i>
              <i class="bi mx-2 bi-shuffle text-success ms-auto"></i>
              <button class="btn btn-success rounded-circle">
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
    for (let i=0; i<tracklist.data.length ;i++) {
        tracklistDiv.innerHTML += `
        <div class="row d-flex align-items-center mb-2">
              <div class="col-1 text-end">
                <small id="trackNumber">${i+1}</small>
              </div>
              <div class="col-2">
                <a href="#">
                  <img class="top3Images rounded-1" src="${tracklist.data[i].album.cover}" />
                </a>
              </div>
              <div class="col-6">
                <a href="#"><small id="trackTitle">${tracklist.data[i].title}</small></a>
                <div class="d-block d-md-none">
                  <a href="#"><small id="trackReprod">${tracklist.data[i].rank}</small></a>
                </div>
              </div>
              <div class="col-2 text-end d-none d-md-block">
                <a href="#"><small id="trackReprod">${tracklist.data[i].rank}</small></a>
              </div>
              <div class="col-1 ms-auto">
                <i class="bi bi-three-dots-vertical"></i>
              </div>
            </div>`


    }
}



