const BASE_URL = " https://thatcopy.pw/catapi/rest/";


async function fetchCat(){
    try{
        console.log('entered fetchCat')
        const imgPromisse = await fetch(BASE_URL, {mode: 'no-cors'});
        const imgJson = await imgPromisse.json();
        return imgJson.webpurl;
    }
    catch(er){
        console.log(er);
    }
    return null;
}

async function loadCat()
{   
    try{
        const catUrl = await fetchCat();
        const catImage = document.getElementById('img-cat');    
        catImage.setAttribute('src', catUrl)
    }
    catch(e){
        console.log(e);
    }    
}

