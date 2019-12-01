var main_operator=""
var x=0

function operand(operand){
    document.getElementById('result').value=document.getElementById('result').value+operand
}

function operator(operator){
    operator=String.fromCharCode(operator)

    if(x==0)
    document.getElementById('main-result').value=document.getElementById('result').value
    
    document.getElementById('result').value=""
    main_operator=operator
}

function calculate(){
    if(x==0)
    x=1

    var operand1=document.getElementById('result').value
    operand1=parseInt(operand1)
    var operand2=document.getElementById('main-result').value
    operand2=parseInt(operand2)
    
    if(main_operator=='+')
    document.getElementById('main-result').value=operand1+operand2
    else if(main_operator=='-')
    document.getElementById('main-result').value=operand2-operand1
    else if(main_operator=='*')
    document.getElementById('main-result').value=operand1*operand2
    else if(main_operator=='/')
    document.getElementById('main-result').value=operand2/operand1

    document.getElementById('result').value=""
}