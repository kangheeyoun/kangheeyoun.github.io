// 카드 회전 애니메이션 (GSAP)
const card1Elem = document.querySelector(".js > .card-all > .card1");
const card2Elem = document.querySelector(".js > .card-all > .card2");
const card3Elem = document.querySelector(".js > .card-all > .card3");
const card4Elem = document.querySelector(".js > .card-all > .card4");

// 카드1에 대한 애니메이션
card1Elem.addEventListener("mouseenter", () => {
    gsap.to(card1Elem, { rotateY: 30, duration: 0.5, ease: "power2.out" });
});

card1Elem.addEventListener("mouseleave", () => {
    gsap.to(card1Elem, { rotateY: 0, duration: 0.5, ease: "power2.in" });
});

// 카드2에 대한 애니메이션
card2Elem.addEventListener("mouseenter", () => {
    gsap.to(card2Elem, { rotateY: 30, duration: 0.5, ease: "power2.out" });
});

card2Elem.addEventListener("mouseleave", () => {
    gsap.to(card2Elem, { rotateY: 0, duration: 0.5, ease: "power2.in" });
});

// 카드3에 대한 애니메이션
card3Elem.addEventListener("mouseenter", () => {
    gsap.to(card3Elem, { rotateY: 30, duration: 0.5, ease: "power2.out" });
});

card3Elem.addEventListener("mouseleave", () => {
    gsap.to(card3Elem, { rotateY: 0, duration: 0.5, ease: "power2.in" });
});

// 카드4에 대한 애니메이션
card4Elem.addEventListener("mouseenter", () => {
    gsap.to(card4Elem, { rotateY: 30, duration: 0.5, ease: "power2.out" });
});

card4Elem.addEventListener("mouseleave", () => {
    gsap.to(card4Elem, { rotateY: 0, duration: 0.5, ease: "power2.in" });
});



// 버튼 클릭 시 페이드 아웃 후 페이지 이동
document.getElementById("WelcomeBtn").onclick = function() {
    var body = document.body;
    var button = document.getElementById("WelcomeBtn");

    // 버튼 텍스트 변경
    button.innerText = "리디렉션 중...";

    // 바디에 fade-out 클래스 추가
    body.classList.add('fade-out');

    // 페이드 아웃 애니메이션이 끝난 후 페이지 이동
    body.addEventListener('transitionend', function() {
        window.location.href = "portfolio.html"; // portfolio.html로 이동
    });
};
