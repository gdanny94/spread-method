function differenceInAges(ages){
    //identify youngest age
    const oldest = Math.max(...ages)
    //identify oldest age
    const youngest = Math.min(...ages)
   //get the difference between oldest - youngest
    const diffTotal = Math.max(...ages) - Math.min(...ages)
    
  return [youngest, oldest, diffTotal]
  }
  
  console.log( differenceInAges([30,31,16,6])) // [6,31,25]
  console.log( differenceInAges([])) // null
  
  
  // Spread syntax (...) can be used when all elements from an object or array need to be included in a new array or object