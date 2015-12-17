// 06_Functional 


// MAP tests 1-3

/// the doubler function
var doubler = function (num) {
	return num*2
};

/// the map function

var map = function (array,metaFunction){
    new_array=[]

	for (var i = 0; i < array.length; i++) {
		
		res=metaFunction(array[i]);
		
		new_array.push(res)

	};
	
	return new_array;
};


// FILTER

//example function even_filter tests 4,5 

var filter = function (array,some_function) {
     
     new_array=[];
     
     for (var i = 0; i < array.length; i++) {
	    if (some_function(array[i])==true) {
	        new_array.push(array[i]);
	        }
     }
     return new_array
 };


 // Contains
/// 

var contains = function (object,user_value) {
     
     counter=false
     
     for (o in object) {
	    if (object[o]==user_value) {
	        counter=true;
	        } 
     }
     return counter
 };

// COUNT WORDS

var countWords= function(str) {
	arr=str.split(/ /)

    return arr.length
}

// REDUCE

var reduce = function (array,start,some_function) {
     
     totaler=0;
     
     for (var i = start; i < array.length; i++) {
         
        console.log(array[i]) 
	    totaler=some_function(totaler,array[i])
	    
	    
	    console.log(totaler)
     }
     return totaler
 };


 ///count words in reduce

  var countWordsInReduce= function(totaler,arString) {
     var countWords= function(totaler,str) {
	    arr=str.split(/ /)

        return totaler+arr.length
    }
    return countWords(totaler,arString)
    
 };

 /// sum with reduce

  var sum= function(array) {

  	var add = function(a, b) {
      return a + b;
    };

     total=reduce(array,0,add)
     return total
 };

 // EVERY

var every = function(array,some_function){
    
    counter=0
    
    for (a in array){
        if (some_function(array[a])==true){
            counter=counter+1
        }
    };
    
    console.log(counter)
    
    if (counter == array.length){
        return true
        } else {
            return false
        };   
    
};

// ANY

var any = function(array,some_function){
     console.log(array)
    
    console.log(typeof some_function)
    
    any_true=false
    try {
        for (a in array){
            if (some_function(array[a])==true){
                console.log(some_function(array[a]))
                any_true=true
            }
        };
    
    
  return any_true
  
    } catch (e){
        return false
    }
    
};
