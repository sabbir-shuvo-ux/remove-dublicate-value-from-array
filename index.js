export const getUnique = (array) => {
      var uniqueArray = [];
      
      // Loop through array values
      for(let i = 0; i < array.length; i++){
          if(uniqueArray.indexOf(array[i]) === -1) {
              uniqueArray.push(array[i]);
          }
      }
      return uniqueArray;
  }
  
  
  const names = ["John", "Peter", "Clark", "Harry", "John", "Alice"];
    const uniqueNames = getUnique(names);
    console.log(uniqueNames); // Prints: ["John", "Peter", "Clark", "Harry", "Alice"]
  

