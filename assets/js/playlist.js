document.addEventListener('DOMContentLoaded', () =>{
    const albumPlaylist = document.getElementById('album');

    const playListTitles = [
        'Good Vibes', 'Hot Summer', 'Le canzoni della cacca', 'Chillout', 'Ale gioca ad Apex', 'Pietro e le canzoni della cacca', 'Paolo e le feste paesane', 'Marco lo stolto', 'Workout', 'relaxing',
        'Time Travel Tunes', 'Superhero Workout',
        'Lazy Sunday Afternoon', 'Midnight Snacks & Beats', 'Bubble Bath Bliss', 'Cooking with Fire',
        'Robot Dance Off', 'Magical Forest Vibes', 'Secret Agent Grooves', 'Comedy Club Hits',
        'Virtual Reality Voyage', 'Space Odyssey Sounds', 'Dragon Rider Anthems', 'Treasure Hunt Tracks',
        'Mystery Mansion Melodies', 'Ghost Party Jams', 'Underwater Adventure', 'Fairy Tale Fun',
        'Jungle Safari Jams', 'Retro Video Game Beats'
    ];

    const generatePlaylists = (titles, count) => {
        const playLists =[];
        for (let i = 0; i < count; i++) {
            const randomIndex = Math.floor(Math.random() * titles.length);
            playLists.push(titles[randomIndex]);
        }
        return playLists;
    };

    const randomPlaylist = (playLists, count) => {
        const selected = [];
        if (playLists.length < count) {
            count = playLists.length;
        }
       while(selected.length < count) {
            const randomIndex = Math.floor(Math.random() * playLists.length);
            const selectedPlayList = playLists.splice(randomIndex, 1)
            selected.push(selectedPlayList);
        }
        return selected;

    };

    const randomPlaylists = generatePlaylists(playListTitles, 40);
    const selectedPlaylists = randomPlaylist(randomPlaylists, 15);

    selectedPlaylists.forEach(playlist => {
        const li = document.createElement('li');
        li.innerText = playlist;
        albumPlaylist.appendChild(li);
    })
})
