//Reverse a Number

function reverseNumber(num){
    let rev = 0;
    while(num > 0){
        rev = rev * 10;
        rev = rev + num % 10;
        num = Math.floor(num / 10);
    }
    return rev;
}

console.log(reverseNumber(1234));



// 2) count Vowels

function countVowels(name){
    let count = 0;
    name = name.toLowerCase();
    for(let i = 0; i < name.length; i++){
        if(name.charAt(i) === 'a' || name.charAt(i) === 'e' || name.charAt(i) === 'i' || name.charAt(i) === 'o' || name.charAt(i) === 'u'){
            count++;
            console.log(name.charAt(i),"-",count)
        }
    }
   
}
countVowels("Mohamed Kasim");



// 3) Find Largest Number in an Array

function findLargest(arr){
    let firstL = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > firstL){
            firstL = arr[i];
        }
    }
    return firstL;
}

console.log(findLargest([10, 45, 23, 89, 100]));



// 4) Check Palindrome

function isPalindrome(name){
    let i = 0;
    let j = name.length-1;
    while(i < j){
        if(name.charAt(i) != name.charAt(j)){
            return false;
            break;
        }
        i++;
        j--;
    }
    return true;
}

console.log(isPalindrome("ramar"));



// 5) Find Factorial

function factorial(num){
    let fact = 1;
    for(let i = num; i >= 1; i--){
        fact = fact * i;
    }
    return fact;
}

console.log(factorial(4));



// 6) Remove Duplicates

function removeDuplicates(arr){
    console.log(arr);
    let i = 0;
    for(let j = 1; j < arr.length; j++){
        if(arr[i] < arr[j]){
            arr[i+1] = arr[j];
            i++;
        }  
      
    }
    arr.length = i + 1;
    return arr;
}

console.log(removeDuplicates([1, 2, 2 ,3, 4, 4, 5]));



// 6)  Number to their Squares using map()

const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map((num) => num * num);

console.log(squares);



// 7) Convert names to uppercase using map()

const names = ["kasim", "mohamed"];

const upperCase = names.map((name) => name.toUpperCase());
console.log(upperCase);



// 8) Find the Largest Number using reduce()

const numbers = [5, 8, 2, 10, 3];

const largestNumber = numbers.reduce((acc, num) => {
    return num > acc ? num : acc;

}, 0);
console.log(largestNumber); 



// 9) Return words whose length is greater than 5 using filter()

const words = ["apple", "banana", "orange", "kiwi", "grapefruit"];

  const longWords = words.filter((word) => word.length > 5);
  console.log(longWords);



// 10) Return only Even Numbers using filter()

const numbers = [1,2,3,4,5,6,8,10];

const evenNumbers = numbers.filter((even) => even % 2 == 0);
console.log(evenNumbers);