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




// Add a function named showCollection. This function should:
// Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
function showCollection(musicArray) {
    
    // Console.log the number of items in the array.
    console.log(musicArray);   
    
    // Loop over the array and console.log each album's information formatted like: TITLE by ARTIST, published in YEAR.
    for (let i=0; i<musicArray.length; i++){
        console.log(`${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}`);
        }
}

showCollection([]);
showCollection(collection);