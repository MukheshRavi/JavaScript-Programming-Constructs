//UC1
//1.To get single digit using random function
let v=Math.floor(Math.random()*10);
console.log(v);
//2.to get Number on Dice using random 
 v=Math.floor(Math.random()*10)%7;
console.log(v);
//3.add two random dice number
let a=Math.floor(Math.random()*10)%7;
console.log(a);
console.log("Addition is:"+(v+a));
//4.Displaying sum and Average of 5 numbers
numbers=[];
for(i=0;i<5;i++)
{
 numbers[i]=Math.floor((Math.random() * 100));
 console.log(numbers[i]);
}
let sum=0;
for(i=0;i<5;i++)
{
 sum=sum+numbers[i];
}
console.log("Sum:"+sum);
console.log("Average"+sum/5);
//5.unit conversion
console.log("42 inches equal to "+42/12+" feet");
console.log("Rectangular plot of 60ft* 40ft equal to "+(60*0.3048*40*0.3048)+" square metres");
console.log("Area of 25 such plots in acres is "+25*60*0.3048*40*0.3048*0.00024+" acres");
