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

observer.observe(typewriter[0]);
observer.observe(typewriter[1]);