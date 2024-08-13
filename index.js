let input = ""
let finalResult = 0
let op = ""
function getButtonValue(buttonValue)
{
    input += buttonValue
    document.getElementById("display").innerHTML=input
}

function reset()
{
    if(input.length !== 0 )
    {
        input = ""
        document.getElementById("display").innerHTML=input
    }
}

function operation(operationType)
{
    op = operationType
    input += operationType
    document.getElementById("display").innerHTML=input
    
}

function seeResult()
{
    if(op === "/")
        {
            const numbers=input.split("/")
            finalResult = Number(numbers[0])/Number(numbers[1])
        }
        else if(op === "X")
        {
            const numbers=input.split("X")
            finalResult = Number(numbers[0])*Number(numbers[1])
        }
        else if(op === "-")
        {
            const numbers=input.split("-")
            finalResult = Number(numbers[0])-Number(numbers[1])
        }
        else if(op === "+")
        {
            const numbers=input.split("+")
            finalResult = Number(numbers[0])+Number(numbers[1])
            console.log(numbers)
            console.log(input)
            
        }
    document.getElementById("display").innerHTML=finalResult
    input = finalResult
    isNegativ(finalResult)

}
function negativ()
{
    input += "-"
    document.getElementById("display").innerHTML=input
}

function isNegativ(number)
{
    let target = document.getElementById("container")
    if(number < 0)
    {
        
        
        target.classList.add("negativ")

    }
    else
    {
        target.classList.remove("negativ") 
    }

}
