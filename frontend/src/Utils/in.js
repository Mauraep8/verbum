

export const shuffleArray = (array) =>{

    if (array.length === 1) {
        return {result: array[0], shuffleOccurred: false}
             
    } else if (array.length > 1) {
        const randomMath = Math.floor(Math.random() * array.length)  
        return {result: array[randomMath], shuffleOccured: true}

    }   
}