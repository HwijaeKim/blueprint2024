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
let observer2 = new IntersectionObserver((event) => {
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
let fontcolor = document.querySelector('.fontcolor');

observer2.observe(typewriter[0]);
observer2.observe(typewriter[1]);
observer2.observe(typewriter[2]);
observer2.observe(typewriter[3]);
observer2.observe(typewriter[4]);
observer2.observe(typewriter[5]);
observer2.observe(typewriter[6]);
observer2.observe(typewriter[7]);
observer2.observe(bubbleL[0]);
observer2.observe(bubbleL[1]);
observer2.observe(bubbleL[2]);
observer2.observe(bubbleR[0]);
observer2.observe(bubbleR[1]);
observer2.observe(naming);
observer2.observe(namingSub);
observer2.observe(fontcolor);











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
    let sec1_logo = document.getElementById('sec1_logo');
    let sector1 = document.getElementById('sector1_contents');
    let header = document.querySelector('header');

    let navLogoBlack = document.getElementById("nav_logo_black");
    let navLogoWhite = document.getElementById("nav_logo_white");
    let introVid = document.querySelector('.main_img video');

    let newSize = scrollTop * 0.05 - 200;
    console.log(scrollTop); //Dev Only



    if(scrollTop > 940) {
        navLogoBlack.style.display = 'flex';
        navLogoWhite.style.display = 'none';
    }
    else if(scrollTop < 910) {
        navLogoBlack.style.display = 'none';
        navLogoWhite.style.display = 'flex';
    }


    if(scrollTop > 1300) {
        introVid.style.display = 'none';
    }
    else if (scrollTop < 1050) {
        introVid.style.display = 'block';
    }



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



//SECTOR8 슬라이드 구현
//[중대] 중도에 의도한 대로 작동하지 않아 GPT의 코드를 붙였음. 꼭 다시 분석해볼 것.
let btns = document.querySelectorAll('#navigation button');
let container = document.getElementById('horizon_container');
let boxes = document.querySelectorAll('.box_common');
let progressBar = document.getElementById('progress_bar');
let currentIndex = 0;
let intervalTime = 10000;

// 각 버튼에 클릭 이벤트 핸들러 추가
btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        // 모든 버튼과 박스에서 클래스 제거
        btns.forEach(btn => btn.classList.remove('current'));
        boxes.forEach(box => box.classList.remove('active'));

        // 클릭된 버튼과 해당 인덱스의 박스에 클래스 추가
        btn.classList.add('current');
        if (boxes[index]) {
            boxes[index].classList.add('active');
        }

        // 슬라이드 이동
        switch(index) {
            case 0:
                container.style.transform = 'translateX(17.5vw)';
                break;
            case 1:
                container.style.transform = 'translateX(-35.5vw)';
                break;
            case 2:
                container.style.transform = 'translateX(-90vw)';
                break;
            case 3:
                container.style.transform = 'translateX(-144vw)';
                break;
        }

        // 현재 인덱스를 업데이트
        currentIndex = index;

        // 애니메이션 초기화
        progressBar.style.animation = 'none';
        setTimeout(() => {
            progressBar.style.animation = '';
            progressBar.style.animation = `progress ${intervalTime / 1000}s linear infinite`;
        }, 10);
    });
});

// setInterval로 슬라이드 자동 전환
setInterval(() => {
    // 다음 슬라이드로 이동 (현재 인덱스를 1 증가시키고, 5로 나눈 나머지를 구함)
    currentIndex = (currentIndex + 1) % 4;

    // 인덱스에 따라 슬라이드 이동
    switch(currentIndex) {
        case 0:
            container.style.transform = 'translateX(17.5vw)';
            break;
        case 1:
            container.style.transform = 'translateX(-35.5vw)';
            break;
        case 2:
            container.style.transform = 'translateX(-90vw)';
            break;
        case 3:
            container.style.transform = 'translateX(-144vw)';
            break;
    }

    // 모든 버튼에서 'current' 클래스 제거
    btns.forEach(btn => btn.classList.remove('current'));

    // 모든 박스에서 'active' 클래스 제거
    boxes.forEach(box => box.classList.remove('active'));

    // 현재 인덱스에 해당하는 버튼에 'current' 클래스 추가
    if (btns[currentIndex]) {
        btns[currentIndex].classList.add('current');
    }

    // 현재 인덱스에 해당하는 박스에 'active' 클래스 추가
    if (boxes[currentIndex]) {
        boxes[currentIndex].classList.add('active');
    }

    // 애니메이션 초기화
    progressBar.style.animation = 'none';
    setTimeout(() => {
        progressBar.style.animation = '';
        progressBar.style.animation = `progress ${intervalTime / 1000}s linear infinite`;
    }, 10);
}, intervalTime);
