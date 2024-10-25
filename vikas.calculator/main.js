let number = 0
let number2 = 0
let result = 0
let result2 = 0
let result3 = 0
let result4 = 0
document.getElementById("add").onclick = function(){
    console.log("add was clicked")
number = number + 1
console.log("number")
document.getElementById("num").innerHTML = number

}

document.getElementById("reset").onclick = function(){
    console.log("reset was clicked")
    number = 0
    console.log("number")
    document.getElementById("num").innerHTML = number

}

document.getElementById("sub").onclick = function(){
    console.log("sub was clicked")
    number = number - 1
    console.log("number")
    document.getElementById("num").innerHTML = number
    if(number <=0){
        console.log("its -ve value value")
        number = 0
        document.getElementById("num").innerHTML = "Error"
    }
    else if(number == 2){
         console.log("you have chosen 2")
    }
    else{
        console.log("ok")
    }

}

document.getElementById("add2").onclick = function(){
    console.log("add was clicked")
    number2 = number2 + 1
    console.log("number2")
    document.getElementById("num2").innerHTML = number2

}

document.getElementById("reset").onclick = function(){
    console.log("reset was clicked")
    number2 = 0
    console.log("number2")
    document.getElementById("num2").innerHTML = number2

}

document.getElementById("sub2").onclick = function(){
    console.log("sub was clicked")
    number2 = number2 - 1
    console.log("number2")
    document.getElementById("num2").innerHTML = number2
    if(number2 <=o){
        console.log("its -ve value")
        document.getElementById("num2").innerHTML = "Error"
        number2 = 0
    }

}
document.getElementById("result").onclick = function(){
    console.log("result was clicked")
    result = number + number2
    console.log(result)
    document.getElementById("num3").innerHTML = result

}



document.getElementById("result2").onclick=function(){
    console.log("sub was clicked")  
    result2=number-number2
    console.log("result2")
    document.getElementById("num3").innerHTML=result2

}

document.getElementById("result3").onclick=function(){
    console.log("sub was clicked")  
    result3=number/number2
    console.log("result3")
    document.getElementById("num3").innerHTML=result3

}

document.getElementById("result4").onclick=function(){
    console.log("sub was clicked")  
    result4=number*number2
    console.log("result4")
    document.getElementById("num3").innerHTML=result4
    

}