export const shuffleArray = (array) =>{
        if (array.length === 1) {
                return array[0]      
        }
        if (array.length > 1){
                const randomMath = Math.floor(Math.random() * array.length)     
                return array[randomMath] 
        }   
}