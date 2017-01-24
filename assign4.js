let mealCost= process.argv
let tipPercent=process.argv
const myVal=process.argv
let myArr=[]
mealCost= myArr.push(Number(myVal[2]))
tipPercent=myArr.push(Number(myVal[3]))
const tipAmount=(Number(myVal[3])/100)*(mealCost)
const tipOwing=(tipAmount)+(mealCost)
const output= "your meal cost was $"+(Number(myVal[2]))+"a tip percent $"+(Number(myVal[3]))+"% Then total Amount= $"+tipOwing
console.log(output)