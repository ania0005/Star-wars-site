

export const getApiResource = async (url) => {
    
    try{
        const res = await fetch(url);
        if(!res.ok) {
            console.error('Could 22 not fetch.', res.status);
            return false;
        }   
        return await res.json();
    } catch(error){
        console.error('Could not fetch.', error.message);
        return false;
    }
}
 // вызов функции через промисы:

 // getApiResours (SWAPI_ROOT + SWAPI_PEOPLE)
 // .then(body => console.log(body));

 // Вызов функции через асинхронную функцию: 

// (async() => {
//     const body = await getApiResours (SWAPI_ROOT + SWAPI_PEOPLE);
//     console.log(body);
// })();