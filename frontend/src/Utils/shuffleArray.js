export const shuffleArray = (array) =>{
    if (array.length === 0){ 
        return
    } else{ 
        // console.log(array)
        const randomMath = Math.floor(Math.random() * array.length)
        // console.log(randomMath)
        const randomOption = array[randomMath]
        console.log(randomOption)
    }
}