// FUNCTION SHUFFLES ARRAY AND RETURNS IN AN OBJECT THE RESULT WITH ITS SHUFFLE COLOR STATUS 
export const shuffleArray = (array) =>{
        if (array.length === 1) {
                const object ={result: array[0], colorChange: false}
                return object      
        }
        if (array.length > 1){
                const randomMath = Math.floor(Math.random() * array.length)  
                const object = {result: array[randomMath], colorChange: true}
                return object
        }   
}