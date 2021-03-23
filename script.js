let principal=window.pageYOffset;
let ventana=document.getElementById('cont-skills')
window.onscroll=function() {
    let actual=window.pageYOffset;
    console.log(actual);
    if(principal>=actual){
        document.getElementById('nav').style.transitionDuration='0.5s';
        document.getElementById('nav').style.top='0px';
        
    }

    else{
        document.getElementById('nav').style.transitionDuration='0.5s';
        document.getElementById('nav').style.top='-100px';
    }
    principal=actual;
}

let pr=window.pageYOffset;
window.addEventListener('scroll',function() {
    let anima=window.pageYOffset;
    if(anima>=162){
        document.getElementById('i-skills').style.opacity='1';
        document.getElementById('b-icon').style.animation='fade-in-fwd 1.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both';
    }
    else{
        document.getElementById('b-icon').style.animation='fade-out-fwd 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both';
    }
    pr=anima;
})

