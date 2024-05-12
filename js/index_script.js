

//SECTOR 2 타이핑 애니메이션 컨트롤
let observer = new IntersectionObserver((event) => {
    event.forEach((ani) => {
        if(ani.isIntersecting) {
                ani.target.classList.add('active');

        }
        else {
            ani.target.classList.remove('active');
        }
    })


});




let typewriter = document.querySelectorAll('.typewriter');
let bubbleL = document.querySelectorAll('.speech-bubbleL');
let bubbleR = document.querySelectorAll('.speech-bubbleR');
let naming = document.querySelector('.naming');
let namingSub = document.querySelector('.naming_sub');
let problem = document.querySelector('.sector3 p');

observer.observe(typewriter[0]);
observer.observe(typewriter[1]);
observer.observe(typewriter[2]);
observer.observe(bubbleL[0]);
observer.observe(bubbleL[1]);
observer.observe(bubbleL[2]);
observer.observe(bubbleR[0]);
observer.observe(bubbleR[1]);
observer.observe(naming);
observer.observe(namingSub);

// observer.observe(typewriter[1]);




//nav 버튼 클릭시 해당위치 이동 이벤트
let nav_btn = document.querySelectorAll('.nav_menu button');

nav_btn.forEach((item) => {
    item.addEventListener('click', (event) => {
        if(event.target.classList.contains('bg')) {
            window.scrollTo({top: 1400, behavior: 'smooth'});
        }
        else if(event.target.classList.contains('foot')) {
            window.scrollTo({top: 4400, behavior: 'smooth'});
        }
    })
})


// window.addEventListener('scroll', () => {
//     let scrollTop = window.scrollY;
//     let sector1 = document.querySelector('.sector1_contents');
//     console.log(scrollTop); //Dev Only
//
//     if(scrollTop > 1300) {
//         sector1.style.position = 'relative';
//     }
//     else {
//         sector1.style.position = 'sticky';
//     }
// })

window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    let body_bg = document.querySelector('.main_img');
    let sec1_logo = document.querySelector('.sec1_logo');
    let sector1 = document.querySelector('.sector1_contents');
    let header = document.querySelector('header');

    let newSize = scrollTop * 0.05 - 200;
    console.log(scrollTop); //Dev Only



    if(scrollTop > 1450) {
        // body_bg.style.backgroundImage = 'none';
        // sec1_logo.style.display = 'none';
        // sector1.style.background = 'none';
        sector1.style.zIndex = -10;
        header.classList.add('active');
    }
    else if (scrollTop < 1500) {
        body_bg.style.cssText = 'background-image: url("./sources/test2.jpg"); filter: brightness(1); opacity: .5;'
        sec1_logo.style.display = 'inline-block';
        // sector1.style.background = 'white';
        sector1.style.zIndex = -1;
        header.classList.remove('active');
    }

    if(scrollTop > 3200) {
        body_bg.style.cssText = 'background-image: url("./sources/bg_2.jpg"); filter: brightness(.45); opacity: 1; backdrop-filter: blur(10px);'
    }

    if( scrollTop > 4000) {
        body_bg.style.backgroundSize = 100 + newSize + '%';
    }
});
