// 1.arr =[1,2,3,4,5,5,6,7,8,8] => remove duplicates
// o/p =[1,2,3,4,5,6,7,8]

// 2.find whether the string is palindrome or Notification
// i/p=racecar,o/p =true
// i/p=hello ,o/p =false

// 3.reverse the string
// i/p=hello ,o/p=olleh

// 1.REMOVE DUPLICATES
let arr = [1, 2, 2, 3, 4, 4, 5];
let uniqueArray = [...new Set(arr)];
console.log(uniqueArray);

//2.find whether the string is palindrome or Notification
let str1=("racecar");
let str2=("hello");

function ispalindrome(str) {
let originalstr1=str.toLowerCase().replace(/[^a-z0-9]/g, '');
let reversestr1=originalstr1.split("").reverse().join("");
return originalstr1===reversestr1;
}
console.log(ispalindrome("racecar"));
console.log(ispalindrome("hello"))

//3.reverse the string
let A="hello";
let reversed = A.split("").reverse().join("");
console.log(reversed);uhff
