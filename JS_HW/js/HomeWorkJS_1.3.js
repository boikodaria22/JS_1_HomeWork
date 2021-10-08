var array = [16, true, 'MetraBit', NaN, {name: 'UserName', hobby: 'JS'}, 30, NaN, null, false, 'Vue'];

function myFuncForTypes(array) {
    var num = 0;
    var str = 0;
    var bool = 0;
    var nullType = 0;
    var obj = 0;
          for(var i = 0; i<array.length; i++){

            if(array[i] === null){
              nullType++;
            }
            else{
              switch(typeof(array[i])) {
                case 'number':  
                  num++;
                  break;
            
                case 'string': 
                  str++;
                  break;

                  case 'boolean': 
                  bool++;
                  break;
            
                  case 'object':  
                  obj++;
                  break;

                  default:
                  break;
            }
            }

          }
          console.log(`Number: ${num}, string: ${str}, boolean: ${bool}, null: ${nullType}, object: ${obj}.`)
        }
        myFuncForTypes(array);

        



