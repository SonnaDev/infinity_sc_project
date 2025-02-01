const count = 10;
const apiKey ='WIFfKA4tXQuDJg_ugB066vJ8fYdPjYM7t_C3-l-ivt0';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;



async function getPhotos(){
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error){

    }
}

getPhotos();