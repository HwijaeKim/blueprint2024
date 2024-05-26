//인트로 타이핑 애니메이션
new TypeIt(".intro_type", {
    lifeLike: false,
    loop: true,
    speed: 0
})
    .type("ㅂ")
    .pause(60)
    .delete(1)
    .type("부")
    .pause(149)
    .delete(1)
    .type("불")
    .pause(102)
    .delete(1)
    .type("부")
    .pause(3)
    .type("러")
    .pause(63)
    .delete(1)
    .type("렁")
    .pause(116)
    .delete(1)
    .type("러")
    .pause(2)
    .type("우")
    .pause(145)
    .delete(1)
    .type("워")
    .pause(98)
    .type(" ")
    .pause(78)
    .type("ㅎ")
    .pause(77)
    .delete(1)
    .type("하")
    .pause(81)
    .delete(1)
    .type("할")
    .pause(2144)
    .delete(1)
    .type("하")
    .pause(501)
    .delete(1)
    .type("ㅎ")
    .pause(81)
    .delete(1)
    .pause(72)
    .delete(1)
    .pause(84)
    .delete(1)
    .pause(88)
    .delete(1)
    .pause(88)
    .delete(1)
    .pause(1456)
    .type("ㅇ")
    .pause(84)
    .delete(1)
    .type("어")
    .pause(119)
    .delete(1)
    .type("얼")
    .pause(92)
    .delete(1)
    .type("어")
    .pause(3)
    .type("려")
    .pause(90)
    .delete(1)
    .type("령")
    .pause(79)
    .delete(1)
    .type("려")
    .pause(4)
    .type("우")
    .pause(65)
    .delete(1)
    .type("울")
    .pause(2497)
    .delete(1)
    .type("우")
    .pause(509)
    .delete(1)
    .type("ㅇ")
    .pause(82)
    .delete(1)
    .pause(70)
    .delete(1)
    .pause(91)
    .delete(1)
    .pause(739)
    .type("ㄷ")
    .pause(64)
    .delete(1)
    .type("다")
    .pause(101)
    .delete(1)
    .type("답")
    .pause(127)
    .type("ㄷ")
    .pause(104)
    .delete(1)
    .type("다")
    .pause(37)
    .delete(1)
    .type("답")
    .pause(150)
    .type("ㅎ")
    .pause(64)
    .delete(1)
    .type("하")
    .pause(74)
    .delete(1)
    .type("할")
    .pause(2450)
    .delete(1)
    .type("하")
    .pause(498)
    .delete(1)
    .type("ㅎ")
    .pause(86)
    .delete(1)
    .pause(74)
    .delete(1)
    .pause(87)
    .delete(1)
    .pause(1000)
    .go();






//타이핑 애니메이션 컨트롤
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
//타이핑 애니메이션을 활성화 할 변수 선언
let typewriter = document.querySelectorAll('.typewriter');
let bubbleL = document.querySelectorAll('.speech-bubbleL');
let bubbleR = document.querySelectorAll('.speech-bubbleR');
let naming = document.querySelector('.naming');
let namingSub = document.querySelector('.naming_sub');
let problem = document.querySelector('.sector3 p');
let fontcolor = document.querySelector('.fontcolor');

observer.observe(typewriter[0]);
observer.observe(typewriter[1]);
observer.observe(typewriter[2]);
observer.observe(typewriter[3]);
observer.observe(typewriter[4]);
observer.observe(typewriter[5]);
observer.observe(bubbleL[0]);
observer.observe(bubbleL[1]);
observer.observe(bubbleL[2]);
observer.observe(bubbleR[0]);
observer.observe(bubbleR[1]);
observer.observe(naming);
observer.observe(namingSub);
observer.observe(fontcolor);







//nav 버튼 클릭시 해당위치 이동 이벤트
let nav_btn = document.querySelectorAll('.nav_menu button');

nav_btn.forEach((item) => {
    item.addEventListener('click', (event) => {
        if(event.target.classList.contains('bg')) {
            window.scrollTo({top: 1400, behavior: 'smooth'});
        }
        else if(event.target.classList.contains('foot')) {
            window.scrollTo({top: 4600, behavior: 'smooth'});
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
    let intro = document.getElementById('intro');
    let sec1_logo = document.querySelector('.sec1_logo');
    let sector1 = document.querySelector('.sector1_contents');
    let header = document.querySelector('header');

    let newSize = scrollTop * 0.05 - 200;
    console.log(scrollTop); //Dev Only



    if(scrollTop > 1450) {
        // body_bg.style.backgroundImage = 'none';
        // sec1_logo.style.display = 'none';
        // sector1.style.background = 'none';
        intro.style.opacity = 0;
        sector1.style.zIndex = -10;
        header.classList.add('active');
    }
    else if (scrollTop < 1500) {
        // body_bg.style.cssText = 'background-image: url("./sources/test2.jpg"); filter: brightness(1); opacity: .5;'
        body_bg.style.cssText = 'background: white; filter: brightness(1);';
        sec1_logo.style.display = 'inline-block';
        // sector1.style.background = 'white';
        intro.style.opacity = 1;
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
