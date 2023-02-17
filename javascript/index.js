//bloco var
let theme = document.querySelector('body');
let buttonTheme = document.querySelector('.switch-theme button');

//add toggle dark mode
function SwitchTheme(){
  buttonTheme.addEventListener('click',()=>{
    theme.classList.toggle('light')
  })
}

SwitchTheme()