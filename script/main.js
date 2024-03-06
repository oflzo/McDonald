$(function () {
    // 메뉴
    $(".main > li,  .sub_bg").hover(function () {
        $(".sub, .sub_bg").stop().slideDown();
    }, function () {
        $(".sub , .sub_bg").stop().slideUp();
    })


    // 이미지 슬라이드

    // .move absolute; left: 0; -1920px;

    var time = setInterval(left, 3000)


    function left() {
        $(".move").animate({
            "left": "-1920px"
        }, 500, function () {
            $(".move").css({
                left: "0"
            });
            $(".move").append($(".move li").first());
        }) //
    } // left

    function right() {
        $(".move").css({
            left: "-1920px"
        })
        $(".move").prepend($(".move li").last());
        $(".move").animate({
            left: "0"
        }, 500)
    } //

    $(".move li, button").hover(function () {
        clearInterval(time);
    }, function () {
        time = setInterval(left, 3000);
    }) //

    $(".prev").click(function () {
        left();
    }) //

    $(".next").click(function () {
        right();
    }) //


    /* dot영역 */

    
    $(".dot a").click(function(e){
        e.preventDefault();
        console.log(e)
        $(this).toggleClass("close");
        $(".live_list_02").toggleClass("show")

    })




}) //jquery