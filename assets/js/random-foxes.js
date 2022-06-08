const BASE_URL = "https://randomfox.ca/floof/";


async function fetchFox(){
    try{
        const imgPromisse = await fetch(BASE_URL);
        const imgJson = await imgPromisse.json();
        return imgJson.image;
    }
    catch(er){
        console.log(er.message);
    }
    return null;
}

async function loadFox()
{   
        const foxUrl = await fetchFox();
        const catImage = document.getElementById('fox-img');    
        catImage.src = foxUrl;   
}

loadFox();
