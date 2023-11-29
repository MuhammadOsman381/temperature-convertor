
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
    if(document.querySelector('.mode').classList.contains("fa-sun"))
    {
        body.style.backgroundColor = 'white'
        document.querySelector('.mode').classList.remove("fa-sun");
        document.querySelector('.mode').classList.add("fa-moon");
        mode.style.color = "black";
        h1s.style.color ="black"

        inspan.style.color ="black"
        celinput.style.border ="1px solid black"
        celinput.style.backgroundColor="white"
        celinput.style.color="black"
        outspan.style.color ="black"
        far.style.border ="1px solid black"
        far.style.backgroundColor="white"
        far.style.color = "black"
        
    }
    else{
        body.style.backgroundColor = 'black'
        document.querySelector('.mode').classList.remove("fa-moon");
        document.querySelector('.mode').classList.add("fa-sun");
        mode.style.color = "white"
        h1s.style.color ="white"
        inspan.style.color ="white"
        celinput.style.border ="1px solid white"
        celinput.style.backgroundColor="black"
        celinput.style.color="white"
        outspan.style.color ="white"
        far.style.border ="1px solid white"
        far.style.backgroundColor="black"
        far.style.color = "white"
    }
})