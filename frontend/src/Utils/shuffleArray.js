export const shuffleArray = (array) =>{

        const randomMath = Math.floor(Math.random() * array.length)     
        return array[randomMath]    
}