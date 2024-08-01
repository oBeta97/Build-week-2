const mainContent = document.getElementById('mainContent')


window.addEventListener("load", function (event) {

    const eventUpdate = new URLSearchParams(location.search).get('albumId')

    if(!eventUpdate){
      mainContent.innerHTML = `
        <div class="vh-100 w-100 d-flex justify-content-center align-items-center">
          <h2> 404 Not Found</h2>
        </div>
      `;
      return;
    }
    

    createPage(eventUpdate)

})

async function createPage(albumId) {

    const album = await getAlbum(albumId);
    console.log(album)

    let songs = '';

    for (let i = 0; i < album.tracks.data.length; i++) {
        const duration = formatTime(album.tracks.data[i].duration)
        songs += `
     <div class="col-1 d-none d-md-block" id="6628424">
                <p class="text-secondary text-center">
                  ${i + 1}
                </p>
              </div>
              <div class="col-10 col-md-8">                
                  <h5>${album.tracks.data[i].title}</h5>
                  <p class="text-secondary">${album.artist.name}</p>
              </div>
              <div class="col-2 d-none d-md-block">
                <p>${album.tracks.data[i].rank}</p>
              </div>
              <div class="col-1 fs-3 d-block d-md-none">
                <i class="bi bi-three-dots-vertical"></i>
              </div>

              <div class="col-1 d-none d-md-block">
                <p>${duration}</p>
              </div>
    `;
    }
    mainContent.innerHTML = `
    <div class="row">
          <div class="col-12 d-flex flex-column justify-content-center align-items-center ">

            <div class="row hero-section w-100">

              <div class="position-sticky top-0 left-0">
                <i class="bi bi-arrow-left fs-3"></i>
              </div>

              <div class="card flex-md-row border-0 bg-transparent w-100" >
                <div class="d-flex justify-content-center" id="612942">
                  <img src=${album.cover_medium} class="img-fluid shadow-lg">
                </div>
                <div class="card-body d-flex flex-column justify-content-md-end">
                  <p class="small d-none d-md-block m-0">Album</p>
                  <h2 class="card-title fw-bold">${album.title}</h2>
                  <div class="row align-items-center">
                    <div class="col-1 p-0" id="64932">
                      <img src=${album.artist.picture_medium} class="img-fluid rounded-circle" alt="">
                    </div>
                    <div class="col-11 ">
                      <h6>${album.artist.name}</h6>
                    </div>
                  </div>
                  <p class="card-text pt-2 text-secondary fw-semibold">
                    <small>Album • ${album.release_date}</small>
                  </p>
                </div>
              </div>

              <div class="row justify-content-between align-items-center justify-content-md-start fs-3 w-100 my-3">
                <div class="col-4 order-md-2 d-flex flex-row justify-content-between">
                  <i class="bi bi-heart"></i>
                  <i class="bi bi-arrow-down-circle"></i>
                  <i class="bi bi-three-dots-vertical d-md-none"></i>
                  <i class="bi bi-three-dots d-none d-md-block"></i>
                </div>
                <div class="col-3 col-md-2 order-md-1 d-flex flex-row justify-content-between">
                  <i class="bi bi-shuffle d-md-none"></i>
                  <i class="bi bi-caret-right-fill rounded-circle bg-success px-3 py-2"></i>
                </div>
              </div>
            </div>

             <div class="row d-flex align-items-center justify-content-between py-4 bg-black" id="songs">

             ${songs}

          </div>

          </div>

        </div>`
}





