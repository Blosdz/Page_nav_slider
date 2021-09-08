const myslide=document.querySelectorAll('.myslider');
const a=document.querySelectorAll('.aref');
let counter=1;
sliderFun(counter);
function plusSlides(n){
    counter+=n;
    sliderFun(counter);

}
function currentSlides(n){
    counter=n;
    sliderFun(counter);
}

function sliderFun(n){
    let i;
    for(i=0;i<myslide.length;i++){
        myslide[i].style.display="none";
    }
    for(i=0;i<a.length;i++){
        a[i].classList.remove('active');
    }
    if(n>myslide.length){
        counter=1;
    }
    if(n<1){
        counter=myslide.length;

    }
    myslide[counter-1].style.display="block";
    a[counter-1].classList.add('active');
}