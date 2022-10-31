console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished){
    let collectionList = { //new object
        title: '',
        artist: '',
        yearPublished: '',
    }
    collectionList.title = title;
    collectionList.artist = artist;
    collectionList.yearPublished = yearPublished;
    collection.push(collectionList);
    return collection;
}

addToCollection('Darkbloom', 'We Came As Romans', 2022);
addToCollection('Reach for Glory', 'Blackmill', 2011);
addToCollection('Hard Feelings', 'blessthefall', 2018);
addToCollection('Treehouse', 'I See Stars', 2016);
addToCollection('Meteora', 'Linkin Park', 2003);
addToCollection('This is War', 'Thirty Seconds to Mars', 2009);
addToCollection('Hollow Bodies', 'blessthefall', 2013);

console.log('Display music collection: ', collection);

function showCollection() {
    for (let i=0; i<collection.length; i++){
        collection.title = title;
        collection.artist = artist;
        collection.yearPublished = yearPublished;
        console.log(`${title} by ${artist}, published in ${yearPublished}`);
    }
}