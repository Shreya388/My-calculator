let screen = document.getElementById('screen');

buttons = document.querySelectorAll('button');
let emptyScreen = '';
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        console.log('Button text is' , buttonText);
        if(buttonText=='x'){
            buttonText = '*';
            emptyScreen += buttonText;
            screen.value = emptyScreen;
            
        }
        else if (buttonText =='C'){
            emptyScreen = "";
            screen.value = emptyScreen;
        }
        else if (buttonText =='='){
            screen.value = eval(emptyScreen);
        }
        else{
            emptyScreen += buttonText;
            screen.value = emptyScreen;
        }
     })
}