const productCounter = document.querySelector('.product-counter');
const productNum = document.querySelector('.input-product-num');
const add = document.querySelector('.add-product');
const remove = document.querySelector('.remove-product');
const iconCartNumber = document.querySelector('.icon-cart-number');
const addToCart = document.querySelector('.add-cart');
const iconCart = document.querySelector('.shopping-cart');
const emptyCart = document.querySelector('.empty-cart');
const iconDelete = document.querySelector('.icon-delete');
const fillCart = document.querySelector('.fill-cart');
const cartEmptyMsg = document.querySelector('.cart-msg');
const productQuantity = document.querySelector('.product-quantity');
const productPrice = document.querySelector('.original-price');
const totalPrice = document.querySelector('.total-price');

const productImg = document.querySelectorAll('.product-img');
const featuredImg = document.querySelector('.featured-img');
const previous = document.querySelector('.icon-previous-btn');
const next = document.querySelector('.icon-next-btn');
const popUpBackground = document.querySelector('.pop-up-background');
const mainSlider = document.querySelector('.main-slider');

const iconClose = document.querySelector('.icon-close');

const slideImg1 = document.querySelector('.slide-img-1');
const slideImg2 = document.querySelector('.slide-img-2');
const slideImg3 = document.querySelector('.slide-img-3');
const slideImg4 = document.querySelector('.slide-img-4');

const popUpThumbnails1 = document.querySelector('.pop-up-thumbnails-1 ');
const popUpThumbnails2 = document.querySelector('.pop-up-thumbnails-2 ');
const popUpThumbnails3 = document.querySelector('.pop-up-thumbnails-3 ');
const popUpThumbnails4 = document.querySelector('.pop-up-thumbnails-4 ');


window.addEventListener('load',function(){
    iconCartNumber.style.opacity = 0;
    iconCartNumber.value = ' ';
    productNum.value = '0';
    fillCart.style.display = "none";
    emptyCart.style.display="none";
})


let cnt = 0;

add.addEventListener('click', function(){  
cnt++;
productNum.value = cnt;
});

remove.addEventListener('click', function(){  
    cnt--;
    if(cnt<=0){
    cnt =0;
    alert('Product number is already 0!');
    }
    productNum.value = cnt;
    
});

let inCart =0;

addToCart.addEventListener('click',function(){
    if(cnt===0){
        alert('Please add product to your cart.')
    }
    if(cnt > 0){

        inCart += cnt;
        iconCartNumber.textContent = inCart;
        iconCartNumber.style.opacity = 1;
        productNum.value = 0;
        fillCart.style.display="block";

    }
});

iconCart.addEventListener('click',function(){
    if(emptyCart.style.display==="none")
   { emptyCart.style.display='block';}
   else
   emptyCart.style.display="none";
   fillCart.style.display ='block';
   cartEmptyMsg.style.display="none";
   productQuantity.textContent =  `x ${inCart}`;
   totalPrice.value =` $${125 * inCart}`;
});

iconDelete.addEventListener('click',function(){
    fillCart.style.display = "none";
    emptyCart.style.display = 'block';
    cartEmptyMsg.style.display='block';
    iconCartNumber.style.opacity = 0;
    productNum.value = 0;
  
});

// productImg.addEventListener('click',function(){
//     popUpBackground.style.display = "block";
//     mainSlider.style.display='block';
// });

featuredImg.addEventListener('click',function(){
    popUpBackground.style.display = 'block';
    mainSlider.style.display='block';
    iconClose.style.display="block";
});

iconClose.addEventListener('click', function(){
    popUpBackground.style.display = "none";
    mainSlider.style.display="none";
}); 

next.addEventListener('click',function(){
if(slideImg1.style.display="block"){
    console.log('hi');
    slideImg1.style.display="none";
    slideImg2.style.display="block";
    popUpThumbnails1.classList.remove("pop-active");
    popUpThumbnails2.classList.add("pop-active");
}else if(slideImg2.style.display="block"){
    console.log('hi2');
    slideImg2.style.display="none";
    slideImg3.style.display="block";
    popUpThumbnails2.classList.remove("pop-active");
    popUpThumbnails3.classList.add("pop-active");
}else if(slideImg3.style.display="block"){
    slideImg3.style.display="none";
    slideImg4.style.display="block";
    popUpThumbnails3.classList.remove("pop-active");
    popUpThumbnails4.classList.add("pop-active");
}else if(slideImg4.style.display="block"){
    slideImg4.style.display = "none";
    slideImg1.style.display = "block";
    popUpThumbnails4.classList.remove("pop-active");
    popUpThumbnails1.classList.add("pop-active");
}
});
previous.addEventListener('click',function(){
    if(slideImg1.style.display="block"){
        console.log('hi');
        slideImg1.style.display="none";
        slideImg2.style.display="block";
        popUpThumbnails1.classList.remove("pop-active");
        popUpThumbnails2.classList.add("pop-active");
    }else if(slideImg2.style.display="block"){
        console.log('hi2');
        slideImg2.style.display="none";
        slideImg1.style.display="block";
        popUpThumbnails2.classList.remove("pop-active");
        popUpThumbnails1.classList.add("pop-active");
    }else if(slideImg3.style.display="block"){
        slideImg3.style.display="none";
        slideImg4.style.display="block";
        popUpThumbnails3.classList.remove("pop-active");
        popUpThumbnails4.classList.add("pop-active");
    }else if(slideImg4.style.display="block"){
        slideImg4.style.display = "none";
        slideImg1.style.display = "block";
        popUpThumbnails4.classList.remove("pop-active");
        popUpThumbnails1.classList.add("pop-active");
    }
});

popUpThumbnails1.addEventListener('click',function(){
    slideImg1.style.display= "block";
    slideImg2.style.display= "none";
    slideImg3.style.display= "none";
    slideImg4.style.display= "none";
    popUpThumbnails1.classList.add("pop-active");
    popUpThumbnails2.classList.remove("pop-active");
    popUpThumbnails3.classList.remove("pop-active");
    popUpThumbnails4.classList.remove("pop-active");

});
popUpThumbnails2.addEventListener('click',function(){
    slideImg1.style.display= "none";
    slideImg2.style.display= "block";
    slideImg3.style.display= "none";
    slideImg4.style.display= "none";
    popUpThumbnails2.classList.add("pop-active");
    popUpThumbnails1.classList.remove("pop-active");
    popUpThumbnails3.classList.remove("pop-active");
    popUpThumbnails4.classList.remove("pop-active");
});
popUpThumbnails3.addEventListener('click',function(){
    slideImg1.style.display= "none";
    slideImg2.style.display= "none";
    slideImg3.style.display= "block";
    slideImg4.style.display= "none";
    popUpThumbnails3.classList.add("pop-active");
    popUpThumbnails1.classList.remove("pop-active");
    popUpThumbnails2.classList.remove("pop-active");
    popUpThumbnails4.classList.remove("pop-active");
});
popUpThumbnails4.addEventListener('click',function(){
    slideImg1.style.display= "none";
    slideImg2.style.display= "none";
    slideImg3.style.display= "none";
    slideImg4.style.display= "block";
    popUpThumbnails4.classList.add("pop-active");
    popUpThumbnails1.classList.remove("pop-active");
    popUpThumbnails2.classList.remove("pop-active");
    popUpThumbnails3.classList.remove("pop-active");

});
