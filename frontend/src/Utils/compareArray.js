// COMPARE LENGTH AND ELEMENTS OF USERLIST AND VERB DROPDOWN BEFORE UPDATE TRIGGERED
export const compareArray = (array1, array2) =>{
    if (array1.length !== array2.length){
        return true
    } else{
        for (let i = 0; i < array1.length; i++) {
            if( array1[i] !== array2[i]){
                return true
            }        
        }
    }  
}