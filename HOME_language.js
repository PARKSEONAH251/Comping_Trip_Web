$(document).ready(function() {
    // 언어 버튼 클릭 이벤트 핸들러
    $('.language-button').on('click', function() {
        var lang = $(this).data('lang');
        changeLanguage(lang);
     });
    
     // 언어 변경 함수
    function changeLanguage(lang) {
    // 언어에 따른 처리 로직 구현
        if (lang === 'en') {
            $('.main_image_text').text('Comping trip Entertainment Web');
            $('.outer-menu-title').eq(0).text('HOME');
            $('.outer-menu-title').eq(1).text('CONSULTING');
            $('.outer-menu-title').eq(2).text('RESERVATION CONFIRMATION');
            $('.outer-menu-title').eq(3).text('SERVICE CENTER');
        } else if (lang === 'ko') {
            $('.outer-menu-title').eq(0).text('홈');
            $('.outer-menu-title').eq(1).text('컨설팅');
            $('.outer-menu-title').eq(2).text('예약정보');
            $('.outer-menu-title').eq(3).text('고객센터');
        }
    }
});

// navigation 반응형




//    $(document).ready(function(){
//     $(".outer-menu-item").hover(function(){
//         $(this).find(".inner-menu").show();
//     }, function(){
//         $(this).find(".inner-menu").hide();
//     });
//     $("li.outer-menu-item").click(function(){
//         var menuTitle = $(this).find(".outer-menu-title").text();
//         if (menuTitle === "CONSULITING") {
//             window.open("Consuliting.html", "_blank");
//         }
//     });
//     $("li.outer-menu-item").click(function(){
//         var menuTitle = $(this).find(".outer-menu-title").text();
//         if (menuTitle === "LOOK UP") {
//             window.open("LOOKUP.html", "_blank");
//         }
//     });
// });