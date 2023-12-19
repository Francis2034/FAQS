let content1 = document.getElementById("content1");
let content2 = document.getElementById("content2");
let content3 = document.getElementById("content3");
let content4 = document.getElementById("content4");
let icon1 = document.getElementById("icon1");
let icon2 = document.getElementById("icon2");  
let icon3 = document.getElementById("icon3");
let icon4 = document.getElementById("icon4");

function toggleContent1() {

    if (content1.style.display === 'none' || content1.style.display === '') {
        content1.style.display = 'block';
        icon1.src = "/assets/images/icon-minus.svg";
        icon2.src = "/assets/images/icon-plus.svg"; 
        icon3.src = "/assets/images/icon-plus.svg";
        icon4.src = "/assets/images/icon-plus.svg";
        content2.style.display = 'none';
        content3.style.display = 'none';
        content4.style.display = 'none';
    } else {
        content1.style.display = 'none';   
        icon1.src = "/assets/images/icon-plus.svg";
    }   
}

function toggleContent2() {
    
    if (content2.style.display === 'none' || content2.style.display === '') {
        content2.style.display = 'block';
        icon2.src = "/assets/images/icon-minus.svg";
        icon1.src = "/assets/images/icon-plus.svg";
        icon3.src = "/assets/images/icon-plus.svg";
        icon4.src = "/assets/images/icon-plus.svg";
        content1.style.display = 'none';
        content3.style.display = 'none';
        content4.style.display = 'none';
    } else {
        content2.style.display = 'none';
        icon2.src = "/assets/images/icon-plus.svg";
    }
}

function toggleContent3() {
    
    if (content3.style.display === 'none' || content3.style.display === '') {
        content3.style.display = 'block';
        icon3.src = "assets/images/icon-minus.svg";
        icon1.src = "/assets/images/icon-plus.svg";
        icon2.src = "/assets/images/icon-plus.svg";
        icon4.src = "/assets/images/icon-plus.svg";
        content1.style.display = 'none';
        content2.style.display = 'none';
        content4.style.display = 'none';

    } else {
        content3.style.display = 'none';
        icon3.src = "/assets/images/icon-plus.svg";
    }
}

function toggleContent4() {
    
    if (content4.style.display === 'none' || content4.style.display === '') {
        content4.style.display = 'block';
        icon4.src = "assets/images/icon-minus.svg";
        icon1.src = "/assets/images/icon-plus.svg";
        icon2.src = "/assets/images/icon-plus.svg";
        icon3.src = "/assets/images/icon-plus.svg";
        content1.style.display = 'none';
        content2.style.display = 'none';
        content3.style.display = 'none';
        
    } else {
        content4.style.display = 'none';
        icon4.src = "/assets/images/icon-plus.svg";
    }
}