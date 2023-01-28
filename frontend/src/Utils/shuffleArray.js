// FUNCTION SHUFFLES ARRAY AND RETURNS IN AN OBJECT THE RESULT WITH ITS SHUFFLE COLOR STATUS 
export const shuffleArray = (array) =>{

        if (array === null) {
                return {result: null, colorChange: false}
        } else if (array.length === 1) {
                return {result: array[0], colorChange: false}      
        } else if (array.length > 1) {
                const randomMath = Math.floor(Math.random() * array.length)  
                return {result: array[randomMath], colorChange: true}
        }   
}
