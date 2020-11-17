//UC6
//1.Array of 10 three digit numbers
//To display second maximum and minimum number
let numbers = [];
for(let i =0 ;i<10; i++)
{
    numbers[i] = Math.floor(Math.random()*1000);
}
numbers.forEach(num => console.log(num));
let temp = 0;
for(let j = 0; j<10; j++)
{
    for(let i =0;i<10-j;i++)
    {
        if(numbers[i]<numbers[i+1])
        {
            temp = numbers[i];
            numbers[i] = numbers[i+1];
            numbers[i+1] = temp;
        }
    }
}
console.log("second maximum number is : "+numbers[1]+" second min number is "+numbers[numbers.length-2]);
// 2. Store all the prime factors of a given number
// function to get all the prime factors
function primeFactorize(number)
{
    let factors=[];
    for(let k=2;k<=number/2;k++)
    {
        if(number%k===0 && isPrime(k) == true)
        {
            factors.push(k);
        }
    }
    console.log("Factors are : ");
    for(let j=0;j<factors.length;j++)
    {
        console.log(factors[j]+" ");
    }
}

// function to check for prime
let isPrime = function (number)
{ 
    for(let i=2;i<=number/2;i++)
    {
        if(number%i==0)
        {
            return false;
        }
    }
    return true;
}
primeFactorize(54);
//3.To check numbers with repitive digits
console.log("Numbers with same digits are : ")
let repititiveNumbers=[];
for(let i = 1; i<100;i++)
{
    let ones = i%10;
    let tens = (i - ones)/10;
    if(ones == tens)
    repititiveNumbers.push(i);
}
repititiveNumbers.forEach(num => console.log(num));
