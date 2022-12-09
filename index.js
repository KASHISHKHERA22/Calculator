let screen = document.querySelector("#screen");
let buttons = document.querySelectorAll('button');
let screenValue = '';
for(let items of buttons){
    items.addEventListener('click',(e)=>{
         buttonText = e.target.innerText;
         console.log("button text is",buttonText );
         if(buttonText=='x'){
             buttonText = '*'
             screenValue = screenValue+buttonText
            screen.value = screenValue;
            }
         else if(buttonText==='BACKSPACE'){
             screenValue = '';
             screen.value = screenValue;
         }
         else if(buttonText === '='){
                screen.value = eval(screenValue);
         }

         else{
            screenValue = screenValue+buttonText
            screen.value = screenValue;
         }
         

    })
}