const inputs= document.querySelectorAll('.input');
const buttons= document.querySelectorAll('.login_icons.icons_button');

const handleFocus = ({target})=>{    
   const span = target.previousElementSibling;
   span.classList.add('span_active');
}

const handleFocusOut = ({target})=>{    
    if(target.value == '') {
    const span = target.previousElementSibling;
    span.classList.remove('span_active');
    }
 }

 //scripts

inputs.forEach((input) =>{
    input.addEventListener('focus',handleFocus)
});

inputs.forEach((input) =>{
    input.addEventListener('focusout',handleFocusOut)
});


