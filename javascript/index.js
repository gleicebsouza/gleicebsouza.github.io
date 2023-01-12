let theme = document.querySelector('body');
let buttonTheme = document.querySelector('.switch-theme button');


function SwitchTheme(){
  buttonTheme.addEventListener('click',()=>{
    theme.classList.toggle('light')
  })
}

SwitchTheme()