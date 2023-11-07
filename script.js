
var celinput = document.querySelector('#celsius');
var far = document.querySelector('.fahrenheit');
var body = document.querySelector('.body');
var dcel = document.querySelector('.cel');
var dfer = document.querySelector('.fer');
var mode = document.querySelector('.mode');
var h1s = document.querySelector('#text');
var inspan = document.querySelector(".input");
var outspan = document.querySelector(".output");
var mode2 = document.querySelector('.mode2')



dcel.addEventListener('click',function(){
    if(celinput.value === '')
    {
        alert('Please put some value');
    }
    else
    {
    far.innerHTML = (celinput.value- 32) * 5/9
    }
});
dfer.addEventListener('click',function(){
    
        if(celinput.value === '')
        {
            alert('Please put some value');
        }
        else
        {
        far.innerHTML = (celinput.value)*9/5+ 32;
        }
});


 mode.addEventListener('click',function(){
    mode2.style.color = 'white';
    h1s.style.color = 'white'
    celinput.style.border = 'white 1px solid';
    celinput.style.backgroundColor = 'black';
    far.style.border = 'white 1px solid';
    body.style.backgroundColor = 'black';
    far.style.color = 'white';
    celinput.style.color = 'white';
    inspan.style.color = 'white';
    outspan.style.color = 'white'
 })
 mode2.addEventListener('click',function(){
    mode.style.color = 'black';
    h1s.style.color = 'black'
    celinput.style.border = 'black 1px solid';
    celinput.style.backgroundColor = 'white';
    far.style.border = 'black 1px solid';
    body.style.backgroundColor = 'white';
    far.style.color = 'black';
    celinput.style.color = 'black';
    inspan.style.color = 'black';
    outspan.style.color = 'black'
 })

        
   