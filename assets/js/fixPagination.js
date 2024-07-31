window.addEventListener("load", function(event){
    const navbar = this.document.querySelector('nav.navbar')
    const mainContentDiv = this.document.getElementById('mainContent');

    if(this.window.innerWidth < 768)
        mainContentDiv.style.paddingBottom = `calc(${navbar.offsetHeight}px + 2em)`;
    else{
        const desktopMusicPlayerDiv = this.document.getElementById('desktopMusicPlayer');

        mainContentDiv.style.paddingBottom = `calc(${desktopMusicPlayerDiv.offsetHeight}px + 2em)`;
    }


    getArtist(412);

});