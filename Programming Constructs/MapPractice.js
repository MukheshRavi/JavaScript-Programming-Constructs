//UC7
//1:Storing Die number and its frequency in map
let map = new Map();
while(true){
	let dice = Math.floor(Math.random()*6 +1 );
	if(!map.has(dice)){
		map.set(dice,1);
	}else{
		let freq = map.get(dice);
		if(freq>=10){
			break;
		}else{
			map.set(dice,freq+1);
		}
	}
}
const mapSort = new Map([...map.entries()].sort((a, b) => a[1] -b[1]));
console.log(map);
console.log(mapSort);
// Storing Individual birthdays of 50 members in a map according to month
let birthMonthMap = new Map();
for(i=0;i<50;i++)
{
    let birthMonth = Math.ceil(Math.random()*100)%12;
    if(birthMonth > 0)
    {
        if(birthMonthMap.has(birthMonth))
        birthMonthMap.get(birthMonth).push(i);
    
        else
        {
            let x = new Array();
            birthMonthMap.set(birthMonth,new Array());
            birthMonthMap.get(birthMonth).push(i);
        }
    }
}
let birthDayMapSort = new Map([...birthMonthMap.entries()].sort((a,b) => a[0]-b[0]));
for([key,value] of birthDayMapSort)
{
    console.log("Induvidual id for persons with birthMonth "+key+" is "+value);
}