let buttons=document.querySelector('.buttons')
let content=document.querySelector('.content')
let disp=document.querySelectorAll('.disp-text')
let firstText=document.querySelector('.first-text')
let operator=document.querySelector('.operator')
let secondText=document.querySelector('.second-text')
let result=document.querySelector('.result-text')
debugger

buttons.addEventListener('click', (e) => {
    let value =e.target.innerHTML
    let data= e.target.dataset.id
    if(data){
        if(data==='equal'){
            if(firstText.innerHTML !== '' && operator.innerHTML===''){
                result.innerHTML= firstText.innerHTML
            }
            else{
                result.innerHTML=calculate(firstText.innerHTML, operator.innerHTML , secondText.innerHTML)
            }
            
            


            
        }
        if(data==='arith' && result.innerHTML !==''){
            firstText.innerHTML=`${result.innerHTML}`
            operator.innerHTML=''
            secondText.innerHTML=''
            result.innerHTML=''
        }
        
        


        if(data==='number'){
            if (firstText.innerHTML === '0'){
                firstText.innerHTML= value
            }
            else if( result.innerHTML !=='' && firstText.innerHTML !=='' && secondText.innerHTML !==''){
                firstText.innerHTML =value
                operator.innerHTML=''
                secondText.innerHTML=''
                result.innerHTML=''
            }
            else if(operator.innerHTML === ''){
                firstText.innerHTML= firstText.innerHTML + value
            }
            else{
                if(secondText.innerHTML ===0){
                    secondText.innerHTML = value
                }
                else{
                    secondText.innerHTML= secondText.innerHTML + value
                }
            }
            
            
        }
        
        else if(data==='clear'){
            firstText.innerHTML=0
            operator.innerHTML=''
            secondText.innerHTML=''
            result.innerHTML=''
        }
        else if(data==='arith' && firstText.innerHTML !== ''){
            if(secondText.innerHTML===''){
                operator.innerHTML = value
            }
            else if(secondText.innerHTML !==''){
                result.innerHTML= calculate(firstText.innerHTML, operator.innerHTML , secondText.innerHTML)
                    
            }

        }   
    }
   
})
calculate= (number1, operator, number2) => {
    let result
    if(operator === '*'){
        result= parseInt(number1) * parseInt(number2)
    }
    else if(operator === '/'){
        result= parseInt(number1) / parseInt(number2)
    }
    else if(operator === '-'){
        result= parseInt(number1) - parseInt(number2)
    }
    else if(operator === '+'){
        result= parseInt(number1) + parseInt(number2)
    }
    return result
}
