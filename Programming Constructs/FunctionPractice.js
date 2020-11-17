//UC5
//1.Function to convert temperature between celsius and farenheit
const readline = require('readline-sync');
let choice = readline.question("Enter 1: for degF to degC conversion, 2: degC to degF conversion");
choice=parseInt(choice);
let temp_str = readline.question("Enter temperature: ");
let temp = parseInt(temp_str);
function FtoDegC(temp){
	if(temp<32 || temp>212){
		console.log("Invalid input!");
		return;
	}
	console.log("temp is degC is: "+((temp-32)*(5/9)));
}
function CtoDegF(temp){
        if(temp<0 || temp>100){
                console.log("Invalid input!");
                return;
        }
        console.log("temp in degF is: " + ((temp*9/5)+32));
}
switch(choice)
{
    case 1:
        FtoDegC(temp);
        break;
    case 2:
        CtoDegF(temp);
        break;    
}
//2.Check if a number is palindrome or not
function isPalindrome(x,y){
	let a = x.toString();
	let b = y.toString();
	if(a.length != b.length){
		console.log("Not palindrome!");
		return;
	}
	let n = a.length;
	let palindrome = true;
	for(let i=0;i<n;i++){
		if(a.charAt(i)!=b.charAt(n-1-i)){
			palindrome = false;
			break;
		}
	}
	if(palindrome){
		console.log("Palindrome");
	}else{
		console.log("Not a palindrome!");
	}
}
isPalindrome(534,435);
isPalindrome(414,404);
//3.To check both the number and its palindrome are prime or not
const readline = require('readline-sync');
let num_str = readline.question("Enter a number: ");
let num = parseInt(num_str);
function  isPrime(v)
{ let count=0;
    for(i=1;i<=v/2;i++)
    {
        if(v%i==0)
        count++
    }
    if(count>1)
    return false;
    else 
    return true;
}
function palindrome(x){
	x = x.toString();
	let n = x.length;
	var ans = "";
	for(let i =n-1;i>=0;i--){
		ans+=x.charAt(i);
	}
	ans = parseInt(ans);
	return ans;
}

if(isPrime(num)){
	console.log(num + " is a prime number");
}else{
	console.log(num + " is not a prime number");
}

let pal = palindrome(num);
console.log("palindrome is: "+pal);
if(isPrime(pal)){
        console.log(pal + " is a prime number");
}else{
        console.log(pal + " is not a prime number");
}

