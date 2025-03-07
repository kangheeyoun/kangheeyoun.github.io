document.addEventListener('DOMContentLoaded', function() {
    // 카드 회전 애니메이션 (GSAP)
    const cardElems = document.querySelectorAll('.card1, .card2, .card3, .card4');

    // 공통 카드 애니메이션 처리 함수
    const animateCard = (cardElem) => {
        cardElem.addEventListener("mouseenter", () => {
            gsap.to(cardElem, { rotateY: 30, duration: 0.5, ease: "power2.out" });
        });

        cardElem.addEventListener("mouseleave", () => {
            gsap.to(cardElem, { rotateY: 0, duration: 0.5, ease: "power2.in" });
        });
    };

    // 카드 애니메이션 적용
    cardElems.forEach(animateCard);

    // 웹 이미지 클릭 시 설명 보이기
    const webElems = [
        { web: document.querySelector('.web-1'), desc: document.querySelector('.web-a') },
        { web: document.querySelector('.web-2'), desc: document.querySelector('.web-b') },
        { web: document.querySelector('.web-3'), desc: document.querySelector('.web-c') }
    ];

    // 공통 설명 보이기/숨기기 처리 함수
    const toggleDescription = (webElem, descElem) => {
        webElem.addEventListener('click', () => {
            // 다른 설명들을 숨기고 선택한 것만 보이게 설정
            webElems.forEach(item => item.desc.style.display = 'none');
            descElem.style.display = 'block';
        });

        webElem.addEventListener('mouseenter', () => {
            descElem.style.display = 'block';
        });

        webElem.addEventListener('mouseleave', () => {
            descElem.style.display = 'none';
        });
    };

    // 각 웹 이미지에 대해 설명 토글 설정
    webElems.forEach(({ web, desc }) => toggleDescription(web, desc));

    // 내비게이션 썸네일 클릭 시 메인 슬라이드로 이동
    const sliderFor = document.querySelector('.slider-for');
    const navItems = document.querySelectorAll('.slider-nav > div');

    let currentSlide = 0;

    // 슬라이드 전환 함수
    const changeSlide = (index) => {
        if (index < 0) {
            currentSlide = navItems.length - 1;
        } else if (index >= navItems.length) {
            currentSlide = 0;
        } else {
            currentSlide = index;
        }

        // 슬라이드 변경
        const slides = sliderFor.querySelectorAll('div');
        slides.forEach((slide, i) => {
            slide.style.display = (i === currentSlide) ? 'block' : 'none';
        });

        // 내비게이션 썸네일 활성화
        navItems.forEach((item, i) => {
            item.classList.toggle('active', i === currentSlide);
        });
    };

    // 썸네일 클릭 시 해당 슬라이드로 이동
    navItems.forEach((item, index) => {
        item.addEventListener('click', () => changeSlide(index));
    });

    // 처음 슬라이드 설정
    changeSlide(currentSlide);

    // 이전/다음 버튼 기능 (슬라이드 이동)
    const prevButton = document.querySelector('.slider-prev');
    const nextButton = document.querySelector('.slider-next');

    prevButton.addEventListener('click', () => changeSlide(currentSlide - 1));
    nextButton.addEventListener('click', () => changeSlide(currentSlide + 1));

    // 포트폴리오 내비게이션 클릭 시 각 섹션으로 스크롤 이동하는 스크립트
    const navLinks = document.querySelectorAll('nav ul li');

    navLinks.forEach(item => {
        item.addEventListener('click', () => {
            const sectionId = item.id + "-section"; // 예: 'home-section', 'skill-section' 등
            const section = document.getElementById(sectionId);

            if (section) {
                // 해당 섹션으로 부드럽게 스크롤 이동
                section.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // clone-Site 요소에서 마우스 휠 이벤트 처리
    const cloneSite = document.querySelector('.clone-Site');
    cloneSite.addEventListener('wheel', (event) => {
        // 마우스 휠 방향에 따라 수평 스크롤을 이동
        if (event.deltaX !== 0) {
            event.preventDefault(); // 기본 수직 스크롤 방지
            cloneSite.scrollLeft += event.deltaX; // 수평으로 스크롤 이동
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('section img');
    const skillHeader = document.getElementById('skill-header');
    
    images.forEach(image => {
        image.addEventListener('click', function() {
            const ment = image.getAttribute('data-ment');
            skillHeader.innerHTML = `I can <span class="highlight">${ment}</span>`;
        });
    });
});
