$("#main-action").on("click", function () {
    // $("#cars").scrollInto
    document.getElementById("cars").scrollIntoView({behavior:"smooth"});
});

var buttons= document.getElementsByClassName("car-button");
for (let i = 0; i< buttons.length; i++) {
buttons[i].onclick=function(){
    document.getElementById("price").scrollIntoView({behavior:"smooth"});
    // let carImg = document.getElementsByClassName("price-image")[0];
    // carImg.src=`css/imgs/${[i+1]}.png`
    // carImg.classList.add("new-car");
    let Car=document.getElementsByClassName("car-title")[i]
    console.log(Car);
    document.getElementById("car").value=Car.innerHTML;

}
}

document.getElementById("price-action").onclick=function(){
    if(document.getElementById("name").value==="login"){
        alert("Заполните поле имя")
    } else if(document.getElementById("phone").value===""){
        alert("Заполните поле телефон")
    } else if(document.getElementById("car").value===""){
        alert("Заполните поле автомобиль")
    } 
    else{alert("Спасибо за заявку, мы свяжемся с вами позже")}
}

document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.price-image');
document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.3) / 6) + 'px,' + ((event.clientY * 0.5) / 8) + 'px,0px)';
});

    const elem = document.querySelector(".main");
document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.3 * window.pageYOffset) + 'px';
})
});