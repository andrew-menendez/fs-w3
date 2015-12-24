
// iterative specs 1-2
var factorialIterative = function(num) {
	var running_total=1
	for (var i = num; i >= 1; i--) {
		running_total=(running_total*i)
		console.log(running_total);

	};
	 return running_total


};

// recursive approach

var factorial = function(num) {
	//base case
	if (num===0){return 1};

	return num * factorial(num-1);

};

// FIBBERS

var fib = function(num) {
	//base case
	if (num<=1){return 1};
    //debugger
    //console.log(num)
	return fib(num-2) + fib(num-1) ;


};


// type thing. 
// This took me a while and then it clicked all the sudden

var type= function(val){
      
      var myObj={};
      
      var string=myObj.toString.call(val)
      
      //console.log(string)
      //get rid of extra characters
      s=string.split(" ")
      ns=s[1].split("]")
      
      return ns[0]
     
  };

// Stringify

 var stringify = function(val) {
      
      val_type=type(val);
      
      result=""
      result_arr=[];
      
      str_types=['Undefined','Null','Boolean','Number','Function'];
      
      debugger
      if (str_types.indexOf(val_type) > -1){ // check if type is in arr str_types
          
          result+=String(val)+","
          console.log(result)

          //result_arr.push(String(val))
          //return result
          
      }
      if (val_type == 'String'){
      		result+="\""+val+"\""+","
          console.log(result)

          //result_arr.push(String(val));
      		//return result
      };// the need for this indicates something hacky happening
      


      var arrG = function(array) {
        val_add=""
        for (var i = 0; i < array.length; i++) {
    
        val_add+=stringify(array[i]) + ","
        
        console.log(val_add)
        //result_arr.push(stringify(val[i]))
        
        };
        return "["+val_add+"]"

      };


      var objectify = function(object) {
       
        val_add=""
        for (x in object) {
        
        //I used to have stringify(x) here but it failed one of the tests because it called stringify too many times.
        val_add+="\""+x+"\""+": "+stringify(object[x])+","
        //console.log(stringify(x))
        console.log(object[x])
 
        
        };
        
        return "{"+val_add+"}"

      };

      if(val_type == 'Array'){
      
		
		    result+=arrG(val)
        
        console.log(result)
        //result_arr.push(stringify(val[i]))
      };
        
        if(val_type == 'Object'){
      
    
        result+=objectify(val)
        
        console.log(result)
        //result_arr.push(stringify(val[i]))
      };
		//return result



      // I know this is hacky. 
      //I can't quite get the right result without it. 
      //To discuss in office hours, perhaps
      // 
       var commStrip= function(string) {
        if (string.slice(-1)==",") {
       string=string.substring(0, string.length - 1);
        }

         if (string.slice(-2)==",]") {
       string=string.substring(0, string.length - 2);
       string=string+"]"
        }

         if (string.slice(-2)==",}") {
       string=string.substring(0, string.length - 2);
       string=string+"}"
        }
        return string
      };

      console.log(result)
      return commStrip(result);
      
      //return result_arr
      

};
