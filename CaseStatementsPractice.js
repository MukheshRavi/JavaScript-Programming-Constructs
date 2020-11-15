//UC3
//1.Reading a single digit number
let v=Math.floor(Math.random()*10)%10;
console.log(v);
switch(v)
{
    case 0:
        console.log("Number is Zero");
        break;
    case 1:
        console.log("Number is One");
        break;
    case 2:
        console.log("Number is Two");
        break;
    case 3:
        console.log("Number is Three");
        break;
    case 4:
        console.log("Number is Four");
        break;
    case 5:
        console.log("Number is Five");
        break;
    case 6:
        console.log("Number is Six");
        break;
    case 7:
        console.log("Number is Seven");
        break; 
    case 8:
        console.log("Number is Eight");
        break;  
    case 9:
        console.log("Number is Nine");
        break;     
}
//2.conversions 
v=Math.floor(Math.random()*10)%4;
console.log(v);
let value=52;
switch(v)
{
    case 0:
        console.log(value+" feet equal to "+value*12+" inches");
        break;
    case 1:
        console.log(value+" inches equal to "+value/12+" feet");
        break;
    case 2:
        console.log(value+" feet equal to "+value*0.3048+" metres");
        break;
    case 3:
        console.log(value+" meters equal to "+value*3.28+" feet");
        break;
}