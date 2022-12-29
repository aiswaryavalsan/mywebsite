//let food=Number(prompt("enter food amount"))
//alert(food);
//console.log(food)
const introduce=function (name,shirt){
const person={
    name:name,
    shirt:shirt,
    assets:100000,
    liabilities:5000,
    networth:function(){
        return(this.assets-this.liabilities)
    }
}
const intro=`my name is ${person.name} and my shirt is ${person.shirt } and my networth is$${person.networth()}`
return intro
}
//console.log(introduce('aish','white'))
//const phrace=prompt('ENTER A PHRACE')
let result;
const findHowManyChar=(phrace)=>{
    for(const index in phrace){
        result=Number(index)+1;
    }
    return {result};
}
//console.log(findHowManyChar(phrace));
const numbers=[5,6,7,8,9]
const sumArray=(numbers)=>{
    let result=0
 for(const num of numbers)
 {
    result+=num;
 }
return {result};
}
//console.log(sumArray(numbers))
let result1=numbers[0]
const max=(numbers)=>{
   
    for(const num of numbers){
        if(result1>num){
            result1=num;
        }
    }
        return result1;
}
console.log(max(numbers))