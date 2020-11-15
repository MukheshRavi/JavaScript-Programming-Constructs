//UC4
//Function to check a number is prime or not
//usage of for loop
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
let prime=isPrime(27);
console.log(prime);
//2.Prime Factorisation of a number
function primeFactorize(v)
{let factors=[];
    for(k=1;k<v;k++)
    {
        if(v%k===0&&isPrime(k))
        {
            if(!factors.includes(k))
            factors.push(k);
        }
    }
    for(j=0;j<factors.length;j++)
    {
        console.log(factors[j]+" ");
    }
}
primeFactorize(35);