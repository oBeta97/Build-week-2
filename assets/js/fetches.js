const connectionString = 'https://striveschool-api.herokuapp.com/api/deezer';


async function getArtist(artistId){

    if(artistId === undefined)
        throw new Error('getArtist necessita di un artistId');

    return await fetch(`${connectionString}/artist/${artistId}`, {
        method: "GET"
    }).
    then(function(promise){
        if(!promise.ok)
            throw new Error('Errore nella chiamata getArtist');

        return promise.json();
    }).
    then(function(artists){

        return artists;

    }).
    catch(function(error){
        alert(error);
    });
    
}

async function getGenericFetch(url){

    if(url === undefined)
        throw new Error('getGenericFetch necessita di un URL');

    return await fetch(url, {
        method: "GET"
    }).
    then(function(promise){
        if(!promise.ok)
            throw new Error('Errore nella chiamata getGenericFetch');

        return promise.json();
    }).
    then(function(genericData){

        return genericData;

    }).
    catch(function(error){
        alert(error);
    });
}



async function getAlbum(albumId){

    if(albumId === undefined)
        throw new Error('getAlbum necessita di un albumId');

    return await fetch(`${connectionString}/album/${albumId}`, {
        method: "GET"
    }).
    then(function(promise){
        if(!promise.ok)
            throw new Error('Errore nella chiamata getAlbum');

        return promise.json();
    }).
    then(function(albums){

        return albums;

    }).
    catch(function(error){
        alert(error);
    });
    
}
// teamone = timone xdxdxdxdxd
async function getSearch(query){

    if(albumId === undefined)
        throw new Error('getSearch necessita di una query');

    return await fetch(`${connectionString}/search?q=${query}`, {
        method: "GET"
    }).
    then(function(promise){
        if(!promise.ok)
            throw new Error('Errore nella chiamata getSearch');

        return promise.json();
    }).
    then(function(data){

        return data;

    }).
    catch(function(error){
        alert(error);
    });
    
}