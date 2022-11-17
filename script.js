const btn = document.querySelector('.randomPhotoBtn')
const image = document.querySelector('.img')
const url = 'http://aws.random.cat/meow'

async function gettingCat(){
    try{
        const response = await fetch(url)
        const data = await response.json()
        image.src = data.file
        console.log(response)
        
    } catch(error){
        console.log(error)
    }
    
    
}


btn.addEventListener('click', () => {

    // Проверка на то, полностью ли загружена картинка.

    let isLoaded = image.complete
        if(isLoaded){
            gettingCat()
    }
    
})
 