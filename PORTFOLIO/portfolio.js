$(document).ready(function(){
    // 메인 슬라이더
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false, // 화살표 비활성화
        fade: true, // 페이드 효과 적용
        asNavFor: '.slider-nav' // 내비게이션 슬라이더와 연결
    });

    // 내비게이션 슬라이더
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true, // 하단의 점 네비게이션 활성화
        centerMode: true, // 썸네일 중앙 정렬
        focusOnSelect: true // 썸네일 클릭 시 해당 슬라이드로 이동
    });

    // View 버튼 클릭 시 해당 슬라이드로 이동
    $('.view-button').on('click', function(event) {
        var slideIndex = $(this).data('slide');  // 버튼에 설정된 data-slide 값 가져오기
        $('.slider-for').slick('slickGoTo', slideIndex);  // 해당 슬라이드로 이동
    });

    // 메인 슬라이드가 변경될 때마다 View 버튼 제어
    $('.slider-for').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        // 모든 View 버튼 숨기기
        $('.view-button').hide();
        // 슬라이드 인덱스에 맞는 View 버튼만 보이게 하기
        $('.view-button[data-slide="' + nextSlide + '"]').show();
    });

    // 초기 상태에서 첫 번째 View 버튼만 보이도록 설정
    $('.view-button').hide();
    $('.view-button[data-slide="0"]').show();
});

