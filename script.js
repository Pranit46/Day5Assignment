
//Print odd numbers in an array
let oddNum = function() {
    let array = [2,7,5,24,68]
    let oddArray = []
    for(let i=0;i<array.length;i++){
        if(array[i]%2 != 0)
        {
            oddArray.push(array[i])
        }
    }
    console.log(oddArray)
}
oddNum();

//IIFE
(function() {
    let array = [2,7,5,24,68]
    let oddArray = []
    for(let i=0;i<array.length;i++){
        if(array[i]%2 != 0)
        {
            oddArray.push(array[i])
        }
    }
    console.log(oddArray)
})();

//Convert all the strings to title caps in a string array

(function titleCase(str) {
    str = ["plyaing cricket is my hobby"];
    str = str.toString().toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    console.log(str.join(' '));
  })();

//Sum of all numbers in an array
let sum = function() {
    let array1 = [2,7,5,24,68]
    let sum = 0
    for(let i=0;i<array1.length;i++){
       sum = sum + array1[i]
    }
   console.log(sum)
}
sum();

(function() {
    let array1 = [2,7,5,24,68]
    let sum = 0
    for(let i=0;i<array1.length;i++){
       sum = sum + array1[i]
    }
   console.log(sum)
})();


//Return all the prime numbers in an array
(function () {
    var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]
    numArray = numArray.filter((number) => {
     for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
     }
     return true;
});
    console.log(numArray)
})();

//Return all the palindromes in an array

let arr = [ 616, 23 ,323, 454 ];
let length = arr.length;
(function (arr, length)
{
    var pal = [];
    for (let i = 0; i < length; i++)
    {
        function PalindromeNum(num)
        {
            let str = "" + num;
            let len = str.length;
            for (let i = 0; i < parseInt(len / 2, 10); i++)
            {
                if (str[i] != str[len - 1 - i ])
                    return false;
            }
            return true;
        };
        let ans = PalindromeNum(arr[i])
        if(ans == true)
        {
            pal.push(arr[i]);
        }
    }
    console.log(pal);
})(arr, length);


//Median
function getMedian(arr1, arr2, n)
{
    var i = 0;
    var j = 0;
    var count;
    var k1 = -1, k2 = -1;
    for (count = 0; count <= n; count++)
    {
        if (i == n)
        {
            k1 = k2;
            k2 = arr2[0];
            break;
        }
        else if (j == n)
        {
            k1 = k2;
            k2 = arr1[0];
            break;
        }
        if (arr1[i] <= arr2[j])
        {
            k1 = k2;
            k2 = arr1[i];
            i++;
        }
        else
        {
            k1 = k2;
            k2 = arr2[j];
            j++;
        }
    }
 
    return (k1 + k2)/2;
}

var arr1 = [1, 12, 15, 26, 45];
var arr2 = [2, 13, 19, 30, 45];
var n1 = arr1.length;
var n2 = arr2.length;
if (n1 == n2)
 console.log("Median is "+ getMedian(arr1, arr2, n1));
else
console.log("Array size is not same");


// Remove duplicates from array
(function getUnique(){
    var names = [1,1,2,3,4,3,5,5,6,7];
    var uniqueArray = [];
    for(i=0; i < names.length; i++){
        if(uniqueArray.indexOf(names[i]) === -1) {
            uniqueArray.push(names[i]);
        }
    }
    console.log(uniqueArray);
})();

//Rotate an array by k times
(function RightRotate(Array=[1,2,3,4,5],n=5, k=3)
{
    k = k % n;
    for (let i = 0; i < n; i++) {
        if (i < k) {
            console.log(Array[n + i - k] + " ");
        }
        else {
            console.log((Array[i - k]) + " ");
        }
    }
})();


//Arrow functions


let arrOdd = [21,22,23,24,25,26,26]

let odd = arrOdd.filter(num => num%2)

console.log(odd)

// Convert all the strings to title caps in a string array
let caps = (str) => {
    return str.split(' ').map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}
console.log(caps("rohit sharma is my favourite cricketer"));

// Sum of all numbers in an array
let arr3 = [1,2,3,4,5,6,7,8,9,10]
let sum1 = arr3.reduce((x, y) => x + y, 0)
console.log(sum1)

//Prime numbers in an array using arrow function
let PalinDrome = () => {
    var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]
    numArray = numArray.filter((number) => {
     for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
     }
     return true;
});
console.log(numArray)
};

PalinDrome()