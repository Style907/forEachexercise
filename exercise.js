 const numbers = [2, 3, 5, 6, 9];
 const names = ['colt','matt', 'tim', 'test'];
 const namesObject = [
    {name: 'Elie'},
    {name: 'Tim'},
    {name: 'Matt'},
    {name: 'Colt'}
  ];
const fullNames = [
    {first: 'Elie', last:"Schoppik"},
    {first: 'Tim', last:"Garcia"},
    {first: 'Matt', last:"Lane"},
    {first: 'Colt', last:"Steele"}
  ];
  const petOwners = [
    {first: 'Elie', last:"Schoppik"},
    {first: 'Tim', last:"Garcia", isCatOwner: true},
    {first: 'Matt', last:"Lane"},
    {first: 'Colt', last:"Steele", isCatOwner: true}
  ];

 function doubleValues(arr){
    const doubled = [];
    for(let num of arr){
        doubled.push(num*2);
    }
    return doubled;
}


function onlyEvenValues(arr){
    const evenNum = [];
    for (let num of arr){
        if (! (num % 2)){
            evenNum.push(num);
        }
    }
    return evenNum;
}


function showFirstAndLast(arr){
    const firstAndLast = []
    arr.forEach(function(val){
        firstAndLast.push(val[0] + val.charAt(val.length-1))
        

    })
       return firstAndLast; 

}


  function addKeyAndValue(arr){
    arr.forEach(function(item){
        item.title = "instructor"
    })
    return arr
  }

  function vowelCount(str){
    const vowels = {a:0, e:0, i:0, o:0, u:0};
    for (let i = 0; i < str.length; i++){
        if (str.charAt(i) == "a"){
            vowels.a += 1;
        }
        else if(str.charAt(i) == "e"){
            vowels.e += 1;
        }
        else if (str.charAt(i) == "i"){
            vowels.i += 1;
        }
        else if (str.charAt(i) == "o"){
            vowels.o += 1;
        }
        else if (str.charAt(i) == "u"){
            vowels.u += 1;
        }
    }
    return vowels
}


function doubleValuesWithMap(arr){    
    newArr = arr.map(function(num){ return (num) * 2});
    return newArr;
}


function valTimesIndex(arr){
   newArr = arr.map(function(num){return num * arr.indexOf(num)});
   return newArr;
}

function exctractKey(arr){
    newArr = arr.map(function(ob){return Object.values(ob).toString()});
    return newArr;
}


function exctractFullName(arr){
    newArr = arr.map(function(ob){return ob.first +" "+ ob.last});
    return newArr;
}

    
function filterByValue(arr, arg){
    newArr = arr.filter(function(ob){if(arg) return ob })
    return newArr
}


function find(arr, query){
   num = arr.filter(function(num){return num === query})
    return num[0]
}


function removeVowels(str){
   const vowels = 'aeiou'
   return str.toLowerCase().split('').filter(function(ltr){return vowels.indexOf(ltr) === -1}).join('');
}


function doubleOddNumbers(arr){
    newArr = arr.filter(function(num){return num % 2 !== 0}).map(function(num){return num * 2})
    return newArr 

}